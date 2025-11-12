import { gateway, generateText, stepCountIs } from "ai";
import { weatherTool } from "./index";

async function main() {
  const result = await generateText({
    model: gateway("openai/gpt-4o-mini"),
    prompt: "What's the weather like in San Francisco?",
    tools: {
      weatherTool,
    },
    stopWhen: stepCountIs(5),
  });

  console.log("Result:", result.text);
  console.dir(result.steps, { depth: null });
}

main().catch(console.error);
