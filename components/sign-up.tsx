
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function SignUp() {
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
                <Input id="name" placeholder="John Doe" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="example@email.com" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" />
              </div>
              <Button type="submit" className="w-full">
                Sign Up
              </Button>
              <div className="text-center text-sm">
                Already have an account?{" "}
                <Link href="#" className="underline" prefetch={false}>
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
