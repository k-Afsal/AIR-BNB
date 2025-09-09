import { getPropertyById } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Header } from '@/components/header';
import { ImageGallery } from '@/components/image-gallery';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  Star,
  MapPin,
  Users,
  BedDouble,
  Bed,
  Bath,
  Wifi,
  ParkingSquare,
  Utensils,
  Wind,
  Snowflake,
  Heater,
  Dog,
  Dumbbell
} from 'lucide-react';

const amenityIcons: { [key: string]: React.ReactNode } = {
  Wifi: <Wifi className="h-5 w-5" />,
  'Free parking': <ParkingSquare className="h-5 w-5" />,
  Kitchen: <Utensils className="h-5 w-5" />,
  'Air conditioning': <Wind className="h-5 w-5" />,
  Heating: <Heater className="h-5 w-5" />,
  'Pet friendly': <Dog className="h-5 w-5" />,
  'Indoor fireplace': <Snowflake className="h-5 w-5" />,
  Elevator: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 3v18"/><path d="m6 7 4-4 4 4"/><path d="m6 17 4 4 4-4"/><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/></svg>,
  Gym: <Dumbbell className="h-5 w-5" />,
  Beachfront: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16.4 2.3a1 1 0 0 1 1.2 1.2l-4 16a1 1 0 0 1-1.2 1.2l-4-16a1 1 0 0 1 1.2-1.2Z"/><path d="M12 2v20"/><path d="M4.2 11.2 19.8 12.8"/></svg>,
  Patio: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22v-8"/><path d="M12 14h.01"/><path d="M20 14h.01"/><path d="M4 14h.01"/><path d="M20 6H4v8h16V6Z"/><path d="m5 14-1 8h20l-1-8"/></svg>,
  Washer: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h3"/><path d="M18 6h3"/><path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/><path d="M12 12a4 4 0 0 1 4-4"/><path d="M10 16.5a4 4 0 0 0-4-4"/></svg>,
  Pool: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z"/><path d="M10 10c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z"/><path d="M2 14h4"/><path d="M18 14h4"/></svg>,
  'Hot tub': <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V6"/><path d="M8 8V6"/><path d="M16 8V6"/><path d="M14 20H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h10v12Z"/><path d="M20 10a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2v-4a2 2 0 0 0-2-2h-2"/></svg>,
  'BBQ grill': <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 14V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/><path d="M4 14h16"/><path d="M18 14v4"/><path d="M6 14v4"/><path d="m6 18 2 4"/><path d="m18 18-2 4"/></svg>,
  'Ski-in/Ski-out': <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>,
  'Tatami rooms': <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>,
  Garden: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22c-.6 0-1-.4-1-1v-8a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v8c0 .6-.4 1-1 1H4z"/><path d="M10.5 22c-.6 0-1-.4-1-1V10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v11c0 .6-.4 1-1 1h-1z"/><path d="M17 22c-.6 0-1-.4-1-1v-5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v5c0 .6-.4 1-1 1h-1z"/><path d="M22 12c-4-1.5-4-3.5-6-3-2.5 1-2.5 4.5-5 4.5-3 0-2.5-3.5-5-3.5-2 0-2.5 2.5-5 2.5"/><path d="M22 9.5c-4-1.5-4-3.5-6-3-2.5 1-2.5 4.5-5 4.5-3 0-2.5-3.5-5-3.5-2 0-2.5 2.5-5 2.5"/></svg>,
};


export default function PropertyPage({ params }: { params: { id: string } }) {
  const property = getPropertyById(params.id);

  if (!property) {
    notFound();
  }

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 pt-28">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold font-headline">{property.title}</h1>
          <div className="flex items-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-primary fill-primary" />
              <span className="font-medium text-foreground">{property.rating.toFixed(2)}</span>
            </div>
            <span>·</span>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>{property.location}</span>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <ImageGallery images={property.images} title={property.title} />
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <div>
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-headline">Entire rental unit hosted by {property.host.name}</h2>
                <Avatar>
                  <AvatarImage src={property.host.avatar} alt={property.host.name} data-ai-hint="person" />
                  <AvatarFallback>{property.host.name.charAt(0)}</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex items-center gap-4 text-muted-foreground mt-2">
                <span><Users className="inline-block mr-2 h-4 w-4" />{property.guests} guests</span>
                <span>·</span>
                <span><BedDouble className="inline-block mr-2 h-4 w-4" />{property.bedrooms} bedrooms</span>
                <span>·</span>
                <span><Bed className="inline-block mr-2 h-4 w-4" />{property.beds} beds</span>
                <span>·</span>
                <span><Bath className="inline-block mr-2 h-4 w-4" />{property.baths} baths</span>
              </div>
            </div>

            <Separator />

            <div>
              <p className="text-foreground leading-relaxed">
                {property.description}
              </p>
            </div>
            
            <Separator />

            <div>
                <h2 className="text-2xl font-headline mb-4">What this place offers</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {property.amenities.map(amenity => (
                        <div key={amenity} className="flex items-center gap-3">
                            {amenityIcons[amenity] || <Star className="h-5 w-5" />}
                            <span>{amenity}</span>
                        </div>
                    ))}
                </div>
            </div>
          </div>

          <aside className="md:col-span-1">
            <div className="sticky top-28">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>
                    <span className="text-2xl font-bold">${property.price}</span>
                    <span className="text-base font-normal text-muted-foreground"> / night</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="checkin" className="block text-sm font-medium text-muted-foreground">CHECK-IN</label>
                      <input type="text" id="checkin" defaultValue="Add date" className="mt-1 block w-full rounded-md border-input bg-transparent p-2" />
                    </div>
                    <div>
                      <label htmlFor="checkout" className="block text-sm font-medium text-muted-foreground">CHECKOUT</label>
                      <input type="text" id="checkout" defaultValue="Add date" className="mt-1 block w-full rounded-md border-input bg-transparent p-2" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium text-muted-foreground">GUESTS</label>
                    <input type="text" id="guests" defaultValue="1 guest" className="mt-1 block w-full rounded-md border-input bg-transparent p-2" />
                  </div>
                  <Button size="lg" className="w-full">Reserve</Button>
                  <p className="text-center text-sm text-muted-foreground">You won't be charged yet</p>
                   <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                            <span>${property.price} x 5 nights</span>
                            <span>${property.price * 5}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Service fee</span>
                            <span>$75</span>
                        </div>
                   </div>
                   <Separator />
                   <div className="flex justify-between font-bold text-base">
                        <span>Total</span>
                        <span>${property.price * 5 + 75}</span>
                   </div>
                </CardContent>
              </Card>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
