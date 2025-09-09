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
import { Menu, Search, UserCircle, Globe } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="hidden items-center gap-2 md:flex">
          <AirBnbLogo className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold text-primary tracking-tighter">
            airbnb
          </span>
        </Link>
        
        <div className="flex flex-1 md:flex-none justify-center">
            <div className="flex items-center gap-2 rounded-full border p-2 shadow-sm hover:shadow-md transition-shadow">
                <button className="px-4 font-medium">Anywhere</button>
                <div className="h-6 border-l" />
                <button className="px-4 font-medium">Any week</button>
                <div className="h-6 border-l" />
                <button className="px-4 text-muted-foreground">Add guests</button>
                <Button type="submit" size="icon" className="rounded-full bg-primary h-8 w-8">
                  <Search className="h-4 w-4 text-primary-foreground" />
                  <span className="sr-only">Search</span>
                </Button>
            </div>
        </div>

        <div className="flex items-center gap-2">
           <Button variant="ghost" className="hidden lg:inline-flex rounded-full px-4 py-2">
            Become a host
          </Button>
          <Button variant="ghost" size="icon" className="hidden md:inline-flex rounded-full">
            <Globe className="h-5 w-5" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2 rounded-full px-2 py-1 h-auto">
                <Menu className="h-5 w-5" />
                <UserCircle className="h-8 w-8 text-muted-foreground" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 mt-2">
              <DropdownMenuItem className="font-bold">Sign Up</DropdownMenuItem>
              <DropdownMenuItem>Log In</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Gift cards</DropdownMenuItem>
              <DropdownMenuItem>Airbnb your home</DropdownMenuItem>
              <DropdownMenuItem>Help Center</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
