import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { ImagePlaceholder } from '@/lib/placeholder-images';

type NasaResourceCardProps = {
  title: string;
  description: string;
  link: string;
  image: ImagePlaceholder;
};

export function NasaResourceCard({ title, description, link, image }: NasaResourceCardProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="group block h-full">
      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-accent/50 bg-card flex flex-col">
        <div className="relative aspect-[3/2] w-full">
          <Image
            src={image.imageUrl}
            alt={image.description}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={image.imageHint}
          />
        </div>
        <div className="flex flex-col flex-grow">
          <CardHeader>
            <CardTitle className="flex items-start justify-between gap-4 font-headline">
              <span>{title}</span>
              <ExternalLink className="w-5 h-5 text-muted-foreground transition-colors group-hover:text-primary flex-shrink-0 mt-1" />
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <CardDescription>{description}</CardDescription>
          </CardContent>
        </div>
      </Card>
    </a>
  );
}
