(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[127],{

/***/ "./assets/src/routes/extensions/map/googlemap/kmLayer/Components/MapKmLayer.js":
/*!*************************************************************************************!*\
  !*** ./assets/src/routes/extensions/map/googlemap/kmLayer/Components/MapKmLayer.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MapKmLayer; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-google-maps */ \"./node_modules/react-google-maps/lib/index.js\");\n/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_google_maps__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst KmlLayerExampleGoogleMap = Object(react_google_maps__WEBPACK_IMPORTED_MODULE_1__[\"withGoogleMap\"])(props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_google_maps__WEBPACK_IMPORTED_MODULE_1__[\"GoogleMap\"], {\n  defaultZoom: 8,\n  defaultCenter: {\n    lat: 41.876,\n    lng: -87.624\n  }\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_google_maps__WEBPACK_IMPORTED_MODULE_1__[\"KmlLayer\"], {\n  url: \"http://googlemaps.github.io/js-v2-samples/ggeoxml/cta.kml\",\n  options: {\n    preserveViewport: true\n  }\n})));\n/*\r\n * Add <script src=\"https://maps.googleapis.com/maps/api/js\"></script> to your HTML to provide google.maps reference\r\n */\n\nclass MapKmLayer extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(KmlLayerExampleGoogleMap, {\n      loadingElement: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        style: {\n          height: `100%`\n        }\n      }),\n      containerElement: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        style: {\n          height: `550px`\n        }\n      }),\n      mapElement: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        style: {\n          height: `100%`\n        }\n      })\n    });\n  }\n\n}\n\n//# sourceURL=webpack:///./assets/src/routes/extensions/map/googlemap/kmLayer/Components/MapKmLayer.js?");

/***/ }),

/***/ "./assets/src/routes/extensions/map/googlemap/kmLayer/index.js":
/*!*********************************************************************!*\
  !*** ./assets/src/routes/extensions/map/googlemap/kmLayer/index.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _Components_MapKmLayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/MapKmLayer */ \"./assets/src/routes/extensions/map/googlemap/kmLayer/Components/MapKmLayer.js\");\n/* harmony import */ var _util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../util/IntlMessages */ \"./assets/src/util/IntlMessages.js\");\n\n\n\n\n\nconst KmLayer = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n    className: \"gx-card\",\n    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      id: \"sidebar.map.kmLayer\"\n    })\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_MapKmLayer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (KmLayer);\n\n//# sourceURL=webpack:///./assets/src/routes/extensions/map/googlemap/kmLayer/index.js?");

/***/ })

}]);