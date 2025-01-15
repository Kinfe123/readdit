
"use client";
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { UploadDropzone } from "@/lib/uploadthing";
function UploadBook  () {
   return (
    <div className="mx-5 mb-10">
    <h2 className="text-2xl font-bold mb-4">Upload New Book</h2>
    <form className="space-y-4">
        <Input type="text" placeholder="Book Title" name="book-title" />
        <Input type="text" placeholder="Author" name="author" />
        <Textarea placeholder="Short Description" name="description" />
        <UploadDropzone
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
        <Button type="submit">Submit</Button>
    </form>
</div> 
   )
}

export default UploadBook;