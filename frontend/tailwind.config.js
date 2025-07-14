// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   darkMode: ["class"],
//   content: [
//     "./pages/**/*.{ts,tsx}",
//     "./components/**/*.{ts,tsx}",
//     "./app/**/*.{ts,tsx}",
//     "./src/**/*.{ts,tsx}",
//     "./lib/**/*.{ts,tsx}",
//     "*.{js,ts,jsx,tsx,mdx}",
//   ],
//   prefix: "",
//   theme: {
//     container: {
//       center: true,
//       padding: "2rem",
//       screens: {
//         "2xl": "1400px",
//       },
//     },
//     extend: {
//       colors: {
//         border: "hsl(var(--border))",
//         input: "hsl(var(--input))",
//         ring: "hsl(var(--ring))",
//         background: "hsl(var(--background))",
//         foreground: "hsl(var(--foreground))",
//         primary: {
//           DEFAULT: "hsl(var(--primary))",
//           foreground: "hsl(var(--primary-foreground))",
//         },
//         secondary: {
//           DEFAULT: "hsl(var(--secondary))",
//           foreground: "hsl(var(--secondary-foreground))",
//         },
//         destructive: {
//           DEFAULT: "hsl(var(--destructive))",
//           foreground: "hsl(var(--destructive-foreground))",
//         },
//         muted: {
//           DEFAULT: "hsl(var(--muted))",
//           foreground: "hsl(var(--muted-foreground))",
//         },
//         accent: {
//           DEFAULT: "hsl(var(--accent))",
//           foreground: "hsl(var(--accent-foreground))",
//         },
//         popover: {
//           DEFAULT: "hsl(var(--popover))",
//           foreground: "hsl(var(--popover-foreground))",
//         },
//         card: {
//           DEFAULT: "hsl(var(--card))",
//           foreground: "hsl(var(--card-foreground))",
//         },
//         navy: {
//           50: "#f8fafc",
//           100: "#f1f5f9",
//           200: "#e2e8f0",
//           300: "#cbd5e1",
//           400: "#94a3b8",
//           500: "#64748b",
//           600: "#475569",
//           700: "#334155",
//           800: "#1e293b",
//           900: "#0f172a",
//           950: "#020617",
//         },
//         gold: {
//           50: "#fffbeb",
//           100: "#fef3c7",
//           200: "#fde68a",
//           300: "#fcd34d",
//           400: "#fbbf24",
//           500: "#f59e0b",
//           600: "#d97706",
//           700: "#b45309",
//           800: "#92400e",
//           900: "#78350f",
//           950: "#451a03",
//         },
//       },
//       borderRadius: {
//         lg: "var(--radius)",
//         md: "calc(var(--radius) - 2px)",
//         sm: "calc(var(--radius) - 4px)",
//       },
//       keyframes: {
//         "accordion-down": {
//           from: { height: "0" },
//           to: { height: "var(--radix-accordion-content-height)" },
//         },
//         "accordion-up": {
//           from: { height: "var(--radix-accordion-content-height)" },
//           to: { height: "0" },
//         },
//         "fade-in-up": {
//           "0%": {
//             opacity: "0",
//             transform: "translateY(30px)",
//           },
//           "100%": {
//             opacity: "1",
//             transform: "translateY(0)",
//           },
//         },
//         "slide-in-left": {
//           "0%": {
//             opacity: "0",
//             transform: "translateX(-30px)",
//           },
//           "100%": {
//             opacity: "1",
//             transform: "translateX(0)",
//           },
//         },
//         "slide-in-right": {
//           "0%": {
//             opacity: "0",
//             transform: "translateX(30px)",
//           },
//           "100%": {
//             opacity: "1",
//             transform: "translateX(0)",
//           },
//         },
//         "zoom-in": {
//           "0%": {
//             opacity: "0",
//             transform: "scale(0.9)",
//           },
//           "100%": {
//             opacity: "1",
//             transform: "scale(1)",
//           },
//         },
//         "pulse-gold": {
//           "0%, 100%": {
//             opacity: "1",
//           },
//           "50%": {
//             opacity: "0.7",
//           },
//         },
//         shimmer: {
//           "0%": {
//             backgroundPosition: "-200px 0",
//           },
//           "100%": {
//             backgroundPosition: "calc(200px + 100%) 0",
//           },
//         },
//       },
//       animation: {
//         "accordion-down": "accordion-down 0.2s ease-out",
//         "accordion-up": "accordion-up 0.2s ease-out",
//         "fade-in-up": "fade-in-up 0.6s ease-out",
//         "slide-in-left": "slide-in-left 0.6s ease-out",
//         "slide-in-right": "slide-in-right 0.6s ease-out",
//         "zoom-in": "zoom-in 0.5s ease-out",
//         "pulse-gold": "pulse-gold 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
//         shimmer: "shimmer 1.5s infinite",
//       },
//       fontFamily: {
//         sans: ["Inter", "system-ui", "sans-serif"],
//         serif: ["Georgia", "serif"],
//         mono: ["Fira Code", "monospace"],
//       },
//       spacing: {
//         18: "4.5rem",
//         88: "22rem",
//         128: "32rem",
//       },
//       maxWidth: {
//         "8xl": "88rem",
//         "9xl": "96rem",
//       },
//       zIndex: {
//         60: "60",
//         70: "70",
//         80: "80",
//         90: "90",
//         100: "100",
//       },
//       backdropBlur: {
//         xs: "2px",
//       },
//     },
//   },
//   // eslint-disable-next-line @typescript-eslint/no-require-imports
//   plugins: [require("tailwindcss-animate")],
// }


