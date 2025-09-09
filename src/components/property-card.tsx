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
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PropertyCardProps {
  property: Property;
  className?: string;
}

export function PropertyCard({ property, className }: PropertyCardProps) {
  return (
    <Link href={`/properties/${property.id}`} className={cn('group block', className)}>
      <Card className="overflow-hidden rounded-xl transition-all duration-300 ease-in-out group-hover:shadow-xl group-hover:-translate-y-1">
        <Carousel className="w-full">
          <CarouselContent>
            {property.images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="aspect-video relative">
                  <Image
                    src={image}
                    alt={`${property.title} image ${index + 1}`}
                    fill
                    className="object-cover"
                    data-ai-hint="property interior"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-3 opacity-50 group-hover:opacity-100 transition-opacity" />
          <CarouselNext className="absolute right-3 opacity-50 group-hover:opacity-100 transition-opacity" />
        </Carousel>
        <CardContent className="p-4">
          <div className="flex items-start justify-between">
            <h3 className="font-bold font-headline text-lg truncate pr-2">
              {property.title}
            </h3>
            <div className="flex items-center gap-1 flex-shrink-0">
              <Star className="h-4 w-4 text-primary fill-primary" />
              <span className="font-medium">{property.rating.toFixed(2)}</span>
            </div>
          </div>
          <p className="text-muted-foreground text-sm">{property.location}</p>
          <p className="mt-2">
            <span className="font-bold text-lg">${property.price}</span>
            <span className="text-muted-foreground"> / night</span>
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
