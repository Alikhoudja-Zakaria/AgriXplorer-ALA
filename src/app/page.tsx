import { GameContainer } from '@/components/game-container';
import { NasaResourceCard } from '@/components/nasa-resource-card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Rocket } from 'lucide-react';

const nasaResources = [
  {
    title: "NASA Official Website",
    description: "Explore the latest news, images, and videos from America's space agency. Get the latest updates on missions, watch NASA TV live, and learn about our quest to reveal the unknown.",
    link: "https://www.nasa.gov/",
    image: PlaceHolderImages.find(p => p.id === 'nasa-resource-1')!,
  },
  {
    title: "NASA Science",
    description: "Delve into the scientific discoveries and research from NASA. From the deepest reaches of space to our own planet, explore the wonders of the universe.",
    link: "https://science.nasa.gov/",
    image: PlaceHolderImages.find(p => p.id === 'nasa-resource-2')!,
  },
  {
    title: "NASA Learning Resources",
    description: "A treasure trove of educational materials for students, educators, and families. Find activities, lesson plans, and more to engage with science, technology, engineering, and math.",
    link: "https://www.nasa.gov/learning-resources/",
    image: PlaceHolderImages.find(p => p.id === 'nasa-resource-3')!,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background font-body">
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
        <header className="text-center mb-12 animate-in fade-in-0 duration-500">
          <div className="flex justify-center items-center gap-4 mb-4">
            <Rocket className="w-10 h-10 md:w-12 md:h-12 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold font-headline text-foreground">
              Space Explorers Hub
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Embark on a cosmic journey! Play our mini-game and discover amazing resources from NASA.
          </p>
        </header>

        <section id="game" className="mb-16 animate-in fade-in-0 slide-in-from-bottom-10 duration-700 delay-200">
          <GameContainer />
        </section>

        <section id="game-description" className="text-center mb-16 animate-in fade-in-0 slide-in-from-bottom-10 duration-700 delay-300">
          <h2 className="text-3xl font-bold font-headline mb-4 text-foreground">Asteroid Field Navigator</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Test your reflexes in the Asteroid Field Navigator! Your mission is to click on as many passing asteroids as you can before time runs out. Each asteroid clicked scores a point. How high can you score?
          </p>
        </section>

        <section id="resources" className="animate-in fade-in-0 slide-in-from-bottom-10 duration-700 delay-400">
          <h2 className="text-3xl font-bold font-headline text-center mb-8 text-foreground">Explore NASA's Universe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nasaResources.map((resource) => (
              resource.image && <NasaResourceCard key={resource.title} {...resource} />
            ))}
          </div>
        </section>
      </main>

      <footer className="py-6 text-center text-muted-foreground text-sm">
        <p>&copy; {new Date().getFullYear()} Space Explorers Hub. All rights reserved.</p>
        <p className="opacity-75">Powered by cosmic dust and code.</p>
      </footer>
    </div>
  );
}
