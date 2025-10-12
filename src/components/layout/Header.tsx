// src/components/layout/Header.tsx
import Link from 'next/link';
import { ModeToggle } from '@/components/global/mode-toggle';
import Image from 'next/image';

const Header = () => {
return (
// C19 Fix: Refactor for robust centering
<header className="fixed top-0 z-50 w-full border-b border-neutral-900 bg-black/40 backdrop-blur-lg">
<div className="container relative flex h-16 items-center justify-between px-4">

    {/* Left Aligned Content */}
    <div className="flex items-center gap-2">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/assets/logo.svg"
          width={30}
          height={30}
          alt="AIAscent Logo"
          className="shadow-sm"
        />
        <span className="text-2xl font-bold">AIAscent.dev</span>
      </Link>
    </div>

    {/* Center Aligned Navigation (Absolutely Positioned) */}
    <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center space-x-6 text-sm font-medium">
      <NavLink href="/">Home</NavLink>
      <NavLink href="/showcase">Showcase</NavLink>
      <NavLink href="/learn">Learn</NavLink>
      <NavLink href="/mission">Mission</NavLink>
      <a href="https://github.com/dgerabagi/data-curation-environment" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground/80 text-foreground/60">
        GitHub
      </a>
    </nav>

    {/* Right Aligned Content */}
    <div className="flex items-center justify-end gap-4">
      <ModeToggle />
      {/* Placeholder for Mobile Menu Icon */}
      <div className="md:hidden">
        {/* MenuIcon component would go here */}
      </div>
    </div>
  </div>
</header>
);
};

// Helper component for navigation links styling
const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
<Link href={href} className="transition-colors hover:text-foreground/80 text-foreground/60">
{children}
</Link>
);

export default Header;