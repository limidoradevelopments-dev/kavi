'use server';

/**
 * @fileOverview An AI-powered tool to generate 'About Me' content suggestions based on keywords or industry.
 *
 * - generateAboutMeContent - A function that generates 'About Me' content.
 * - GenerateAboutMeContentInput - The input type for the generateAboutMeContent function.
 * - GenerateAboutMeContentOutput - The return type for the generateAboutMeContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateAboutMeContentInputSchema = z.object({
  keywords: z
    .string()
    .describe(
      'Keywords or industry to base the About Me content on, comma separated.'
    ),
});
export type GenerateAboutMeContentInput = z.infer<
  typeof GenerateAboutMeContentInputSchema
>;

const GenerateAboutMeContentOutputSchema = z.object({
  aboutMeContent: z
    .string()
    .describe('The generated About Me content based on the keywords.'),
});
export type GenerateAboutMeContentOutput = z.infer<
  typeof GenerateAboutMeContentOutputSchema
>;

export async function generateAboutMeContent(
  input: GenerateAboutMeContentInput
): Promise<GenerateAboutMeContentOutput> {
  return generateAboutMeContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateAboutMeContentPrompt',
  input: {schema: GenerateAboutMeContentInputSchema},
  output: {schema: GenerateAboutMeContentOutputSchema},
  prompt: `You are a personal branding expert. Generate a compelling 'About Me' section based on the following keywords or industry: {{{keywords}}}. Focus on relevant skills and experience.
`,
});

const generateAboutMeContentFlow = ai.defineFlow(
  {
    name: 'generateAboutMeContentFlow',
    inputSchema: GenerateAboutMeContentInputSchema,
    outputSchema: GenerateAboutMeContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
