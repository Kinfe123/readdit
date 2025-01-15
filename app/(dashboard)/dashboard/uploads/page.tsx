import UploadBook from "@/components/upload-book"
import { validateRequest } from "@/lib/lucia";

const UploadPage =  async() => {
    const {user} =  await validateRequest()
    return (
        <UploadBook user={user} />
    )
}
export default UploadPage