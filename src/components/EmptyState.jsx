import React from "react";
import { motion } from "framer-motion";
import {
  IoCloudy,
  IoSunny,
  IoRainy,
  IoLocationSharp,
  IoSearch,
} from "react-icons/io5";
import { POPULAR_CITIES } from "../utils/constants";
import Button from "./Button";
import { useTheme } from "../context/ThemeContext";

export function EmptyState({ onUseLocation, onCitySelect }) {
  const { classes } = useTheme();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`${classes.stateContainer} min-h-[60vh]`}
    >
      {/* Animated Weather Icons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="relative mb-8"
      >
        {/* Main Cloud */}
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, 2, -2, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative"
        >
          <IoCloudy className={`h-24 w-24 ${classes.emptyStateIconPrimary}`} />
        </motion.div>

        {/* Sun behind cloud */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 360],
          }}
          transition={{
            scale: { duration: 3, repeat: Infinity },
            rotate: { duration: 8, repeat: Infinity, ease: "linear" },
          }}
          className="absolute -top-2 -right-2"
        >
          <IoSunny className={`h-12 w-12 ${classes.emptyStateIconAccent}`} />
        </motion.div>

        {/* Rain drops */}
        <motion.div
          animate={{
            y: [0, 20, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 1,
          }}
          className="absolute -bottom-4 left-2"
        >
          <IoRainy className={`h-8 w-8 ${classes.emptyStateIconSecondary}`} />
        </motion.div>
      </motion.div>

      {/* Main Message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mb-8 text-center"
      >
        <h2 className={classes.h2}>Welcome to WeatherApp</h2>
        <p className={`${classes.pLarge} max-w-md`}>
          Get instant weather updates for any city around the world
        </p>
        <p className={`${classes.pBase} max-w-md`}>
          Start by searching for a city or use your current location
        </p>
      </motion.div>

      {/* Search Suggestions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mb-8 text-center"
      >
        <p className={`${classes.pBase} text-sm mb-4`}>
          Try searching for popular cities:
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {POPULAR_CITIES.map((city, index) => (
            <motion.button
              key={city}
              onClick={() => onCitySelect(city)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + index * 0.1, duration: 0.3 }}
              className={classes.emptyStateSuggestionButton}
            >
              {city}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="flex flex-col sm:flex-row gap-4 items-center"
      >
        <Button
          onClick={onUseLocation}
          className={`${classes.buttonBase} ${classes.buttonPrimary}`}
        >
          <IoLocationSharp className="h-5 w-5" />
          Use My Location
        </Button>

        <p className={`${classes.textMuted} text-sm`}>
          or search for a city above
        </p>
      </motion.div>
    </motion.div>
  );
}
