import type { Property } from './types';

const properties: Property[] = [
  {
    id: '1',
    title: 'Secluded Treehouse Getaway',
    location: 'Atlanta, Georgia',
    price: 350,
    rating: 4.98,
    guests: 2,
    bedrooms: 1,
    beds: 1,
    baths: 1,
    images: [
      'https://picsum.photos/seed/p1i1/1200/800',
      'https://picsum.photos/seed/p1i2/1200/800',
      'https://picsum.photos/seed/p1i3/1200/800',
      'https://picsum.photos/seed/p1i4/1200/800',
      'https://picsum.photos/seed/p1i5/1200/800',
    ],
    description:
      'A secluded and romantic treehouse for two. A little slice of heaven, a place to relax, and a perfect spot for a romantic getaway.',
    amenities: ['Wifi', 'Air conditioning', 'Kitchen', 'Free parking', 'Heating'],
    host: {
      name: 'Katie',
      avatar: 'https://picsum.photos/seed/h1/200',
    },
  },
  {
    id: '2',
    title: 'Modern Loft in Downtown',
    location: 'New York, New York',
    price: 220,
    rating: 4.85,
    guests: 3,
    bedrooms: 1,
    beds: 2,
    baths: 1,
    images: [
      'https://picsum.photos/seed/p2i1/1200/800',
      'https://picsum.photos/seed/p2i2/1200/800',
      'https://picsum.photos/seed/p2i3/1200/800',
      'https://picsum.photos/seed/p2i4/1200/800',
      'https://picsum.photos/seed/p2i5/1200/800',
    ],
    description:
      'Stylish and spacious loft in the heart of the city. Enjoy the amazing views and the vibrant neighborhood.',
    amenities: ['Wifi', 'Air conditioning', 'Kitchen', 'Elevator', 'Gym'],
    host: {
      name: 'Michael',
      avatar: 'https://picsum.photos/seed/h2/200',
    },
  },
  {
    id: '3',
    title: 'Cozy Beachfront Cottage',
    location: 'Malibu, California',
    price: 450,
    rating: 4.99,
    guests: 4,
    bedrooms: 2,
    beds: 2,
    baths: 2,
    images: [
      'https://picsum.photos/seed/p3i1/1200/800',
      'https://picsum.photos/seed/p3i2/1200/800',
      'https://picsum.photos/seed/p3i3/1200/800',
      'https://picsum.photos/seed/p3i4/1200/800',
      'https://picsum.photos/seed/p3i5/1200/800',
    ],
    description: 'Wake up to the sound of waves in this beautiful beachfront cottage. Perfect for a family vacation or a serene retreat.',
    amenities: ['Wifi', 'Kitchen', 'Free parking', 'Beachfront', 'Patio'],
    host: {
      name: 'Jennifer',
      avatar: 'https://picsum.photos/seed/h3/200',
    },
  },
  {
    id: '4',
    title: 'Rustic Cabin in the Woods',
    location: 'Asheville, North Carolina',
    price: 180,
    rating: 4.91,
    guests: 6,
    bedrooms: 3,
    beds: 4,
    baths: 2,
    images: [
      'https://picsum.photos/seed/p4i1/1200/800',
      'https://picsum.photos/seed/p4i2/1200/800',
      'https://picsum.photos/seed/p4i3/1200/800',
      'https://picsum.photos/seed/p4i4/1200/800',
      'https://picsum.photos/seed/p4i5/1200/800',
    ],
    description:
      'Escape to this charming cabin nestled in the Blue Ridge Mountains. Ideal for hiking enthusiasts and nature lovers.',
    amenities: ['Wifi', 'Kitchen', 'Free parking', 'Indoor fireplace', 'Pet friendly'],
    host: {
      name: 'David',
      avatar: 'https://picsum.photos/seed/h4/200',
    },
  },
  {
    id: '5',
    title: 'Chic Parisian Apartment',
    location: 'Paris, France',
    price: 300,
    rating: 4.88,
    guests: 2,
    bedrooms: 1,
    beds: 1,
    baths: 1,
    images: [
      'https://picsum.photos/seed/p5i1/1200/800',
      'https://picsum.photos/seed/p5i2/1200/800',
      'https://picsum.photos/seed/p5i3/1200/800',
      'https://picsum.photos/seed/p5i4/1200/800',
      'https://picsum.photos/seed/p5i5/1200/800',
    ],
    description:
      'Experience the magic of Paris from this elegant apartment. Located in a historic building with modern amenities.',
    amenities: ['Wifi', 'Air conditioning', 'Kitchen', 'Elevator', 'Washer'],
    host: {
      name: 'Sophie',
      avatar: 'https://picsum.photos/seed/h5/200',
    },
  },
  {
    id: '6',
    title: 'Desert Oasis with Pool',
    location: 'Scottsdale, Arizona',
    price: 550,
    rating: 5.0,
    guests: 8,
    bedrooms: 4,
    beds: 5,
    baths: 3,
    images: [
      'https://picsum.photos/seed/p6i1/1200/800',
      'https://picsum.photos/seed/p6i2/1200/800',
      'https://picsum.photos/seed/p6i3/1200/800',
      'https://picsum.photos/seed/p6i4/1200/800',
      'https://picsum.photos/seed/p6i5/1200/800',
    ],
    description: 'A luxurious desert home with a stunning pool and outdoor living space. The ultimate retreat for relaxation and fun.',
    amenities: ['Wifi', 'Air conditioning', 'Pool', 'Hot tub', 'BBQ grill'],
    host: {
      name: 'Tom',
      avatar: 'https://picsum.photos/seed/h6/200',
    },
  },
  {
    id: '7',
    title: 'Mountain View Chalet',
    location: 'Whistler, British Columbia',
    price: 600,
    rating: 4.95,
    guests: 10,
    bedrooms: 5,
    beds: 7,
    baths: 4,
    images: [
      'https://picsum.photos/seed/p7i1/1200/800',
      'https://picsum.photos/seed/p7i2/1200/800',
      'https://picsum.photos/seed/p7i3/1200/800',
      'https://picsum.photos/seed/p7i4/1200/800',
      'https://picsum.photos/seed/p7i5/1200/800',
    ],
    description:
      'Breathtaking views await at this spacious chalet. Perfect for ski trips and mountain adventures with a large group.',
    amenities: ['Wifi', 'Kitchen', 'Indoor fireplace', 'Hot tub', 'Ski-in/Ski-out'],
    host: {
      name: 'Emily',
      avatar: 'https://picsum.photos/seed/h7/200',
    },
  },
  {
    id: '8',
    title: 'Historic Townhouse in Old Town',
    location: 'Kyoto, Japan',
    price: 280,
    rating: 4.93,
    guests: 5,
    bedrooms: 2,
    beds: 3,
    baths: 1,
    images: [
      'https://picsum.photos/seed/p8i1/1200/800',
      'https://picsum.photos/seed/p8i2/1200/800',
      'https://picsum.photos/seed/p8i3/1200/800',
      'https://picsum.photos/seed/p8i4/1200/800',
      'https://picsum.photos/seed/p8i5/1200/800',
    ],
    description: 'Stay in a beautifully restored machiya (traditional townhouse) in the heart of Gion, Kyoto’s most famous geisha district.',
    amenities: ['Wifi', 'Air conditioning', 'Kitchen', 'Tatami rooms', 'Garden'],
    host: {
      name: 'Yuki',
      avatar: 'https://picsum.photos/seed/h8/200',
    },
  },
];

export function getProperties() {
  return properties;
}

export function getPropertyById(id: string) {
  return properties.find((p) => p.id === id);
}
