import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify";

const isProd = import.meta.env.PROD;

const SERVE_NETLIFY = {
  output: "server",
  adapter: netlify(),
};

const SERVE_AMPLIFY = {};

const config = isProd ? SERVE_AMPLIFY : SERVE_NETLIFY;

// https://astro.build/config
export default defineConfig(config);

console.log(config);
