import React from "react";
import { motion } from "framer-motion";
import { getWeatherIcon } from "../utils/weatherIcons";
import { useTheme } from "../context/ThemeContext";

const forecastCardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ForecastCard({ day, temp, icon }) {
  const { classes } = useTheme();
  return (
    <motion.div
      variants={forecastCardVariants}
      className={`${classes.cardBase} ${classes.forecastCard}`}
    >
      <p className="font-semibold text-base">{day}</p>
      <div className="my-1">{getWeatherIcon(icon, 40)}</div>
      <p className="text-2xl font-bold">{temp}°</p>
    </motion.div>
  );
}
