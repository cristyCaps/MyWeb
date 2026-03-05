import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind"; // This line was added

export default defineConfig({
  integrations: [tailwind()], // This line was added
});
