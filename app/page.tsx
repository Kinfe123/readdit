import { BookCategories } from "@/components/book-categories";
import { Books } from "@/components/books";
import ContactUs from "@/components/ContactUs";
import { Hero } from "@/components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col max-w-4xl mx-auto justify-center  min-h-screen">
      
      <Hero />
      <Books />
      <BookCategories />
      <ContactUs />
    </main>
  );
}
