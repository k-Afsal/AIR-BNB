'use client';
import Link from 'next/link';
import { AirBnbLogo } from '@/components/icons';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Menu, Search, UserCircle, Video } from 'lucide-react';
import { Separator } from './ui/separator';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto flex h-20 items-center justify-between">
        <Link href="/" className="hidden items-center gap-2 md:flex">
          <AirBnbLogo className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-primary-foreground font-headline tracking-tighter">
            Air BNB
          </span>
        </Link>
        <div className="flex-1 md:flex-none md:w-auto md:mx-4">
          <div className="w-full max-w-sm mx-auto md:max-w-md lg:max-w-lg">
             <div className="flex items-center gap-2 rounded-full border bg-card p-1.5 shadow-sm">
                <Input type="text" placeholder="Search destinations" className="flex-1 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent h-9 px-4" />
                 <Button type="submit" size="icon" className="rounded-full bg-primary h-9 w-9">
                  <Search className="h-4 w-4" />
                  <span className="sr-only">Search</span>
                </Button>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
           <Button variant="ghost" className="hidden md:inline-flex" asChild>
            <Link href="/recorder">
                <Video className="mr-2 h-4 w-4" />
                Recorder
            </Link>
          </Button>
           <Button variant="ghost" className="hidden md:inline-flex">
            Become a host
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2 rounded-full">
                <Menu className="h-4 w-4" />
                <UserCircle className="h-6 w-6 text-muted-foreground" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Sign Up</DropdownMenuItem>
              <DropdownMenuItem>Log In</DropdownMenuItem>
              <DropdownMenuSeparator />
               <DropdownMenuItem asChild>
                 <Link href="/recorder">
                    <Video className="mr-2 h-4 w-4" />
                    Recorder
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>Help Center</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
