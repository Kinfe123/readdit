import { CopyrightIcon } from "lucide-react"
import Link from "next/link"

const Footer = () => {
    return (
        <div>
            <footer className="bg-muted border-t px-4 md:px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <CopyrightIcon className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">2024 BookGang. All rights reserved.</span>
                </div>
                <nav className="hidden md:flex items-center gap-4">
                    <Link href="#" className="text-muted-foreground hover:text-primary transition" prefetch={false}>
                        Privacy Policy
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-primary transition" prefetch={false}>
                        Terms of Service
                    </Link>
                </nav>
            </footer>

        </div>
    )
}

export default Footer