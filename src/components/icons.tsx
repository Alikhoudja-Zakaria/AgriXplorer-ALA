import { type SVGProps } from "react";

export function AsteroidIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M13.2 9.5s-4.4-2-4.9-5.9c-.4-3.5 2.6-6.4 6-6 3.4.4 5.9 3.3 5.5 6.7-.4 3-2.9 5.2-4.9 5.2" />
      <path d="M10.2 14.1s-4.6-2.1-5-6.1C4.8 4.3 7.8 1.4 11.2 1c3.4-.4 6.4 2.5 6.8 5.9.4 3-2.1 5.4-4.1 5.4" />
      <path d="M19.7 12.2s-2.1-4.9-6.1-5.3c-3.7-.4-6.8 2.5-7.2 6.2-.4 3.2 2 5.8 4.2 5.8" />
      <path d="M12.8 21.6s-2-4.9-6-5.4c-3.7-.4-6.8 2.5-7.2 6.2-.4 3.7 2.1 6.5 4.3 6.5" />
    </svg>
  );
}
