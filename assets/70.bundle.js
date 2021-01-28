(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[70],{

/***/ "./assets/src/components/ContainerHeader/index.js":
/*!********************************************************!*\
  !*** ./assets/src/components/ContainerHeader/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst ContainerHeader = ({\n  title,\n  match\n}) => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"gx-page-heading\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n    className: \"gx-page-title\"\n  }, title));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContainerHeader);\n\n//# sourceURL=webpack:///./assets/src/components/ContainerHeader/index.js?");

/***/ }),

/***/ "./assets/src/components/callouts/Callouts.js":
/*!****************************************************!*\
  !*** ./assets/src/components/callouts/Callouts.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _util_IntlMessages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/IntlMessages */ \"./assets/src/util/IntlMessages.js\");\n\n\n\n\nconst Callouts = ({\n  styleName,\n  callout\n}) => {\n  const {\n    image,\n    title,\n    description\n  } = callout;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: `gx-product-row ${styleName}`\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"gx-product-col gx-product-thumb \"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"gx-grid-thumb-equal\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"gx-link gx-grid-thumb-cover\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    alt: \"Special Edition Party Spas\",\n    src: image\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"gx-product-col gx-product-content\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    type: \"primary\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    id: \"callouts.viewRange\"\n  }))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Callouts);\n\n//# sourceURL=webpack:///./assets/src/components/callouts/Callouts.js?");

/***/ }),

/***/ "./assets/src/routes/customViews/extras/callouts/Basic/index.js":
/*!**********************************************************************!*\
  !*** ./assets/src/routes/customViews/extras/callouts/Basic/index.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_callouts_Callouts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../components/callouts/Callouts */ \"./assets/src/components/callouts/Callouts.js\");\n/* harmony import */ var _calloutsData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../calloutsData */ \"./assets/src/routes/customViews/extras/callouts/calloutsData.js\");\n\n\n\n\nconst Basic = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    id: \"callouts\"\n  }, _calloutsData__WEBPACK_IMPORTED_MODULE_2__[\"default\"].map((callout, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_callouts_Callouts__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    key: index,\n    styleName: index % 2 === 0 ? 'odd' : 'even',\n    callout: callout\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Basic);\n\n//# sourceURL=webpack:///./assets/src/routes/customViews/extras/callouts/Basic/index.js?");

/***/ }),

/***/ "./assets/src/routes/customViews/extras/callouts/calloutsData.js":
/*!***********************************************************************!*\
  !*** ./assets/src/routes/customViews/extras/callouts/calloutsData.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst calloutsData = [{\n  image: 'https://via.placeholder.com/500x330',\n  title: 'Cedar Barrel Sauna',\n  description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.'\n}, {\n  image: 'https://via.placeholder.com/500x330',\n  title: 'Traditional Saunas',\n  description: 'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.'\n}, {\n  image: 'https://via.placeholder.com/500x330',\n  title: 'Traditional Saunas',\n  description: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'\n}, {\n  image: 'https://via.placeholder.com/500x330',\n  title: 'Cedar Barrel Sauna',\n  description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\\'t look even slightly believable. '\n}, {\n  image: 'https://via.placeholder.com/500x330',\n  title: 'Traditional Saunas',\n  description: ' All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.'\n}, {\n  image: 'https://via.placeholder.com/500x330',\n  title: 'Infrared Saunas',\n  description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \\'Content here, content here\\', making it look like readable English.'\n}, {\n  image: 'https://via.placeholder.com/500x330',\n  title: 'Infrared Saunas',\n  description: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their CRM model text, and a search for \\'lorem ipsum\\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (calloutsData);\n\n//# sourceURL=webpack:///./assets/src/routes/customViews/extras/callouts/calloutsData.js?");

/***/ }),

/***/ "./assets/src/routes/customViews/extras/callouts/index.js":
/*!****************************************************************!*\
  !*** ./assets/src/routes/customViews/extras/callouts/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _components_ContainerHeader_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/ContainerHeader/index */ \"./assets/src/components/ContainerHeader/index.js\");\n/* harmony import */ var _Basic_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Basic/index */ \"./assets/src/routes/customViews/extras/callouts/Basic/index.js\");\n/* harmony import */ var _util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../util/IntlMessages */ \"./assets/src/util/IntlMessages.js\");\n\n\n\n\n\n\nconst Callouts = ({\n  match\n}) => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    span: 24\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ContainerHeader_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      id: \"extraElements.callout\"\n    }),\n    match: match\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    span: 24\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      id: \"callouts.basic\"\n    })\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Basic_index__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Callouts);\n\n//# sourceURL=webpack:///./assets/src/routes/customViews/extras/callouts/index.js?");

/***/ })

}]);