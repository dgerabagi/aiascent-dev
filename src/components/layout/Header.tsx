// src/components/layout/Header.tsx
'use client'; 
import Link from 'next/link';
import { ModeToggle } from '@/components/global/mode-toggle';
import Image from 'next/image';
import { FaDiscord, FaGithub, FaChevronDown, FaBars } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  return (
    // Updated C10: h-14 on mobile, h-16 on desktop. Solid bg on mobile for readability.
    <header className="fixed top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-sm md:bg-background/80 md:backdrop-blur-lg transition-all duration-300">
      <div className="container relative flex h-14 md:h-16 items-center px-4">

        {/* Logo and Title - Pushed to left */}
        <div className="flex items-center gap-2 mr-auto">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/assets/logo.svg" 
              width={30}
              height={30}
              alt="AIAscent Logo"
              className="shadow-sm w-6 h-6 md:w-[30px] md:h-[30px]" // Smaller logo on mobile
            />
            <span className="text-xl md:text-2xl font-bold truncate">aiascent.dev</span>
          </Link>
        </div>

        {/* Desktop Navigation Links - Absolutely Centered */}
        <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center space-x-6 text-sm font-medium">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/mission">Mission</NavLink>
          <NavLink href="/learn">Learn</NavLink>
          <NavLink href="/dce">DCE</NavLink>
          
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
        <div className="flex items-center justify-end gap-2 md:gap-4 ml-auto">
          <div className="hidden md:flex items-center gap-4">
            <a href="https://github.com/dgerabagi/data-curation-environment" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-foreground/80 transition-colors" title="View on GitHub">
                <FaGithub size={22} />
            </a>
            <a href="https://discord.gg/HYurQXDWPm" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-foreground/80 transition-colors" title="Join our Discord Community">
                <FaDiscord size={22} />
            </a>
          </div>
          <ModeToggle />
          
          {/* Mobile Menu (C10) */}
          <div className="md:hidden">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="-mr-2">
                        <FaBars size={20} />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuItem asChild><Link href="/" className="cursor-pointer w-full">Home</Link></DropdownMenuItem>
                    <DropdownMenuItem asChild><Link href="/mission" className="cursor-pointer w-full">Mission</Link></DropdownMenuItem>
                    <DropdownMenuItem asChild><Link href="/learn" className="cursor-pointer w-full">Learn</Link></DropdownMenuItem>
                    <DropdownMenuItem asChild><Link href="/dce" className="cursor-pointer w-full">DCE</Link></DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuLabel>Showcase</DropdownMenuLabel>
                    <DropdownMenuItem asChild><Link href="/showcase/report" className="cursor-pointer w-full pl-6">The Ascent Report</Link></DropdownMenuItem>
                    <DropdownMenuItem asChild><Link href="/showcase/anguilla" className="cursor-pointer w-full pl-6">Anguilla Project</Link></DropdownMenuItem>
                    <DropdownMenuItem asChild><Link href="/showcase/game" className="cursor-pointer w-full pl-6">AI Ascent Game</Link></DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild><Link href="/academy" className="cursor-pointer w-full font-bold text-primary">V2V Academy</Link></DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <div className="flex justify-around p-2">
                        <a href="https://github.com/dgerabagi/data-curation-environment" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-foreground" title="View on GitHub">
                            <FaGithub size={24} />
                        </a>
                        <a href="https://discord.gg/HYurQXDWPm" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-foreground" title="Join our Discord Community">
                            <FaDiscord size={24} />
                        </a>
                    </div>
                </DropdownMenuContent>
            </DropdownMenu>
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