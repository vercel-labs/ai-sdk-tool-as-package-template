import { tool } from "ai";
import { z } from "zod";

type WeatherToolOptions = {
  unit?: "Fahrenheit" | "Celsius";
};

/**
 * Example weather tool for AI SDK
 * Replace this with your own tool implementation
 */
export const getWeather = ({ unit = "Celsius" }: WeatherToolOptions = {}) =>
  tool({
    description: "Get the current weather for a location",
    inputSchema: z.object({
      location: z
        .string()
        .describe("The city and state, e.g. San Francisco, CA"),
    }),
    execute: async ({ location }) => {
      // Replace with actual weather API call
      const temperature = unit === "Celsius" ? 22 : 72;
      return {
        location,
        temperature,
        unit,
        conditions: "sunny",
        description: `The weather in ${location} is sunny and ${temperature}°${unit}`,
      };
    },
  });
