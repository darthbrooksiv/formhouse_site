webpackHotUpdate_N_E("pages/index",{

/***/ "./components/NavContent.js":
/*!**********************************!*\
  !*** ./components/NavContent.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Accordion */ \"./node_modules/react-bootstrap/esm/Accordion.js\");\n/* harmony import */ var react_bootstrap_AccordionToggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/AccordionToggle */ \"./node_modules/react-bootstrap/esm/AccordionToggle.js\");\n/* harmony import */ var react_bootstrap_AccordionContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/AccordionContext */ \"./node_modules/react-bootstrap/esm/AccordionContext.js\");\n/* harmony import */ var react_bootstrap_AccordionCollapse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/AccordionCollapse */ \"./node_modules/react-bootstrap/esm/AccordionCollapse.js\");\n/* harmony import */ var _styles_NavContent_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/NavContent.module.css */ \"./styles/NavContent.module.css\");\n/* harmony import */ var _styles_NavContent_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_NavContent_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _icons_Chevron_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./icons/Chevron.js */ \"./components/icons/Chevron.js\");\n/* harmony import */ var _icons_Saddle_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./icons/Saddle.js */ \"./components/icons/Saddle.js\");\n/* harmony import */ var _icons_TBTC_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./icons/TBTC.js */ \"./components/icons/TBTC.js\");\n/* harmony import */ var _icons_LNPizza_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./icons/LNPizza.js */ \"./components/icons/LNPizza.js\");\n\n\n\nvar _jsxFileName = \"/Users/taggartbg/Projects/formhouse-website/formhouse-website-next/components/NavContent.js\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$(),\n    _s3 = $RefreshSig$(),\n    _s4 = $RefreshSig$();\n\n\n\n\n\n\n // import SamplePage from './SamplePage.js'\n\n\n\n\n\nvar navItems = [{\n  title: 'Saddle.finance',\n  icon: _icons_Saddle_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n  description: 'Brand + UX/UI',\n  link: 'https://saddle.finance'\n}, {\n  title: 'tbtc.network',\n  icon: _icons_TBTC_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n  description: 'UX/UI',\n  link: 'https://tbtc.network'\n}, {\n  title: 'ln.pizza',\n  icon: _icons_LNPizza_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"],\n  description: 'Brand + UX/UI',\n  link: 'https://ln.pizza'\n}];\n\nfunction NavContent(_ref) {\n  var _this = this;\n\n  var isLoading = _ref.isLoading,\n      setIsLoading = _ref.setIsLoading;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: _styles_NavContent_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.navContent,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      children: [navItems.map(function (navItem, i) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(NavContentItem, {\n          title: navItem.title,\n          icon: navItem.icon,\n          description: navItem.description,\n          link: navItem.link,\n          active: false,\n          eventKey: i.toString(),\n          isLoading: isLoading,\n          setIsLoading: setIsLoading\n        }, navItem.title, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 11\n        }, _this);\n      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(ContactItem, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(ScrollToTop, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 38,\n    columnNumber: 5\n  }, this);\n}\n\n_c = NavContent;\n\nfunction NavContentItem(_ref2) {\n  _s();\n\n  var title = _ref2.title,\n      icon = _ref2.icon,\n      description = _ref2.description,\n      link = _ref2.link,\n      eventKey = _ref2.eventKey,\n      isLoading = _ref2.isLoading,\n      setIsLoading = _ref2.setIsLoading;\n  var currentEventKey = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(react_bootstrap_AccordionContext__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n  var isCurrentEventKey = currentEventKey === eventKey;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: _styles_NavContent_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.navContentItem,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(NavItem, {\n      eventKey: eventKey,\n      isCurrentEventKey: isCurrentEventKey,\n      setIsLoading: setIsLoading,\n      children: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_bootstrap_AccordionCollapse__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      eventKey: eventKey,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: isCurrentEventKey ? _styles_NavContent_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.contentItemActive : _styles_NavContent_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.contentItem,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          className: _styles_NavContent_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.contentItemIcon,\n          children: icon({\n            height: 100,\n            width: 100\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          className: _styles_NavContent_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.contentItemDescription,\n          children: description\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          className: _styles_NavContent_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.contentItemLink,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n            href: link,\n            target: \"_blank\",\n            children: [\"go to \", title]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 77,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 64,\n    columnNumber: 5\n  }, this);\n}\n\n_s(NavContentItem, \"8S9nJ7Jqqp05y1N4dJ5hl9PacTM=\");\n\n_c2 = NavContentItem;\n\nfunction ContactItem(_ref3) {\n  _s2();\n\n  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref3);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      isCopied = _useState[0],\n      setIsCopied = _useState[1];\n\n  var copy = function copy(evt) {\n    setIsCopied(true);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: _styles_NavContent_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.navContentItem,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: _styles_NavContent_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.navItem,\n      onClick: copy,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: isCopied ? _styles_NavContent_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.navItemInnerCopied : _styles_NavContent_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.navItemInner,\n        children: [isCopied ? \"Email address copied\" : \"Contact\", isCopied ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          className: \"contactCopied\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 105,\n          columnNumber: 15\n        }, this) : null]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 95,\n    columnNumber: 5\n  }, this);\n}\n\n_s2(ContactItem, \"dIAMLjsduWkZ4KaA+ylUo0FLqmM=\");\n\n_c3 = ContactItem;\n\nfunction NavItem(_ref4) {\n  _s3();\n\n  var children = _ref4.children,\n      eventKey = _ref4.eventKey,\n      isCurrentEventKey = _ref4.isCurrentEventKey,\n      callback = _ref4.callback,\n      setIsLoading = _ref4.setIsLoading;\n  // const currentEventKey = useContext(AccordionContext)\n  var currentEl = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null);\n  var decoratedOnClick = Object(react_bootstrap_AccordionToggle__WEBPACK_IMPORTED_MODULE_4__[\"useAccordionToggle\"])(eventKey, function () {\n    callback && callback(eventKey);\n  }); // const isCurrentEventKey = currentEventKey === eventKey\n  // const wrappedDecoratedOnClick = (evt) => {\n  //   if (!isCurrentEventKey) {\n  //     setIsLoading(true)\n  //     console.log(\"TOP!: \", 200 + (50 * parseInt(eventKey)))\n  //     setTimeout(() => {\n  //       window.scrollTo({\n  //         left: 0,\n  //         top: 200 + (50 * parseInt(eventKey)),\n  //         behavior: 'smooth'\n  //       })\n  //     }, 400)\n  //   } else {\n  //     setIsLoading(false)\n  //   }\n  //   decoratedOnClick(evt)\n  // }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    ref: currentEl,\n    className: isCurrentEventKey ? _styles_NavContent_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.navItemActive : _styles_NavContent_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.navItem,\n    onClick: decoratedOnClick,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: _styles_NavContent_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.navItemInner,\n      children: [children, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: isCurrentEventKey ? _styles_NavContent_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.navItemChevronActive : _styles_NavContent_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.navItemChevron,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_icons_Chevron_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n          width: 14,\n          height: 14\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 151,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 150,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 148,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 147,\n    columnNumber: 5\n  }, this);\n}\n\n_s3(NavItem, \"VqgVqNZNR0a5KgaAfOyGotbQvwg=\", false, function () {\n  return [react_bootstrap_AccordionToggle__WEBPACK_IMPORTED_MODULE_4__[\"useAccordionToggle\"]];\n});\n\n_c4 = NavItem;\n\nfunction ScrollToTop() {\n  _s4();\n\n  return null;\n  var currentEventKey = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(react_bootstrap_AccordionContext__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n\n  var handleClick = function handleClick() {\n    window.scrollTo({\n      left: 0,\n      top: 0,\n      behavior: 'smooth'\n    });\n  };\n\n  if (currentEventKey === null) {\n    return null;\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: _styles_NavContent_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.scrollToTop,\n    onClick: handleClick,\n    style: {\n      animation: 'fadeIn 1500ms'\n    },\n    children: \"^ Scroll to Top ^\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 176,\n    columnNumber: 5\n  }, this);\n}\n\n_s4(ScrollToTop, \"8S9nJ7Jqqp05y1N4dJ5hl9PacTM=\");\n\n_c5 = ScrollToTop;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavContent);\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"NavContent\");\n$RefreshReg$(_c2, \"NavContentItem\");\n$RefreshReg$(_c3, \"ContactItem\");\n$RefreshReg$(_c4, \"NavItem\");\n$RefreshReg$(_c5, \"ScrollToTop\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZDb250ZW50LmpzP2RjZTYiXSwibmFtZXMiOlsibmF2SXRlbXMiLCJ0aXRsZSIsImljb24iLCJTYWRkbGUiLCJkZXNjcmlwdGlvbiIsImxpbmsiLCJUQlRDIiwiTE5QaXp6YSIsIk5hdkNvbnRlbnQiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJzdHlsZXMiLCJuYXZDb250ZW50IiwibWFwIiwibmF2SXRlbSIsImkiLCJ0b1N0cmluZyIsIk5hdkNvbnRlbnRJdGVtIiwiZXZlbnRLZXkiLCJjdXJyZW50RXZlbnRLZXkiLCJ1c2VDb250ZXh0IiwiQWNjb3JkaW9uQ29udGV4dCIsImlzQ3VycmVudEV2ZW50S2V5IiwibmF2Q29udGVudEl0ZW0iLCJjb250ZW50SXRlbUFjdGl2ZSIsImNvbnRlbnRJdGVtIiwiY29udGVudEl0ZW1JY29uIiwiaGVpZ2h0Iiwid2lkdGgiLCJjb250ZW50SXRlbURlc2NyaXB0aW9uIiwiY29udGVudEl0ZW1MaW5rIiwiQ29udGFjdEl0ZW0iLCJ1c2VTdGF0ZSIsImlzQ29waWVkIiwic2V0SXNDb3BpZWQiLCJjb3B5IiwiZXZ0IiwibmF2SXRlbUlubmVyQ29waWVkIiwibmF2SXRlbUlubmVyIiwiTmF2SXRlbSIsImNoaWxkcmVuIiwiY2FsbGJhY2siLCJjdXJyZW50RWwiLCJ1c2VSZWYiLCJkZWNvcmF0ZWRPbkNsaWNrIiwidXNlQWNjb3JkaW9uVG9nZ2xlIiwibmF2SXRlbUFjdGl2ZSIsIm5hdkl0ZW1DaGV2cm9uQWN0aXZlIiwibmF2SXRlbUNoZXZyb24iLCJTY3JvbGxUb1RvcCIsImhhbmRsZUNsaWNrIiwid2luZG93Iiwic2Nyb2xsVG8iLCJsZWZ0IiwidG9wIiwiYmVoYXZpb3IiLCJzY3JvbGxUb1RvcCIsImFuaW1hdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FJQTs7QUFDQTtBQUNB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QUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBVUQ7O0lBMUNRVCxPO1VBSWtCTSxrRjs7O01BSmxCTixPOztBQTRDVCxTQUFTVSxXQUFULEdBQXVCO0FBQUE7O0FBQ3JCLFNBQU8sSUFBUDtBQUVBLE1BQU05QixlQUFlLEdBQUdDLHdEQUFVLENBQUNDLHdFQUFELENBQWxDOztBQUVBLE1BQU02QixXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCQyxVQUFNLENBQUNDLFFBQVAsQ0FBZ0I7QUFDZEMsVUFBSSxFQUFFLENBRFE7QUFFZEMsU0FBRyxFQUFFLENBRlM7QUFHZEMsY0FBUSxFQUFFO0FBSEksS0FBaEI7QUFLRCxHQU5EOztBQVFBLE1BQUlwQyxlQUFlLEtBQUssSUFBeEIsRUFBOEI7QUFDNUIsV0FBTyxJQUFQO0FBQ0Q7O0FBRUQsc0JBQ0U7QUFBSyxhQUFTLEVBQUVSLG9FQUFNLENBQUM2QyxXQUF2QjtBQUFvQyxXQUFPLEVBQUVOLFdBQTdDO0FBQTBELFNBQUssRUFBRTtBQUFDTyxlQUFTLEVBQUU7QUFBWixLQUFqRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7O0lBdEJRUixXOztNQUFBQSxXO0FBd0JNekMseUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdkNvbnRlbnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQWNjb3JkaW9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9BY2NvcmRpb24nXG5pbXBvcnQgeyB1c2VBY2NvcmRpb25Ub2dnbGUgfSBmcm9tICdyZWFjdC1ib290c3RyYXAvQWNjb3JkaW9uVG9nZ2xlJ1xuaW1wb3J0IEFjY29yZGlvbkNvbnRleHQgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0FjY29yZGlvbkNvbnRleHQnXG5pbXBvcnQgQWNjb3JkaW9uQ29sbGFwc2UgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0FjY29yZGlvbkNvbGxhcHNlJ1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9OYXZDb250ZW50Lm1vZHVsZS5jc3MnXG5cbi8vIGltcG9ydCBTYW1wbGVQYWdlIGZyb20gJy4vU2FtcGxlUGFnZS5qcydcbmltcG9ydCBDaGV2cm9uIGZyb20gJy4vaWNvbnMvQ2hldnJvbi5qcydcbmltcG9ydCBTYWRkbGUgZnJvbSAnLi9pY29ucy9TYWRkbGUuanMnXG5pbXBvcnQgVEJUQyBmcm9tICcuL2ljb25zL1RCVEMuanMnXG5pbXBvcnQgTE5QaXp6YSBmcm9tICcuL2ljb25zL0xOUGl6emEuanMnXG5cbmNvbnN0IG5hdkl0ZW1zID0gW1xuICB7XG4gICAgdGl0bGU6ICdTYWRkbGUuZmluYW5jZScsXG4gICAgaWNvbjogU2FkZGxlLFxuICAgIGRlc2NyaXB0aW9uOiAnQnJhbmQgKyBVWC9VSScsXG4gICAgbGluazogJ2h0dHBzOi8vc2FkZGxlLmZpbmFuY2UnXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ3RidGMubmV0d29yaycsXG4gICAgaWNvbjogVEJUQyxcbiAgICBkZXNjcmlwdGlvbjogJ1VYL1VJJyxcbiAgICBsaW5rOiAnaHR0cHM6Ly90YnRjLm5ldHdvcmsnXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ2xuLnBpenphJyxcbiAgICBpY29uOiBMTlBpenphLFxuICAgIGRlc2NyaXB0aW9uOiAnQnJhbmQgKyBVWC9VSScsXG4gICAgbGluazogJ2h0dHBzOi8vbG4ucGl6emEnXG4gIH0sXG5dXG5cbmZ1bmN0aW9uIE5hdkNvbnRlbnQoeyBpc0xvYWRpbmcsIHNldElzTG9hZGluZyB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZDb250ZW50fT5cbiAgICAgIDxBY2NvcmRpb24+XG4gICAgICAgIHtuYXZJdGVtcy5tYXAoKG5hdkl0ZW0sIGkpID0+IChcbiAgICAgICAgICA8TmF2Q29udGVudEl0ZW1cbiAgICAgICAgICAgIGtleT17bmF2SXRlbS50aXRsZX1cbiAgICAgICAgICAgIHRpdGxlPXtuYXZJdGVtLnRpdGxlfVxuICAgICAgICAgICAgaWNvbj17bmF2SXRlbS5pY29ufVxuICAgICAgICAgICAgZGVzY3JpcHRpb249e25hdkl0ZW0uZGVzY3JpcHRpb259XG4gICAgICAgICAgICBsaW5rPXtuYXZJdGVtLmxpbmt9XG4gICAgICAgICAgICBhY3RpdmU9e2ZhbHNlfVxuICAgICAgICAgICAgZXZlbnRLZXk9e2kudG9TdHJpbmcoKX1cbiAgICAgICAgICAgIGlzTG9hZGluZz17aXNMb2FkaW5nfVxuICAgICAgICAgICAgc2V0SXNMb2FkaW5nPXtzZXRJc0xvYWRpbmd9IC8+XG4gICAgICAgICkpfVxuICAgICAgICA8Q29udGFjdEl0ZW0gLz5cbiAgICAgICAgPFNjcm9sbFRvVG9wIC8+XG4gICAgICA8L0FjY29yZGlvbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5mdW5jdGlvbiBOYXZDb250ZW50SXRlbSh7IHRpdGxlLCBpY29uLCBkZXNjcmlwdGlvbiwgbGluaywgZXZlbnRLZXksIGlzTG9hZGluZywgc2V0SXNMb2FkaW5nICB9KSB7XG4gIGNvbnN0IGN1cnJlbnRFdmVudEtleSA9IHVzZUNvbnRleHQoQWNjb3JkaW9uQ29udGV4dClcbiAgY29uc3QgaXNDdXJyZW50RXZlbnRLZXkgPSBjdXJyZW50RXZlbnRLZXkgPT09IGV2ZW50S2V5XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdkNvbnRlbnRJdGVtfT5cbiAgICAgIDxOYXZJdGVtIGV2ZW50S2V5PXtldmVudEtleX0gaXNDdXJyZW50RXZlbnRLZXk9e2lzQ3VycmVudEV2ZW50S2V5fSBzZXRJc0xvYWRpbmc9e3NldElzTG9hZGluZ30+XG4gICAgICAgIHt0aXRsZX1cbiAgICAgIDwvTmF2SXRlbT5cbiAgICAgIDxBY2NvcmRpb25Db2xsYXBzZSBldmVudEtleT17ZXZlbnRLZXl9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aXNDdXJyZW50RXZlbnRLZXkgPyBzdHlsZXMuY29udGVudEl0ZW1BY3RpdmUgOiBzdHlsZXMuY29udGVudEl0ZW19PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudEl0ZW1JY29ufT5cbiAgICAgICAgICAgIHtpY29uKHtoZWlnaHQ6MTAwLCB3aWR0aDoxMDB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnRJdGVtRGVzY3JpcHRpb259PlxuICAgICAgICAgICAge2Rlc2NyaXB0aW9ufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudEl0ZW1MaW5rfT5cbiAgICAgICAgICAgIDxhIGhyZWY9e2xpbmt9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICBnbyB0byB7dGl0bGV9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9BY2NvcmRpb25Db2xsYXBzZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5mdW5jdGlvbiBDb250YWN0SXRlbSh7fSkge1xuICBjb25zdCBbaXNDb3BpZWQsIHNldElzQ29waWVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IGNvcHkgPSAoZXZ0KSA9PiB7XG4gICAgc2V0SXNDb3BpZWQodHJ1ZSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZDb250ZW50SXRlbX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdkl0ZW19IG9uQ2xpY2s9e2NvcHl9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aXNDb3BpZWQgPyBzdHlsZXMubmF2SXRlbUlubmVyQ29waWVkIDogc3R5bGVzLm5hdkl0ZW1Jbm5lcn0+XG4gICAgICAgICAge1xuICAgICAgICAgICAgaXNDb3BpZWRcbiAgICAgICAgICAgID8gXCJFbWFpbCBhZGRyZXNzIGNvcGllZFwiXG4gICAgICAgICAgICA6IFwiQ29udGFjdFwiXG4gICAgICAgICAgfVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlzQ29waWVkXG4gICAgICAgICAgICA/IDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdENvcGllZFwiIC8+XG4gICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZnVuY3Rpb24gTmF2SXRlbSh7IGNoaWxkcmVuLCBldmVudEtleSwgaXNDdXJyZW50RXZlbnRLZXksIGNhbGxiYWNrLCBzZXRJc0xvYWRpbmcgfSkge1xuICAvLyBjb25zdCBjdXJyZW50RXZlbnRLZXkgPSB1c2VDb250ZXh0KEFjY29yZGlvbkNvbnRleHQpXG4gIGNvbnN0IGN1cnJlbnRFbCA9IHVzZVJlZihudWxsKVxuXG4gIGNvbnN0IGRlY29yYXRlZE9uQ2xpY2sgPSB1c2VBY2NvcmRpb25Ub2dnbGUoXG4gICAgZXZlbnRLZXksXG4gICAgKCkgPT4ge1xuICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soZXZlbnRLZXkpXG4gICAgfSxcbiAgKVxuXG4gIC8vIGNvbnN0IGlzQ3VycmVudEV2ZW50S2V5ID0gY3VycmVudEV2ZW50S2V5ID09PSBldmVudEtleVxuXG4gIC8vIGNvbnN0IHdyYXBwZWREZWNvcmF0ZWRPbkNsaWNrID0gKGV2dCkgPT4ge1xuICAvLyAgIGlmICghaXNDdXJyZW50RXZlbnRLZXkpIHtcbiAgLy8gICAgIHNldElzTG9hZGluZyh0cnVlKVxuXG4gIC8vICAgICBjb25zb2xlLmxvZyhcIlRPUCE6IFwiLCAyMDAgKyAoNTAgKiBwYXJzZUludChldmVudEtleSkpKVxuICAvLyAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gIC8vICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gIC8vICAgICAgICAgbGVmdDogMCxcbiAgLy8gICAgICAgICB0b3A6IDIwMCArICg1MCAqIHBhcnNlSW50KGV2ZW50S2V5KSksXG4gIC8vICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gIC8vICAgICAgIH0pXG4gIC8vICAgICB9LCA0MDApXG4gIC8vICAgfSBlbHNlIHtcbiAgLy8gICAgIHNldElzTG9hZGluZyhmYWxzZSlcbiAgLy8gICB9XG4gIFxuICAvLyAgIGRlY29yYXRlZE9uQ2xpY2soZXZ0KVxuICAvLyB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHJlZj17Y3VycmVudEVsfSBjbGFzc05hbWU9e2lzQ3VycmVudEV2ZW50S2V5ID8gc3R5bGVzLm5hdkl0ZW1BY3RpdmUgOiBzdHlsZXMubmF2SXRlbX0gb25DbGljaz17ZGVjb3JhdGVkT25DbGlja30+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdkl0ZW1Jbm5lcn0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2lzQ3VycmVudEV2ZW50S2V5ID8gc3R5bGVzLm5hdkl0ZW1DaGV2cm9uQWN0aXZlIDogc3R5bGVzLm5hdkl0ZW1DaGV2cm9ufT5cbiAgICAgICAgICA8Q2hldnJvbiB3aWR0aD17MTR9IGhlaWdodD17MTR9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFNjcm9sbFRvVG9wKCkge1xuICByZXR1cm4gbnVsbFxuXG4gIGNvbnN0IGN1cnJlbnRFdmVudEtleSA9IHVzZUNvbnRleHQoQWNjb3JkaW9uQ29udGV4dClcblxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgbGVmdDogMCxcbiAgICAgIHRvcDogMCxcbiAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgIH0pXG4gIH1cblxuICBpZiAoY3VycmVudEV2ZW50S2V5ID09PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zY3JvbGxUb1RvcH0gb25DbGljaz17aGFuZGxlQ2xpY2t9IHN0eWxlPXt7YW5pbWF0aW9uOiAnZmFkZUluIDE1MDBtcyd9fT5cbiAgICAgIF4gU2Nyb2xsIHRvIFRvcCBeXG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2Q29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/NavContent.js\n");

/***/ })

})