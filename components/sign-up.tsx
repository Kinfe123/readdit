'use client'

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState, useTransition } from "react"
import { signup } from "@/actions/auth"
import { useToast } from "./ui/use-toast"
import { Loader, Loader2 } from "lucide-react"

export function SignUp() {
  const [isPending, startTransition] = useTransition()
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: ""
  })
  const toast = useToast()
  const handleRegister = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const { email, username, password } = registerData
    startTransition(() => {
      signup({
        email,
        username,
        password
      }).then((res) => {
        toast.toast({
          title: "Successfully Registered",
          description: 'You have successfully registered.'
        })
      
      }).catch((err) => {
        toast.toast({
          title: "Successfully Registered",
          description: 'You have successfully registered.',
          variant: "destructive"
        })
      })
    })
  }

  const handleStateUpdate = (e: React.ChangeEventHandler<HTMLInputElement>) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value
    })
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <section className="max-w-md w-full p-4">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter">Sign Up</h2>
          <p className="text-muted-foreground md:text-xl">Access your account or create a new one.</p>
        </div>
        <div className="bg-background rounded-lg shadow-md overflow-hidden">
          <div className="p-4">
            <h2 className="text-center text-2xl font-bold mb-4">Sign Up</h2>
            <form className="space-y-4">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input value={registerData.username} name="username" placeholder="username" onChange={handleStateUpdate} />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input value={registerData.email} name="email" type="email" placeholder="example@email.com" onChange={handleStateUpdate} />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input value={registerData.password} name="password" type="password" onChange={handleStateUpdate} />
              </div>
              <Button disabled={isPending} onClick={handleRegister} className="w-full flex gap-2 justify-center items-center">
                {isPending && (
                  <Loader className='animate-spin w-4 h-4' />
                )} Sign Up
              </Button>
              <div className="text-center text-sm">
                Already have an account?{" "}
                <Link href="/login" className="underline" prefetch={false}>
                  Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
