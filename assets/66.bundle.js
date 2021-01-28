(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[66],{

/***/ "./assets/src/routes/components/dataEntry/Switches/Basic.js":
/*!******************************************************************!*\
  !*** ./assets/src/routes/components/dataEntry/Switches/Basic.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n\n\n\nconst Basic = () => {\n  function onChange(checked) {\n    console.log(`switch to ${checked}`);\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n    className: \"gx-card\",\n    title: \"Basic\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], {\n    defaultChecked: true,\n    onChange: onChange\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Basic);\n\n//# sourceURL=webpack:///./assets/src/routes/components/dataEntry/Switches/Basic.js?");

/***/ }),

/***/ "./assets/src/routes/components/dataEntry/Switches/SwitchDisabled.js":
/*!***************************************************************************!*\
  !*** ./assets/src/routes/components/dataEntry/Switches/SwitchDisabled.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n\n\n\nclass SwitchDisabled extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(...args) {\n    super(...args);\n    this.state = {\n      disabled: true\n    };\n\n    this.toggle = () => {\n      this.setState({\n        disabled: !this.state.disabled\n      });\n    };\n  }\n\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n      className: \"gx-card\",\n      title: \"SwitchDisabled\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"gx-mb-3\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], {\n      disabled: this.state.disabled,\n      defaultChecked: true\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"gx-mb-0\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n      type: \"primary\",\n      onClick: this.toggle\n    }, \"Toggle disabled\")));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SwitchDisabled);\n\n//# sourceURL=webpack:///./assets/src/routes/components/dataEntry/Switches/SwitchDisabled.js?");

/***/ }),

/***/ "./assets/src/routes/components/dataEntry/Switches/SwitchLoading.js":
/*!**************************************************************************!*\
  !*** ./assets/src/routes/components/dataEntry/Switches/SwitchLoading.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n\n\n\nconst SwitchLoading = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n    className: \"gx-card\",\n    title: \"Switch Loading\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"gx-mb-3\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], {\n    loading: true,\n    defaultChecked: true\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"gx-mb-0\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], {\n    size: \"small\",\n    loading: true\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SwitchLoading);\n\n//# sourceURL=webpack:///./assets/src/routes/components/dataEntry/Switches/SwitchLoading.js?");

/***/ }),

/***/ "./assets/src/routes/components/dataEntry/Switches/SwitchSize.js":
/*!***********************************************************************!*\
  !*** ./assets/src/routes/components/dataEntry/Switches/SwitchSize.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n\n\n\nconst SwitchSize = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n    className: \"gx-card\",\n    title: \"Switch Size\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"gx-mb-3\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], {\n    defaultChecked: true\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"gx-mb-0\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], {\n    size: \"small\",\n    defaultChecked: true\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SwitchSize);\n\n//# sourceURL=webpack:///./assets/src/routes/components/dataEntry/Switches/SwitchSize.js?");

/***/ }),

/***/ "./assets/src/routes/components/dataEntry/Switches/SwitchTextIcon.js":
/*!***************************************************************************!*\
  !*** ./assets/src/routes/components/dataEntry/Switches/SwitchTextIcon.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n\n\n\nconst SwitchTextIcon = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n    className: \"gx-card\",\n    title: \"Switch Text Icon\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"gx-mb-3\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], {\n    checkedChildren: \"open\",\n    unCheckedChildren: \"turn off\",\n    defaultChecked: true\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"gx-mb-3\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], {\n    checkedChildren: \"1\",\n    unCheckedChildren: \"0\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"gx-mb-0\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], {\n    checkedChildren: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Icon\"], {\n      type: \"check\"\n    }),\n    unCheckedChildren: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Icon\"], {\n      type: \"cross\"\n    }),\n    defaultChecked: true\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SwitchTextIcon);\n\n//# sourceURL=webpack:///./assets/src/routes/components/dataEntry/Switches/SwitchTextIcon.js?");

/***/ }),

/***/ "./assets/src/routes/components/dataEntry/Switches/index.js":
/*!******************************************************************!*\
  !*** ./assets/src/routes/components/dataEntry/Switches/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _Basic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Basic */ \"./assets/src/routes/components/dataEntry/Switches/Basic.js\");\n/* harmony import */ var _SwitchDisabled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SwitchDisabled */ \"./assets/src/routes/components/dataEntry/Switches/SwitchDisabled.js\");\n/* harmony import */ var _SwitchTextIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SwitchTextIcon */ \"./assets/src/routes/components/dataEntry/Switches/SwitchTextIcon.js\");\n/* harmony import */ var _SwitchSize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SwitchSize */ \"./assets/src/routes/components/dataEntry/Switches/SwitchSize.js\");\n/* harmony import */ var _SwitchLoading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SwitchLoading */ \"./assets/src/routes/components/dataEntry/Switches/SwitchLoading.js\");\n\n\n\n\n\n\n\n\nclass Switches extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n      lg: 12,\n      md: 12,\n      sm: 24,\n      xs: 24\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Basic__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SwitchDisabled__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SwitchTextIcon__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n      lg: 12,\n      md: 12,\n      sm: 24,\n      xs: 24\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SwitchSize__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SwitchLoading__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null)));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Switches);\n\n//# sourceURL=webpack:///./assets/src/routes/components/dataEntry/Switches/index.js?");

/***/ })

}]);