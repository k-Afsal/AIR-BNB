import { Header } from '@/components/header';
import { PropertyListings } from '@/components/property-listings';
import { getProperties } from '@/lib/data';
import { MapToggle } from '@/components/map-toggle';
import { DestinationGuide } from '@/components/destination-guide';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

export default function Home() {
  const properties = getProperties();
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 pt-28">
        <div className="mb-8 rounded-lg border bg-card text-card-foreground p-6 flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm">
          <div>
            <h2 className="text-xl font-bold font-headline">Can't decide where to go?</h2>
            <p className="text-muted-foreground">Let our AI guide help you find the perfect spot.</p>
          </div>
          <DestinationGuide>
            <Button>
              <Sparkles className="mr-2 h-4 w-4" />
              Get a Recommendation
            </Button>
          </DestinationGuide>
        </div>
        <PropertyListings properties={properties} />
      </main>
      <MapToggle />
    </div>
  );
}
