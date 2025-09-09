'use client';

import { useState, useTransition, type ReactNode } from 'react';
import { useFormState } from 'react-dom';
import { getAIDestinationSuggestion } from '@/app/actions';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Sparkles, Loader2, Compass } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';

const initialState = {
  message: '',
  data: null,
  error: null,
};

function SubmitButton() {
  const [isPending, startTransition] = useTransition();
  return (
    <Button type="submit" disabled={isPending} onClick={() => startTransition(() => {})}>
      {isPending ? (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <Sparkles className="mr-2 h-4 w-4" />
      )}
      Get Recommendation
    </Button>
  );
}


export function DestinationGuide({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [state, formAction] = useFormState(getAIDestinationSuggestion, initialState);

  const hasResult = state.data;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-headline flex items-center gap-2">
            <Compass />
            AI-Powered Destination Guide
            </DialogTitle>
          <DialogDescription>
            Describe your perfect trip, and we'll suggest a destination for you.
          </DialogDescription>
        </DialogHeader>

        {hasResult ? (
          <div className="space-y-4">
            <Alert>
              <Sparkles className="h-4 w-4" />
              <AlertTitle className="font-headline">Your Recommended Destination!</AlertTitle>
              <AlertDescription className="space-y-4 pt-2">
                 <div>
                    <h4 className="font-bold">{state.data.locationRecommendation}</h4>
                    <p className="text-sm text-muted-foreground">{state.data.reasoning}</p>
                 </div>
              </AlertDescription>
            </Alert>
             <Button variant="outline" onClick={() => {
                state.data = null;
                state.error = null;
                state.message = '';
             }}>
                Start Over
            </Button>
          </div>
        ) : (
          <form action={formAction} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="lodgingPreferences">Lodging Preferences</Label>
              <Input
                id="lodgingPreferences"
                name="lodgingPreferences"
                placeholder="e.g., hotel, Airbnb, hostel"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="desiredAmenities">Desired Amenities</Label>
              <Input
                id="desiredAmenities"
                name="desiredAmenities"
                placeholder="e.g., pool, gym, free breakfast"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="plannedActivities">Planned Activities</Label>
              <Textarea
                id="plannedActivities"
                name="plannedActivities"
                placeholder="e.g., hiking, sightseeing, relaxing on a beach"
                required
              />
            </div>
            {state.error && <p className="text-sm text-destructive">{typeof state.error === 'string' ? state.error : 'Please check your inputs.'}</p>}
            <DialogFooter>
              <SubmitButton />
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
