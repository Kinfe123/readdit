
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Login() {
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
                <Input id="email" type="email" placeholder="example@email.com" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" />
              </div>
              <Button type="submit" className="w-full">
                Login
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
