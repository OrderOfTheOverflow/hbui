"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
exports.__esModule = true;
exports["default"] = Modal;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _react = _interopRequireWildcard(require("react"));
var _react2 = require("@headlessui/react");
var _Transition = _interopRequireDefault(require("../../system/Transition"));
var _buttons = require("../../elements/buttons");
var _typography = require("../../elements/typography");
var _layout = require("../../elements/layout");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */

/**
 * HeadlessUI "Dialog (Modal)"
 * Customized for twin.macro + typescript
 * https://headlessui.dev/react/dialog
 */

function Modal(_ref) {
  var children = _ref.children,
    dialogProps = _ref.dialogProps,
    contentProps = _ref.contentProps,
    dialogOverlayProps = _ref.dialogOverlayProps,
    titleProps = _ref.titleProps,
    descriptionProps = _ref.descriptionProps;
  var _useState = (0, _react.useState)(false),
    isOpen = _useState[0],
    setIsOpen = _useState[1];
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }
  function handleChildenKeyDown(e) {
    console.log('e', e);
    console.log('e.target.key', e.target.key);
  }
  return /*#__PURE__*/_react["default"].createElement("div", null, isOpen && /*#__PURE__*/_react["default"].createElement(_StyledDialog, Object.assign({
    onClose: closeModal,
    open: isOpen
  }, dialogProps), /*#__PURE__*/_react["default"].createElement(_StyledDiv, null, /*#__PURE__*/_react["default"].createElement(_StyledDialogOverlay, dialogOverlayProps), /*#__PURE__*/_react["default"].createElement(CenterAlignmentHack, null), /*#__PURE__*/_react["default"].createElement(_StyledDiv2, null, /*#__PURE__*/_react["default"].createElement(Content, Object.assign({}, contentProps, {
    titleProps: titleProps,
    descriptionProps: descriptionProps,
    closeModal: function closeModal() {
      return setIsOpen(false);
    }
  }))))), /*#__PURE__*/_react["default"].createElement(_StyledDiv3, {
    onClick: function onClick() {
      return setIsOpen(!isOpen);
    }
  }, children));
}
function Content(_ref2) {
  var title = _ref2.title,
    subtitle = _ref2.subtitle,
    content = _ref2.content,
    closeModal = _ref2.closeModal,
    closeLabel = _ref2.closeLabel,
    closeLabelB = _ref2.closeLabelB,
    titleProps = _ref2.titleProps,
    descriptionProps = _ref2.descriptionProps,
    closeLabelVariant = _ref2.closeLabelVariant,
    closeLabelBVariant = _ref2.closeLabelBVariant,
    closeLabelCallback = _ref2.closeLabelCallback,
    closeLabelBCallback = _ref2.closeLabelBCallback;
  var handleButtonA = function handleButtonA() {
    closeModal();
    if (closeLabelCallback) {
      closeLabelCallback();
    }
  };
  var handleButtonB = function handleButtonB() {
    closeModal();
    if (closeLabelBCallback) {
      closeLabelBCallback();
    }
  };
  return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement(_react2.Dialog.Title, Object.assign({
    as: _typography.H6
  }, titleProps), title), subtitle && /*#__PURE__*/_react["default"].createElement(_StyledDialogDescription, Object.assign({}, descriptionProps, {
    as: _typography.P
  }), subtitle), /*#__PURE__*/_react["default"].createElement(_StyledSeparator, null), /*#__PURE__*/_react["default"].createElement(_StyledDiv4, null, content), /*#__PURE__*/_react["default"].createElement(_StyledDiv5, null, closeLabelB && /*#__PURE__*/_react["default"].createElement(_buttons.Button, {
    onClick: handleButtonB,
    variant: closeLabelBVariant || 'secondary'
  }, closeLabelB), /*#__PURE__*/_react["default"].createElement(_buttons.Button, {
    onClick: handleButtonA,
    variant: closeLabelVariant || 'success'
  }, closeLabel)));
}
function Trigger(_ref3) {
  var label = _ref3.label,
    openModal = _ref3.openModal;
  return /*#__PURE__*/_react["default"].createElement(_StyledButton, {
    type: "button",
    onClick: openModal
  }, label);
}

