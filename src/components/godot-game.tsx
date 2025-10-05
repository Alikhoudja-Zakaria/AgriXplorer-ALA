
'use client';

export function GodotGame() {
  return (
    <div className="w-full aspect-[16/9] rounded-lg overflow-hidden shadow-lg border border-border bg-card">
      <iframe
        src="/game/nasa_space_app.html"
        className="w-full h-full border-0"
        title="AgriXplorer Godot Game"
        allow="cross-origin-isolated"
      ></iframe>
    </div>
  );
}
