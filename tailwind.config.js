export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#22c55e",
          soft: "#e8f8ee",
          dark: "#166534"
        },
        neutral: {
          10: "#f3f4f6",
          30: "#d1d5db",
          60: "#6b7280",
          90: "#111827"
        }
      }
    }
  },
  plugins: []
};
