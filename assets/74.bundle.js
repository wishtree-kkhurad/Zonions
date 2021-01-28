(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[74],{

/***/ "./assets/src/components/ContainerHeader/index.js":
/*!********************************************************!*\
  !*** ./assets/src/components/ContainerHeader/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst ContainerHeader = ({\n  title,\n  match\n}) => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"gx-page-heading\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n    className: \"gx-page-title\"\n  }, title));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContainerHeader);\n\n//# sourceURL=webpack:///./assets/src/components/ContainerHeader/index.js?");

/***/ }),

/***/ "./assets/src/routes/extensions/charts/recharts/radial/Components/SimpleRadialBarChart.js":
/*!************************************************************************************************!*\
  !*** ./assets/src/routes/extensions/charts/recharts/radial/Components/SimpleRadialBarChart.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recharts */ \"./node_modules/recharts/es6/index.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ \"./assets/src/routes/extensions/charts/recharts/radial/Components/data.js\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ \"./assets/src/routes/extensions/charts/recharts/radial/Components/style.js\");\n\n\n\n\n\nconst SimpleRadialBarChart = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__[\"ResponsiveContainer\"], {\n  width: \"100%\",\n  height: 300\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__[\"RadialBarChart\"], {\n  innerRadius: 20,\n  outerRadius: 140,\n  barSize: 10,\n  data: _data__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__[\"RadialBar\"], {\n  minAngle: 15,\n  label: true,\n  background: true,\n  clockWise: true,\n  dataKey: \"uv\"\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__[\"Legend\"], {\n  iconSize: 10,\n  width: 120,\n  height: 140,\n  layout: \"vertical\",\n  verticalAlign: \"middle\",\n  wrapperStyle: _style__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n})));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SimpleRadialBarChart);\n\n//# sourceURL=webpack:///./assets/src/routes/extensions/charts/recharts/radial/Components/SimpleRadialBarChart.js?");

/***/ }),

/***/ "./assets/src/routes/extensions/charts/recharts/radial/Components/data.js":
/*!********************************************************************************!*\
  !*** ./assets/src/routes/extensions/charts/recharts/radial/Components/data.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst data = [{\n  name: '18-24',\n  uv: 31.47,\n  price: 2400,\n  fill: '#003366'\n}, {\n  name: '25-29',\n  uv: 26.69,\n  price: 4567,\n  fill: '#83a6ed'\n}, {\n  name: '30-34',\n  uv: 15.69,\n  price: 1398,\n  fill: '#8dd1e1'\n}, {\n  name: '35-39',\n  uv: 8.22,\n  price: 9800,\n  fill: '#FE9E15'\n}, {\n  name: '40-49',\n  uv: 8.63,\n  price: 3908,\n  fill: '#a4de6c'\n}, {\n  name: '50+',\n  uv: 2.63,\n  price: 4800,\n  fill: '#d0ed57'\n}, {\n  name: 'unknow',\n  uv: 6.67,\n  price: 4800,\n  fill: '#FE9E15'\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (data);\n\n//# sourceURL=webpack:///./assets/src/routes/extensions/charts/recharts/radial/Components/data.js?");

/***/ }),

/***/ "./assets/src/routes/extensions/charts/recharts/radial/Components/style.js":
/*!*********************************************************************************!*\
  !*** ./assets/src/routes/extensions/charts/recharts/radial/Components/style.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst style = {\n  top: 0,\n  left: 350,\n  lineHeight: '24px'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (style);\n\n//# sourceURL=webpack:///./assets/src/routes/extensions/charts/recharts/radial/Components/style.js?");

/***/ }),

/***/ "./assets/src/routes/extensions/charts/recharts/radial/index.js":
/*!**********************************************************************!*\
  !*** ./assets/src/routes/extensions/charts/recharts/radial/index.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _Components_SimpleRadialBarChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/SimpleRadialBarChart */ \"./assets/src/routes/extensions/charts/recharts/radial/Components/SimpleRadialBarChart.js\");\n/* harmony import */ var _components_ContainerHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../components/ContainerHeader */ \"./assets/src/components/ContainerHeader/index.js\");\n/* harmony import */ var _util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../util/IntlMessages */ \"./assets/src/util/IntlMessages.js\");\n\n\n\n\n\n\nconst Radial = ({\n  match\n}) => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"gx-main-content\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ContainerHeader__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      id: \"sidebar.chart.radial\"\n    }),\n    match: match\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    span: 24\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n    className: \"gx-card\",\n    title: \"Simple Radial Bar Chart\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_SimpleRadialBarChart__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Radial);\n\n//# sourceURL=webpack:///./assets/src/routes/extensions/charts/recharts/radial/index.js?");

/***/ })

}]);