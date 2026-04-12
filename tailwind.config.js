// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         hsq: {
//           cream: '#FBEED2',
//           rose: '#AA817E',
//           peach: '#FCCEAB',
//           sage: '#A19D70',
//           earth: '#504027',
//         },

//         // 🌟 NEW (Glass theme colors)
//         glass: {
//           light: 'rgba(255,255,255,0.25)',
//           dark: 'rgba(0,0,0,0.2)',
//           border: 'rgba(255,255,255,0.3)',
//         }
//       },

//       backdropBlur: {
//         xs: '2px',
//         sm: '6px',
//         md: '12px',
//         lg: '20px',
//         xl: '40px',
//       },

//       boxShadow: {
//         glass: '0 8px 32px rgba(0,0,0,0.15)',
//         soft: '0 4px 20px rgba(0,0,0,0.1)',
//       },

//       borderRadius: {
//         glass: '20px',
//         xl: '24px',
//         '2xl': '30px',
//       },

//       backgroundImage: {
//         'glass-gradient':
//           'linear-gradient(135deg, rgba(255,255,255,0.25), rgba(255,255,255,0.05))',
//       },

//       animation: {
//         float: 'float 6s ease-in-out infinite',
//         fadeIn: 'fadeIn 1s ease forwards',
//       },

//       keyframes: {
//         float: {
//           '0%,100%': { transform: 'translateY(0px)' },
//           '50%': { transform: 'translateY(-10px)' },
//         },
//         fadeIn: {
//           '0%': { opacity: 0, transform: 'translateY(20px)' },
//           '100%': { opacity: 1, transform: 'translateY(0)' },
//         },
//       }
//     },
//   },
//   plugins: [],
// }