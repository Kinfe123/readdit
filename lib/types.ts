export type BookCategory = 
  "FICTION"| 
  "NONFICTION"|
  "CLASSICS"|
  "BIOGRAPHY"|
  "POETRY"|
  "HISTORY"|
  "SCIENCE"|
  "PHILOSOPHY"|
  "SELFHELP"|
  "TRAVEL"
;

export interface BookFields {
  title:string;
  author:string;
  description:string;
  category:BookCategory
}
export interface BookObject extends BookFields {
  id:string;
  authorUser:{
    name:string |null;
    profilePicture:string | null;
    username:string
  },
  votes:Array<Vote>
}


export interface Vote {
  id: string;
  bookId: string;
  userId: string;
  type: VoteType;
}

export enum VoteType {
  UPVOTE = 'UPVOTE',
  DOWNVOTE = 'DOWNVOTE',
}