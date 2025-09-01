import React from "react";
import { IoSunny, IoMoon } from "react-icons/io5";
import SearchBar from "./SearchBar";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export default function Navbar({ onToggleDark, isDark, searchProps }) {
  const { classes } = useTheme();
  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarContent}>
        <div className={classes.navbarFlex}>
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className={classes.navbarLogo}>WeatherApp</h1>
          </div>

          {/* Search Bar */}
          <div className="mx-4 flex-1 max-w-md sm:mx-8">
            <SearchBar {...searchProps} />
          </div>

          {/* Dark Mode Toggle */}
          <div className="flex-shrink-0">
            <button
              onClick={onToggleDark}
              className={classes.themeToggleButton}
              aria-label="Toggle dark mode"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isDark ? "sun" : "moon"}
                  initial={{ y: -20, opacity: 0, rotate: -90 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: 20, opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {isDark ? (
                    <IoSunny className="h-5 w-5" />
                  ) : (
                    <IoMoon className="h-5 w-5" />
                  )}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
