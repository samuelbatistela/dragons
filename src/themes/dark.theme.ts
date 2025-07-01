import { DefaultTheme } from "styled-components";

import { borderRadius } from "./tokens/border.token";
import breakpoint from "./tokens/breakpoint.token";
import { darkThemeButton } from "./tokens/button.token";
import color from "./tokens/color.token";
import { fontFamily, fontWeight, fontSize } from "./tokens/font.token";
import { darkThemeInput } from "./tokens/input.token";
import { darkThemeAlert } from "./tokens/alert.token";

const darkTheme: DefaultTheme = {
  theme: "dark",
  color,

  font: {
    family: fontFamily,
    weight: fontWeight,
    color: {
      primary: color.white,
      secondary: color.gray,
    },
    size: fontSize,
  },

  border: {
    radius: borderRadius,
    color: "#333",
  },

  breakpoint,

  background: {
    color: {
      primary: color.black,
      secondary: color.deepBlack,
    },
  },

  components: {
    button: darkThemeButton,
    input: darkThemeInput,
    card: {
      backgroundColorPrimary: color.deepBlack,
      backgroundColorSecondary: color.black,
    },
    alert: darkThemeAlert,
  },
};

export default darkTheme;
