import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import vercel from "@astrojs/vercel";
import tailwind from "@astrojs/tailwind";

const isVercel = Boolean(process.env.VERCEL || process.env.VERCEL_ENV || process.env.VERCEL_URL);

export default defineConfig({
  output: "server",
  adapter: isVercel ? vercel() : node({ mode: "standalone" }),
  integrations: [tailwind({ applyBaseStyles: false })]
});
