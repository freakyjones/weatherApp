// A collection of shared Tailwind CSS class strings for consistent styling across the application.
export const classes = {
  light: {
    // App layout
    pageContainer:
      "flex flex-col min-h-screen bg-gradient-to-br from-sky-100 to-blue-200 text-gray-800 font-sans transition-colors duration-500",
    mainContent: "flex-grow flex flex-col items-center p-4 pt-8 md:p-8",
    footer: "mt-8 py-4 text-center text-gray-500 text-sm",
    footerLink: "font-semibold text-blue-500",

    // Navbar
    navbar:
      "w-full bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50",
    navbarContent: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
    navbarFlex: "flex items-center justify-between h-16",
    navbarLogo: "text-xl font-bold text-gray-900",
    themeToggleButton:
      "p-2 rounded-full text-gray-700 bg-gray-200/50 hover:bg-gray-200 transition-colors cursor-pointer",

    // SearchBar
    searchInput:
      "pl-4 pr-12 py-2 w-full rounded-md bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900",
    searchIconContainer:
      "absolute right-1 top-1/2 transform -translate-y-1/2 p-2 rounded-md text-gray-500 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer",
    locationButton:
      "flex items-center gap-1 px-3 py-2 rounded-md bg-blue-50 border border-blue-200 text-blue-700 hover:bg-blue-100 transition-colors cursor-pointer",

    // Cards
    cardBase: "bg-black/5 backdrop-blur-sm rounded-2xl",
    weatherCard: "relative overflow-hidden rounded-3xl shadow-2xl w-full",
    weatherCardGlassOverlay: "absolute inset-0 bg-white/10 backdrop-blur-sm",
    weatherDetailsCardContainer: "mt-8",
    forecastListContainer:
      "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-4",
    forecastCard:
      "flex h-36 w-full flex-shrink-0 flex-col items-center justify-around p-3 text-gray-800 shadow-lg transition-transform hover:scale-105 sm:p-4 cursor-pointer",
    detailItem: "p-4 flex flex-col items-center justify-center text-center",
    detailItemIcon: "text-gray-600 mb-2",
    detailItemValueUnit: "text-base font-medium ml-1 text-gray-700",
    detailItemLabel: "text-sm text-gray-500 mt-1",

    // States (Empty, Error)
    stateContainer: "flex flex-col items-center justify-center py-12 px-4",
    errorStateSuggestionBox:
      "bg-blue-50 border border-blue-200 rounded-2xl p-6",
    errorIcon: "text-red-500",
    errorIconBg: "bg-red-100",
    errorTextAccent: "font-semibold text-red-600 mx-1",
    errorSuggestionText: "text-blue-600 text-sm",
    emptyStateIconPrimary: "text-blue-400",
    emptyStateIconAccent: "text-yellow-400",
    emptyStateIconSecondary: "text-blue-500",
    errorStateSuggestionButton:
      "px-3 py-2 sm:px-4 sm:py-3 bg-white border border-blue-200 rounded-xl text-blue-700 hover:bg-blue-100 transition-all duration-200 hover:scale-105 hover:shadow-md group cursor-pointer text-sm sm:text-base",
    emptyStateSuggestionButton:
      "px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm border border-blue-200 hover:bg-blue-100 cursor-pointer",

    // Buttons
    buttonBase:
      "flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-200",
    buttonPrimary: "bg-blue-600 hover:bg-blue-700 text-white hover:scale-105",
    buttonSecondary:
      "border border-blue-200 text-blue-700 hover:bg-blue-50 hover:scale-105",
    buttonTertiary: "text-gray-600 hover:bg-gray-100",

    // Dialog
    dialogOverlay:
      "fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center z-50",
    dialogPanel:
      "bg-white rounded-lg p-8 shadow-2xl max-w-sm w-full text-center",
    dialogTitle: "text-xl font-bold text-gray-800 mb-4",
    dialogText: "text-gray-600 mb-6",
    dialogCity: "font-semibold text-gray-800",
    dialogButtonCancel:
      "px-6 py-2 rounded-md text-gray-800 bg-gray-200 hover:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 cursor-pointer",
    dialogButtonConfirm:
      "px-6 py-2 rounded-md text-white bg-red-500 hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 cursor-pointer",

    // Typography
    h2: "text-2xl sm:text-3xl font-bold text-gray-900 mb-4",
    h3: "text-lg font-semibold text-blue-800 mb-2",
    pLarge: "text-base sm:text-lg text-gray-600 mb-2",
    pBase: "text-base text-gray-500",
    textMuted: "text-gray-500",
    weatherCardTextPrimary: "text-gray-900",
    weatherCardTextSecondary: "text-gray-700",
    weatherCardTextTertiary: "text-gray-600",
    weatherCardDecorator: "border-black/10",

    // Loading State
    loadingIconPrimary: "h-20 w-20 text-blue-400",
    loadingIconAccent: "h-14 w-14 text-yellow-400",
    loadingIconSecondary: "h-10 w-10 text-blue-500",
    loadingIconMuted: "h-8 w-8 text-gray-400",
    loadingTextPrimary: "text-2xl sm:text-3xl font-bold text-gray-900 mb-2",
    loadingTextSecondary: "text-gray-600",
  },
  dark: {
    // App layout
    pageContainer:
      "flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white font-sans transition-colors duration-500",
    mainContent: "flex-grow flex flex-col items-center p-4 pt-8 md:p-8",
    footer: "mt-8 py-4 text-center text-gray-400 text-sm",
    footerLink: "font-semibold text-blue-400",

    // Navbar
    navbar:
      "w-full bg-gray-900/80 backdrop-blur-md border-b border-gray-700 sticky top-0 z-50",
    navbarContent: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
    navbarFlex: "flex items-center justify-between h-16",
    navbarLogo: "text-xl font-bold text-white",
    themeToggleButton:
      "p-2 rounded-full text-yellow-300 bg-gray-800/50 hover:bg-gray-700 transition-colors cursor-pointer",

    // SearchBar
    searchInput:
      "pl-4 pr-12 py-2 w-full rounded-md bg-gray-800 border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white",
    searchIconContainer:
      "absolute right-1 top-1/2 transform -translate-y-1/2 p-2 rounded-md text-gray-400 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer",
    locationButton:
      "flex items-center gap-1 px-3 py-2 rounded-md bg-blue-900/30 border border-blue-700 text-blue-300 hover:bg-blue-900/50 transition-colors cursor-pointer",

    // Cards
    cardBase: "bg-white/10 backdrop-blur-sm rounded-2xl",
    weatherCard: "relative overflow-hidden rounded-3xl shadow-2xl w-full",
    weatherCardGlassOverlay: "absolute inset-0 bg-white/10 backdrop-blur-sm",
    weatherDetailsCardContainer: "mt-8",
    forecastListContainer:
      "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-4",
    forecastCard:
      "flex h-36 w-full flex-shrink-0 flex-col items-center justify-around p-3 text-white shadow-lg transition-transform hover:scale-105 sm:p-4 cursor-pointer",
    detailItem: "p-4 flex flex-col items-center justify-center text-center",
    detailItemIcon: "text-white/70 mb-2",
    detailItemValueUnit: "text-base font-medium ml-1 text-white/90",
    detailItemLabel: "text-sm text-white/60 mt-1",

    // States (Empty, Error)
    stateContainer: "flex flex-col items-center justify-center py-12 px-4",
    errorStateSuggestionBox:
      "bg-blue-900/20 border border-blue-800 rounded-2xl p-6",
    errorIcon: "text-red-400",
    errorIconBg: "bg-red-900/30",
    errorTextAccent: "font-semibold text-red-400 mx-1",
    errorSuggestionText: "text-blue-300 text-sm",
    emptyStateIconPrimary: "text-blue-300",
    emptyStateIconAccent: "text-yellow-400",
    emptyStateIconSecondary: "text-blue-500",
    errorStateSuggestionButton:
      "px-3 py-2 sm:px-4 sm:py-3 bg-gray-800 border border-blue-700 rounded-xl text-blue-300 hover:bg-blue-900/50 transition-all duration-200 hover:scale-105 hover:shadow-md group cursor-pointer text-sm sm:text-base",
    emptyStateSuggestionButton:
      "px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm border border-blue-700 hover:bg-blue-900/50 cursor-pointer",

    // Buttons
    buttonBase:
      "flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-200",
    buttonPrimary: "bg-blue-600 hover:bg-blue-700 text-white hover:scale-105",
    buttonSecondary:
      "border border-blue-700 text-blue-300 hover:bg-blue-900/30 hover:scale-105",
    buttonTertiary: "text-gray-400 hover:bg-gray-800",

    // Dialog
    dialogOverlay:
      "fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center z-50",
    dialogPanel:
      "bg-gray-800 rounded-lg p-8 shadow-2xl max-w-sm w-full text-center",
    dialogTitle: "text-xl font-bold text-gray-100 mb-4",
    dialogText: "text-gray-300 mb-6",
    dialogCity: "font-semibold text-gray-100",
    dialogButtonCancel:
      "px-6 py-2 rounded-md bg-gray-700 hover:bg-gray-600 text-gray-200 focus:ring-2 focus:ring-gray-500 cursor-pointer",
    dialogButtonConfirm:
      "px-6 py-2 rounded-md text-white bg-red-500 hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 cursor-pointer",

    // Typography
    h2: "text-2xl sm:text-3xl font-bold text-white mb-4",
    h3: "text-lg font-semibold text-blue-200 mb-2",
    pLarge: "text-base sm:text-lg text-gray-300 mb-2",
    pBase: "text-base text-gray-400",
    textMuted: "text-gray-400",
    weatherCardTextPrimary: "text-white",
    weatherCardTextSecondary: "text-white/90",
    weatherCardTextTertiary: "text-white/80",
    weatherCardDecorator: "border-white/30",

    // Loading State
    loadingIconPrimary: "h-20 w-20 text-blue-300",
    loadingIconAccent: "h-14 w-14 text-yellow-400",
    loadingIconSecondary: "h-10 w-10 text-blue-500",
    loadingIconMuted: "h-8 w-8 text-gray-500",
    loadingTextPrimary: "text-2xl sm:text-3xl font-bold text-white mb-2",
    loadingTextSecondary: "text-gray-300",
  },
};
