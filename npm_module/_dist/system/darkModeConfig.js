"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));
var _react = require("@emotion/react");
var _tokens = _interopRequireDefault(require("../tokens"));
var _templateObject;
var colors = _tokens["default"].colors;
var colorPalettes = colors['color-palettes'];
var colorsDarkTheme = colors.dark;
var colorsLightTheme = colors.light;
var darkModeConfig = (0, _react.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteralLoose2["default"])(["\n  .light {\n    color-scheme: light;\n    --bg-body: ", ";\n    --border-body: ", ";\n    --bg-window: ", ";\n    --border-window: ", ";\n\n    --text-primary: ", ";\n    --text-secondary: ", ";\n    --text-tertiary: ", ";\n\n    --bg-button: ", ";\n    --bg-button-hover: ", ";\n    --bg-button-active: ", ";\n\n    --bg-button-secondary: ", ";\n    --bg-button-secondary-hover: ", ";\n    --bg-button-secondary-active: ", ";\n\n    --bg-success-hover: ", ";\n    --bg-success-active: ", ";\n    --bg-info-hover: ", ";\n    --bg-info-active: ", ";\n    --bg-warning-hover: ", ";\n    --bg-warning-active: ", ";\n    --bg-danger-hover: ", ";\n    --bg-danger-active: ", ";\n\n    --text-button: ", ";\n    --text-button-hover: ", ";\n    --text-button-active: ", ";\n    --text-button-secondary: ", ";\n    --text-button-secondary-hover: ", ";\n    --text-button-secondary-active: ", ";\n    --text-button-success: ", ";\n    --text-button-success-hover: ", ";\n    --text-button-success-active: ", ";\n    --text-button-info: ", ";\n    --text-button-info-hover: ", ";\n    --text-button-info-active: ", ";\n    --text-button-warning: ", ";\n    --text-button-warning-hover: ", ";\n    --text-button-warning-active: ", ";\n    --text-button-danger: ", ";\n    --text-button-danger-hover: ", ";\n    --text-button-danger-active: ", ";\n\n    --border-button: ", ";\n    --border-button-hover: ", ";\n    --border-button-active: ", ";\n    --border-button-secondary: ", ";\n    --border-button-secondary-hover: ", ";\n    --border-button-secondary-active: ", ";\n    --border-button-success: ", ";\n    --border-button-success-hover: ", ";\n    --border-button-success-active: ", ";\n    --border-button-info: ", ";\n    --border-button-info-hover: ", ";\n    --border-button-info-active: ", ";\n    --border-button-warning: ", ";\n    --border-button-warning-hover: ", ";\n    --border-button-warning-active: ", ";\n    --border-button-danger: ", ";\n    --border-button-danger-hover: ", ";\n    --border-button-danger-active: ", ";\n    \n    --bg-navbutton: ", ";\n    --bg-navbutton-hover: ", ";\n    --bg-navbutton-active: ", ";\n    --bg-navbutton-selected: ", ";\n    \n    --text-navbutton: ", ";\n    --text-navbutton-hover: ", ";\n    --text-navbutton-active: ", ";\n    --text-navbutton-selected: ", ";\n    \n    --bg-input: ", ";\n    --bg-input-focus: ", ";\n    --bg-input-hover: ", ";\n\n    --text-input: ", ";\n    --text-input-focus: ", ";\n    --text-input-hover: ", ";\n\n    --border-input: ", ";\n    --border-input-focus: ", ";\n    --border-input-hover: ", ";\n\n    --bg-checkbox-selected-enabled: ", ";\n    --bg-checkbox-selected-hover: ", ";\n    --bg-checkbox-selected-active: ", ";\n    --bg-checkbox-unselected-enabled: ", ";\n    --bg-checkbox-unselected-hover: ", ";\n    --bg-checkbox-unselected-active: ", ";\n\n    --text-checkbox-selected-enabled: ", ";\n    --text-checkbox-selected-hover: ", ";\n    --text-checkbox-selected-active: ", ";\n    --text-checkbox-unselected-enabled: ", ";\n    --text-checkbox-unselected-hover: ", ";\n    --text-checkbox-unselected-active: ", ";\n\n    --border-checkbox-selected-enabled: ", ";\n    --border-checkbox-selected-hover: ", ";\n    --border-checkbox-selected-active: ", ";\n    --border-checkbox-unselected-enabled: ", ";\n    --border-checkbox-unselected-hover: ", ";\n    --border-checkbox-unselected-active: ", ";\n  }\n  .dark {\n    color-scheme: dark;\n    --bg-body: ", ";\n    --border-body: ", ";\n    --bg-window: ", ";\n    --border-window: ", ";\n\n    --text-primary: ", ";\n    --text-secondary: ", ";\n    --text-tertiary: ", ";\n\n    --bg-button: ", ";\n    --bg-button-hover: ", ";\n    --bg-button-active: ", ";\n\n    --bg-button-secondary: ", ";\n    --bg-button-secondary-hover: ", ";\n    --bg-button-secondary-active: ", ";\n\n    --bg-success-hover: ", ";\n    --bg-success-active: ", ";\n    --bg-info-hover: ", ";\n    --bg-info-active: ", ";\n    --bg-warning-hover: ", ";\n    --bg-warning-active: ", ";\n    --bg-danger-hover: ", ";\n    --bg-danger-active: ", ";\n\n    --text-button: ", ";\n    --text-button-hover: ", ";\n    --text-button-active: ", ";\n    --text-button-secondary: ", ";\n    --text-button-secondary-hover: ", ";\n    --text-button-secondary-active: ", ";\n    --text-button-success: ", ";\n    --text-button-success-hover: ", ";\n    --text-button-success-active: ", ";\n    --text-button-info: ", ";\n    --text-button-info-hover: ", ";\n    --text-button-info-active: ", ";\n    --text-button-warning: ", ";\n    --text-button-warning-hover: ", ";\n    --text-button-warning-active: ", ";\n    --text-button-danger: ", ";\n    --text-button-danger-hover: ", ";\n    --text-button-danger-active: ", ";\n\n    --border-button: ", ";\n    --border-button-hover: ", ";\n    --border-button-active: ", ";\n    --border-button-secondary: ", ";\n    --border-button-secondary-hover: ", ";\n    --border-button-secondary-active: ", ";\n    --border-button-success: ", ";\n    --border-button-success-hover: ", ";\n    --border-button-success-active: ", ";\n    --border-button-info: ", ";\n    --border-button-info-hover: ", ";\n    --border-button-info-active: ", ";\n    --border-button-warning: ", ";\n    --border-button-warning-hover: ", ";\n    --border-button-warning-active: ", ";\n    --border-button-danger: ", ";\n    --border-button-danger-hover: ", ";\n    --border-button-danger-active: ", ";\n    \n    --bg-navbutton: ", ";\n    --bg-navbutton-hover: ", ";\n    --bg-navbutton-active: ", ";\n    --bg-navbutton-selected: ", ";\n    \n    --text-navbutton: ", ";\n    --text-navbutton-hover: ", ";\n    --text-navbutton-active: ", ";\n    --text-navbutton-selected: ", ";\n    \n    --bg-input: ", ";\n    --bg-input-focus: ", ";\n    --bg-input-hover: ", ";\n\n    --text-input: ", ";\n    --text-input-focus: ", ";\n    --text-input-hover: ", ";\n\n    --border-input: ", ";\n    --border-input-focus: ", ";\n    --border-input-hover: ", ";\n\n    --bg-checkbox-selected-enabled: ", ";\n    --bg-checkbox-selected-hover: ", ";\n    --bg-checkbox-selected-active: ", ";\n    --bg-checkbox-unselected-enabled: ", ";\n    --bg-checkbox-unselected-hover: ", ";\n    --bg-checkbox-unselected-active: ", ";\n\n    --text-checkbox-selected-enabled: ", ";\n    --text-checkbox-selected-hover: ", ";\n    --text-checkbox-selected-active: ", ";\n    --text-checkbox-unselected-enabled: ", ";\n    --text-checkbox-unselected-hover: ", ";\n    --text-checkbox-unselected-active: ", ";\n\n    --border-checkbox-selected-enabled: ", ";\n    --border-checkbox-selected-hover: ", ";\n    --border-checkbox-selected-active: ", ";\n    --border-checkbox-unselected-enabled: ", ";\n    --border-checkbox-unselected-hover: ", ";\n    --border-checkbox-unselected-active: ", ";\n  }\n  body {\n    -webkit-tap-highlight-color: ", ";\n    ", "\n  }\n"])), colorsLightTheme['body-bg'], colorsLightTheme['body-border'], colorsLightTheme['window-bg'], colorsLightTheme['window-border'], colorsLightTheme['text-primary'], colorsLightTheme['text-secondary'], colorsLightTheme['text-tertiary'], colorsLightTheme.buttons["default"].bg.enabled, colorsLightTheme.buttons["default"].bg.hover, colorsLightTheme.buttons["default"].bg.active, colorsLightTheme.buttons.secondary.bg.enabled, colorsLightTheme.buttons.secondary.bg.hover, colorsLightTheme.buttons.secondary.bg.active, colorsLightTheme.buttons.success.bg.hover, colorsLightTheme.buttons.success.bg.active, colorsLightTheme.buttons.info.bg.hover, colorsLightTheme.buttons.info.bg.active, colorsLightTheme.buttons.warning.bg.hover, colorsLightTheme.buttons.warning.bg.active, colorsLightTheme.buttons.danger.bg.hover, colorsLightTheme.buttons.danger.bg.active, colorsLightTheme.buttons["default"].text.enabled, colorsLightTheme.buttons["default"].text.hover, colorsLightTheme.buttons["default"].text.active, colorsLightTheme.buttons.secondary.text.enabled, colorsLightTheme.buttons.secondary.text.hover, colorsLightTheme.buttons.secondary.text.active, colorsLightTheme.buttons.success.text.enabled, colorsLightTheme.buttons.success.text.hover, colorsLightTheme.buttons.success.text.active, colorsLightTheme.buttons.info.text.enabled, colorsLightTheme.buttons.info.text.hover, colorsLightTheme.buttons.info.text.active, colorsLightTheme.buttons.warning.text.enabled, colorsLightTheme.buttons.warning.text.hover, colorsLightTheme.buttons.warning.text.active, colorsLightTheme.buttons.danger.text.enabled, colorsLightTheme.buttons.danger.text.hover, colorsLightTheme.buttons.danger.text.active, colorsLightTheme.buttons["default"].border.enabled, colorsLightTheme.buttons["default"].border.hover, colorsLightTheme.buttons["default"].border.active, colorsLightTheme.buttons.secondary.border.enabled, colorsLightTheme.buttons.secondary.border.hover, colorsLightTheme.buttons.secondary.border.active, colorsLightTheme.buttons.success.border.enabled, colorsLightTheme.buttons.success.border.hover, colorsLightTheme.buttons.success.border.active, colorsLightTheme.buttons.info.border.enabled, colorsLightTheme.buttons.info.border.hover, colorsLightTheme.buttons.info.border.active, colorsLightTheme.buttons.warning.border.enabled, colorsLightTheme.buttons.warning.border.hover, colorsLightTheme.buttons.warning.border.active, colorsLightTheme.buttons.danger.border.enabled, colorsLightTheme.buttons.danger.border.hover, colorsLightTheme.buttons.danger.border.active, colorsLightTheme.navbutton.bg.enabled, colorsLightTheme.navbutton.bg.hover, colorsLightTheme.navbutton.bg.active, colorsLightTheme.navbutton.bg.selected, colorsLightTheme.navbutton.text.enabled, colorsLightTheme.navbutton.text.hover, colorsLightTheme.navbutton.text.active, colorsLightTheme.navbutton.text.selected, colorsLightTheme.buttons["default"].bg.enabled, colorsLightTheme.buttons["default"].bg.enabled, colorsLightTheme.buttons["default"].bg.hover, colorsLightTheme.buttons["default"].text.enabled, colorsLightTheme.buttons["default"].text.enabled, colorsLightTheme.buttons["default"].text.hover, colorsLightTheme.buttons["default"].border.enabled, colorsLightTheme.buttons["default"].border.enabled, colorsLightTheme.buttons["default"].border.hover, colorsLightTheme.checkboxes.selected.bg.enabled, colorsLightTheme.checkboxes.selected.bg.hover, colorsLightTheme.checkboxes.selected.bg.active, colorsLightTheme.checkboxes.unselected.bg.enabled, colorsLightTheme.checkboxes.unselected.bg.hover, colorsLightTheme.checkboxes.unselected.bg.active, colorsLightTheme.checkboxes.selected.text.enabled, colorsLightTheme.checkboxes.selected.text.hover, colorsLightTheme.checkboxes.selected.text.active, colorsLightTheme.checkboxes.unselected.text.enabled, colorsLightTheme.checkboxes.unselected.text.hover, colorsLightTheme.checkboxes.unselected.text.active, colorsLightTheme.checkboxes.selected.border.enabled, colorsLightTheme.checkboxes.selected.border.hover, colorsLightTheme.checkboxes.selected.border.active, colorsLightTheme.checkboxes.unselected.border.enabled, colorsLightTheme.checkboxes.unselected.border.hover, colorsLightTheme.checkboxes.unselected.border.active, colorsDarkTheme['body-bg'], colorsDarkTheme['body-border'], colorsDarkTheme['window-bg'], colorsDarkTheme['window-border'], colorsDarkTheme['text-primary'], colorsDarkTheme['text-secondary'], colorsDarkTheme['text-tertiary'], colorsDarkTheme.buttons["default"].bg.enabled, colorsDarkTheme.buttons["default"].bg.hover, colorsDarkTheme.buttons["default"].bg.active, colorsDarkTheme.buttons.secondary.bg.enabled, colorsDarkTheme.buttons.secondary.bg.hover, colorsDarkTheme.buttons.secondary.bg.active, colorsDarkTheme.buttons.success.bg.hover, colorsDarkTheme.buttons.success.bg.active, colorsDarkTheme.buttons.info.bg.hover, colorsDarkTheme.buttons.info.bg.active, colorsDarkTheme.buttons.warning.bg.hover, colorsDarkTheme.buttons.warning.bg.active, colorsDarkTheme.buttons.danger.bg.hover, colorsDarkTheme.buttons.danger.bg.active, colorsDarkTheme.buttons["default"].text.enabled, colorsDarkTheme.buttons["default"].text.hover, colorsDarkTheme.buttons["default"].text.active, colorsDarkTheme.buttons.secondary.text.enabled, colorsDarkTheme.buttons.secondary.text.hover, colorsDarkTheme.buttons.secondary.text.active, colorsDarkTheme.buttons.success.text.enabled, colorsDarkTheme.buttons.success.text.hover, colorsDarkTheme.buttons.success.text.active, colorsDarkTheme.buttons.info.text.enabled, colorsDarkTheme.buttons.info.text.hover, colorsDarkTheme.buttons.info.text.active, colorsDarkTheme.buttons.warning.text.enabled, colorsDarkTheme.buttons.warning.text.hover, colorsDarkTheme.buttons.warning.text.active, colorsDarkTheme.buttons.danger.text.enabled, colorsDarkTheme.buttons.danger.text.hover, colorsDarkTheme.buttons.danger.text.active, colorsDarkTheme.buttons["default"].border.enabled, colorsDarkTheme.buttons["default"].border.hover, colorsDarkTheme.buttons["default"].border.active, colorsDarkTheme.buttons.secondary.border.enabled, colorsDarkTheme.buttons.secondary.border.hover, colorsDarkTheme.buttons.secondary.border.active, colorsDarkTheme.buttons.success.border.enabled, colorsDarkTheme.buttons.success.border.hover, colorsDarkTheme.buttons.success.border.active, colorsDarkTheme.buttons.info.border.enabled, colorsDarkTheme.buttons.info.border.hover, colorsDarkTheme.buttons.info.border.active, colorsDarkTheme.buttons.warning.border.enabled, colorsDarkTheme.buttons.warning.border.hover, colorsDarkTheme.buttons.warning.border.active, colorsDarkTheme.buttons.danger.border.enabled, colorsDarkTheme.buttons.danger.border.hover, colorsDarkTheme.buttons.danger.border.active, colorsDarkTheme.navbutton.bg.enabled, colorsDarkTheme.navbutton.bg.hover, colorsDarkTheme.navbutton.bg.active, colorsDarkTheme.navbutton.bg.selected, colorsDarkTheme.navbutton.text.enabled, colorsDarkTheme.navbutton.text.hover, colorsDarkTheme.navbutton.text.active, colorsDarkTheme.navbutton.text.selected, colorsDarkTheme.buttons["default"].bg.enabled, colorsDarkTheme.buttons["default"].bg.enabled, colorsDarkTheme.buttons["default"].bg.hover, colorsDarkTheme.buttons["default"].text.enabled, colorsDarkTheme.buttons["default"].text.enabled, colorsDarkTheme.buttons["default"].text.hover, colorsDarkTheme.buttons["default"].border.enabled, colorsDarkTheme.buttons["default"].border.enabled, colorsDarkTheme.buttons["default"].border.hover, colorsDarkTheme.checkboxes.selected.bg.enabled, colorsDarkTheme.checkboxes.selected.bg.hover, colorsDarkTheme.checkboxes.selected.bg.active, colorsDarkTheme.checkboxes.unselected.bg.enabled, colorsDarkTheme.checkboxes.unselected.bg.hover, colorsDarkTheme.checkboxes.unselected.bg.active, colorsDarkTheme.checkboxes.selected.text.enabled, colorsDarkTheme.checkboxes.selected.text.hover, colorsDarkTheme.checkboxes.selected.text.active, colorsDarkTheme.checkboxes.unselected.text.enabled, colorsDarkTheme.checkboxes.unselected.text.hover, colorsDarkTheme.checkboxes.unselected.text.active, colorsDarkTheme.checkboxes.selected.border.enabled, colorsDarkTheme.checkboxes.selected.border.hover, colorsDarkTheme.checkboxes.selected.border.active, colorsDarkTheme.checkboxes.unselected.border.enabled, colorsDarkTheme.checkboxes.unselected.border.hover, colorsDarkTheme.checkboxes.unselected.border.active, colorPalettes.yellow['500'], {
  "WebkitFontSmoothing": "antialiased",
  "MozOsxFontSmoothing": "grayscale"
});
var _default = darkModeConfig;
exports["default"] = _default;