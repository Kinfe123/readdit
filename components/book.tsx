

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { BookObject, Vote, VoteType } from "@/lib/types"
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react"


function separateVotes(votes: Vote[]): { upvotes: Vote[]; downvotes: Vote[] } {
    const upvotes = votes.filter((vote) => vote.type === VoteType.UPVOTE);
    const downvotes = votes.filter((vote) => vote.type === VoteType.DOWNVOTE);
    
    return { upvotes, downvotes };
  }

const Book = ({bookData}:{bookData:BookObject}) =>{

    const  { title, description, author, category, authorUser:{ username, profilePicture, name }, votes } = bookData
    const {upvotes, downvotes} = separateVotes(votes)
    return (
        <div className="bg-background rounded-lg shadow-md overflow-hidden">
          <div className="p-4">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-muted-foreground">{author}</p>
            <p className="text-sm mt-2">
              {description}
            </p>
          </div>
          <div className="bg-muted px-4 py-2 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Avatar className="w-6 h-6 border">
                <AvatarImage src="/placeholder-user.jpg" alt="@username" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <span className="text-sm text-muted-foreground">{name || username}</span>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="rounded-full">
                <ArrowUpIcon className="w-4 h-4" />
              </Button>
              <span className="text-sm text-muted-foreground">{upvotes.length}</span>
              <Button variant="ghost" size="icon" className="rounded-full">
                <ArrowDownIcon className="w-4 h-4" />
              </Button>
              <span className="text-sm text-muted-foreground">{downvotes.length}</span>
            </div>
          </div>
        </div>
    )
}
export default Book