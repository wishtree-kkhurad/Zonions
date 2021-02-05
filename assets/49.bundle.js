(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[49],{

/***/ "./assets/src/routes/components/feedback/Notification/Basic.js":
/*!*********************************************************************!*\
  !*** ./assets/src/routes/components/feedback/Notification/Basic.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n\n\n\nconst openNotification = () => {\n  antd__WEBPACK_IMPORTED_MODULE_1__[\"notification\"].open({\n    message: 'Notification Title',\n    description: 'This is the content of the Notification. This is the content of the Notification. This is the content of the Notification.'\n  });\n};\n\nconst Basic = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n    title: \"Basic\",\n    className: \"gx-card\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    type: \"primary\",\n    onClick: openNotification\n  }, \"Open the notification box\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Basic);\n\n//# sourceURL=webpack:///./assets/src/routes/components/feedback/Notification/Basic.js?");

/***/ }),

/***/ "./assets/src/routes/components/feedback/Notification/CustomClose.js":
/*!***************************************************************************!*\
  !*** ./assets/src/routes/components/feedback/Notification/CustomClose.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n\n\n\nconst close = () => {\n  console.log('Notification was closed. Either the close button was clicked or duration time elapsed.');\n};\n\nconst openNotification = () => {\n  const key = `open${Date.now()}`;\n  const btn = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    type: \"primary\",\n    size: \"small\",\n    onClick: () => antd__WEBPACK_IMPORTED_MODULE_1__[\"notification\"].close(key)\n  }, \"Confirm\");\n  antd__WEBPACK_IMPORTED_MODULE_1__[\"notification\"].open({\n    message: 'Notification Title',\n    description: 'A function will be be called after the Notification is closed (automatically after the \"duration\" time of manually).',\n    btn,\n    key,\n    onClose: close\n  });\n};\n\nconst CustomClose = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n    title: \"Custom Close\",\n    className: \"gx-card\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    type: \"primary\",\n    onClick: openNotification\n  }, \"Open the notification box\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomClose);\n\n//# sourceURL=webpack:///./assets/src/routes/components/feedback/Notification/CustomClose.js?");

/***/ }),

/***/ "./assets/src/routes/components/feedback/Notification/CustomizeIcon.js":
/*!*****************************************************************************!*\
  !*** ./assets/src/routes/components/feedback/Notification/CustomizeIcon.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n\n\n\nconst openNotification = () => {\n  antd__WEBPACK_IMPORTED_MODULE_1__[\"notification\"].open({\n    message: 'Notification Title',\n    description: 'This is the content of the Notification. This is the content of the Notification. This is the content of the Notification.',\n    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Icon\"], {\n      type: \"smile-circle\",\n      style: {\n        color: '#108ee9'\n      }\n    })\n  });\n};\n\nconst CustomizeIcon = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n    title: \"Customize Icon\",\n    className: \"gx-card\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    type: \"primary\",\n    onClick: openNotification\n  }, \"Open the notification box\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomizeIcon);\n\n//# sourceURL=webpack:///./assets/src/routes/components/feedback/Notification/CustomizeIcon.js?");

/***/ }),

/***/ "./assets/src/routes/components/feedback/Notification/CustomizeStyle.js":
/*!******************************************************************************!*\
  !*** ./assets/src/routes/components/feedback/Notification/CustomizeStyle.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n\n\n\nconst openNotification = () => {\n  antd__WEBPACK_IMPORTED_MODULE_1__[\"notification\"].open({\n    message: 'Notification Title',\n    description: 'This is the content of the Notification. This is the content of the Notification. This is the content of the Notification.',\n    style: {\n      width: 600,\n      marginLeft: 335 - 600\n    }\n  });\n};\n\nconst CustomizeStyle = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n    title: \"Placement\",\n    className: \"gx-card\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    type: \"primary\",\n    onClick: openNotification\n  }, \"Open the notification box\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomizeStyle);\n\n//# sourceURL=webpack:///./assets/src/routes/components/feedback/Notification/CustomizeStyle.js?");

/***/ }),

/***/ "./assets/src/routes/components/feedback/Notification/Duration.js":
/*!************************************************************************!*\
  !*** ./assets/src/routes/components/feedback/Notification/Duration.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n\n\n\nconst openNotification = () => {\n  const args = {\n    message: 'Notification Title',\n    description: 'I will never close automatically. I will be close automatically. I will never close automatically.',\n    duration: 0\n  };\n  antd__WEBPACK_IMPORTED_MODULE_1__[\"notification\"].open(args);\n};\n\nconst Duration = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n    title: \"Duration\",\n    className: \"gx-card\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    type: \"primary\",\n    onClick: openNotification\n  }, \"Open the notification box\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Duration);\n\n//# sourceURL=webpack:///./assets/src/routes/components/feedback/Notification/Duration.js?");

/***/ }),

