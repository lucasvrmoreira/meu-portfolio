module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      transformOrigin: {
        center: "center",
      },
      keyframes: {
        bounceOnce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        waveMove: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50px)' },
        },
      },
      animation: {
        bounceArrow: 'bounceOnce 1s infinite ease-in-out',
        wave: 'waveMove 8s linear infinite',
      },
    },
  },
  plugins: [],
};
