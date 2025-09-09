import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Card } from './ui/card';

interface ImageGalleryProps {
  images: string[];
  title: string;
}

export function ImageGallery({ images, title }: ImageGalleryProps) {
  if (!images || images.length === 0) {
    return (
      <div className="aspect-video w-full rounded-xl bg-muted flex items-center justify-center">
        <p className="text-muted-foreground">No images available</p>
      </div>
    );
  }

  const [firstImage, ...restImages] = images;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      <div className="aspect-[4/3] relative overflow-hidden rounded-l-xl">
        <Image
          src={firstImage}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
          data-ai-hint="property exterior"
          priority
        />
      </div>
      <div className="hidden md:grid grid-cols-2 gap-2">
        {restImages.slice(0, 4).map((image, index) => (
          <div
            key={index}
            className={cn(
              'aspect-square relative overflow-hidden',
              index === 1 && 'rounded-tr-xl',
              index === 3 && 'rounded-br-xl'
            )}
          >
            <Image
              src={image}
              alt={`${title} image ${index + 2}`}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              data-ai-hint="property interior"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
