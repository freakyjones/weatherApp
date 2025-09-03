import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getOutfitSuggestion } from "../services/aiService";
import { useTheme } from "../context/ThemeContext";
import { IoShirtOutline, IoSparklesOutline } from "react-icons/io5";

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
        setLoading(false);
      } catch (err) {
        setError("Could not fetch outfit suggestion.");
        console.error(err);
        setLoading(false); // Also set loading to false on error
      }
    };

    fetchOutfit();
  }, [weather]);

  return (
    <motion.div
      variants={cardVariants}
      className={`${classes.cardBase} p-6 mt-8`}
    >
      <h2 className={`${classes.h2} text-left mb-4 flex items-center gap-2`}>
        <IoShirtOutline />
        Outfit Suggestion
      </h2>
      <div className={`p-4 rounded-lg ${classes.cardBase}`}>
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
              className={classes.errorTextAccent}
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
