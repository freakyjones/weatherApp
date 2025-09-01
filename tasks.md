# 🌦 Weather App — Pomodoro Task Plan

Each ✅ = 1 Pomodoro (25 min)  
Goal: ~13 Pomodoros (~6.5 hrs)

---

## 🎨 Basic Layout & Mock UI — 4 Pomodoros (2 hrs)

- [yes] Navbar layout (structure + Tailwind) ✅
- [yes] Weather card skeleton with mock data ✅
- [yes] Footer + layout polish ✅
- [yes] Responsive grid/flex adjustments ✅

---

## 📝 State & User Input — 3 Pomodoros (1.5 hrs)

- [yes3] Create SearchBar component
- [yes] Add `useState` to manage city input
- [yes] Handle form submit via button or enter key
- [yes] Validate empty input & prepare for api fetch

---

### API Integration (Current Weather) — `2 hours`

- [yes] Create `weatherService.js` and connect OpenWeatherMap API
- [yes] Fetch weather data using Axios and `useEffect`
- [yes] Display temperature, city, condition on WeatherCard
- [yes] Handle loading

### Componentization — `2 hours`

- [x] Split into: `SearchBar`, `WeatherCard`, `ErrorDisplay`, `Loader`
- [x] Pass data via props, manage state at `App.jsx` level
- [x] Add skeleton loaders or animated spinner

---

## ✨ Features & Refinements

- [x] Add delete functionality to weather cards ✅
- [x] Implement a confirmation dialog for deletion ✅
- [x] Persist city list to Local Storage ✅
- [x] Add 5-day forecast view ✅
  - [x] Call OpenWeatherMap 5-day forecast API ✅
  - [x] Parse and group forecast by day ✅
  - [x] Create ForecastCard and ForecastView components and map over forecast data ✅
- [x] Use `navigator.geolocation.getCurrentPosition()` ✅
- [x] Fetch weather using lat/lon ✅
- [x] Add “Use My Location” button ✅
