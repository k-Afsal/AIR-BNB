'use server';

import {
  recommendDestination,
  type RecommendDestinationInput,
  type RecommendDestinationOutput,
} from '@/ai/flows/ai-powered-destination-guide';
import { z } from 'zod';

const DestinationGuideSchema = z.object({
  lodgingPreferences: z.string().min(3, 'Please describe your preferred lodging.'),
  desiredAmenities: z.string().min(3, 'Please list some desired amenities.'),
  plannedActivities: z.string().min(3, 'Please tell us about your planned activities.'),
});


export async function getAIDestinationSuggestion(
  prevState: any,
  formData: FormData
): Promise<{
  message: string;
  data: RecommendDestinationOutput | null;
  error: string | null;
}> {
  const parsed = DestinationGuideSchema.safeParse({
    lodgingPreferences: formData.get('lodgingPreferences'),
    desiredAmenities: formData.get('desiredAmenities'),
    plannedActivities: formData.get('plannedActivities'),
  });

  if (!parsed.success) {
    return {
      message: 'Invalid form data',
      data: null,
      error: parsed.error.flatten().fieldErrors,
    };
  }

  try {
    const result = await recommendDestination(parsed.data);
    return {
      message: 'Success',
      data: result,
      error: null,
    };
  } catch (e: any) {
    return {
      message: 'An error occurred',
      data: null,
      error: e.message || 'Failed to get recommendation.',
    };
  }
}
