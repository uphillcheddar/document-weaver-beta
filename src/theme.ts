import { extendTheme, theme } from "@chakra-ui/react";

export const colors = {
  brand: {
    50: '#bee3f8',
    100: '#0298ca',
    200: '#068bc0',
    300: '#068bc0',
    400: '#0a7db5',
    500: '#0a7db5',
    600: '#194e91',
    700: '#1d4389',
    800: '#1f3d84',
    900: '#21367f',
  },
};

const components = {
  Input: {
    baseStyle: {
      field: {
        _focusVisible: {
          boxShadow: `none !important`,
          borderColor: `brand.100`,
        },
        _hover: {
          boxShadow: `none`,
        },
        _focus: {
          boxShadow: `none`,
        },
      },
    },
  },
  Tooltip: {
    baseStyle: {
      p: "8px 16px",
      borderRadius: "6px",
      boxShadow: "sm",
      bgColor: "white",
      color: "blackAlpha.700",
      border: "1px solid",
      borderColor: "blackAlpha.50",
      fontWeight: 500,
      fontSize: "12px",
    },
  },
};

export const customTheme = extendTheme({
  styles: {
    global: {
      ".js-focus-visible :focus:not([data-focus-visible])": {
        outline: "none",
        boxShadow: "none",
      },
      "*:focus-visible": {
        outline: "none",
        boxShadow: "none",
      },
    },
  },
  colors,
  components,
  shadows: { outline: `0 0 0 3px ${colors.brand["100"]}` },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});
