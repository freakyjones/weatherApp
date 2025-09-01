import React from "react";
import ForecastCard from "./ForecastCard";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const listVariants = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  hidden: { opacity: 0 },
};

export default function ForecastList({ forecast }) {
  const { classes } = useTheme();
  return (
    <motion.div variants={listVariants} className="mt-8 w-full">
      <h2 className={`${classes.h2} text-left`}>5-Day Forecast</h2>
      <div className={classes.forecastListContainer}>
        {forecast.map((day, index) => (
          <ForecastCard key={index} {...day} />
        ))}
      </div>
    </motion.div>
  );
}
