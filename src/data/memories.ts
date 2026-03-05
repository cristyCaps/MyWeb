export interface Memory {
  id: string;
  date: string;
  title: string;
  description: string;
  image: string;
  color: string;
}

export const memories: Memory[] = [
  {
    id: "first-meet",
    date: "2023-02-14",
    title: "The Day Worlds Collided",
    description: "I didn't know it yet, but meeting you changed everything...",
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&q=80",
    color: "from-pink-500 to-rose-500"
  }
];