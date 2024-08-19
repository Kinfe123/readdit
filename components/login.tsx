'use client'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {useState , useTransition} from 'react'
import { useToast } from "./ui/use-toast"
import { login } from "@/actions/auth"
import { Loader } from "lucide-react"
export function Login() {
  const [isPending, startTransition] = useTransition()

  const [loginData, setloginData] = useState({
    userNameOrEmail: "",
    password: ""
  })
  const toast = useToast()
  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const { userNameOrEmail , password  } = loginData
    startTransition(() => {
      login({
        userNameOrEmail,
        password
      }).then((res) => {
        toast.toast({
          title: "Successfully logged in",
          description: 'You have successfully loggedin.'
        })
      
      }).catch((err) => {
        toast.toast({
          title: "Something went wrong",
          description: 'There is something went wrong.',
          variant: "destructive"
        })
      })
    })
    }
      const handleStateUpdate = (e: React.ChangeEventHandler<HTMLInputElement>) => {
        setloginData({
          ...loginData ,
          [e.target.name]: e.target.value
        })
      }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <section className="max-w-md w-full p-4">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter">Login or Sign Up</h2>
          <p className="text-muted-foreground md:text-xl">Access your account or create a new one.</p>
        </div>
        <hr  className="max-w-md mx-auto my-10"/>

        <div className="bg-background rounded-lg shadow-lg border-input overflow-hidden">
          <div className="p-4">
            <h3 className="text-lg font-semibold">Login</h3>
            <form className="space-y-4">
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input name="userNameOrEmail" value={loginData.userNameOrEmail} type="text" onChange={handleStateUpdate} placeholder="Username or Email" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input name="password" type="password" value={loginData.password}  onChange={handleStateUpdate}/>
              </div>
              <Button disabled={isPending} onClick={handleLogin} className="w-full flex gap-2 justify-center items-center">
                {isPending && (
                  <Loader className='animate-spin w-4 h-4' />
                )} Log in
              </Button>
              <div className="text-center text-sm">
                Don't have an account?{" "}
                <Link href="/signup" className="underline" prefetch={false}>
                  Sign up
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
