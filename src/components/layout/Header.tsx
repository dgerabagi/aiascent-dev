// src/components/layout/Header.tsx
'use client'; // C8: Needs to be client component for Dropdown interactions
import Link from 'next/link';
import { ModeToggle } from '@/components/global/mode-toggle';
import Image from 'next/image';
import { FaDiscord, FaGithub, FaChevronDown } from 'react-icons/fa';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  return (
    // Updated C3: Changed styling to match A16 (fixed, dark, blur)
    <header className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-lg">
      {/* C19 Fix: Changed to relative container to allow absolute positioning of nav */}
      <div className="container relative flex h-16 items-center px-4">

        {/* Logo and Title - Pushed to left */}
        <div className="flex items-center gap-2 mr-auto">
          <Link href="/" className="flex items-center gap-2">
            {/* Placeholder for Logo (A15.2) */}
            <Image
              src="/assets/logo.svg" // Placeholder path
              width={30}
              height={30}
              alt="AIAscent Logo"
              className="shadow-sm"
            />
            <span className="text-2xl font-bold">aiascent.dev</span>
          </Link>
        </div>

        {/* Navigation Links - Absolutely Centered */}
        {/* C99: Reordered Academy to be last */}
        <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center space-x-6 text-sm font-medium">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/mission">Mission</NavLink>
          <NavLink href="/learn">Learn</NavLink>
          <NavLink href="/dce">DCE</NavLink>
          
          {/* C8: Showcase Dropdown */}
          {/* C9 Update: Added asChild to DropdownMenuItem to ensure menu closes on selection */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 transition-colors hover:text-foreground/80 text-foreground/60 outline-none">
              Showcase <FaChevronDown size={10} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link href="/showcase/report" className="w-full block cursor-pointer">The Ascent Report</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/showcase/anguilla" className="w-full block cursor-pointer">Anguilla Project</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/showcase/game" className="w-full block cursor-pointer">AI Ascent Game</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <NavLink href="/academy">Academy</NavLink>
        </nav>

        {/* Right side (Actions/Toggle) - Pushed to right */}
        <div className="flex items-center justify-end gap-4 ml-auto">
          <a href="https://github.com/dgerabagi/data-curation-environment" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-foreground/80 transition-colors" title="View on GitHub">
            <FaGithub size={22} />
          </a>
          <a href="https://discord.gg/HYurQXDWPm" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-foreground/80 transition-colors" title="Join our Discord Community">
            <FaDiscord size={22} />
          </a>
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