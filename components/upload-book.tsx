"use client";
import { FormEvent, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { UploadDropzone } from "@/lib/uploadthing";
import { z } from "zod";
import { ChevronDown } from "lucide-react";
import { useToast } from "./ui/use-toast";

const uploadBookSchema = z.object({
  title: z.string().min(4),
  author: z.string().min(3),
  description: z.string().min(10).max(100),
  category: z.string(),
});

function UploadBook() {
  const categories = [
    "Fiction",
    "Nonfiction",
    "Classics",
    "Biography",
    "Poetry",
    "History",
    "Science",
    "Philosophy",
    "Selfhelp",
    "Travel",
  ];
  const toast = useToast();

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
    category: categories[0],
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e:FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    try {
      const validatedData = uploadBookSchema.parse(formData);
      console.log(`Validation succeeded: `, validatedData);
    } catch (error) {
      if (error instanceof z.ZodError) {
      let fieldError = error.errors[0];
      //console.log(fieldError)
      toast.toast({
        title:`${fieldError.path[0]} is invalid`,
        description:fieldError.message,
        variant:"destructive"
      })
      }
  }
}
  return (
    <div className="mx-5 mb-10">
      <h2 className="text-2xl font-bold mb-4">Upload New Book</h2>
      <form onSubmit={handleSubmit}  className="space-y-4">
        <Input
          type="text"
          placeholder="Book Title"
          name="title"
          onChange={handleChange}
        />
        <Input
          type="text"
          placeholder="Author"
          name="author"
          onChange={handleChange}
        />
        <Textarea
          placeholder="Short Description"
          name="description"
          onChange={handleChange}
        />
        <div className="flex items-center">
          <p className="mr-4"> Choose the Genre</p>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="flex items-center justify-center">
                <span className="">{formData.category}</span>
                <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className=" mt-8  " align="end">
              {categories.map((cat: string, i) => {
                return (
                  <DropdownMenuItem
                    onClick={() => setFormData({ ...formData, category: cat })}
                  >
                    {cat}
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/*
       
       <UploadDropzone
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          const files = res;

          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      /> */}
        <Button className="  block " type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default UploadBook;
