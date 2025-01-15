"use server";

import { db } from "@/lib/db";
import { Category } from "@prisma/client";




export const createBook = async (title:string, author:string, description:string, category:Category, userId:string ) =>{
    const newBook = await db.book.create({ 
        data:{
            title,
            author,
            authorId:userId,
            description,
            category:category || "FICTION"
        }
    })

    return newBook
}