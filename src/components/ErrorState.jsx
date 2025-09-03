import React from "react";
import { motion } from "framer-motion";
import {
  IoAlertCircle,
  IoRefresh,
  IoLocationSharp,
  IoSearch,
} from "react-icons/io5";
import Button from "./Button";
import { POPULAR_CITIES } from "../utils/constants";
import { useTheme } from "../context/ThemeContext";

export function ErrorState({
  searchedCity,
  onRetry,
  onUseLocation,
  onClearSearch,
  onCitySelect,
}) {
  const { classes } = useTheme();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={classes.stateContainer}
    >
      {/* Error Icon with Animation */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="relative mb-8"
      >
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, -10, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative"
        >
          <div
            className={`w-24 h-24 ${classes.errorIconBg} rounded-full flex items-center justify-center`}
          >
            <IoAlertCircle className={`h-12 w-12 ${classes.errorIcon}`} />
          </div>
        </motion.div>
      </motion.div>

      {/* Error Message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-8 max-w-lg"
      >
        <h2 className={classes.h2}>City Not Found</h2>
        <p className={classes.pLarge}>
          We couldn't find weather data for
          <span className={classes.errorTextAccent}>"{searchedCity}"</span>
        </p>
        <p className={classes.pBase}>
          Please check the spelling or try searching for a different city.
        </p>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="flex flex-col sm:flex-row gap-4 mb-8"
      >
        <Button
          onClick={onRetry}
          className={`${classes.buttonBase} ${classes.buttonPrimary}`}
        >
          <IoRefresh className="h-4 w-4" />
          Try Again
        </Button>

        <Button
          onClick={onUseLocation}
          className={`${classes.buttonBase} ${classes.buttonSecondary}`}
        >
          <IoLocationSharp className="h-4 w-4" />
          Use My Location
        </Button>

        <Button
          onClick={onClearSearch}
          className={`${classes.buttonBase} ${classes.buttonTertiary}`}
        >
          <IoSearch className="h-4 w-4" />
          Clear Search
        </Button>
      </motion.div>

      {/* Available Cities Suggestions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="w-full max-w-2xl"
      >
        <div className={classes.errorStateSuggestionBox}>
          <div className="text-center mb-4">
            <h3 className={classes.h3}>Available Cities</h3>
            <p className={classes.errorSuggestionText}>
              Try searching for one of these popular destinations:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {POPULAR_CITIES.map((city, index) => (
              <motion.button
                key={city}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.3 }}
                onClick={() => onCitySelect(city)}
                className={`${classes.errorStateSuggestionButton} min-w-0`}
              >
                <span className="font-medium truncate">{city}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
