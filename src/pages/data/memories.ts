export interface Memory {
  id: string;
  date: string;
  title: string;
  description: string;
  image: string; // Path to image in /public
  color: string; // Custom accent color for this memory
}
export const memories: Memory[] = [
  {
    id: "first-meet",
    date: "2023-02-14",
    title: "The Day Worlds Collided",
    description: "I didn't know it yet, but meeting you at that coffee shop changed everything...",
    // CHANGE THIS LINE BELOW:
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&q=80", 
    color: "from-pink-500 to-rose-500"
  },
  // ... other memories
];
  // Add more memories here...
