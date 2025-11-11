'use client';

import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Sparkles, Copy, Check } from 'lucide-react';
import { generateAboutMeAction } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  keywords: z
    .string()
    .min(3, { message: 'Please enter at least 3 characters.' })
    .max(100, { message: 'Keywords are too long.' }),
});

export function AiAboutGenerator() {
  const [isPending, startTransition] = useTransition();
  const [generatedContent, setGeneratedContent] = useState('');
  const [hasCopied, setHasCopied] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      keywords: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    startTransition(async () => {
      const result = await generateAboutMeAction(values);
      if (result.success) {
        setGeneratedContent(result.data);
      } else {
        toast({
          variant: 'destructive',
          title: 'Generation Failed',
          description: result.error,
        });
      }
    });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedContent);
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  return (
    <Card className="bg-secondary/50 dark:bg-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="text-accent" />
          AI Content Assistant
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-sm text-muted-foreground">
          Stuck on what to write? Enter some keywords (e.g., "React developer,
          Fintech") to get a personalized "About Me" suggestion.
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="keywords"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Keywords or Industry</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., UI/UX, product design" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isPending} className="w-full">
              {isPending ? (
                <Loader2 className="animate-spin" />
              ) : (
                'Generate Content'
              )}
            </Button>
          </form>
        </Form>
        {generatedContent && (
          <div className="mt-6 relative">
            <h4 className="font-semibold mb-2">Generated Suggestion:</h4>
            <Textarea
              readOnly
              value={generatedContent}
              className="min-h-[150px] bg-background"
            />
            <Button
              size="icon"
              variant="ghost"
              onClick={handleCopy}
              className="absolute top-8 right-2"
              aria-label="Copy text"
            >
              {hasCopied ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
