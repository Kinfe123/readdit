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