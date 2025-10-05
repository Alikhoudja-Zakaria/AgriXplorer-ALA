
import { NasaResourceCard } from '@/components/nasa-resource-card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Leaf, MapPin, BarChart3, BookOpen, BrainCircuit } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';

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

const missionSteps = [
    {
        icon: MapPin,
        title: "Meet the Farmer",
        description: "Learn where the farmer lives and see a satellite image of their land.",
    },
    {
        icon: BarChart3,
        title: "Study the Environment",
        description: "Examine real satellite images and data showing: Rainfall patterns, Vegetation density, Soil moisture, and Plant stress indicators.",
    },
    {
        icon: BookOpen,
        title: "Choose the Right Crop",
        description: "Open the Plant Catalog to see which plants grow best under different conditions. Match what you observe from the maps with the plant’s requirements.",
    },
];

const learningPoints = [
    "How to understand 'climate and geography",
    "How plants depend on soil, rainfall, and vegetation",
    "How to analyze satellite data and graphs like a real environmental scientist",
];


export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background font-body">
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
        <section id="game-placeholder" className="mb-12">
          <Card className="w-full h-80 flex items-center justify-center bg-card/50 backdrop-blur-sm animate-in fade-in-0 duration-500">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-primary">Game Coming Soon</h2>
              <p className="text-lg text-muted-foreground mt-2">Get ready for an exciting agricultural adventure!</p>
            </div>
          </Card>
        </section>

        <header className="text-center mb-12 animate-in fade-in-0 duration-500">
          <div className="flex justify-center items-center gap-4 mb-4">
            <Leaf className="w-10 h-10 md:w-12 md:h-12 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold font-headline text-foreground">
              AgriXplorer
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore the future of farming with the power of NASA data.
          </p>
        </header>

        <section id="game" className="mb-16">
            <Card className="w-full max-w-4xl mx-auto shadow-lg bg-card/50 backdrop-blur-sm animate-in fade-in-0 duration-700">
                <CardHeader className="text-center">
                    <CardTitle className="text-3xl font-bold font-headline text-primary">Become a Crop Advisor!</CardTitle>
                    <CardDescription className="text-lg max-w-3xl mx-auto">
                        In this game, you’re the expert helping farmers choose the best crops for their land. Each farmer lives in a different country and province, and they need your help to decide what to plant.
                        <br/><br/>
                        But here’s the challenge: the farmers don’t know the exact soil, rainfall, or vegetation conditions. You’ll have to analyze satellite maps and graphs to figure that out yourself!
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-12">
                    <div className="animate-in fade-in-0 slide-in-from-bottom-10 duration-700 delay-200">
                        <h3 className="text-2xl font-bold text-center mb-6 font-headline flex items-center justify-center gap-3">
                            <span className="text-accent">🧭</span> Your Mission
                        </h3>
                        <div className="grid md:grid-cols-3 gap-6 text-center">
                            {missionSteps.map((step) => (
                                <Card key={step.title} className="bg-background/70 transform hover:scale-105 transition-transform duration-300">
                                    <CardHeader>
                                        <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit">
                                            <step.icon className="w-8 h-8" />
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <h4 className="font-bold text-lg mb-2">{step.title}</h4>
                                        <p className="text-muted-foreground text-sm">{step.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                    
                    <div className="animate-in fade-in-0 slide-in-from-bottom-10 duration-700 delay-400">
                        <h3 className="text-2xl font-bold text-center mb-6 font-headline flex items-center justify-center gap-3">
                           <span className="text-accent">🌱</span> What You’ll Learn
                        </h3>
                        <Card className="bg-background/70 p-6">
                            <ul className="space-y-4">
                                {learningPoints.map((point) => (
                                    <li key={point} className="flex items-start gap-3">
                                        <BrainCircuit className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                        <span className="text-muted-foreground">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </div>
                </CardContent>
            </Card>
        </section>

        <section id="resources" className="animate-in fade-in-0 slide-in-from-bottom-10 duration-700 delay-600">
          <h2 className="text-3xl font-bold font-headline text-center mb-8 text-foreground">Explore NASA's Universe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nasaResources.map((resource) => (
              resource.image && <NasaResourceCard key={resource.title} {...resource} />
            ))}
          </div>
        </section>
      </main>

      <footer className="py-6 text-center text-muted-foreground text-sm">
        <p>&copy; {new Date().getFullYear()} AgriXplorer. All rights reserved.</p>
        <p className="opacity-75">Powered by NASA data and agricultural innovation.</p>
      </footer>
    </div>
  );
}
