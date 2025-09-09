// This file is machine-generated - edit with care!

'use server';

/**
 * @fileOverview An AI-powered destination guide that recommends a location based on user preferences.
 *
 * - recommendDestination - A function that recommends a destination.
 * - RecommendDestinationInput - The input type for the recommendDestination function.
 * - RecommendDestinationOutput - The return type for the recommendDestination function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RecommendDestinationInputSchema = z.object({
  lodgingPreferences: z
    .string()
    .describe('The type of lodging the user prefers (e.g., hotel, Airbnb, hostel).'),
  desiredAmenities: z
    .string()
    .describe('The amenities the user desires (e.g., pool, gym, free breakfast).'),
  plannedActivities: z
    .string()
    .describe('The activities the user plans to do (e.g., hiking, sightseeing, relaxing).'),
});
export type RecommendDestinationInput = z.infer<
  typeof RecommendDestinationInputSchema
>;

const RecommendDestinationOutputSchema = z.object({
  locationRecommendation: z.string().describe('The recommended location.'),
  reasoning: z
    .string()
    .describe('The reasoning behind the location recommendation.'),
});
export type RecommendDestinationOutput = z.infer<
  typeof RecommendDestinationOutputSchema
>;

export async function recommendDestination(
  input: RecommendDestinationInput
): Promise<RecommendDestinationOutput> {
  return recommendDestinationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'recommendDestinationPrompt',
  input: {schema: RecommendDestinationInputSchema},
  output: {schema: RecommendDestinationOutputSchema},
  prompt: `You are a travel expert who recommends destinations based on user preferences.

  Based on the user's lodging preferences, desired amenities, and planned activities, recommend a location and explain your reasoning.

  Lodging Preferences: {{{lodgingPreferences}}}
  Desired Amenities: {{{desiredAmenities}}}
  Planned Activities: {{{plannedActivities}}}

  Recommendation:`,
});

const recommendDestinationFlow = ai.defineFlow(
  {
    name: 'recommendDestinationFlow',
    inputSchema: RecommendDestinationInputSchema,
    outputSchema: RecommendDestinationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
