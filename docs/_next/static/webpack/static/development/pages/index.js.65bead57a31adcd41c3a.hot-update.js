webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/PDFOnly/index.js":
/*!*************************************!*\
  !*** ./components/PDFOnly/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);


var PDFOnly = function PDFOnly(props) {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_0__["useRouter"])();
  debugger;
  if (router.query && router.query.pdf !== undefined) return props.children;
  return null;
};

/* harmony default export */ __webpack_exports__["default"] = (PDFOnly);

/***/ })

})
//# sourceMappingURL=index.js.65bead57a31adcd41c3a.hot-update.js.map