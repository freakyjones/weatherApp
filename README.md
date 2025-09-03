# 🌦️ WeatherApp

A sleek, responsive weather application built with **React** and **Tailwind CSS**, providing real-time weather data and a beautiful user experience.

---

## ✨ Key Features

- **Real-time Weather Data:** Instantly fetch current weather conditions for any city worldwide using the OpenWeather API.
- **5-Day Forecast:** Plan ahead with a detailed 5-day weather forecast.
- **AI-Powered Outfit Suggestions:** Get clothing recommendations based on the current weather.
- **Dynamic & Responsive UI:** A clean, modern interface that adapts beautifully to mobile, tablet, and desktop screens.
- **Engaging User Experience:** Smooth animations powered by Framer Motion and a dynamic, weather-based theme with a dark/light mode toggle.
- **Geolocation Support:** Get weather updates for your current location with a single click.

---

## 🛠️ Tech Stack

- **Frontend:** React, Tailwind CSS
- **Animations:** Framer Motion
- **APIs:** OpenWeather API, OpenAI API
- **Build Tool:** Vite

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v18 or higher)
- An API key from [OpenWeather](https://openweathermap.org/api)
- An API key from [OpenAI](https://platform.openai.com/api-keys)

### Installation

1.  Clone the repository:
    ```sh
    git clone https://github.com/your-username/weather-app.git # Replace with your repo URL
    ```
2.  Install NPM packages:
    ```sh
    npm install openai
    ```
3.  Create a `.env` file in the root of your project and add your API keys:
    ```
    VITE_OPENWEATHERMAP_API_KEY=your_api_key_here
    OPENAI_API_KEY=your_openai_api_key_here
    ```
4.  Run the development server:
    ```sh
    npm run dev
    ```
