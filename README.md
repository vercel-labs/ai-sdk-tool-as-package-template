# AI SDK Tool Package Template

A TypeScript package template for building and publishing AI SDK tools.

## Installation

```bash
npm install ai-sdk-tool-as-package-template
```

## Usage

```typescript
import { weatherTool } from "ai-sdk-tool-as-package-template";
import { generateText } from "ai";
import { openai } from "@ai-sdk/openai";

const result = await generateText({
  model: openai("gpt-4o-mini"),
  prompt: "What's the weather like?",
  tools: {
    weatherTool,
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
