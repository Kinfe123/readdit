import { Login } from "@/components/login"
import { SignUp } from "@/components/sign-up"
import { validateRequest } from "@/lib/lucia"
import { redirect } from "next/navigation"

const SignUpPage = async () => {
    const {user} = await validateRequest()
    if(user) {
        return redirect("/dashboard")
    }
    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <SignUp  />

        </div>
    )
}
export default SignUpPage