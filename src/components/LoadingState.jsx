import React from "react";
import { motion } from "framer-motion";
import { IoCloudy, IoSunny, IoRainy, IoLeafOutline } from "react-icons/io5";
import { useTheme } from "../context/ThemeContext";

export function LoadingState() {
  const { classes } = useTheme();

  return (
    <div className={`${classes.stateContainer} min-h-[60vh] overflow-hidden`}>
      {/* Animated Weather Icons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative mb-8"
      >
        {/* Central Cloud */}
        <motion.div
          animate={{
            y: [0, -15, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative z-10"
        >
          <IoCloudy className={classes.loadingIconPrimary} />
        </motion.div>

        {/* Rotating Sun */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            rotate: { duration: 4, repeat: Infinity, ease: "linear" },
            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute -top-4 -right-4"
        >
          <IoSunny className={classes.loadingIconAccent} />
        </motion.div>

        {/* Animated Rain */}
        <motion.div
          animate={{
            y: [0, 25, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-6 left-2"
        >
          <IoRainy className={classes.loadingIconSecondary} />
        </motion.div>

        {/* Floating particles (Wind) */}
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute -top-2 -left-6"
        >
          <IoLeafOutline className={classes.loadingIconMuted} />
        </motion.div>
      </motion.div>

      {/* Loading Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-8"
      >
        <motion.h2
          animate={{
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={classes.loadingTextPrimary}
        >
          Getting Weather Data
        </motion.h2>
        <motion.p
          animate={{
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className={classes.loadingTextSecondary}
        >
          Please wait while we fetch the latest weather information...
        </motion.p>
      </motion.div>
    </div>
  );
}
