import React, { useState, useMemo, useCallback } from "react";
import WeatherCard from "./components/WeatherCard";
import Navbar from "./components/Navbar";
import ForecastList from "./components/ForecastList";
import WeatherDetailsCard from "./components/WeatherDetailsCard";
import { ErrorState } from "./components/ErrorState";
import OutfitSuggestionCard from "./components/OutfitSuggestionCard";
import { EmptyState } from "./components/EmptyState";
import { LoadingState } from "./components/LoadingState";
import { AnimatePresence, motion } from "framer-motion";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { useTheme } from "./context/ThemeContext";
import {
  getWeatherData,
  getWeatherDataByCoords,
  getForecastDataByCoords,
} from "./services/weatherService";
import { processForecastData } from "./utils/forecastUtils";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [lastAction, setLastAction] = useState(null);
  const { theme, toggleTheme, classes } = useTheme();

  const fetchData = useCallback(async (fetcher, identifier) => {
    setLoading(true);
    setError(null);
    setWeatherData(null);
    setForecastData(null);
    setSearchTerm(identifier);

    try {
      const weather = await fetcher();
      setWeatherData(weather);
      setSearchTerm(weather.name);

      const forecast = await getForecastDataByCoords(
        weather.coord.lat,
        weather.coord.lon
      );
      setForecastData(forecast);
    } catch (err) {
      console.error("Error fetching weather data:", err);
      const message =
        err.response?.data?.message ||
        "Could not fetch weather data. Please try again.";
      setError(message);
      setWeatherData(null);
      setForecastData(null);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleSearch = (city) => {
    if (city) {
      const action = () => fetchData(() => getWeatherData(city), city);
      setLastAction(() => action);
      action();
    }
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    setWeatherData(null);
    setForecastData(null);
    setError(null);
    setLastAction(null);
  };

  const handleRetry = () => {
    if (lastAction) {
      lastAction();
    }
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const action = () =>
            fetchData(
              () => getWeatherDataByCoords(latitude, longitude),
              "Current Location"
            );
          setLastAction(() => action);
          action();
        },
        (err) => {
          setError(`Geolocation error: ${err.message}`);
          setLoading(false);
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
    }
  };

  const processedForecast = useMemo(
    () => processForecastData(forecastData?.list),
    [forecastData]
  );

  return (
    <div className={classes.pageContainer}>
      <Navbar
        onToggleDark={toggleTheme}
        isDark={theme === "dark"}
        searchProps={{
          onSearch: handleSearch,
          onLocationClick: handleLocationClick,
          loading,
          searchTerm,
        }}
      />

      <main className={classes.mainContent}>
        <div className="w-full max-w-md space-y-8 sm:max-w-xl lg:max-w-4xl">
          <div className="w-full">
            <AnimatePresence mode="wait">
              {loading && (
                <motion.div key="loader" exit={{ opacity: 0 }}>
                  <LoadingState />
                </motion.div>
              )}
              {!loading && error && (
                <motion.div key="error-state">
                  <ErrorState
                    searchedCity={searchTerm}
                    onRetry={handleRetry}
                    onUseLocation={handleLocationClick}
                    onClearSearch={handleClearSearch}
                    onCitySelect={handleSearch}
                  />
                </motion.div>
              )}
              {!loading && !error && !weatherData && (
                <motion.div key="empty-state">
                  <EmptyState
                    onUseLocation={handleLocationClick}
                    onCitySelect={handleSearch}
                  />
                </motion.div>
              )}
              {!loading && !error && weatherData && (
                <motion.div
                  key={weatherData.id}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={{
                    visible: { transition: { staggerChildren: 0.2 } },
                  }}
                >
                  <WeatherCard
                    city={weatherData.name}
                    temperature={Math.round(weatherData.main.temp)}
                    condition={weatherData.weather[0].main}
                    description={weatherData.weather[0].description}
                    weatherType={weatherData.weather[0].icon}
                  />
                  {forecastData && (
                    <ForecastList forecast={processedForecast} />
                  )}
                  <OutfitSuggestionCard weather={weatherData} />
                  {weatherData && (
                    <div className={classes.weatherDetailsCardContainer}>
                      <WeatherDetailsCard
                        humidity={weatherData.main.humidity}
                        windSpeed={Math.round(weatherData.wind.speed * 3.6)}
                        pressure={weatherData.main.pressure}
                        visibility={weatherData.visibility / 1000}
                        feelsLike={Math.round(weatherData.main.feels_like)}
                      />
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className={classes.footer}>
        Made by <span className={classes.footerLink}>Freaky Jones</span> 🚀 with
        Gemini Code Assist
      </footer>
      <SpeedInsights />
    </div>
  );
}

export default App;
