import type { Property } from '@/lib/types';
import { PropertyCard } from '@/components/property-card';

interface PropertyListingsProps {
  properties: Property[];
}

export function PropertyListings({ properties }: PropertyListingsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}
