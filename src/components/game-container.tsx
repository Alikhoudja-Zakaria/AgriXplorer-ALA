"use client";

import { useState, useEffect, useCallback, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { AsteroidIcon } from '@/components/icons';
import { Award, Play, RefreshCw, TimerIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

type Asteroid = {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
};

type GameState = 'idle' | 'playing' | 'over';

const GAME_DURATION = 30; // in seconds

export function GameContainer() {
  const [gameState, setGameState] = useState<GameState>('idle');
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [asteroids, setAsteroids] = useState<Asteroid[]>([]);
  const gameAreaRef = useRef<HTMLDivElement>(null);
  const gameLoopRef = useRef<NodeJS.Timeout>();
  const asteroidIdRef = useRef(0);

  const resetGame = useCallback(() => {
    setGameState('playing');
    setScore(0);
    setTimeLeft(GAME_DURATION);
    setAsteroids([]);
    asteroidIdRef.current = 0;
  }, []);

  const spawnAsteroid = useCallback(() => {
    if (!gameAreaRef.current) return;
    const { width, height } = gameAreaRef.current.getBoundingClientRect();
    const size = Math.random() * 30 + 20; // 20px to 50px
    const speed = Math.random() * 2 + 1; // 1 to 3
    const newAsteroid: Asteroid = {
      id: asteroidIdRef.current++,
      x: -size, // Start off-screen to the left
      y: Math.random() * (height - size),
      size: size,
      speed: speed,
    };
    setAsteroids((prev) => [...prev, newAsteroid]);
  }, []);

  const handleAsteroidClick = (id: number) => {
    if (gameState !== 'playing') return;
    setAsteroids((prev) => prev.filter((asteroid) => asteroid.id !== id));
    setScore((prev) => prev + 1);
  };

  useEffect(() => {
    if (gameState === 'playing') {
      gameLoopRef.current = setInterval(() => {
        // Game Timer
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setGameState('over');
            return 0;
          }
          return prev - 1;
        });

        // Move Asteroids
        setAsteroids((prev) =>
          prev
            .map((a) => ({ ...a, x: a.x + a.speed }))
            .filter((a) => gameAreaRef.current && a.x < gameAreaRef.current.getBoundingClientRect().width)
        );

        // Spawn new asteroids
        if (Math.random() < 0.2) { // 20% chance to spawn each second
          spawnAsteroid();
        }
      }, 1000);
    }

    return () => {
      if (gameLoopRef.current) {
        clearInterval(gameLoopRef.current);
      }
    };
  }, [gameState, spawnAsteroid]);

  const GameOverlay = () => {
    if (gameState === 'idle') {
      return (
        <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center z-20 backdrop-blur-sm">
          <h3 className="text-4xl font-bold text-white mb-4">Asteroid Field Navigator</h3>
          <Button size="lg" onClick={resetGame}>
            <Play className="mr-2 h-5 w-5" /> Start Game
          </Button>
        </div>
      );
    }
    if (gameState === 'over') {
      return (
        <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center z-20 backdrop-blur-sm">
          <h3 className="text-5xl font-bold text-white mb-2">Game Over</h3>
          <p className="text-2xl text-gray-300 mb-6">Your final score: {score}</p>
          <Button size="lg" onClick={resetGame}>
            <RefreshCw className="mr-2 h-5 w-5" /> Play Again
          </Button>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-2xl">
      <div
        ref={gameAreaRef}
        className="relative w-full aspect-[2/1] bg-black overflow-hidden rounded-t-lg select-none"
        style={{
          cursor: gameState === 'playing' ? 'crosshair' : 'default',
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
          backgroundSize: '2rem 2rem',
        }}
      >
        <GameOverlay />
        {asteroids.map((asteroid) => (
          <button
            key={asteroid.id}
            className="absolute transition-all duration-1000 linear animate-spin-slow focus:outline-none"
            style={{
              left: `${asteroid.x}px`,
              top: `${asteroid.y}px`,
              width: `${asteroid.size}px`,
              height: `${asteroid.size}px`,
            }}
            onClick={() => handleAsteroidClick(asteroid.id)}
            aria-label="Clickable asteroid"
          >
            <AsteroidIcon className="w-full h-full text-gray-400 hover:text-accent transition-colors" />
          </button>
        ))}
      </div>
      <div className="bg-muted/50 p-4 rounded-b-lg flex justify-between items-center text-foreground font-semibold">
        <div className="flex items-center gap-2">
          <Award className="h-6 w-6 text-primary" />
          <span className="text-xl">Score: {score}</span>
        </div>
        <div className="flex items-center gap-2">
          <TimerIcon className="h-6 w-6 text-primary" />
          <span className="text-xl">Time: {timeLeft}s</span>
        </div>
      </div>
    </Card>
  );
}
