## 🎨 Basic Layout & Mock UI

- [yes] Navbar layout (structure + Tailwind) ✅
- [x] Weather card skeleton with mock data ✅
- [x] Footer + layout polish ✅
- [x] Responsive grid/flex adjustments ✅

---

## 📝 State & User Input

- [x] Create SearchBar component ✅
- [x] Add `useState` to manage city input ✅
- [x] Handle form submit via button or enter key ✅
- [x] Validate empty input & prepare for api fetch ✅

---

### API Integration (Current Weather)

- [x] Create `weatherService.js` and connect OpenWeatherMap API
- [x] Fetch weather data using Axios and `useEffect`
- [x] Display temperature, city, condition on WeatherCard
- [x] Handle loading states and potential errors

### Componentization

- [x] Split into: `SearchBar`, `WeatherCard`, `ErrorState`, `EmptyState`, `LoadingState`
- [x] Pass data via props, manage state at `App.jsx` level
- [x] Add engaging animated loading state

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
- [x] Implement a robust light/dark mode theme toggle ✅
- [x] Centralize styling with a theme-aware class system (`tailwindClasses.js`) ✅
- [x] Persist user's theme preference to Local Storage ✅
- [x] Make the entire application fully responsive for all device sizes ✅
- [x] Debug and fix UI inconsistencies (icon visibility, alignment, component sizing) ✅
- [x] Refactor and clean up the codebase for production readiness ✅
