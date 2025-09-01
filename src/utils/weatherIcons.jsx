import React from "react";
import {
  IoSunny,
  IoPartlySunny,
  IoCloudy,
  IoRainy,
  IoThunderstorm,
  IoSnow,
  IoMoon,
  IoCloudyNight,
} from "react-icons/io5";

export const getWeatherIcon = (weatherType, size = 100) => {
  if (!weatherType)
    return <IoSunny size={size} className="text-yellow-300 drop-shadow-lg" />;
  const type = weatherType.substring(0, 2);
  const isDay = weatherType.endsWith("d");

  const nightIconStyle = {
    filter: `drop-shadow(0 0 ${size / 8}px rgba(255, 255, 220, 0.7))`,
  };
  const nightCloudyIconStyle = {
    filter: `drop-shadow(0 0 ${size / 10}px rgba(209, 213, 219, 0.5))`,
  };
  const rainIconStyle = {
    filter: `drop-shadow(0 0 ${size / 8}px rgba(147, 197, 253, 0.5))`,
  };
  const stormIconStyle = {
    filter: `drop-shadow(0 0 ${size / 8}px rgba(250, 204, 21, 0.5))`,
  };

  switch (type) {
    case "01": // clear
      return isDay ? (
        <IoSunny size={size} className="text-yellow-300 drop-shadow-lg" />
      ) : (
        <IoMoon size={size} className="text-white" style={nightIconStyle} />
      );
    case "02": // few clouds
      return isDay ? (
        <IoPartlySunny size={size} className="text-yellow-300 drop-shadow-lg" />
      ) : (
        <IoCloudyNight
          size={size}
          className="text-gray-300"
          style={nightCloudyIconStyle}
        />
      );
    case "03": // scattered clouds
    case "04": // broken clouds
      return isDay ? (
        <IoCloudy size={size} className="text-gray-200 drop-shadow-lg" />
      ) : (
        <IoCloudy
          size={size}
          className="text-gray-300"
          style={nightCloudyIconStyle}
        />
      );
    case "09": // shower rain
    case "10": // rain
      return (
        <IoRainy size={size} className="text-blue-300" style={rainIconStyle} />
      );
    case "11": // thunderstorm
      return (
        <IoThunderstorm
          size={size}
          className="text-yellow-400"
          style={stormIconStyle}
        />
      );
    case "13": // snow
      return <IoSnow size={size} className="text-white drop-shadow-lg" />;
    case "50": // mist
      return <IoCloudy size={size} className="text-gray-200 drop-shadow-lg" />;
    default:
      return <IoSunny size={size} className="text-yellow-300 drop-shadow-lg" />;
  }
};
