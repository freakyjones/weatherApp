export function processForecastData(list) {
  if (!list) return [];
  const dailyData = {};

  // Group forecast items by date
  list.forEach((item) => {
    const date = item.dt_txt.split(" ")[0]; // Get YYYY-MM-DD part
    if (!dailyData[date]) {
      dailyData[date] = {
        temps: [],
        icons: [],
      };
    }
    dailyData[date].temps.push(item.main.temp);
    dailyData[date].icons.push(item.weather[0].icon);
  });

  // Process each day to get max temp and representative icon
  const today = new Date().toISOString().split("T")[0];
  return Object.entries(dailyData)
    .filter(([date]) => date > today) // Exclude today's forecast
    .slice(0, 5) // Take the next 5 days
    .map(([date, data]) => {
      const dayOfWeek = new Date(date).toLocaleDateString("en-US", {
        weekday: "short",
      });
      const maxTemp = Math.round(Math.max(...data.temps));
      const minTemp = Math.round(Math.min(...data.temps));

      // Find the most frequent icon for the day to represent daily weather
      const iconCounts = data.icons.reduce((acc, icon) => {
        // We only care about the "day" part of the icon code (e.g., '01d' vs '01n')
        const dayIcon = icon.substring(0, 2) + "d";
        acc[dayIcon] = (acc[dayIcon] || 0) + 1;
        return acc;
      }, {});

      const mostFrequentIcon = Object.keys(iconCounts).reduce((a, b) =>
        iconCounts[a] > iconCounts[b] ? a : b
      );

      return {
        day: dayOfWeek,
        temp: maxTemp,
        minTemp,
        icon: mostFrequentIcon,
      };
    });
}
