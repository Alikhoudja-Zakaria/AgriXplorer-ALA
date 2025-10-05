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
        <CardContent>
            <div className="aspect-video w-full rounded-lg overflow-hidden border">
                <iframe
                    frameBorder="0"
                    src="https://itch.io/embed/3936170?bg_color=120_25%_8%&amp;fg_color=e0e0e0&amp;link_color=83c363&amp;border_color=120_25%_8%"
                    className="w-full h-full"
                    allowFullScreen
                >
                    <a href="https://the-true-unknown-coder.itch.io/agrixplorers">AGRIXPLORERS by The True Unknown Coder</a>
                </iframe>
            </div>
        </CardContent>
    </Card>
  );
}
