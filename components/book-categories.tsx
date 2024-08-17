// BookCategories.js
import Link from "next/link";
import { FigmaIcon, BookIcon, ClubIcon, CalendarIcon, HistoryIcon, HomeIcon, LuggageIcon, PaletteIcon, SpaceIcon } from './Icons'; // Adjust path as necessary

const categories = [
  { name: 'Fiction', icon: FigmaIcon, bgColor: 'bg-accent', textColor: 'text-accent-foreground' },
  { name: 'Non-Fiction', icon: BookIcon, bgColor: 'bg-primary', textColor: 'text-primary-foreground' },
  { name: 'Classics', icon: ClubIcon, bgColor: 'bg-secondary', textColor: 'text-secondary-foreground' },
  { name: 'Biography', icon: BookIcon, bgColor: 'bg-muted', textColor: 'text-muted-foreground' },
  { name: 'Poetry', icon: PaletteIcon, bgColor: 'bg-card', textColor: 'text-card-foreground' },
  { name: 'History', icon: CalendarIcon, bgColor: 'bg-accent', textColor: 'text-accent-foreground' },
  { name: 'Science', icon: SpaceIcon, bgColor: 'bg-primary', textColor: 'text-primary-foreground' },
  { name: 'Philosophy', icon: HistoryIcon, bgColor: 'bg-secondary', textColor: 'text-secondary-foreground' },
  { name: 'Self-Help', icon: HomeIcon, bgColor: 'bg-muted', textColor: 'text-muted-foreground' },
  { name: 'Travel', icon: LuggageIcon, bgColor: 'bg-card', textColor: 'text-card-foreground' },
];

export function BookCategories() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container grid gap-8 px-4 md:px-6">
        <div className="grid gap-3">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Our Book Collection</h2>
          <p className="max-w-[650px] text-muted-foreground md:text-lg">
            Explore our wide selection of captivating books, carefully curated to enrich your literary journey.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {categories.map(({ name, icon: Icon, bgColor, textColor }) => (
            <Link
              key={name}
              href="#"
              className={`group relative flex h-24 w-full flex-col items-center justify-center gap-2 rounded-lg ${bgColor} p-4 ${textColor} transition-colors hover:${bgColor}/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-${bgColor.replace('bg-', '')} focus-visible:ring-offset-2`}
              prefetch={false}
            >
              <Icon className="h-10 w-10" />
              <span className="text-sm font-medium">{name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
