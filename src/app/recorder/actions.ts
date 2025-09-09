'use server';

import { summarizeVideo as summarizeVideoFlow } from '@/ai/flows/summarize-video-flow';

export async function summarizeVideo(videoDataUri: string): Promise<{ summary: string; error: string | null; }> {
  try {
    const result = await summarizeVideoFlow({ videoDataUri });
    return {
        summary: result.summary,
        error: null,
    };
  } catch (e: any) {
     return {
        summary: '',
        error: e.message || 'Failed to get summary.',
     }
  }
}
