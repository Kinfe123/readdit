"use server";

import { db } from "@/lib/db";
import { ActionResult } from "@/lib/form";
import { lucia } from "@/lib/lucia";
import { verify } from "@node-rs/argon2";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { hash } from "@node-rs/argon2";
import { generateId } from "lucia";
import { PrismaClient } from "@prisma/client";
type LoginRequest = {
  userNameOrEmail: string;
  password: string;
};
export async function login({
  userNameOrEmail,
  password,
}: LoginRequest): Promise<ActionResult> {
	const isNotUsername = isEmail(userNameOrEmail);
 
  if ( !isNotUsername 
	&& (
    typeof userNameOrEmail !== "string" ||
    userNameOrEmail.length < 3 ||
    userNameOrEmail.length > 31 ||
    !/^[a-z0-9_-]+$/.test(userNameOrEmail)
	 )
  ) {
	throw new Error("Invalid username or email")
  
  }
  if (
    typeof password !== "string" ||
    password.length < 6 ||
    password.length > 255
  ) {
	throw new Error("Invalid passsword")


  }
  let existingUser = null
  if (!isNotUsername) {
    existingUser = await db.user.findFirst({
      where: {
        username: userNameOrEmail,
      },
    });
  } else {
    existingUser = await db.user.findFirst({
      where: {
        email: userNameOrEmail,
      },
    });
  }

  if (!existingUser) {
	throw new Error("No such user")
    
  }

  const validPassword = await verify(existingUser.password, password, {
    memoryCost: 19456,
    timeCost: 2,
    outputLen: 32,
    parallelism: 1,
  });
  if (!validPassword) {
    // NOTE:
    // Returning immediately allows malicious actors to figure out valid usernames from response times,
    // allowing them to only focus on guessing passwords in brute-force attacks.
    // As a preventive measure, you may want to hash passwords even for invalid usernames.
    // However, valid usernames can be already be revealed with the signup page among other methods.
    // It will also be much more resource intensive.
    // Since protecting against this is non-trivial,
    // it is crucial your implementation is protected against brute-force attacks with login throttling, 2FA, etc.
    // If usernames are public, you can outright tell the user that the username is invalid.
	throw new Error("No such user")

  }

  const session = await lucia.createSession(existingUser.id, {});
  const sessionCookie = lucia.createSessionCookie(session.id);
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );
  return redirect("/dashboard");
}

type RegisterRequest = {
  username: string;
  email: string;
  password: string;
};
export async function signup({
  username,
  email,
  password,
}: RegisterRequest): Promise<ActionResult> {
  // username must be between 4 ~ 31 characters, and only consists of lowercase letters, 0-9, -, and _
  // keep in mind some database (e.g. mysql) are case insensitive
  if (
    typeof username !== "string" ||
    username.length < 3 ||
    username.length > 31 ||
    !/^[a-z0-9_-]+$/.test(username)
  ) {
	throw new Error("Invalid username")
   
  }
  if (!email) {
	throw new Error("Invalid Error")
    
  }
  if (
    typeof password !== "string" ||
    password.length < 6 ||
    password.length > 255
  ) {
	throw new Error("Invalid password")

    
  }

  const passwordHash = await hash(password, {
    // recommended minimum parameters
    memoryCost: 19456,
    timeCost: 2,
    outputLen: 32,
    parallelism: 1,
  });
  const userId = generateId(15);

  try {
    const res = await db.user.create({
      data: {
        id: userId,
        username,
        password: passwordHash,
        email: email as string,
      },
    });

    const session = await lucia.createSession(userId, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes
    );
  } catch (e) {
   
	console.log(e)
    throw new Error("Error has occured.");
  }
  return redirect("/login");
}

function isEmail(str: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(str);
}
