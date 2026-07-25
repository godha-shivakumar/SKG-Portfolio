import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

// ESLint configuration:
// Combines Next.js recommended rules with TypeScript support
// to maintain code quality, consistency, and best practices.
const eslintConfig = defineConfig([
  // Core Web Vitals rules:
  // Helps enforce Next.js performance and accessibility guidelines.
  ...nextVitals,

  // TypeScript rules:
  // Adds TypeScript-specific linting support.
  ...nextTs,

  // Custom ignore configuration:
  // Excludes generated files and build outputs
  // that should not be linted.
  globalIgnores([
    // Default Next.js generated files:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
