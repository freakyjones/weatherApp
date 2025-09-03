// Vercel Serverless Function using Google Gemini Flash
import { GoogleGenerativeAI } from "@google/generative-ai"; // Correct import for Node.js

/**
 * Vercel Serverless Function to generate an outfit suggestion.
 * @param {import('@vercel/node').VercelRequest} req The request object.
 * @param {import('@vercel/node').VercelResponse} res The response object.
 */

// Define temperature thresholds for clarity
const TEMP_COLD = 10;
const TEMP_COOL = 20;
const TEMP_WARM = 30;

export default async function handler(req, res) {
  // Extract weather data from query parameters
  const { temp, condition, wind = "0", humidity = "50", hour } = req.query;

  if (!temp || !condition) {
    return res
      .status(400)
      .json({ error: "Missing required weather parameters." });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error("GEMINI_API_KEY is not set in environment variables.");
    // Use fallback directly if API key is missing
    return sendFallbackResponse(res, temp);
  }

  const timeOfDay =
    hour && hour >= 5 && hour < 18 ? "daytime" : "evening/night";

  const prompt = `
    You are a helpful and stylish AI outfit recommender.
    Your tone should be encouraging, friendly, and fashionable, but avoid overly familiar terms like "girl" or "darling".
    Based on the following weather conditions, suggest a concise outfit.
    - Time of day: ${timeOfDay}
    - Temperature: ${temp}°C
    - Condition: ${condition}
    - Wind: ${wind} km/h
    - Humidity: ${humidity}%
    Keep the suggestion to one or two short sentences. Be creative!
    Example: "A bit brisk out there! A cozy sweater and your favorite jeans would be perfect. Maybe add a beanie to complete the look."
  `;

  try {
    // Initialize the Gemini client with the API key from environment variables
    const genAI = new GoogleGenerativeAI(apiKey);
    // Use the lightweight and fast "flash" model
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(prompt);
    const outfit = result.response.text().trim();

    return res.status(200).json({ outfit });
  } catch (err) {
    // If the Gemini API call fails (e.g., quota exceeded, network error),
    // provide a fallback suggestion based on simple rules.
    console.error(
      "Gemini API call failed, using fallback. Error:",
      err.message || err
    );
    return sendFallbackResponse(res, temp);
  }
}

/**
 * Generates and sends a fallback outfit suggestion based on temperature.
 * @param {import('@vercel/node').VercelResponse} res The response object.
 * @param {string} temp The temperature string from the query.
 */
function sendFallbackResponse(res, temp) {
  let fallbackOutfit = "A t-shirt and jeans are a good choice for today."; // Default suggestion
  const numericTemp = parseFloat(temp);

  if (!isNaN(numericTemp)) {
    if (numericTemp < TEMP_COLD) {
      fallbackOutfit =
        "It’s quite chilly! 🥶 A warm coat, scarf, and boots are a must.";
    } else if (numericTemp < TEMP_COOL) {
      fallbackOutfit =
        "Mild weather today. A light jacket or hoodie with jeans should be perfect. 🌤️";
    } else if (numericTemp < TEMP_WARM) {
      fallbackOutfit =
        "It's a beautiful, warm day! A t-shirt and shorts would be very comfortable. ☀️";
    } else {
      fallbackOutfit =
        "It's hot out there! 🔥 Go for a tank top, shorts, and don't forget your sunglasses.";
    }
  }

  // Respond with the fallback outfit.
  // We send a 200 OK status because the app can handle this "successful" fallback.
  return res
    .status(200)
    .json({ outfit: fallbackOutfit, note: "Using fallback suggestion." });
}
