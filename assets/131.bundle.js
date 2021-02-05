(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[131],{

/***/ "./assets/src/routes/extensions/map/googlemap/trafficLayer/Components/TrafficLayerEx.js":
/*!**********************************************************************************************!*\
  !*** ./assets/src/routes/extensions/map/googlemap/trafficLayer/Components/TrafficLayerEx.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TrafficLayerEx; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-google-maps */ \"./node_modules/react-google-maps/lib/index.js\");\n/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_google_maps__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst TrafficLayerExampleGoogleMap = Object(react_google_maps__WEBPACK_IMPORTED_MODULE_1__[\"withGoogleMap\"])(props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_google_maps__WEBPACK_IMPORTED_MODULE_1__[\"GoogleMap\"], {\n  defaultZoom: 15,\n  defaultCenter: {\n    lat: 47.646935,\n    lng: -122.303763\n  }\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_google_maps__WEBPACK_IMPORTED_MODULE_1__[\"TrafficLayer\"], {\n  autoUpdate: true\n})));\n/*\r\n * Add <script src=\"https://maps.googleapis.com/maps/api/js\"></script> to your HTML to provide google.maps reference\r\n */\n\nclass TrafficLayerEx extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TrafficLayerExampleGoogleMap, {\n      loadingElement: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        style: {\n          height: `100%`\n        }\n      }),\n      containerElement: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        style: {\n          height: `550px`\n        }\n      }),\n      mapElement: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        style: {\n          height: `100%`\n        }\n      })\n    });\n  }\n\n}\n\n//# sourceURL=webpack:///./assets/src/routes/extensions/map/googlemap/trafficLayer/Components/TrafficLayerEx.js?");

/***/ }),

/***/ "./assets/src/routes/extensions/map/googlemap/trafficLayer/index.js":
/*!**************************************************************************!*\
  !*** ./assets/src/routes/extensions/map/googlemap/trafficLayer/index.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _Components_TrafficLayerEx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/TrafficLayerEx */ \"./assets/src/routes/extensions/map/googlemap/trafficLayer/Components/TrafficLayerEx.js\");\n/* harmony import */ var _util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../util/IntlMessages */ \"./assets/src/util/IntlMessages.js\");\n\n\n\n\n\nconst TrafficLayer = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n    className: \"gx-card\",\n    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      id: \"sidebar.map.trafficLayer\"\n    })\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_TrafficLayerEx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TrafficLayer);\n\n//# sourceURL=webpack:///./assets/src/routes/extensions/map/googlemap/trafficLayer/index.js?");

/***/ })

}]);