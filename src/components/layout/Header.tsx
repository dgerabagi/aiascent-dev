// src/components/layout/Header.tsx
// C1 - Initial Scaffolding
import Link from 'next/link';
import { ModeToggle } from '@/components/global/mode-toggle';

const Header = () => {
return (
<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
<div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
<div className="flex gap-6 md:gap-10">
<Link href="/" className="flex items-center space-x-2">
<span className="inline-block font-bold text-xl">AIAscent.dev</span>
</Link>
</div>
<nav className="flex items-center space-x-6 text-sm font-medium">
<Link href="/" className="transition-colors hover:text-foreground/80 text-foreground/60">
Home
</Link>
<Link href="/showcase" className="transition-colors hover:text-foreground/80 text-foreground/60">
Showcase
</Link>
{/* Placeholder for future route */}
<span className="transition-colors hover:text-foreground/80 text-foreground/60 cursor-not-allowed opacity-50">
Tutorials
</span>
<a href="[https://github.com/dgerabagi/data-curation-environment](https://www.google.com/search?q=https://github.com/dgerabagi/data-curation-environment)" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground/80 text-foreground/60">
GitHub
</a>
</nav>
<div className="flex flex-1 items-center justify-end space-x-4">
<ModeToggle />
</div>
</div>
</header>
);
};

export default Header;