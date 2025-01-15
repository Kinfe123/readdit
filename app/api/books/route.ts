// app/api/hello/route.js
import { db } from "@/lib/db";

export async function GET() {

    const books = await db.book.findMany({ include:{ authorUser:{
      select:{
        name:true,
        profilePicture:true,username:true
      }
      
    }, votes: {
      select:{
        id: true,
        bookId: true,
        userId: true,
        type: true,
      }
    } } })
    return new Response(JSON.stringify(books), {
      status: 200,
    });
  }
  