/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Enhanced Slate Colors for Attractive Dark Theme
        slate: {
          50: "rgb(248 250 252)",
          100: "rgb(241 245 249)",
          200: "rgb(226 232 240)",
          300: "rgb(203 213 225)",
          400: "rgb(148 163 184)",
          500: "rgb(100 116 139)",
          600: "rgb(71 85 105)",
          700: "rgb(51 65 85)",
          800: "rgb(30 41 59)",
          900: "rgb(15 23 42)",
          950: "rgb(2 6 23)",
        },
        // Enhanced Orange Colors
        orange: {
          50: "rgb(255 247 237)",
          100: "rgb(255 237 213)",
          200: "rgb(254 215 170)",
          300: "rgb(253 186 116)",
          400: "rgb(251 146 60)",
          500: "rgb(249 115 22)",
          600: "rgb(234 88 12)",
          700: "rgb(194 65 12)",
          800: "rgb(154 52 18)",
          900: "rgb(124 45 18)",
          950: "rgb(67 20 7)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        fadeInUp: {
          from: {
            opacity: "0",
            transform: "translateY(30px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        slideInLeft: {
          from: {
            opacity: "0",
            transform: "translateX(-30px)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        slideInRight: {
          from: {
            opacity: "0",
            transform: "translateX(30px)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        zoomIn: {
          from: {
            opacity: "0",
            transform: "scale(0.9)",
          },
          to: {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        "pulse-orange": {
          "0%, 100%": {
            opacity: "1",
          },
          "50%": {
            opacity: "0.7",
          },
        },
        shimmer: {
          "0%": {
            "background-position": "-200px 0",
          },
          "100%": {
            "background-position": "calc(200px + 100%) 0",
          },
        },
        gradient: {
          "0%": {
            "background-position": "0% 50%",
          },
          "50%": {
            "background-position": "100% 50%",
          },
          "100%": {
            "background-position": "0% 50%",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        fadeInUp: "fadeInUp 0.6s ease-out",
        slideInLeft: "slideInLeft 0.6s ease-out",
        slideInRight: "slideInRight 0.6s ease-out",
        zoomIn: "zoomIn 0.5s ease-out",
        "pulse-orange": "pulse-orange 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        shimmer: "shimmer 1.5s infinite",
        gradient: "gradient 3s ease infinite",
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
}



