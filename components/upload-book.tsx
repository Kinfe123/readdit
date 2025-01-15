"use client";
import { FormEvent, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { z } from "zod";
import { ChevronDown } from "lucide-react";
import { useToast } from "./ui/use-toast";
import { createBook } from "@/actions/book";
import { BookCategory, BookFields } from "@/lib/types";


const uploadBookSchema = z.object({
  title: z.string().min(4),
  author: z.string().min(3),
  description: z.string().min(10).max(100),
  category: z.string(),
});

 function UploadBook({  user }:{user:any}) {
  const categories:BookCategory[] = [
    "FICTION", 
  "NONFICTION",
  "CLASSICS",
  "BIOGRAPHY",
  "POETRY",
  "HISTORY",
  "SCIENCE",
  "PHILOSOPHY",
  "SELFHELP",
  "TRAVEL"
  ];
  const toast = useToast();

  const [formData, setFormData] = useState<BookFields>({
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
    alert(JSON.stringify(user.id))
    try {
      const validatedData = uploadBookSchema.parse(formData);
      // here we submit the form
      const {title, description, author, category} = formData
      try {
        createBook(title,author,description, category, user.id).then(book =>{
          toast.toast({ 
            title:"Book Uploaded Successfully",
            description:"Please wait until its approaved by the admins",
            
          })
        })
      } catch (error:any) {
        toast.toast({ 
          title:"Error uploading the book",
          description:error.message,
          
        })
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
      let fieldError = error.errors[0];
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
              {categories.map((cat: BookCategory, i) => {
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

       
        <Button className="  block " type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default UploadBook;
