import React from "react";
import { motion } from "framer-motion";
import {
  IoWaterOutline,
  IoSpeedometerOutline,
  IoCompassOutline,
  IoEyeOutline,
  IoThermometerOutline,
} from "react-icons/io5";
import { useTheme } from "../context/ThemeContext";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const DetailItem = ({ icon, label, value, unit }) => {
  const { classes } = useTheme();
  return (
    <div className={`${classes.cardBase} ${classes.detailItem}`}>
      <div className={classes.detailItemIcon}>{icon}</div>
      <p className={classes.weatherCardTextPrimary}>
        {value}
        <span className={classes.detailItemValueUnit}>{unit}</span>
      </p>
      <p className={classes.detailItemLabel}>{label}</p>
    </div>
  );
};

const WeatherDetailsCard = ({
  humidity,
  windSpeed,
  pressure,
  visibility,
  feelsLike,
}) => {
  const { classes } = useTheme();
  const details = [
    {
      icon: <IoWaterOutline size={28} />,
      label: "Humidity",
      value: humidity,
      unit: "%",
    },
    {
      icon: <IoSpeedometerOutline size={28} />,
      label: "Wind Speed",
      value: windSpeed,
      unit: "km/h",
    },
    {
      icon: <IoCompassOutline size={28} />,
      label: "Pressure",
      value: pressure,
      unit: "hPa",
    },
    {
      icon: <IoEyeOutline size={28} />,
      label: "Visibility",
      value: visibility,
      unit: "km",
    },
    {
      icon: <IoThermometerOutline size={28} />,
      label: "Feels Like",
      value: feelsLike,
      unit: "°C",
    },
  ];

  return (
    <motion.div variants={cardVariants}>
      <h2 className={`${classes.h2} text-left`}>Weather Details</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {details.map((item, index) => (
          <DetailItem key={index} {...item} />
        ))}
      </div>
    </motion.div>
  );
};

export default WeatherDetailsCard;
