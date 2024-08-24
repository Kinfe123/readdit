
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function Books() {
  return (
    <div>
      <section className="py-6 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Classic Books You Should Read
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Explore a curated selection of timeless literary masterpieces.
            </p>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        <div className="bg-background rounded-lg shadow-md overflow-hidden">
          <div className="p-4">
            <h3 className="text-lg font-semibold">The Great Gatsby</h3>
            <p className="text-muted-foreground">F. Scott Fitzgerald</p>
            <p className="text-sm mt-2">
              The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. It is considered a masterpiece of
              American literature and a classic of the Jazz Age.
            </p>
          </div>
          <div className="bg-muted px-4 py-2 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Avatar className="w-6 h-6 border">
                <AvatarImage src="/placeholder-user.jpg" alt="@username" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <span className="text-sm text-muted-foreground">John Doe</span>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="rounded-full">
                <ArrowUpIcon className="w-4 h-4" />
              </Button>
              <span className="text-sm text-muted-foreground">10</span>
              <Button variant="ghost" size="icon" className="rounded-full">
                <ArrowDownIcon className="w-4 h-4" />
              </Button>
              <span className="text-sm text-muted-foreground">5</span>
            </div>
          </div>
        </div>
        <div className="bg-background rounded-lg shadow-md overflow-hidden">
          <div className="p-4">
            <h3 className="text-lg font-semibold">To Kill a Mockingbird</h3>
            <p className="text-muted-foreground">Harper Lee</p>
            <p className="text-sm mt-2">
              To Kill a Mockingbird is a novel by Harper Lee published in 1960. It is widely regarded as a classic of
              American literature and has been a staple in high school curriculums for decades.
            </p>
          </div>
          <div className="bg-muted px-4 py-2 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Avatar className="w-6 h-6 border">
                <AvatarImage src="/placeholder-user.jpg" alt="@username" />
                <AvatarFallback>SA</AvatarFallback>
              </Avatar>
              <span className="text-sm text-muted-foreground">Sarah Adams</span>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="rounded-full">
                <ArrowUpIcon className="w-4 h-4" />
              </Button>
              <span className="text-sm text-muted-foreground">15</span>
              <Button variant="ghost" size="icon" className="rounded-full">
                <ArrowDownIcon className="w-4 h-4" />
              </Button>
              <span className="text-sm text-muted-foreground">3</span>
            </div>
          </div>
        </div>
        <div className="bg-background rounded-lg shadow-md overflow-hidden">
          <div className="p-4">
            <h3 className="text-lg font-semibold">1984</h3>
            <p className="text-muted-foreground">George Orwell</p>
            <p className="text-sm mt-2">
              1984 is a dystopian social science fiction novel by English novelist George Orwell. It was published in 1949
              and is Orwell&apos; most famous work, with the possible exception of Animal Farm.
            </p>
          </div>
          <div className="bg-muted px-4 py-2 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Avatar className="w-6 h-6 border">
                <AvatarImage src="/placeholder-user.jpg" alt="@username" />
                <AvatarFallback>MJ</AvatarFallback>
              </Avatar>
              <span className="text-sm text-muted-foreground">Michael Johnson</span>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="rounded-full">
                <ArrowUpIcon className="w-4 h-4" />
              </Button>
              <span className="text-sm text-muted-foreground">8</span>
              <Button variant="ghost" size="icon" className="rounded-full">
                <ArrowDownIcon className="w-4 h-4" />
              </Button>
              <span className="text-sm text-muted-foreground">2</span>
            </div>
          </div>
        </div>
        <div className="bg-background rounded-lg shadow-md overflow-hidden">
          <div className="p-4">
            <h3 className="text-lg font-semibold">Pride and Prejudice</h3>
            <p className="text-muted-foreground">Jane Austen</p>
            <p className="text-sm mt-2">
              Pride and Prejudice is a novel of manners by Jane Austen, first published in 1813. The story follows the
              Bennett family, and is set in rural England in the early 19th century.
            </p>
          </div>
          <div className="bg-muted px-4 py-2 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Avatar className="w-6 h-6 border">
                <AvatarImage src="/placeholder-user.jpg" alt="@username" />
                <AvatarFallback>EW</AvatarFallback>
              </Avatar>
              <span className="text-sm text-muted-foreground">Emily Wilson</span>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="rounded-full">
                <ArrowUpIcon className="w-4 h-4" />
              </Button>
              <span className="text-sm text-muted-foreground">12</span>
              <Button variant="ghost" size="icon" className="rounded-full">
                <ArrowDownIcon className="w-4 h-4" />
              </Button>
              <span className="text-sm text-muted-foreground">4</span>
            </div>
          </div>
        </div>
      </section>
    </div>

  )
}

function ArrowDownIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </svg>
  )
}


function ArrowUpIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </svg>
  )
}
