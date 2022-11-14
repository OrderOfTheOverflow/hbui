"use strict";

var _borderRadius, _textColor;
var tokens = require('../tokens');
var colors = tokens.colors;
var colorsDark = colors.dark;
var colorsLight = colors.light;
var colorPalettes = colors['color-palettes'];
var breakpoints = require('../constants/breakpoints');
module.exports = {
  darkMode: 'class',
  theme: {
    fontSize: {
      'xs': tokens.fontSize['text-xs'],
      'sm': tokens.fontSize['text-sm'],
      'base': tokens.fontSize['text-base'],
      'lg': tokens.fontSize['text-lg'],
      'xl': tokens.fontSize['text-xl'],
      '2xl': tokens.fontSize['text-2-xl'],
      '3xl': tokens.fontSize['text-3-xl'],
      '4xl': tokens.fontSize['text-4-xl'],
      '5xl': tokens.fontSize['text-5-xl'],
      '6xl': tokens.fontSize['text-6-xl'],
      '7xl': tokens.fontSize['text-7-xl']
    },
    screens: {
      'sm': breakpoints['sm'] + "px",
      'md': breakpoints['md'] + "px",
      'lg': breakpoints['lg'] + "px",
      'xl': breakpoints['xl'] + "px",
      '2xl': breakpoints['xxl'] + "px"
    },
    fontFamily: {
      sans: ['Satoshi', 'sans-serif'],
      serif: ['Courier New', 'serif'],
      mono: ['SF Mono', 'mono']
    },
    borderRadius: (_borderRadius = {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem'
    }, _borderRadius["DEFAULT"] = '4px', _borderRadius['md'] = '0.375rem', _borderRadius['lg'] = '0.5rem', _borderRadius['full'] = '9999px', _borderRadius['large'] = '12px', _borderRadius),
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'black': colors.black,
      'white': colors.white,
      'terminal': colors.terminal,
      'green': tokens.colors['color-palettes'].green['500'],
      'red': tokens.colors['color-palettes'].red['500'],
      'blue': tokens.colors['color-palettes'].blue['500'],
      'yellow': tokens.colors['color-palettes'].yellow['500'],
      'purple': tokens.colors['color-palettes'].purple['500'],
      'magenta': tokens.colors['color-palettes'].magenta['500'],
      'orange': tokens.colors['color-palettes'].orange['500'],
      'success': tokens.colors['color-palettes'].green['500'],
      'danger': tokens.colors['color-palettes'].red['500'],
      'info': tokens.colors['color-palettes'].blue['500'],
      'warning': tokens.colors['color-palettes'].orange['500']
    },
    extend: {
      colors: {
        'brand-scale': colorPalettes.brand,
        'green-scale': colorPalettes.green,
        'red-scale': colorPalettes.red,
        'blue-scale': colorPalettes.blue,
        'yellow-scale': colorPalettes.yellow,
        'purple-scale': colorPalettes.purple,
        'magenta-scale': colorPalettes.magenta,
        'orange-scale': colorPalettes.orange,
        'grey-light-scale': colorPalettes['grey-light'],
        'grey-dark-scale': colorPalettes['grey-dark']
      },
      spacing: tokens.spacing,
      backgroundColor: {
        body: "var(--bg-body)",
        window: "var(--bg-window)",
        button: "var(--bg-button)",
        "button-hover": "var(--bg-button-hover)",
        "button-active": "var(--bg-button-active)",
        "button-secondary": "var(--bg-button-secondary)",
        "button-secondary-hover": "var(--bg-button-secondary-hover)",
        "button-secondary-active": "var(--bg-button-secondary-active)",
        "success-hover": "var(--bg-success-hover)",
        "success-active": "var(--bg-success-active)",
        "info-hover": "var(--bg-info-hover)",
        "info-active": "var(--bg-info-active)",
        "warning-hover": "var(--bg-warning-hover)",
        "warning-active": "var(--bg-warning-active)",
        "danger-hover": "var(--bg-danger-hover)",
        "danger-active": "var(--bg-danger-active)",
        navbutton: "var(--bg-navbutton)",
        "navbutton-hover": "var(--bg-navbutton-hover)",
        "navbutton-active": "var(--bg-navbutton-active)",
        input: "var(--bg-input)",
        "input-focus": "var(--bg-input-focus)",
        "input-hover": "var(--bg-input-hover)",
        "checkbox-selected-enabled": "var(--bg-checkbox-selected-enabled)",
        "checkbox-selected-hover": "var(--bg-checkbox-selected-hover)",
        "checkbox-selected-active": "var(--bg-checkbox-selected-active)",
        "checkbox-unselected-enabled": "var(--bg-checkbox-unselected-enabled)",
        "checkbox-unselected-hover": "var(--bg-checkbox-unselected-hover)",
        "checkbox-unselected-active": "var(--bg-checkbox-unselected-active)"
      },
      textColor: (_textColor = {
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
        tertiary: "var(--text-tertiary)",
        button: "var(--text-button)",
        "button-hover": "var(--text-button-hover)",
        "button-active": "var(--text-button-active)",
        "button-secondary": "var(--text-button-secondary)",
        "button-secondary-hover": "var(--text-button-secondary-hover)",
        "button-secondary-active": "var(--text-button-secondary-active)",
        "button-success": "var(--text-button-success)",
        "button-success-hover": "var(--text-button-success-hover)",
        "button-success-active": "var(--text-button-success-active)",
        "button-info": "var(--text-button-info)",
        "button-info-hover": "var(--text-button-info-hover)",
        "button-info-active": "var(--text-button-info-active)",
        "button-warning": "var(--text-button-warning)",
        "button-warning-hover": "var(--text-button-warning-hover)",
        "button-warning-active": "var(--text-button-warning-active)",
        "button-danger": "var(--text-button-danger)",
        "button-danger-hover": "var(--text-button-danger-hover)",
        "button-danger-active": "var(--text-button-danger-active)",
        input: "var(--text-input)",
        navbutton: "var(--text-navbutton)",
        "navbutton-hover": "var(--text-navbutton-hover)",
        "navbutton-active": "var(--text-navbutton-active)"
      }, _textColor["input"] = "var(--text-input)", _textColor["input-focus"] = "var(--text-input-focus)", _textColor["input-hover"] = "var(--text-input-hover)", _textColor["checkbox-selected-enabled"] = "var(--text-checkbox-selected-enabled)", _textColor["checkbox-selected-hover"] = "var(--text-checkbox-selected-hover)", _textColor["checkbox-selected-active"] = "var(--text-checkbox-selected-active)", _textColor["checkbox-unselected-enabled"] = "var(--text-checkbox-unselected-enabled)", _textColor["checkbox-unselected-hover"] = "var(--text-checkbox-unselected-hover)", _textColor["checkbox-unselected-active"] = "var(--text-checkbox-unselected-active)", _textColor),
      borderColor: {
        body: "var(--border-body)",
        window: "var(--border-window)",
        button: "var(--border-button)",
        "button-hover": "var(--border-button-hover)",
        "button-active": "var(--border-button-active)",
        "button-secondary": "var(--border-button-secondary)",
        "button-secondary-hover": "var(--border-button-secondary-hover)",
        "button-secondary-active": "var(--border-button-secondary-active)",
        "button-success": "var(--border-button-success)",
        "button-success-hover": "var(--border-button-success-hover)",
        "button-success-active": "var(--border-button-success-active)",
        "button-info": "var(--border-button-info)",
        "button-info-hover": "var(--border-button-info-hover)",
        "button-info-active": "var(--border-button-info-active)",
        "button-warning": "var(--border-button-warning)",
        "button-warning-hover": "var(--border-button-warning-hover)",
        "button-warning-active": "var(--border-button-warning-active)",
        "button-danger": "var(--border-button-danger)",
        "button-danger-hover": "var(--border-button-danger-hover)",
        "button-danger-active": "var(--border-button-danger-active)",
        input: "var(--border-input)",
        "input-focus": "var(--border-input-focus)",
        "input-hover": "var(--border-input-hover)",
        "checkbox-selected-enabled": "var(--border-checkbox-selected-enabled)",
        "checkbox-selected-hover": "var(--border-checkbox-selected-hover)",
        "checkbox-selected-active": "var(--border-checkbox-selected-active)",
        "checkbox-unselected-enabled": "var(--border-checkbox-unselected-enabled)",
        "checkbox-unselected-hover": "var(--border-checkbox-unselected-hover)",
        "checkbox-unselected-active": "var(--border-checkbox-unselected-active)"
      }
    }
  },
  plugins: []
};