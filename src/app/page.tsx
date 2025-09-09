import { Header } from '@/components/header';
import { PropertyListings } from '@/components/property-listings';
import { getProperties } from '@/lib/data';
import { MapToggle } from '@/components/map-toggle';
import { Categories } from '@/components/categories';
import { Footer } from '@/components/footer';

export default function Home() {
  const properties = getProperties();
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-28">
        <Categories />
        <PropertyListings properties={properties} />
      </main>
      <MapToggle />
      <Footer />
    </div>
  );
}
