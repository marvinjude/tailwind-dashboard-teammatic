module.exports = {
  theme: {
    extend: {
      textColor: theme => ({
        ...theme("colors"),
        primary: "#ff4a87"
      }),
      backgroundColor: theme => ({
        ...theme("colors"),
        primary: "#ff4a87"
      }),
      width: {
        "2/7": "28.5714286%"
      },
      boxShadow: {
        blue: "-3px 7px 14px 1px #a5bdd04a"
      },
      borderRadius: {
        big: "40px",
        large: "12px"
      }
    }
  },
  variants: {},
  plugins: []
};
