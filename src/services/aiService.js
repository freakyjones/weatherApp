import axios from "axios";

/**
 * Fetches an outfit suggestion from the serverless API.
 * @param {{temp: number, condition: string, wind: number, humidity: number}} weatherData
 * @returns {Promise<string>} The outfit suggestion.
 */
export async function getOutfitSuggestion({ temp, condition, wind, humidity }) {
  try {
    const currentHour = new Date().getHours();
    const params = {
      temp: Math.round(temp),
      condition,
      wind: Math.round(wind * 3.6), // m/s to km/h
      humidity,
      hour: currentHour,
    };
    const response = await axios.get("/api/outfit", {
      params,
    });
    return response.data.outfit;
  } catch (error) {
    console.error("Error fetching outfit suggestion:", error);
    // Pass the specific error message from the server if it exists
    const message =
      error.response?.data?.error || "Failed to get outfit suggestion.";
    throw new Error(message);
  }
}