/* This element is to trick the browser into centering the modal contents. */
function CenterAlignmentHack() {
  return /*#__PURE__*/_react["default"].createElement(_StyledSpan, {
    "aria-hidden": "true"
  }, "\u200B");
}
var overlayTransitionProps = {
  enter: {
    "transitionDuration": "300ms",
    "transitionTimingFunction": "cubic-bezier(0, 0, 0.2, 1)"
  },
  enterFrom: {
    "opacity": "0"
  },
  enterTo: {
    "opacity": "1"
  },
  leave: {
    "transitionDuration": "200ms",
    "transitionTimingFunction": "cubic-bezier(0.4, 0, 1, 1)"
  },
  leaveFrom: {
    "opacity": "1"
  },
  leaveTo: {
    "opacity": "0"
  }
};
var contentTransitionProps = {
  enter: {
    "transitionDuration": "300ms",
    "transitionTimingFunction": "cubic-bezier(0, 0, 0.2, 1)"
  },
  enterFrom: {
    "--tw-scale-x": ".95",
    "--tw-scale-y": ".95",
    "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
    "opacity": "0"
  },
  enterTo: {
    "--tw-scale-x": "1",
    "--tw-scale-y": "1",
    "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
    "opacity": "1"
  },
  leave: {
    "transitionDuration": "200ms",
    "transitionTimingFunction": "cubic-bezier(0.4, 0, 1, 1)"
  },
  leaveFrom: {
    "--tw-scale-x": "1",
    "--tw-scale-y": "1",
    "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
    "opacity": "1"
  },
  leaveTo: {
    "--tw-scale-x": ".95",
    "--tw-scale-y": ".95",
    "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
    "opacity": "0"
  }
};
var _StyledDialog = (0, _styledComponents["default"])(_react2.Dialog).withConfig({
  displayName: "modal___StyledDialog",
  componentId: "sc-8tkzsr-0"
})({
  "position": "fixed",
  "top": "0px",
  "right": "0px",
  "bottom": "0px",
  "left": "0px",
  "zIndex": "10",
  "overflowY": "auto"
});
var _StyledDiv = (0, _styledComponents["default"])("div").withConfig({
  displayName: "modal___StyledDiv",
  componentId: "sc-8tkzsr-1"
})({
  "minHeight": "100vh",
  "paddingLeft": "1rem",
  "paddingRight": "1rem",
  "textAlign": "center"
});
var _StyledDialogOverlay = (0, _styledComponents["default"])(_react2.Dialog.Overlay).withConfig({
  displayName: "modal___StyledDialogOverlay",
  componentId: "sc-8tkzsr-2"
})({
  "position": "fixed",
  "top": "0px",
  "right": "0px",
  "bottom": "0px",
  "left": "0px",
  "--tw-bg-opacity": "1",
  "backgroundColor": "rgb(0 0 0 / var(--tw-bg-opacity))",
  "opacity": "0.5"
});
var _StyledDiv2 = (0, _styledComponents["default"])("div").withConfig({
  displayName: "modal___StyledDiv2",
  componentId: "sc-8tkzsr-3"
})({
  "marginTop": "2rem",
  "marginBottom": "2rem",
  "display": "inline-block",
  "width": "100%",
  "maxWidth": "28rem",
  "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
  "overflow": "hidden",
  "borderColor": "var(--border-window)",
  "backgroundColor": "var(--bg-window)",
  "paddingTop": "1rem",
  "paddingBottom": "1rem",
  "paddingLeft": "1.5rem",
  "paddingRight": "1.5rem",
  "textAlign": "left",
  "verticalAlign": "middle",
  "--tw-text-opacity": "1",
  "color": "rgb(117 126 132 / var(--tw-text-opacity))",
  "--tw-shadow": "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
  "--tw-shadow-colored": "0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color)",
  "boxShadow": "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
  "transitionProperty": "all",
  "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
  "transitionDuration": "150ms"
});
var _StyledDiv3 = (0, _styledComponents["default"])("div").withConfig({
  displayName: "modal___StyledDiv3",
  componentId: "sc-8tkzsr-4"
})({
  "display": "inline-flex"
});
var _StyledDialogDescription = (0, _styledComponents["default"])(_react2.Dialog.Description).withConfig({
  displayName: "modal___StyledDialogDescription",
  componentId: "sc-8tkzsr-5"
})({
  "lineHeight": "1",
  "color": "var(--text-tertiary)"
});
var _StyledSeparator = (0, _styledComponents["default"])(_layout.Separator).withConfig({
  displayName: "modal___StyledSeparator",
  componentId: "sc-8tkzsr-6"
})({
  "marginTop": "16px",
  "marginBottom": "16px"
});
var _StyledDiv4 = (0, _styledComponents["default"])("div").withConfig({
  displayName: "modal___StyledDiv4",
  componentId: "sc-8tkzsr-7"
})({
  "fontSize": "0.8125rem",
  "--tw-text-opacity": "1",
  "color": "rgb(201 205 207 / var(--tw-text-opacity))"
});
var _StyledDiv5 = (0, _styledComponents["default"])("div").withConfig({
  displayName: "modal___StyledDiv5",
  componentId: "sc-8tkzsr-8"
})({
  "marginTop": "2rem",
  "display": "flex",
  "justifyContent": "flex-end",
  "gap": "1rem"
});
var _StyledButton = (0, _styledComponents["default"])("button").withConfig({
  displayName: "modal___StyledButton",
  componentId: "sc-8tkzsr-9"
})({
  "--tw-bg-opacity": "0.2",
  "backgroundColor": "rgb(0 0 0 / var(--tw-bg-opacity))",
  "paddingLeft": "1rem",
  "paddingRight": "1rem",
  "paddingTop": "0.5rem",
  "paddingBottom": "0.5rem",
  "fontSize": "0.8125rem",
  "fontWeight": "500",
  "--tw-text-opacity": "1",
  "color": "rgb(255 255 255 / var(--tw-text-opacity))",
  ":hover": {
    "--tw-bg-opacity": "0.3"
  },
  ":focus": {
    "outline": "2px solid transparent",
    "outlineOffset": "2px"
  },
  ":focus-visible": {
    "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
    "--tw-ring-shadow": "var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
    "boxShadow": "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)",
    "--tw-ring-opacity": "0.75",
    "--tw-ring-color": "rgb(255 255 255 / var(--tw-ring-opacity))"
  }
});
var _StyledSpan = (0, _styledComponents["default"])("span").withConfig({
  displayName: "modal___StyledSpan",
  componentId: "sc-8tkzsr-10"
})({
  "display": "inline-block",
  "height": "100vh",
  "verticalAlign": "middle"
});