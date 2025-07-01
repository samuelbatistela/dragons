const orange = "#fe5e00";
const lightOrange = "#ff9d01";

const blue = "#406ae0";
const lightBlue = "rgba(64, 106, 224, 0.2)";

const negativePure = "#C12A37";

const backgroundLighter = "#E8E9EB";
const backgroundLightest = "#F4F4F6";

const color = {
  white: "#FFF",
  lightWhite: "#f9f9f9",

  black: "#121212",
  deepBlack: "#000",

  gray: "#969696",
  darkGray: "#586069",
  lightGray: "#dde0e4",
  deepGray: "#414141",

  blue,
  lightBlue,

  orange,
  lightOrange,

  primary: orange,
  secondary: lightOrange,

  info: blue,
  success: "#2AD178",
  warning: "#FABD59",
  danger: "#FF5B68",
  lightDanger: "rgba(255, 91, 104, 0.2)",

  negativePure,
  backgroundLighter,
  backgroundLightest,
};

export type Color = typeof color;
export default color;
