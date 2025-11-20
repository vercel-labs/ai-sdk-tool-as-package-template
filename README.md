# AI SDK Tool Package Template

A TypeScript package template for building and publishing AI SDK tools.

## Installation

```bash
npm install ai-sdk-tool-as-package-template
```

## Usage

```typescript
import { getWeather } from "ai-sdk-tool-as-package-template";
import { generateText, gateway } from "ai";

const result = await generateText({
  model: gateway("openai/gpt-4o-mini"),
  prompt: "What's the weather like in San Francisco?",
  tools: {
    getWeather: getWeather({ unit: "Celsius" }),
  },
});
```

### Options

The `getWeather` tool accepts an optional configuration object:

```typescript
type WeatherToolOptions = {
  unit?: "Fahrenheit" | "Celsius";
};
```

**Example with Fahrenheit:**

```typescript
const result = await generateText({
  model: gateway("openai/gpt-4o-mini"),
  prompt: "What's the weather like in San Francisco?",
  tools: {
    getWeather: getWeather({ unit: "Fahrenheit" }),
  },
});
```

## Development

### Setup

1. Clone the repository
2. Install dependencies:

```bash
pnpm install
```

3. Create a `.env` file:

```bash
cp .env.example .env
```

4. Add your Vercel AI Gateway (or other preferred provider) API key to `.env`

### Testing

Test your tool locally:

```bash
pnpm test
```

### Building

Build the package:

```bash
pnpm build
```

### Publishing

Before publishing, update the package name in `package.json` to your desired package name.

The package automatically builds before publishing:

```bash
pnpm publish
```

## Project structure

```
.
├── src/
│   ├── index.ts      # Your tool exports
│   └── test.ts       # Test script
├── dist/             # Build output (generated)
├── package.json
├── tsconfig.json
└── README.md
```

## License

MIT
