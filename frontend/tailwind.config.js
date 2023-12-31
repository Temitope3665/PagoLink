/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      primary: '#0353E9',
      dark: '#161616',
      white: '#FFFFFF',
      error: '#EF4444',
      error_700: '#B91C1C',
      error_50: '#FEF2F2',
      grey: '#868A90',
      neutral: '#1C1D1F',
      lightBlue: '#CEE3FB',
      border: '#9DA1A8',
      label: '#5F6166',
      success_50: '#F0FDF4',
      success_400: '#4ADE80',
      success_500: '#22C55E',
      success_700: '#15803D',
      bottom_border: 'rgba(0, 0, 0, 0.08)',
      success_600: '#16A34A',
      blue: '#146CEB',
      poor: '#E44242',
      dashboard_bg: '#324479',
      fair: '#F99F4A',
      good: '#1493FF',
      excellent: '#36C565',
      tiny: 'rgba(255, 255, 255, 0.5)',
      sidebar_bg: 'rgba(255, 255, 255, 0.1)',
      divide: 'rgba(255, 255, 255, 0.08)',
      drawer_bg: 'rgba(2, 13, 30, 0.3)',
      drawer_bg_100: 'rgba(2, 13, 30, 0.3)',
      warning_50: '#FFFBEB',
      warning_500: '#F59E0B',
      info_color: '#EBF4FF',
      warning_600: '#D97706',
      warining_500: '#F59E0B',
      warning_700: '#B45309',
    },
    fontFamily: {
      gilroyRegular: ["Gilroy-Regular", "sans-serif"],
      gilroyMd: ["Gilroy-Medium", "sans-serif"],
      gilroyLight: ["Gilroy-Light", "sans-serif"],
      gilroyHeavy: ["Gilroy-Heavy", "sans-serif"],
      gilroyBold: ["Gilroy-Bold", "sans-serif"],
    },
    boxShadow: {
      inset: 'rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset',
      normal:
        'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
      medium: 'rgba(0, 0, 0, 0.08) 0px 4px 12px',
      extra: 'rgba(0, 0, 0, 0.1) 0px 10px 50px',
      tiny: 'rgba(0, 0, 0, 0.05) 0px 1px 2px 0px',
      card: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;',
      dropdown:
        '0px 12px 16px -4px rgba(16, 24, 40, 0.1), 0px 4px 6px -2px rgba(16, 24, 40, 0.05)',
    },
    dropShadow: {
      auth: '0px 1px 2px rgba(16, 24, 40, 0.05)',
    },
    fontSize: {
      sm: '12px',
      md: '14px',
      normal: '16px',
      smd: '18px',
      lg: '24px',
      xl: '36px',
      '20px': '20px',
    },
    lineHeight: {
      md: '44px',
      sm: '30px',
    },
    extend: {},
  },
  plugins: [],
};