/***/ "./assets/src/routes/components/feedback/Notification/Placement.js":
/*!*************************************************************************!*\
  !*** ./assets/src/routes/components/feedback/Notification/Placement.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n\n\nconst {\n  Option\n} = antd__WEBPACK_IMPORTED_MODULE_1__[\"Select\"];\nconst options = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];\n\nconst openNotification = () => {\n  antd__WEBPACK_IMPORTED_MODULE_1__[\"notification\"].open({\n    message: 'Notification Title',\n    description: 'This is the content of the Notification. This is the content of the Notification. This is the content of the Notification.'\n  });\n};\n\nconst Placement = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n    title: \"Placement\",\n    className: \"gx-card\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Select\"], {\n    className: \"gx-mb-2 gx-mr-2 gx-vertical-align-top\",\n    defaultValue: \"topLeft\",\n    style: {\n      width: 120\n    },\n    onChange: val => {\n      antd__WEBPACK_IMPORTED_MODULE_1__[\"notification\"].config({\n        placement: val\n      });\n    }\n  }, options.map(val => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {\n    key: val,\n    value: val\n  }, val))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    type: \"primary\",\n    className: \"gx-mb-2\",\n    onClick: openNotification\n  }, \"Open the notification box\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Placement);\n\n//# sourceURL=webpack:///./assets/src/routes/components/feedback/Notification/Placement.js?");

/***/ }),

/***/ "./assets/src/routes/components/feedback/Notification/WithIcon.js":
/*!************************************************************************!*\
  !*** ./assets/src/routes/components/feedback/Notification/WithIcon.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n\n\n\nconst openNotificationWithIcon = type => {\n  antd__WEBPACK_IMPORTED_MODULE_1__[\"notification\"][type]({\n    message: 'Notification Title',\n    description: 'This is the content of the Notification. This is the content of the Notification. This is the content of the Notification.'\n  });\n};\n\nconst WithIcon = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n    title: \"With Icon\",\n    className: \"gx-card\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    onClick: () => openNotificationWithIcon('success')\n  }, \"Success\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    onClick: () => openNotificationWithIcon('info')\n  }, \"Info\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    onClick: () => openNotificationWithIcon('warning')\n  }, \"Warning\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    onClick: () => openNotificationWithIcon('error')\n  }, \"Error\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (WithIcon);\n\n//# sourceURL=webpack:///./assets/src/routes/components/feedback/Notification/WithIcon.js?");

/***/ }),

/***/ "./assets/src/routes/components/feedback/Notification/index.js":
/*!*********************************************************************!*\
  !*** ./assets/src/routes/components/feedback/Notification/index.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _Basic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Basic */ \"./assets/src/routes/components/feedback/Notification/Basic.js\");\n/* harmony import */ var _Duration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Duration */ \"./assets/src/routes/components/feedback/Notification/Duration.js\");\n/* harmony import */ var _WithIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./WithIcon */ \"./assets/src/routes/components/feedback/Notification/WithIcon.js\");\n/* harmony import */ var _CustomClose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CustomClose */ \"./assets/src/routes/components/feedback/Notification/CustomClose.js\");\n/* harmony import */ var _CustomizeIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CustomizeIcon */ \"./assets/src/routes/components/feedback/Notification/CustomizeIcon.js\");\n/* harmony import */ var _Placement__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Placement */ \"./assets/src/routes/components/feedback/Notification/Placement.js\");\n/* harmony import */ var _CustomizeStyle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CustomizeStyle */ \"./assets/src/routes/components/feedback/Notification/CustomizeStyle.js\");\n\n\n\n\n\n\n\n\n\n\nclass Notification extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n      lg: 12,\n      md: 12,\n      sm: 24,\n      xs: 24\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Basic__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Duration__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_WithIcon__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CustomClose__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n      lg: 12,\n      md: 12,\n      sm: 24,\n      xs: 24\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CustomizeIcon__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Placement__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CustomizeStyle__WEBPACK_IMPORTED_MODULE_8__[\"default\"], null)));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Notification);\n\n//# sourceURL=webpack:///./assets/src/routes/components/feedback/Notification/index.js?");

/***/ })

}]);