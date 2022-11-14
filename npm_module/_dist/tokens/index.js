"use strict";

var extend = {
  opacity: {
    5: "0.05",
    10: "0.1",
    20: "0.2",
    50: "0.5"
  },
  colors: {
    black: "#000000",
    "color-palettes": {
      blue: {
        50: "#eaf4ff",
        100: "#bfdcff",
        200: "#a0cbff",
        300: "#75b3ff",
        400: "#5aa4ff",
        500: "#318dff",
        600: "#2d80e8",
        700: "#2364b5",
        800: "#1b4e8c",
        900: "#153b6b",
        950: "#0d223d"
      },
      brand: {
        50: "#e6f9fa",
        100: "#b0ecf0",
        200: "#8ae3e8",
        300: "#54d6de",
        400: "#33ced8",
        500: "#00c2ce",
        600: "#00b1bb",
        800: "#006b71",
        900: "#005157"
      },
      green: {
        50: "#e6f9fa",
        100: "#b0ecf0",
        200: "#8ae3e8",
        300: "#54d6de",
        400: "#33ced8",
        500: "#00c2ce",
        600: "#00b1bb",
        700: "#008a92",
        800: "#006b71",
        900: "#005157",
        950: "#02292c"
      },
      "grey-dark": {
        50: "#989fa4",
        100: "#788187",
        200: "#484d51",
        300: "#3e4347",
        400: "#323639",
        500: "#282c2f",
        600: "#1e2224",
        700: "#151819",
        800: "#070808",
        900: "#000000"
      },
      "grey-light": {
        50: "#fcfcfc",
        100: "#fafafa",
        200: "#f1f3f3",
        300: "#e9ebec",
        400: "#dfe1e2",
        500: "#c9cdcf",
        600: "#aeb4b7",
        700: "#939b9f",
        800: "#868e93",
        900: "#767f84"
      },
      magenta: {
        50: "#fcedff",
        100: "#f7c7ff",
        200: "#f3abff",
        300: "#ee85ff",
        400: "#ea6dff",
        500: "#e549ff",
        600: "#d042e8",
        700: "#a334b5",
        800: "#7e288c",
        900: "#601f6b"
      },
      orange: {
        50: "#fef3e9",
        100: "#fadabc",
        200: "#f8c89c",
        300: "#f5af6e",
        400: "#f39f52",
        500: "#f08727",
        600: "#da7b23",
        700: "#aa601c",
        800: "#844a15",
        900: "#653910",
        950: "#37210d"
      },
      purple: {
        50: "#efe6fd",
        100: "#ceb0fa",
        200: "#b78af7",
        300: "#9654f4",
        400: "#8133f1",
        500: "#6200ee",
        600: "#5900d9",
        700: "#4600a9",
        800: "#360083",
        900: "#290064"
      },
      red: {
        50: "#fdeeee",
        100: "#f9cbcb",
        200: "#f6b2b2",
        300: "#f28e8e",
        400: "#ef7979",
        500: "#eb5757",
        600: "#d64f4f",
        700: "#a73e3e",
        800: "#813030",
        900: "#632525",
        950: "#3b1616"
      },
      yellow: {
        50: "#fffbe8",
        100: "#fef4b7",
        200: "#feee94",
        300: "#fde764",
        400: "#fde245",
        500: "#fcdb17",
        600: "#e5c715",
        700: "#b39b10",
        800: "#8b780d",
        900: "#6a5c0a"
      }
    },
    dark: {
      badges: {
        "default": {
          bg: {
            active: "#484d51",
            enabled: "#282c2f",
            hover: "#3e4347"
          },
          border: {
            active: "#484d51",
            enabled: "#282c2f",
            hover: "#3e4347"
          },
          text: {
            active: "#dfe1e2",
            enabled: "#dfe1e2",
            hover: "#f1f3f3"
          }
        }
      },
      "body-bg": "#151819",
      "body-border": "#3e4347",
      buttons: {
        danger: {
          bg: {
            active: "#d64f4f",
            enabled: "#eb5757",
            hover: "#ef7979"
          },
          border: {
            active: "#d64f4f",
            enabled: "#eb5757",
            hover: "#ef7979"
          },
          text: {
            active: "#632525",
            enabled: "#3b1616",
            hover: "#3b1616"
          }
        },
        "default": {
          bg: {
            active: "#484d51",
            enabled: "#282c2f",
            hover: "#3e4347"
          },
          border: {
            active: "#484d51",
            enabled: "#282c2f",
            hover: "#3e4347"
          },
          text: {
            active: "#dfe1e2",
            enabled: "#dfe1e2",
            hover: "#f1f3f3"
          }
        },
        info: {
          bg: {
            active: "#2364b5",
            enabled: "#318dff",
            hover: "#75b3ff"
          },
          border: {
            active: "#2364b5",
            enabled: "#318dff",
            hover: "#75b3ff"
          },
          text: {
            active: "#153b6b",
            enabled: "#0d223d",
            hover: "#0d223d"
          }
        },
        secondary: {
          bg: {
            active: "#282c2f",
            enabled: "#1e2224",
            hover: "#1e2224"
          },
          border: {
            active: "#aeb4b7",
            enabled: "#484d51",
            hover: "#989fa4"
          },
          text: {
            active: "#dfe1e2",
            enabled: "#dfe1e2",
            hover: "#f1f3f3"
          }
        },
        success: {
          bg: {
            active: "#00b1bb",
            enabled: "#00c2ce",
            hover: "#54d6de"
          },
          border: {
            active: "#00b1bb",
            enabled: "#00c2ce",
            hover: "#54d6de"
          },
          text: {
            active: "#005157",
            enabled: "#02292c",
            hover: "#02292c"
          }
        },
        warning: {
          bg: {
            active: "#aa601c",
            enabled: "#f08727",
            hover: "#f5af6e"
          },
          border: {
            active: "#aa601c",
            enabled: "#f08727",
            hover: "#f5af6e"
          },
          text: {
            active: "#653910",
            enabled: "#37210d",
            hover: "#37210d"
          }
        }
      },
      checkboxes: {
        selected: {
          bg: {
            active: "#00b1bb",
            enabled: "#00c2ce",
            hover: "#54d6de"
          },
          border: {
            active: "#00b1bb",
            enabled: "#00c2ce",
            hover: "#54d6de"
          },
          svg: "#02292c",
          text: {
            active: "#dfe1e2",
            enabled: "#dfe1e2",
            hover: "#f1f3f3"
          }
        },
        unselected: {
          bg: {
            active: "#155257",
            enabled: "#3e4347",
            hover: "#155257"
          },
          border: {
            active: "#00c2ce",
            enabled: "#60676c",
            hover: "#54d6de"
          },
          svg: "#989fa4",
          text: {
            active: "#dfe1e2",
            enabled: "#dfe1e2",
            over: "#f1f3f3"
          }
        }
      },
      input: {
        bg: {
          enabled: "#323639",
          focus: "#1e2224",
          hover: "#31373b"
        },
        border: {
          danger: "#eb5757",
          focus: "#bac6ce",
          hover: "#57636b",
          info: "#318dff",
          success: "#00c2ce",
          warning: "#f08727"
        },
        text: {
          danger: "#eb5757",
          enabled: "#939b9f",
          "field-label": "#939b9f",
          focus: "#ffffff",
          hover: "#dfe1e2",
          info: "#318dff",
          prefix: "#868e93",
          success: "#00c2ce",
          warning: "#f08727"
        }
      },
      navbutton: {
        bg: {
          active: "#323639",
          enabled: "#151819",
          hover: "#282c2f",
          press: "#323639"
        },
        text: {
          active: "#fcfcfc",
          enabled: "#aeb4b7",
          hover: "#fcfcfc",
          press: "#aeb4b7"
        }
      },
      "notification-status": {
        bg: {
          danger: "#5b3233",
          "default": "#323639",
          info: "#244266",
          success: "#155257",
          warning: "#5d4025"
        },
        text: {
          danger: "#f6b2b2",
          "default": "#c9cdcf",
          info: "#a0cbff",
          success: "#8ae3e8",
          warning: "#f8c89c"
        }
      },
      "radio-group": {
        bg: {
          active: "#00c2ce",
          enabled: "#282c2f",
          hover: "#1e2224",
          press: "#151819"
        },
        text: {
          active: "#1e2224",
          enabled: "#dfe1e2",
          hover: "#fcfcfc",
          press: "#aeb4b7"
        }
      },
      "text-link": {
        bg: {
          active: "#244266",
          hover: "#1d3653"
        },
        text: {
          active: "#2d80e8",
          enabled: "#318dff",
          hover: "#75b3ff",
          press: "#2d80e8",
          visited: "#9654f4"
        }
      },
      "text-primary": "#ffffff",
      "text-secondary": "#aeb4b7",
      "text-tertiary": "#767f84",
      "window-bg": "#1e2224",
      "window-border": "#323639"
    },
    light: {
      badges: {
        "default": {
          bg: {
            active: "#c9cdcf",
            enabled: "#f1f3f3",
            hover: "#dfe1e2"
          },
          border: {
            active: "#c9cdcf",
            enabled: "#f1f3f3",
            hover: "#dfe1e2"
          },
          text: {
            active: "#323639",
            enabled: "#323639",
            hover: "#1e2224"
          }
        }
      },
      "body-bg": "#fafafa",
      "body-border": "#e9ebec",
      buttons: {
        danger: {
          bg: {
            active: "#a73e3e",
            enabled: "#eb5757",
            hover: "#d64f4f"
          },
          border: {
            active: "#a73e3e",
            enabled: "#eb5757",
            hover: "#d64f4f"
          },
          text: {
            active: "#fdeeee",
            enabled: "#ffffff",
            hover: "#ffffff"
          }
        },
        "default": {
          bg: {
            active: "#c9cdcf",
            enabled: "#f1f3f3",
            hover: "#dfe1e2"
          },
          border: {
            active: "#c9cdcf",
            enabled: "#f1f3f3",
            hover: "#dfe1e2"
          },
          text: {
            active: "#323639",
            enabled: "#323639",
            hover: "#1e2224"
          }
        },
        info: {
          bg: {
            active: "#2364b5",
            enabled: "#318dff",
            hover: "#2d80e8"
          },
          border: {
            active: "#2364b5",
            enabled: "#318dff",
            hover: "#2d80e8"
          },
          text: {
            active: "#eaf4ff",
            enabled: "#ffffff",
            hover: "#ffffff"
          }
        },
        secondary: {
          bg: {
            active: "#fafafa",
            enabled: "#ffffff",
            hover: "#ffffff"
          },
          border: {
            active: "#aeb4b7",
            enabled: "#dfe1e2",
            hover: "#c9cdcf"
          },
          text: {
            active: "#323639",
            enabled: "#323639",
            hover: "#1e2224"
          }
        },
        success: {
          bg: {
            active: "#008a92",
            enabled: "#00c2ce",
            hover: "#00b1bb"
          },
          border: {
            active: "#008a92",
            enabled: "#00c2ce",
            hover: "#00b1bb"
          },
          text: {
            active: "#e6f9fa",
            enabled: "#ffffff",
            hover: "#ffffff"
          }
        },
        warning: {
          bg: {
            active: "#aa601c",
            enabled: "#f08727",
            hover: "#da7b23"
          },
          border: {
            active: "#aa601c",
            enabled: "#f08727",
            hover: "#da7b23"
          },
          text: {
            active: "#fef3e9",
            enabled: "#ffffff",
            hover: "#ffffff"
          }
        }
      },
      checkboxes: {
        selected: {
          bg: {
            active: "#008a92",
            enabled: "#00c2ce",
            hover: "#00b1bb"
          },
          border: {
            active: "#008a92",
            enabled: "#00c2ce",
            hover: "#00b1bb"
          },
          svg: "#ffffff",
          text: {
            active: "#323639",
            enabled: "#323639",
            hover: "#1e2224"
          }
        },
        unselected: {
          bg: {
            active: "#e6f9fa",
            enabled: "#f1f3f3",
            hover: "#e6f9fa"
          },
          border: {
            active: "#00b1bb",
            enabled: "#dfe1e2",
            hover: "#00c2ce"
          },
          svg: "#aeb4b7",
          text: {
            active: "#323639",
            enabled: "#323639",
            hover: "#1e2224"
          }
        }
      },
      inputs: {
        bg: {
          enabled: "#fafafa",
          focus: "#ffffff",
          hover: "#fafafa"
        },
        border: {
          danger: "#eb5757",
          focus: "#282c2f",
          hover: "#c9cdcf",
          info: "#318dff",
          success: "#00c2ce",
          warning: "#f08727"
        },
        text: {
          danger: "#eb5757",
          enabled: "#788187",
          "field-label": "#3e4347",
          focus: "#282c2f",
          hover: "#484d51",
          info: "#318dff",
          prefix: "#989fa4",
          success: "#00c2ce",
          warning: "#f08727"
        }
      },
      navbutton: {
        bg: {
          active: "#e9ebec",
          enabled: "#fafafa",
          hover: "#f1f3f3",
          press: "#e9ebec"
        },
        text: {
          active: "#151819",
          enabled: "#788187",
          hover: "#323639",
          press: "#788187"
        }
      },
      "notification-status": {
        bg: {
          danger: "#fdeeee",
          "default": "#f1f3f3",
          info: "#eaf4ff",
          success: "#e6f9fa",
          warning: "#fef3e9"
        },
        text: {
          danger: "#eb5757",
          "default": "#484d51",
          info: "#318dff",
          success: "#00c2ce",
          warning: "#f08727"
        }
      },
      "radio-group": {
        bg: {
          active: "#00c2ce",
          enabled: "#fafafa",
          hover: "#f1f3f3",
          press: "#e9ebec"
        },
        text: {
          active: "#ffffff",
          enabled: "#484d51",
          hover: "#323639",
          press: "#788187"
        }
      },
      "text-link": {
        bg: {
          active: "#e0efff",
          hover: "#ebf4ff"
        },
        text: {
          active: "#2d80e8",
          enabled: "#318dff",
          hover: "#2364b5",
          press: "#2d80e8",
          visited: "#6200ee"
        }
      },
      "text-primary": "#151819",
      "text-secondary": "#788187",
      "text-tertiary": "#989fa4",
      "window-bg": "#ffffff",
      "window-border": "#e9ebec"
    },
    terminal: "#5fffd7",
    white: "#ffffff"
  },
  borderWidth: {
    dashed: "1px",
    divider: "4px",
    dots: "1px",
    solid: "1px"
  },
  borderColor: {
    dashed: "#f1f3f3",
    divider: "#f1f3f3",
    dots: "#f1f3f3",
    solid: "#f1f3f3"
  },
  spacing: {
    xxs: "8px",
    xs: "16px",
    sm: "24px",
    md: "32px",
    lg: "48px",
    xl: "64px",
    xxl: "80px",
    xxxl: "120px"
  },
  boxShadow: {
    shadow: "0px 1px 2px -1px #000000, 0px 1px 3px #000000",
    "shadow-2-xl": "0px 25px 50px -12px #000000",
    "shadow-inner": "inset 0px 2px 4px #000000",
    "shadow-lg": "0px 4px 6px -4px #000000, 0px 10px 15px -3px #000000",
    "shadow-md": "0px 2px 4px -2px #000000, 0px 4px 6px -1px #000000",
    "shadow-sm": "0px 1px 2px #000000",
    "shadow-xl": "0px 8px 10px -6px #000000, 0px 20px 25px -5px #000000"
  },
  fontSize: {
    "text-2-xxs": "0.625rem",
    "text-xxs": "0.6875rem",
    "text-xs": "0.75rem",
    "text-sm": "0.8125rem",
    "text-base": "0.9375rem",
    "text-lg": "1.125rem",
    "text-xl": "1.25rem",
    "text-2-xl": "1.5rem",
    "text-3-xl": "1.875rem",
    "text-4-xl": "2.25rem",
    "text-5-xl": "3rem",
    "text-6-xl": "3.75rem",
    "text-7-xl": "4.5rem",
    "text-8-xl": "6rem",
    "text-9-xl": "8rem"
  },
  lineHeight: {
    "text-2-xxs": "16px",
    "text-xs": "16px",
    "text-xxs": "16px",
    "text-sm": "20px",
    "text-base": "24px",
    "text-lg": "28px",
    "text-xl": "28px",
    "text-2-xl": "32px",
    "text-3-xl": "36px",
    "text-4-xl": "40px",
    "text-5-xl": "48px",
    "text-6-xl": "60px",
    "text-7-xl": "72px",
    "text-8-xl": "96px",
    "text-9-xl": "128px"
  },
  fontFamily: {
    "text-2-xl": ["Satoshi-Regular"],
    "text-2-xxs": ["Inter-Regular"],
    "text-3-xl": ["Satoshi-Regular"],
    "text-4-xl": ["Satoshi-Regular"],
    "text-5-xl": ["Satoshi-Regular"],
    "text-6-xl": ["Satoshi-Regular"],
    "text-7-xl": ["Satoshi-Regular"],
    "text-8-xl": ["Satoshi-Regular"],
    "text-9-xl": ["Satoshi-Regular"],
    "text-base": ["Inter-Regular"],
    "text-lg": ["Inter-Regular"],
    "text-sm": ["Inter-Regular"],
    "text-xl": ["Satoshi-Regular"],
    "text-xs": ["Inter-Regular"],
    "text-xxs": ["Inter-Regular"]
  },
  fontWeight: {
    "text-2-xl": 400,
    "text-2-xxs": 400,
    "text-3-xl": 400,
    "text-4-xl": 400,
    "text-5-xl": 400,
    "text-6-xl": 400,
    "text-7-xl": 400,
    "text-8-xl": 400,
    "text-9-xl": 400,
    "text-base": 400,
    "text-lg": 400,
    "text-sm": 400,
    "text-xl": 400,
    "text-xs": 400,
    "text-xxs": 400
  }
};
module.exports = extend;
