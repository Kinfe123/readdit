"use client";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useTransition } from "react";
import { useToast } from "./ui/use-toast";
import { login } from "@/actions/auth";
import { Loader } from "lucide-react";
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
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
  userNameOrEmail: z.string().min(3),
  password: z.string().min(6),
});
type LoginType = z.infer<typeof loginSchema>;
export function Login() {
  const [isPending, startTransition] = useTransition();
  const form = useForm<LoginType>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  const toast = useToast();

  const onSubmitHandle: SubmitHandler<LoginType> = (data: LoginType) => {
    const { userNameOrEmail, password } = data;
    startTransition(() => {
      login({
        userNameOrEmail,
        password,
      })
        .then((res) => {
          toast.toast({
            title: "Successfully logged in",
            description: "You have successfully loggedin.",
          });
        })
        .catch((err) => {
          toast.toast({
            title: "Something went wrong",
            description: "There is something went wrong.",
            variant: "destructive",
          });
        });
    });
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <section className="max-w-md w-full p-4">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter">
            Login or Sign Up
          </h2>
          <p className="text-muted-foreground md:text-xl">
            Access your account or create a new one.
          </p>
        </div>
        <hr className="max-w-md mx-auto my-10" />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmitHandle)}>
            <div className="bg-background rounded-lg shadow-lg border-input overflow-hidden">
              <div className="p-4">
                <h3 className="text-lg font-semibold">Login</h3>
                <div className="space-y-4">
                  <div className="space-y-1">
                    <FormField
                      control={form.control}
                      name="userNameOrEmail"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="UserName or Email" />
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
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="Password" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <Button
                    disabled={isPending}
                    type="submit"
                    className="w-full flex gap-2 justify-center items-center"
                  >
                    {isPending && <Loader className="animate-spin w-4 h-4" />}{" "}
                    Log in
                  </Button>
                  <div className="text-center text-sm">
                    Don&apos;t have an account?{" "}
                    <Link href="/signup" className="underline" prefetch={false}>
                      Sign up
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
