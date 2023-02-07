"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _styledComponents = require("styled-components");
var _index = _interopRequireDefault(require("../tokens/index.json"));
var colors = _index["default"].colors;
var colorPalettes = colors.color_palettes;
var colorsDarkTheme = colors.dark;
var colorsLightTheme = colors.light;
var HBUIColors = (0, _styledComponents.createGlobalStyle)([".light{color-scheme:light;--bg-body:", ";--border-body:", ";--bg-window:", ";--border-window:", ";--text-primary:", ";--text-secondary:", ";--text-tertiary:", ";--bg-button:", ";--bg-button-hover:", ";--bg-button-active:", ";--bg-button-secondary:", ";--bg-button-secondary-hover:", ";--bg-button-secondary-active:", ";--bg-success-hover:", ";--bg-success-active:", ";--bg-info-hover:", ";--bg-info-active:", ";--bg-warning-hover:", ";--bg-warning-active:", ";--bg-danger-hover:", ";--bg-danger-active:", ";--text-button:", ";--text-button-hover:", ";--text-button-active:", ";--text-button-secondary:", ";--text-button-secondary-hover:", ";--text-button-secondary-active:", ";--text-button-success:", ";--text-button-success-hover:", ";--text-button-success-active:", ";--text-button-info:", ";--text-button-info-hover:", ";--text-button-info-active:", ";--text-button-warning:", ";--text-button-warning-hover:", ";--text-button-warning-active:", ";--text-button-danger:", ";--text-button-danger-hover:", ";--text-button-danger-active:", ";--border-button:", ";--border-button-hover:", ";--border-button-active:", ";--border-button-secondary:", ";--border-button-secondary-hover:", ";--border-button-secondary-active:", ";--border-button-success:", ";--border-button-success-hover:", ";--border-button-success-active:", ";--border-button-info:", ";--border-button-info-hover:", ";--border-button-info-active:", ";--border-button-warning:", ";--border-button-warning-hover:", ";--border-button-warning-active:", ";--border-button-danger:", ";--border-button-danger-hover:", ";--border-button-danger-active:", ";--bg-input:", ";--bg-input-focus:", ";--bg-input-hover:", ";--text-input:", ";--text-input-focus:", ";--text-input-hover:", ";--text-input-prefix:", ";--text-input-field_label:", ";--border-input:", ";--border-input-focus:", ";--bg-checkbox-selected-enabled:", ";--bg-checkbox-selected-hover:", ";--bg-checkbox-selected-active:", ";--bg-checkbox-unselected-enabled:", ";--bg-checkbox-unselected-hover:", ";--bg-checkbox-unselected-active:", ";--text-checkbox-selected-enabled:", ";--text-checkbox-selected-hover:", ";--text-checkbox-selected-active:", ";--text-checkbox-unselected-enabled:", ";--text-checkbox-unselected-hover:", ";--text-checkbox-unselected-active:", ";--border-checkbox-selected-enabled:", ";--border-checkbox-selected-hover:", ";--border-checkbox-selected-active:", ";--border-checkbox-unselected-enabled:", ";--border-checkbox-unselected-hover:", ";--border-checkbox-unselected-active:", ";}.dark{color-scheme:dark;--bg-body:", ";--border-body:", ";--bg-window:", ";--border-window:", ";--text-primary:", ";--text-secondary:", ";--text-tertiary:", ";--bg-button:", ";--bg-button-hover:", ";--bg-button-active:", ";--bg-button-secondary:", ";--bg-button-secondary-hover:", ";--bg-button-secondary-active:", ";--bg-success-hover:", ";--bg-success-active:", ";--bg-info-hover:", ";--bg-info-active:", ";--bg-warning-hover:", ";--bg-warning-active:", ";--bg-danger-hover:", ";--bg-danger-active:", ";--text-button:", ";--text-button-hover:", ";--text-button-active:", ";--text-button-secondary:", ";--text-button-secondary-hover:", ";--text-button-secondary-active:", ";--text-button-success:", ";--text-button-success-hover:", ";--text-button-success-active:", ";--text-button-info:", ";--text-button-info-hover:", ";--text-button-info-active:", ";--text-button-warning:", ";--text-button-warning-hover:", ";--text-button-warning-active:", ";--text-button-danger:", ";--text-button-danger-hover:", ";--text-button-danger-active:", ";--border-button:", ";--border-button-hover:", ";--border-button-active:", ";--border-button-secondary:", ";--border-button-secondary-hover:", ";--border-button-secondary-active:", ";--border-button-success:", ";--border-button-success-hover:", ";--border-button-success-active:", ";--border-button-info:", ";--border-button-info-hover:", ";--border-button-info-active:", ";--border-button-warning:", ";--border-button-warning-hover:", ";--border-button-warning-active:", ";--border-button-danger:", ";--border-button-danger-hover:", ";--border-button-danger-active:", ";--bg-input:", ";--bg-input-focus:", ";--bg-input-hover:", ";--text-input:", ";--text-input-focus:", ";--text-input-hover:", ";--text-input-prefix:", ";--text-input-field_label:", ";--border-input:", ";--border-input-focus:", ";--bg-checkbox-selected-enabled:", ";--bg-checkbox-selected-hover:", ";--bg-checkbox-selected-active:", ";--bg-checkbox-unselected-enabled:", ";--bg-checkbox-unselected-hover:", ";--bg-checkbox-unselected-active:", ";--text-checkbox-selected-enabled:", ";--text-checkbox-selected-hover:", ";--text-checkbox-selected-active:", ";--text-checkbox-unselected-enabled:", ";--text-checkbox-unselected-hover:", ";--text-checkbox-unselected-active:", ";--border-checkbox-selected-enabled:", ";--border-checkbox-selected-hover:", ";--border-checkbox-selected-active:", ";--border-checkbox-unselected-enabled:", ";--border-checkbox-unselected-hover:", ";--border-checkbox-unselected-active:", ";}body{-webkit-tap-highlight-color:", ";", "}"], colorsLightTheme.body_bg, colorsLightTheme.body_border, colorsLightTheme.window_bg, colorsLightTheme.window_border, colorsLightTheme.text_primary, colorsLightTheme.text_secondary, colorsLightTheme.text_tertiary, colorsLightTheme.buttons["default"].bg.enabled, colorsLightTheme.buttons["default"].bg.hover, colorsLightTheme.buttons["default"].bg.active, colorsLightTheme.buttons.secondary.bg.enabled, colorsLightTheme.buttons.secondary.bg.hover, colorsLightTheme.buttons.secondary.bg.active, colorsLightTheme.buttons.success.bg.hover, colorsLightTheme.buttons.success.bg.active, colorsLightTheme.buttons.info.bg.hover, colorsLightTheme.buttons.info.bg.active, colorsLightTheme.buttons.warning.bg.hover, colorsLightTheme.buttons.warning.bg.active, colorsLightTheme.buttons.danger.bg.hover, colorsLightTheme.buttons.danger.bg.active, colorsLightTheme.buttons["default"].text.enabled, colorsLightTheme.buttons["default"].text.hover, colorsLightTheme.buttons["default"].text.active, colorsLightTheme.buttons.secondary.text.enabled, colorsLightTheme.buttons.secondary.text.hover, colorsLightTheme.buttons.secondary.text.active, colorsLightTheme.buttons.success.text.enabled, colorsLightTheme.buttons.success.text.hover, colorsLightTheme.buttons.success.text.active, colorsLightTheme.buttons.info.text.enabled, colorsLightTheme.buttons.info.text.hover, colorsLightTheme.buttons.info.text.active, colorsLightTheme.buttons.warning.text.enabled, colorsLightTheme.buttons.warning.text.hover, colorsLightTheme.buttons.warning.text.active, colorsLightTheme.buttons.danger.text.enabled, colorsLightTheme.buttons.danger.text.hover, colorsLightTheme.buttons.danger.text.active, colorsLightTheme.buttons["default"].border.enabled, colorsLightTheme.buttons["default"].border.hover, colorsLightTheme.buttons["default"].border.active, colorsLightTheme.buttons.secondary.border.enabled, colorsLightTheme.buttons.secondary.border.hover, colorsLightTheme.buttons.secondary.border.active, colorsLightTheme.buttons.success.border.enabled, colorsLightTheme.buttons.success.border.hover, colorsLightTheme.buttons.success.border.active, colorsLightTheme.buttons.info.border.enabled, colorsLightTheme.buttons.info.border.hover, colorsLightTheme.buttons.info.border.active, colorsLightTheme.buttons.warning.border.enabled, colorsLightTheme.buttons.warning.border.hover, colorsLightTheme.buttons.warning.border.active, colorsLightTheme.buttons.danger.border.enabled, colorsLightTheme.buttons.danger.border.hover, colorsLightTheme.buttons.danger.border.active, colorsLightTheme.input.bg.enabled, colorsLightTheme.input.bg.enabled, colorsLightTheme.input.bg.hover, colorsLightTheme.input.text.enabled, colorsLightTheme.input.text.focus, colorsLightTheme.input.text.hover, colorsLightTheme.input.text.prefix, colorsLightTheme.input.text.field_label, colorsLightTheme.input.border["default"], colorsLightTheme.input.border.focus, colorsLightTheme.checkbox.selected.bg.enabled, colorsLightTheme.checkbox.selected.bg.hover, colorsLightTheme.checkbox.selected.bg.active, colorsLightTheme.checkbox.unselected.bg.enabled, colorsLightTheme.checkbox.unselected.bg.hover, colorsLightTheme.checkbox.unselected.bg.active, colorsLightTheme.checkbox.selected.text.enabled, colorsLightTheme.checkbox.selected.text.hover, colorsLightTheme.checkbox.selected.text.active, colorsLightTheme.checkbox.unselected.text.enabled, colorsLightTheme.checkbox.unselected.text.hover, colorsLightTheme.checkbox.unselected.text.active, colorsLightTheme.checkbox.selected.border.enabled, colorsLightTheme.checkbox.selected.border.hover, colorsLightTheme.checkbox.selected.border.active, colorsLightTheme.checkbox.unselected.border.enabled, colorsLightTheme.checkbox.unselected.border.hover, colorsLightTheme.checkbox.unselected.border.active, colorsDarkTheme.body_bg, colorsDarkTheme.body_border, colorsDarkTheme.window_bg, colorsDarkTheme.window_border, colorsDarkTheme.text_primary, colorsDarkTheme.text_secondary, colorsDarkTheme.text_tertiary, colorsDarkTheme.buttons["default"].bg.enabled, colorsDarkTheme.buttons["default"].bg.hover, colorsDarkTheme.buttons["default"].bg.active, colorsDarkTheme.buttons.secondary.bg.enabled, colorsDarkTheme.buttons.secondary.bg.hover, colorsDarkTheme.buttons.secondary.bg.active, colorsDarkTheme.buttons.success.bg.hover, colorsDarkTheme.buttons.success.bg.active, colorsDarkTheme.buttons.info.bg.hover, colorsDarkTheme.buttons.info.bg.active, colorsDarkTheme.buttons.warning.bg.hover, colorsDarkTheme.buttons.warning.bg.active, colorsDarkTheme.buttons.danger.bg.hover, colorsDarkTheme.buttons.danger.bg.active, colorsDarkTheme.buttons["default"].text.enabled, colorsDarkTheme.buttons["default"].text.hover, colorsDarkTheme.buttons["default"].text.active, colorsDarkTheme.buttons.secondary.text.enabled, colorsDarkTheme.buttons.secondary.text.hover, colorsDarkTheme.buttons.secondary.text.active, colorsDarkTheme.buttons.success.text.enabled, colorsDarkTheme.buttons.success.text.hover, colorsDarkTheme.buttons.success.text.active, colorsDarkTheme.buttons.info.text.enabled, colorsDarkTheme.buttons.info.text.hover, colorsDarkTheme.buttons.info.text.active, colorsDarkTheme.buttons.warning.text.enabled, colorsDarkTheme.buttons.warning.text.hover, colorsDarkTheme.buttons.warning.text.active, colorsDarkTheme.buttons.danger.text.enabled, colorsDarkTheme.buttons.danger.text.hover, colorsDarkTheme.buttons.danger.text.active, colorsDarkTheme.buttons["default"].border.enabled, colorsDarkTheme.buttons["default"].border.hover, colorsDarkTheme.buttons["default"].border.active, colorsDarkTheme.buttons.secondary.border.enabled, colorsDarkTheme.buttons.secondary.border.hover, colorsDarkTheme.buttons.secondary.border.active, colorsDarkTheme.buttons.success.border.enabled, colorsDarkTheme.buttons.success.border.hover, colorsDarkTheme.buttons.success.border.active, colorsDarkTheme.buttons.info.border.enabled, colorsDarkTheme.buttons.info.border.hover, colorsDarkTheme.buttons.info.border.active, colorsDarkTheme.buttons.warning.border.enabled, colorsDarkTheme.buttons.warning.border.hover, colorsDarkTheme.buttons.warning.border.active, colorsDarkTheme.buttons.danger.border.enabled, colorsDarkTheme.buttons.danger.border.hover, colorsDarkTheme.buttons.danger.border.active, colorsDarkTheme.input.bg.enabled, colorsDarkTheme.input.bg.enabled, colorsDarkTheme.input.bg.hover, colorsDarkTheme.input.text.enabled, colorsDarkTheme.input.text.focus, colorsDarkTheme.input.text.hover, colorsDarkTheme.input.text.prefix, colorsDarkTheme.input.text.field_label, colorsDarkTheme.input.border["default"], colorsDarkTheme.input.border.focus, colorsDarkTheme.checkbox.selected.bg.enabled, colorsDarkTheme.checkbox.selected.bg.hover, colorsDarkTheme.checkbox.selected.bg.active, colorsDarkTheme.checkbox.unselected.bg.enabled, colorsDarkTheme.checkbox.unselected.bg.hover, colorsDarkTheme.checkbox.unselected.bg.active, colorsDarkTheme.checkbox.selected.text.enabled, colorsDarkTheme.checkbox.selected.text.hover, colorsDarkTheme.checkbox.selected.text.active, colorsDarkTheme.checkbox.unselected.text.enabled, colorsDarkTheme.checkbox.unselected.text.hover, colorsDarkTheme.checkbox.unselected.text.active, colorsDarkTheme.checkbox.selected.border.enabled, colorsDarkTheme.checkbox.selected.border.hover, colorsDarkTheme.checkbox.selected.border.active, colorsDarkTheme.checkbox.unselected.border.enabled, colorsDarkTheme.checkbox.unselected.border.hover, colorsDarkTheme.checkbox.unselected.border.active, colorPalettes.yellow['500'], {
  "WebkitFontSmoothing": "antialiased",
  "MozOsxFontSmoothing": "grayscale"
});
var _default = HBUIColors;
exports["default"] = _default;