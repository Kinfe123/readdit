import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"

const ContactUs = () => {
    return (
        <div className="mx-5 mb-10">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <form className="space-y-4">
                <Input type="text" placeholder="Name" />
                <Input type="email" placeholder="Email" />
                <Textarea placeholder="Message" />
                <Button type="submit">Submit</Button>
            </form>
        </div> 

    )

}

export default ContactUs