export type Property = {
  id: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  guests: number;
  bedrooms: number;
  beds: number;
  baths: number;
  images: string[];
  description: string;
  amenities: string[];
  host: {
    name: string;
    avatar: string;
  };
};
