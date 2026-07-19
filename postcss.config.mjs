// PostCSS configuration:
// Registers Tailwind CSS as a PostCSS plugin
// to process utility classes during the build process.
const config = {
  plugins: {
    // Tailwind CSS plugin:
    // Generates optimized CSS output from Tailwind utility classes.
    "@tailwindcss/postcss": {},
  },
};

export default config;
