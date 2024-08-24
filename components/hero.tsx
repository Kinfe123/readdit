
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { BookIcon, UploadIcon } from "lucide-react"
import BackgroundDots from "./background/DotPattern"
import Link from "next/link"
import { validateRequest } from "@/lib/lucia"

export async function Hero() {
  const res = await validateRequest()
  console.log("Hello wol is : " , res)
  return (
    <div className="flex relative min-h-[100dvh] bg-[url('/placeholder.svg')] bg-cover bg-center bg-opacity-50  flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:lg:px-8">
      <BackgroundDots />
      <div className="mx-auto max-w-md text-center z-40">
        <div className="space-y-4">
          <h1 className="text-3xl font-heading font-bold tracking-tight text-foreground sm:text-4xl">Welcome to our BookGang</h1>
          <p className="text-muted-foreground font-body">A chill place to hangout with your buddy and share your mega and chad level mind with others..</p>
        </div>
        <div className="mt-6 flex flex-row gap-4 items-center justify-center font-body">
          <RadioGroup name="user-type" className="flex items-center gap-2">
            <Link href="/books">
              <div className="flex items-center gap-2">
                <RadioGroupItem value="customer" id="customer" className="peer sr-only" />
                <Label
                  htmlFor="customer"
                  className="flex cursor-pointer items-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted peer-checked:bg-primary peer-checked:text-primary-foreground peer-checked:text-black"
                >
                  <BookIcon className="h-5 w-5" />
                  Explore Books
                </Label>
              </div>
            </Link>
            <Link href="/login">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="customer" id="customer" className="peer sr-only" />
              <Label
                htmlFor="customer"
                className="flex cursor-pointer items-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted peer-checked:bg-primary peer-checked:text-primary-foreground peer-checked:text-black"
              >
                <UploadIcon className="h-5 w-5" />
                Upload Books
              </Label>
            </div>
            </Link>

          </RadioGroup>
        </div>

      </div>
    </div>
  )
}

function UserIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}


function UsersIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
