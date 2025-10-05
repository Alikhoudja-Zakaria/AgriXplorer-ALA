'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export function GodotGame() {
  return (
    <Card className="w-full max-w-5xl mx-auto shadow-2xl overflow-hidden bg-card/30 backdrop-blur-xl">
        <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold font-headline text-primary">Play AgriXplorers</CardTitle>
            <CardDescription>
                Dive in and help farmers around the world make the best decisions for their land!
            </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
            <div className="aspect-video w-full">
                <iframe
                    frameBorder="0"
                    src="https://itch.io/embed-upload/10853109?bg_color=12251c"
                    className="w-full h-full"
                    allowFullScreen
                >
                </iframe>
            </div>
        </CardContent>
    </Card>
  );
}
