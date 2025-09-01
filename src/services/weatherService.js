import axios from "axios";

const API_KEY = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;

if (!API_KEY) {
  throw new Error(
    "VITE_OPENWEATHERMAP_API_KEY is not set. Please add it to your .env.local file."
  );
}
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const getWeatherData = async (city) => {
  const { data } = await axios.get(`${BASE_URL}/weather`, {
    params: {
      q: city,
      appid: API_KEY,
      units: "metric",
    },
  });
  return data;
};

const getWeatherDataByCoords = async (lat, lon) => {
  const { data } = await axios.get(`${BASE_URL}/weather`, {
    params: {
      lat,
      lon,
      appid: API_KEY,
      units: "metric",
    },
  });
  return data;
};

const getForecastDataByCoords = async (lat, lon) => {
  const { data } = await axios.get(`${BASE_URL}/forecast`, {
    params: {
      lat,
      lon,
      appid: API_KEY,
      units: "metric",
    },
  });
  return data;
};

export { getWeatherData, getWeatherDataByCoords, getForecastDataByCoords };
