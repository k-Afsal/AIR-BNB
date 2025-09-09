'use client';

import type { Property } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Heart, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

interface PropertyCardProps {
  property: Property;
  className?: string;
}

export function PropertyCard({ property, className }: PropertyCardProps) {
  return (
    <div className={cn('group relative', className)}>
      <Link href={`/properties/${property.id}`} className="block">
        <div className="overflow-hidden rounded-xl">
          <Carousel className="w-full">
            <CarouselContent>
              {property.images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="aspect-[20/19] relative">
                    <Image
                      src={image}
                      alt={`${property.title} image ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint="property interior"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            <CarouselNext className="absolute right-3 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Carousel>
        </div>
        <div className="mt-2 grid">
          <div className="flex items-start justify-between">
            <h3 className="font-medium text-base truncate pr-2">
              {property.location}
            </h3>
            <div className="flex items-center gap-1 flex-shrink-0">
              <Star className="h-4 w-4" />
              <span className="font-light">{property.rating.toFixed(2)}</span>
            </div>
          </div>
          <p className="text-muted-foreground text-sm">Hosted by {property.host.name}</p>
          <p className="text-muted-foreground text-sm">Apr 1 - 6</p>
          <p className="mt-1">
            <span className="font-semibold text-base">${property.price}</span>
            <span className="text-muted-foreground"> night</span>
          </p>
        </div>
      </Link>
      <Button variant="ghost" size="icon" className="absolute top-3 right-3 rounded-full text-white bg-black/20 hover:bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
        <Heart className="h-5 w-5" />
        <span className="sr-only">Add to wishlist</span>
      </Button>
    </div>
  );
}
