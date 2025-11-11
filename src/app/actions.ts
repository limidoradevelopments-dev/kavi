
'use server';

import {
  generateAboutMeContent,
  type GenerateAboutMeContentInput,
} from '@/ai/flows/generate-about-me-content';
import { z } from 'zod';

const GenerateAboutMeContentInputSchema = z.object({
  keywords: z.string(),
});

export async function generateAboutMeAction(input: GenerateAboutMeContentInput) {
  try {
    const validatedInput = GenerateAboutMeContentInputSchema.parse(input);
    const result = await generateAboutMeContent(validatedInput);
    if (result && result.aboutMeContent) {
      return { success: true, data: result.aboutMeContent };
    }
    return { success: false, error: 'Failed to get a valid response from AI.' };
  } catch (error) {
    console.error(error);
    if (error instanceof z.ZodError) {
      return { success: false, error: 'Invalid input.' };
    }
    return { success: false, error: 'Failed to generate content. Please try again.' };
  }
}
