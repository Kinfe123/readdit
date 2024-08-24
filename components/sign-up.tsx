"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useTransition } from "react";
import { signup } from "@/actions/auth";
import { useToast } from "./ui/use-toast";
import { Loader, Loader2 } from "lucide-react";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
const signUpSchema = z.object({
  username: z
    .string({
      required_error: "Please put your username.",
    })
    .min(3),
  email: z
    .string({
      required_error: "Please put your email",
    })
    .email(),
  password: z
    .string({
      required_error:
        "Please put your damn password. How could you try creating without a password.",
    })
    .min(6),
});

type SignUpType = z.infer<typeof signUpSchema>;
export function SignUp() {
  const form = useForm<SignUpType>({
    resolver: zodResolver(signUpSchema),
    mode: "onChange",
  });
  const toast = useToast();
  const [isPending, startTransition] = useTransition();

 
  const onSubmitHandle: SubmitHandler<SignUpType> = (data: SignUpType) => {
    const { email, username, password } = data;
    startTransition(() => {
      signup({
        email,
        username,
        password,
      })
        .then((res) => {
          toast.toast({
            title: "Successfully Registered",
            description: "You have successfully registered.",
          });
        })
        .catch((err) => {
          toast.toast({
            title: "Something went wrong",
            description: "THere is something went wrong. Please try again.",
            variant: "destructive",
          });
        });
    });
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <section className="max-w-md w-full p-4">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter">Sign Up</h2>
          <p className="text-muted-foreground md:text-xl">
            Access your account or create a new one.
          </p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmitHandle)}>
            <div className="bg-background rounded-lg shadow-md overflow-hidden">
              <div className="p-4">
                <div className="space-y-4">
                  <div className="space-y-1">
                    <FormField
                      control={form.control}
                      name="username"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input  {...field} placeholder="username" />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="space-y-1">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input {...field}  placeholder="email" />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="space-y-1">
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input  {...field} placeholder="password" type="password" />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isPending}
                    className="w-full flex gap-2 justify-center items-center"
                  >
                    {isPending && <Loader className="animate-spin w-4 h-4" />}{" "}
                    Sign Up
                  </Button>
                  <div className="text-center text-sm">
                    Already have an account?{" "}
                    <Link href="/login" className="underline" prefetch={false}>
                      Login
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </Form>
      </section>
    </div>
  );
}
