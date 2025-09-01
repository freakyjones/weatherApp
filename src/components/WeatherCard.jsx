import React from "react";
import { motion } from "framer-motion";
import { getWeatherIcon } from "../utils/weatherIcons";
import { useTheme } from "../context/ThemeContext";

// Helper to get gradient class based on weather type
const getGradientClass = (weatherType, theme) => {
  const lightGradients = {
    "01": "from-sky-300 to-blue-400",
    "02": "from-sky-300 to-sky-500",
    "03": "from-gray-300 to-gray-500",
    "04": "from-gray-300 to-gray-500",
    "09": "from-slate-400 to-slate-600",
    10: "from-slate-400 to-slate-600",
    11: "from-gray-600 to-gray-800",
    13: "from-blue-100 to-blue-300",
    50: "from-gray-300 to-gray-400",
    default: "from-gray-200 to-gray-400",
  };

  const darkGradients = {
    "01d": "from-blue-400 to-blue-600",
    "01n": "from-indigo-800 to-gray-900",
    "02d": "from-sky-400 to-sky-600",
    "02n": "from-indigo-700 to-gray-800",
    "03": "from-gray-700 to-gray-900",
    "04": "from-gray-700 to-gray-900",
    "09": "from-slate-800 to-slate-900",
    10: "from-slate-800 to-slate-900",
    11: "from-gray-700 to-gray-900",
    13: "from-blue-200 to-blue-400",
    50: "from-gray-400 to-gray-500",
    default: "from-gray-400 to-gray-600",
  };

  if (!weatherType)
    return theme === "light" ? lightGradients.default : darkGradients.default;

  const type = weatherType.substring(0, 2);
  const isDay = weatherType.endsWith("d");

  if (theme === "dark") {
    const key = isDay ? `${type}d` : `${type}n`;
    return darkGradients[key] || darkGradients[type] || darkGradients.default;
  }
  return lightGradients[type] || lightGradients.default;
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function WeatherCard({
  city,
  temperature,
  condition,
  description,
  weatherType,
}) {
  const { classes, theme } = useTheme();

  return (
    <motion.div variants={cardVariants} className={classes.weatherCard}>
      {/* Background Gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${getGradientClass(
          weatherType,
          theme
        )}`}
      />

      {/* Glass Overlay */}
      <div className={classes.weatherCardGlassOverlay} />

      {/* Content */}
      <div className="relative p-6 sm:p-8 lg:p-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col items-center justify-between gap-8 sm:flex-row"
        >
          {/* Weather Info */}
          <div className="text-center sm:text-left mb-6 sm:mb-0">
            <h2
              className={`text-3xl font-bold sm:text-4xl lg:text-5xl mb-2 ${classes.weatherCardTextPrimary}`}
            >
              {city}
            </h2>
            <p
              className={`text-lg sm:text-xl lg:text-2xl mb-4 ${classes.weatherCardTextSecondary}`}
            >
              {condition}
            </p>
            <p
              className={`text-6xl font-light sm:text-7xl lg:text-8xl mb-2 ${classes.weatherCardTextPrimary}`}
            >
              {temperature}°
            </p>
            <p
              className={`text-base sm:text-lg ${classes.weatherCardTextTertiary}`}
            >
              {description}
            </p>
          </div>

          {/* Weather Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex-shrink-0"
          >
            {getWeatherIcon(weatherType, 128)}
          </motion.div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-4 right-4 opacity-20">
          <div
            className={`w-32 h-32 rounded-full border ${classes.weatherCardDecorator}`}
          />
        </div>
        <div className="absolute bottom-4 left-4 opacity-20">
          <div
            className={`w-16 h-16 rounded-full border ${classes.weatherCardDecorator}`}
          />
        </div>
      </div>
    </motion.div>
  );
}
