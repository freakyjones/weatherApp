import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getOutfitSuggestion } from "../services/aiService";
import { useTheme } from "../context/ThemeContext";
import { IoShirtOutline, IoSparklesOutline } from "react-icons/io5";

const getBackgroundColor = (temp) => {
  if (temp > 30) return "bg-red-400/10 dark:bg-red-800/20";
  if (temp > 20) return "bg-orange-400/10 dark:bg-orange-800/20";
  if (temp > 10) return "bg-sky-400/10 dark:bg-sky-800/20";
  return "bg-blue-400/10 dark:bg-blue-800/20";
};

const getTextColor = (temp) => {
  if (temp > 30) return "text-red-800 dark:text-red-200";
  if (temp > 20) return "text-orange-800 dark:text-orange-200";
  if (temp > 10) return "text-sky-800 dark:text-sky-200";
  return "text-blue-800 dark:text-blue-200";
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function OutfitSuggestionCard({ weather }) {
  const { classes } = useTheme();
  const [outfit, setOutfit] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!weather) return;

    const fetchOutfit = async () => {
      setLoading(true);
      setError(null);
      try {
        const suggestion = await getOutfitSuggestion({
          temp: weather.main.temp,
          condition: weather.weather[0].main,
          wind: weather.wind.speed,
          humidity: weather.main.humidity,
        });
        setOutfit(suggestion);
      } catch (err) {
        setError("Could not fetch outfit suggestion.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchOutfit();
  }, [weather]);

  const bgColor = getBackgroundColor(weather.main.temp);
  const textColor = getTextColor(weather.main.temp);

  return (
    <motion.div
      variants={cardVariants}
      className={`${classes.cardBase} p-6 mt-8`}
    >
      <h2 className={`${classes.h2} text-left mb-4 flex items-center gap-2`}>
        <IoShirtOutline />
        Outfit Suggestion
      </h2>
      <div className={`p-4 rounded-lg ${bgColor} ${textColor}`}>
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-3"
            >
              <IoSparklesOutline className="animate-pulse" />
              <span>Thinking of the perfect outfit for you...</span>
            </motion.div>
          ) : error ? (
            <motion.div
              key="error"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-red-500"
            >
              {error}
            </motion.div>
          ) : (
            <motion.p
              key="outfit"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {outfit} 👕
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
