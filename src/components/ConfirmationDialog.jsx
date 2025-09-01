import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const ConfirmationDialog = ({ city, onConfirm, onCancel }) => {
  if (!city) return null;
  const { classes } = useTheme();

  return (
    <div
      className={classes.dialogOverlay}
      onClick={onCancel}
      role="dialog"
      aria-modal="true"
      aria-labelledby="dialog-title"
    >
      <motion.div
        className={classes.dialogPanel}
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <h3 id="dialog-title" className={classes.dialogTitle}>
          Confirm Deletion
        </h3>
        <p className={classes.dialogText}>
          Are you sure you want to remove{" "}
          <span className={classes.dialogCity}>{city}</span>?
        </p>
        <div className="flex justify-center gap-4">
          <button onClick={onCancel} className={classes.dialogButtonCancel}>
            Cancel
          </button>
          <button onClick={onConfirm} className={classes.dialogButtonConfirm}>
            Confirm
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ConfirmationDialog;
