import { Button } from '@/components/ui/button';
import { Map } from 'lucide-react';

export function MapToggle() {
  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-40">
      <Button size="lg" className="rounded-full shadow-lg">
        <Map className="mr-2 h-5 w-5" />
        Show Map
      </Button>
    </div>
  );
}
