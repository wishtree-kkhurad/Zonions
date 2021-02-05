(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[109],{

/***/ "./assets/src/routes/components/others/Anchor/Basic.js":
/*!*************************************************************!*\
  !*** ./assets/src/routes/components/others/Anchor/Basic.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n\n\nconst {\n  Link\n} = antd__WEBPACK_IMPORTED_MODULE_1__[\"Anchor\"];\n\nconst Basic = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n    title: \"Basic\",\n    className: \"gx-card\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Anchor\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Link, {\n    href: \"#basic-demo\",\n    title: \"Basic demo\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Link, {\n    href: \"#fixed-demo\",\n    title: \"Fixed demo\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Link, {\n    href: \"#api\",\n    title: \"API\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Link, {\n    href: \"#anchor-props\",\n    title: \"Anchor Props\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Link, {\n    href: \"#link-props\",\n    title: \"Link Props\"\n  }))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Basic);\n\n//# sourceURL=webpack:///./assets/src/routes/components/others/Anchor/Basic.js?");

/***/ }),

/***/ "./assets/src/routes/components/others/Anchor/Static.js":
/*!**************************************************************!*\
  !*** ./assets/src/routes/components/others/Anchor/Static.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n\n\nconst {\n  Link\n} = antd__WEBPACK_IMPORTED_MODULE_1__[\"Anchor\"];\n\nconst Static = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n    title: \"Static\",\n    className: \"gx-card\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Anchor\"], {\n    affix: false\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Link, {\n    href: \"#basic-demo\",\n    title: \"Basic demo\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Link, {\n    href: \"#fixed-demo;\",\n    title: \"Fixed demo\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Link, {\n    href: \"#api\",\n    title: \"API\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Link, {\n    href: \"#anchor-props\",\n    title: \"Anchor Props\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Link, {\n    href: \"#link-props\",\n    title: \"Link Props\"\n  }))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Static);\n\n//# sourceURL=webpack:///./assets/src/routes/components/others/Anchor/Static.js?");

/***/ }),

/***/ "./assets/src/routes/components/others/Anchor/index.js":
/*!*************************************************************!*\
  !*** ./assets/src/routes/components/others/Anchor/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _Basic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Basic */ \"./assets/src/routes/components/others/Anchor/Basic.js\");\n/* harmony import */ var _Static__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Static */ \"./assets/src/routes/components/others/Anchor/Static.js\");\n\n\n\n\n\nconst Anchor = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    lg: 12,\n    md: 12,\n    sm: 24,\n    xs: 24\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Basic__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    lg: 12,\n    md: 12,\n    sm: 24,\n    xs: 24\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Static__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Anchor);\n\n//# sourceURL=webpack:///./assets/src/routes/components/others/Anchor/index.js?");

/***/ })

}]);