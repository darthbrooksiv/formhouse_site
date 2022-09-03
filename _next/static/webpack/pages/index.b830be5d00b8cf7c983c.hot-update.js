webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Archive.js":
/*!*******************************!*\
  !*** ./components/Archive.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Container */ \"./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Row */ \"./node_modules/react-bootstrap/esm/Row.js\");\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Col */ \"./node_modules/react-bootstrap/esm/Col.js\");\n/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-transition-group */ \"./node_modules/react-transition-group/esm/index.js\");\n/* harmony import */ var _styles_Archive_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Archive.module.css */ \"./styles/Archive.module.css\");\n/* harmony import */ var _styles_Archive_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Archive_module_css__WEBPACK_IMPORTED_MODULE_7__);\n\n\nvar _jsxFileName = \"/Users/taggartbg/Projects/formhouse-website/formhouse-website-next/components/Archive.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar images = [{\n  imgSrc: 'frame_mod.png',\n  description: 'Frame Mod'\n}, {\n  imgSrc: 'front_hero.jpg',\n  description: 'PCR Front'\n}, {\n  imgSrc: 'KING_First_Print_Draft.jpg',\n  description: 'King First Print'\n}, {\n  imgSrc: 'rear_quarter1.jpg',\n  description: 'PCR Back'\n}, {\n  imgSrc: 'sacsummer1.jpg',\n  description: 'Coke 1'\n}, {\n  imgSrc: 'sacsummer2.jpg',\n  description: 'Coke 2'\n}, {\n  imgSrc: 'sentinel_cover_mock.jpg',\n  description: 'Sentinel Cover'\n}, {\n  imgSrc: 'ZZ T-Shirt Mock Front 1.jpg',\n  description: 'LN Pizza Shirt'\n}];\n\nfunction Archive(_ref) {\n  _s();\n\n  var isLoading = _ref.isLoading,\n      setIsLoading = _ref.setIsLoading,\n      children = _ref.children;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      showArchive = _useState[0],\n      setShowArchive = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      activeImageIndex = _useState2[0],\n      setActiveImageIndex = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(images[0]['imgSrc']),\n      key = _useState3[0],\n      setKey = _useState3[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var el = document.getElementById(\"imageContainer\");\n\n    if (el) {\n      el.scrollIntoView({\n        behavior: \"smooth\"\n      });\n    }\n  }, [key]);\n\n  var handleChangeImage = function handleChangeImage(evt) {\n    if (!showArchive) {\n      setShowArchive(true);\n    }\n\n    var newIndex = (activeImageIndex + 1) % images.length;\n    setActiveImageIndex(newIndex);\n    setKey(images[newIndex]['imgSrc']);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_Archive_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.ALogo,\n      onClick: handleChangeImage,\n      children: \"A\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 7\n    }, this), showArchive ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_transition_group__WEBPACK_IMPORTED_MODULE_6__[\"SwitchTransition\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_transition_group__WEBPACK_IMPORTED_MODULE_6__[\"CSSTransition\"], {\n        addEndListener: function addEndListener(node, done) {\n          return node.addEventListener(\"transitionend\", done, false);\n        },\n        classNames: \"fade\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          id: \"imageContainer\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            className: \"justify-content-md-center\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n              lg: \"10\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(FHImage, {\n                imgSrc: key,\n                height: 750,\n                width: 1000\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 83,\n                columnNumber: 21\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 82,\n              columnNumber: 19\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 81,\n            columnNumber: 17\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 15\n        }, this)\n      }, key, false, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 13\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 11\n    }, this) : null]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 69,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Archive, \"TGkAMfUwXHxchm8WMPyMj9E0Wlc=\");\n\n_c = Archive;\n\nfunction FHImage(_ref2) {\n  var imgSrc = _ref2.imgSrc,\n      height = _ref2.height,\n      width = _ref2.width;\n\n  var ghpLoader = function ghpLoader(_ref3) {\n    var src = _ref3.src,\n        width = _ref3.width,\n        quality = _ref3.quality;\n    return \"\".concat(window.location.origin).concat(src);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_Archive_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.imageWrapper,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      src: \"/\".concat(imgSrc),\n      loader: ghpLoader,\n      layout: \"fill\",\n      objectFit: \"fill\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 101,\n    columnNumber: 5\n  }, this);\n} // function Loading () {\n//   return (\n//     <div className={styles.loading}>\n//       LOADING!\n//     </div>\n//   )\n// }\n\n\n_c2 = FHImage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Archive);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Archive\");\n$RefreshReg$(_c2, \"FHImage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcmNoaXZlLmpzPzA4OTIiXSwibmFtZXMiOlsiaW1hZ2VzIiwiaW1nU3JjIiwiZGVzY3JpcHRpb24iLCJBcmNoaXZlIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsInNob3dBcmNoaXZlIiwic2V0U2hvd0FyY2hpdmUiLCJhY3RpdmVJbWFnZUluZGV4Iiwic2V0QWN0aXZlSW1hZ2VJbmRleCIsImtleSIsInNldEtleSIsInVzZUVmZmVjdCIsImVsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJoYW5kbGVDaGFuZ2VJbWFnZSIsImV2dCIsIm5ld0luZGV4IiwibGVuZ3RoIiwic3R5bGVzIiwiQUxvZ28iLCJub2RlIiwiZG9uZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJGSEltYWdlIiwiaGVpZ2h0Iiwid2lkdGgiLCJnaHBMb2FkZXIiLCJzcmMiLCJxdWFsaXR5Iiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJpbWFnZVdyYXBwZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUEsSUFBTUEsTUFBTSxHQUFHLENBQ2I7QUFDRUMsUUFBTSxFQUFFLGVBRFY7QUFFRUMsYUFBVyxFQUFFO0FBRmYsQ0FEYSxFQUtiO0FBQ0VELFFBQU0sRUFBRSxnQkFEVjtBQUVFQyxhQUFXLEVBQUU7QUFGZixDQUxhLEVBU2I7QUFDRUQsUUFBTSxFQUFFLDRCQURWO0FBRUVDLGFBQVcsRUFBRTtBQUZmLENBVGEsRUFhYjtBQUNFRCxRQUFNLEVBQUUsbUJBRFY7QUFFRUMsYUFBVyxFQUFFO0FBRmYsQ0FiYSxFQWlCYjtBQUNFRCxRQUFNLEVBQUUsZ0JBRFY7QUFFRUMsYUFBVyxFQUFFO0FBRmYsQ0FqQmEsRUFxQmI7QUFDRUQsUUFBTSxFQUFF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NUIsTUFBeUIsU0FBekJBLE1BQXlCO0FBQUEsTUFBakI2QixNQUFpQixTQUFqQkEsTUFBaUI7QUFBQSxNQUFUQyxLQUFTLFNBQVRBLEtBQVM7O0FBQzNDLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLFFBQTZCO0FBQUEsUUFBMUJDLEdBQTBCLFNBQTFCQSxHQUEwQjtBQUFBLFFBQXJCRixLQUFxQixTQUFyQkEsS0FBcUI7QUFBQSxRQUFkRyxPQUFjLFNBQWRBLE9BQWM7QUFDN0MscUJBQVVDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBMUIsU0FBbUNKLEdBQW5DO0FBQ0QsR0FGRDs7QUFJQSxzQkFDRTtBQUFLLGFBQVMsRUFBRVQsaUVBQU0sQ0FBQ2MsWUFBdkI7QUFBQSwyQkFDRSxxRUFBQyxpREFBRDtBQUNFLFNBQUcsYUFBTXJDLE1BQU4sQ0FETDtBQUVFLFlBQU0sRUFBRStCLFNBRlY7QUFHRSxZQUFNLEVBQUMsTUFIVDtBQUlFLGVBQVMsRUFBQztBQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFVRCxDLENBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztNQXZCU0gsTztBQXlCTTFCLHNFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9BcmNoaXZlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db250YWluZXInXG5pbXBvcnQgUm93IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Sb3cnXG5pbXBvcnQgQ29sIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db2wnXG5pbXBvcnQgeyBTd2l0Y2hUcmFuc2l0aW9uLCBDU1NUcmFuc2l0aW9uIH0gZnJvbSBcInJlYWN0LXRyYW5zaXRpb24tZ3JvdXBcIjtcblxuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9BcmNoaXZlLm1vZHVsZS5jc3MnXG5cbmNvbnN0IGltYWdlcyA9IFtcbiAge1xuICAgIGltZ1NyYzogJ2ZyYW1lX21vZC5wbmcnLFxuICAgIGRlc2NyaXB0aW9uOiAnRnJhbWUgTW9kJ1xuICB9LFxuICB7XG4gICAgaW1nU3JjOiAnZnJvbnRfaGVyby5qcGcnLFxuICAgIGRlc2NyaXB0aW9uOiAnUENSIEZyb250J1xuICB9LFxuICB7XG4gICAgaW1nU3JjOiAnS0lOR19GaXJzdF9QcmludF9EcmFmdC5qcGcnLFxuICAgIGRlc2NyaXB0aW9uOiAnS2luZyBGaXJzdCBQcmludCdcbiAgfSxcbiAge1xuICAgIGltZ1NyYzogJ3JlYXJfcXVhcnRlcjEuanBnJyxcbiAgICBkZXNjcmlwdGlvbjogJ1BDUiBCYWNrJ1xuICB9LFxuICB7XG4gICAgaW1nU3JjOiAnc2Fjc3VtbWVyMS5qcGcnLFxuICAgIGRlc2NyaXB0aW9uOiAnQ29rZSAxJ1xuICB9LFxuICB7XG4gICAgaW1nU3JjOiAnc2Fjc3VtbWVyMi5qcGcnLFxuICAgIGRlc2NyaXB0aW9uOiAnQ29rZSAyJ1xuICB9LFxuICB7XG4gICAgaW1nU3JjOiAnc2VudGluZWxfY292ZXJfbW9jay5qcGcnLFxuICAgIGRlc2NyaXB0aW9uOiAnU2VudGluZWwgQ292ZXInXG4gIH0sXG4gIHtcbiAgICBpbWdTcmM6ICdaWiBULVNoaXJ0IE1vY2sgRnJvbnQgMS5qcGcnLFxuICAgIGRlc2NyaXB0aW9uOiAnTE4gUGl6emEgU2hpcnQnXG4gIH0sXG5dXG5cbmZ1bmN0aW9uIEFyY2hpdmUgKHsgaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmcsIGNoaWxkcmVuIH0pIHtcbiAgY29uc3QgW3Nob3dBcmNoaXZlLCBzZXRTaG93QXJjaGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2FjdGl2ZUltYWdlSW5kZXgsIHNldEFjdGl2ZUltYWdlSW5kZXhdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgW2tleSwgc2V0S2V5XSA9IHVzZVN0YXRlKGltYWdlc1swXVsnaW1nU3JjJ10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1hZ2VDb250YWluZXJcIilcbiAgICBpZiAoZWwpIHtcbiAgICAgIGVsLnNjcm9sbEludG9WaWV3KHtiZWhhdmlvcjogXCJzbW9vdGhcIn0pXG4gICAgfVxuICB9LCBba2V5XSlcblxuICBjb25zdCBoYW5kbGVDaGFuZ2VJbWFnZSA9IChldnQpID0+IHtcbiAgICBpZiAoIXNob3dBcmNoaXZlKSB7XG4gICAgICBzZXRTaG93QXJjaGl2ZSh0cnVlKVxuICAgIH1cblxuICAgIGNvbnN0IG5ld0luZGV4ID0gKGFjdGl2ZUltYWdlSW5kZXgrMSklaW1hZ2VzLmxlbmd0aFxuICAgIHNldEFjdGl2ZUltYWdlSW5kZXgobmV3SW5kZXgpXG4gICAgc2V0S2V5KGltYWdlc1tuZXdJbmRleF1bJ2ltZ1NyYyddKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5BTG9nb30gb25DbGljaz17aGFuZGxlQ2hhbmdlSW1hZ2V9PkE8L2Rpdj5cbiAgICAgIHtcbiAgICAgICAgc2hvd0FyY2hpdmVcbiAgICAgICAgPyAoXG4gICAgICAgICAgPFN3aXRjaFRyYW5zaXRpb24+XG4gICAgICAgICAgICA8Q1NTVHJhbnNpdGlvblxuICAgICAgICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgICAgICAgYWRkRW5kTGlzdGVuZXI9eyhub2RlLCBkb25lKSA9PiBub2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsIGRvbmUsIGZhbHNlKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lcz0nZmFkZSdcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPENvbnRhaW5lciBpZD1cImltYWdlQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJqdXN0aWZ5LWNvbnRlbnQtbWQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8Q29sIGxnPVwiMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPEZISW1hZ2UgaW1nU3JjPXtrZXl9IGhlaWdodD17NzUwfSB3aWR0aD17MTAwMH0gLz5cbiAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvQ1NTVHJhbnNpdGlvbj5cbiAgICAgICAgICA8L1N3aXRjaFRyYW5zaXRpb24+XG4gICAgICAgICkgOiBudWxsXG4gICAgICB9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZnVuY3Rpb24gRkhJbWFnZSAoeyBpbWdTcmMsIGhlaWdodCwgd2lkdGggfSkge1xuICBjb25zdCBnaHBMb2FkZXIgPSAoeyBzcmMsIHdpZHRoLCBxdWFsaXR5IH0pID0+IHtcbiAgICByZXR1cm4gYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0ke3NyY31gXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VXcmFwcGVyfT5cbiAgICAgIDxJbWFnZVxuICAgICAgICBzcmM9e2AvJHtpbWdTcmN9YH1cbiAgICAgICAgbG9hZGVyPXtnaHBMb2FkZXJ9XG4gICAgICAgIGxheW91dD1cImZpbGxcIlxuICAgICAgICBvYmplY3RGaXQ9XCJmaWxsXCJcbiAgICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vLyBmdW5jdGlvbiBMb2FkaW5nICgpIHtcbi8vICAgcmV0dXJuIChcbi8vICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvYWRpbmd9PlxuLy8gICAgICAgTE9BRElORyFcbi8vICAgICA8L2Rpdj5cbi8vICAgKVxuLy8gfVxuXG5leHBvcnQgZGVmYXVsdCBBcmNoaXZlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Archive.js\n");

/***/ })

})