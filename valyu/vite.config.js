import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { storyblokInit, apiPlugin } from "@storyblok/react";

// Optional: Storyblok live preview
export default defineConfig({
  plugins: [react()],
  base: '/valyu-logistics/'
})
