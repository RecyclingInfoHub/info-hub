"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("_app-pages-browser_src_components_Map_tsx",{

/***/ "(app-pages-browser)/./src/components/Map.tsx":
/*!********************************!*\
  !*** ./src/components/Map.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Map; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _constants_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/constants/map */ \"(app-pages-browser)/./src/constants/map.ts\");\n/* harmony import */ var _utils_leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/leaflet */ \"(app-pages-browser)/./src/utils/leaflet.ts\");\n/* harmony import */ var _uidotdev_usehooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @uidotdev/usehooks */ \"(app-pages-browser)/./node_modules/@uidotdev/usehooks/index.js\");\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-leaflet */ \"(app-pages-browser)/./node_modules/react-leaflet/lib/MapContainer.js\");\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-leaflet */ \"(app-pages-browser)/./node_modules/react-leaflet/lib/Marker.js\");\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-leaflet */ \"(app-pages-browser)/./node_modules/react-leaflet/lib/Popup.js\");\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-leaflet */ \"(app-pages-browser)/./node_modules/react-leaflet/lib/TileLayer.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst { zoom, center } = _constants_map__WEBPACK_IMPORTED_MODULE_1__.MAP_CONFIG;\nconst containerStyle = {\n    height: \"80vh\",\n    width: \"100%\"\n};\nfunction Map(param) {\n    let { locations } = param;\n    var _locations;\n    _s();\n    const { latitude, longitude } = (0,_uidotdev_usehooks__WEBPACK_IMPORTED_MODULE_3__.useGeolocation)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_4__.MapContainer, {\n        center: center,\n        zoom: zoom,\n        scrollWheelZoom: false,\n        style: containerStyle,\n        children: [\n            latitude && longitude && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_5__.Marker, {\n                icon: _utils_leaflet__WEBPACK_IMPORTED_MODULE_2__.greenIcon,\n                position: {\n                    lat: latitude,\n                    lng: longitude\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_6__.Popup, {\n                    children: \"You are here\"\n                }, void 0, false, {\n                    fileName: \"/Users/kelokchan/Work/info-hub/src/components/Map.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/kelokchan/Work/info-hub/src/components/Map.tsx\",\n                lineNumber: 27,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_7__.TileLayer, {\n                attribution: '\\xa9 <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors',\n                url: \"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\"\n            }, void 0, false, {\n                fileName: \"/Users/kelokchan/Work/info-hub/src/components/Map.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            (_locations = locations) === null || _locations === void 0 ? void 0 : _locations.map((param)=>/*#__PURE__*/ {\n                let { id, name, address, lat, lng } = param;\n                return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_5__.Marker, {\n                    position: {\n                        lat,\n                        lng\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_6__.Popup, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kelokchan/Work/info-hub/src/components/Map.tsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/kelokchan/Work/info-hub/src/components/Map.tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: address\n                                }, void 0, false, {\n                                    fileName: \"/Users/kelokchan/Work/info-hub/src/components/Map.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/kelokchan/Work/info-hub/src/components/Map.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/kelokchan/Work/info-hub/src/components/Map.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, this)\n                }, id, false, {\n                    fileName: \"/Users/kelokchan/Work/info-hub/src/components/Map.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kelokchan/Work/info-hub/src/components/Map.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n} /**\n * TODO\n * - stop at click event and fly to center\n * - marker clustering\n * - move and refactor filter functions\n * - update popup to right panel single selection details\n * - Update algolia setup on geo filtering, taggings\n */ \n_s(Map, \"f+L9Bn3hKW7+eXdsdeRqC20kkJ0=\", false, function() {\n    return [\n        _uidotdev_usehooks__WEBPACK_IMPORTED_MODULE_3__.useGeolocation\n    ];\n});\n_c = Map;\nvar _c;\n$RefreshReg$(_c, \"Map\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL01hcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFNkM7QUFFcEI7QUFDbUI7QUFDUTtBQUNtQjtBQUV2RSxNQUFNLEVBQUVPLElBQUksRUFBRUMsTUFBTSxFQUFFLEdBQUdSLHNEQUFVQTtBQUVuQyxNQUFNUyxpQkFBaUI7SUFDckJDLFFBQVE7SUFDUkMsT0FBTztBQUNUO0FBRWUsU0FBU0MsSUFBSSxLQUEwQztRQUExQyxFQUFFQyxTQUFTLEVBQStCLEdBQTFDO1FBa0JyQkE7O0lBakJMLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxTQUFTLEVBQUUsR0FBR2Isa0VBQWNBO0lBRTlDLHFCQUNFLDhEQUFDQyx1REFBWUE7UUFDWEssUUFBUUE7UUFDUkQsTUFBTUE7UUFDTlMsaUJBQWlCO1FBQ2pCQyxPQUFPUjs7WUFDTkssWUFBWUMsMkJBQ1gsOERBQUNYLGlEQUFNQTtnQkFBQ2MsTUFBTWpCLHFEQUFTQTtnQkFBRWtCLFVBQVU7b0JBQUVDLEtBQUtOO29CQUFVTyxLQUFLTjtnQkFBVTswQkFDakUsNEVBQUNWLGdEQUFLQTs4QkFBQzs7Ozs7Ozs7Ozs7MEJBR1gsOERBQUNDLG9EQUFTQTtnQkFDUmdCLGFBQVk7Z0JBQ1pDLEtBQUk7Ozs7OzthQUVMVixhQUFBQSx1QkFBQUEsaUNBQUFBLFdBQVdXLEdBQUcsQ0FBQztvQkFBQyxFQUFFQyxFQUFFLEVBQUVDLElBQUksRUFBRUMsT0FBTyxFQUFFUCxHQUFHLEVBQUVDLEdBQUcsRUFBRTt1QkFDOUMsOERBQUNqQixpREFBTUE7b0JBQVVlLFVBQVU7d0JBQUVDO3dCQUFLQztvQkFBSTs4QkFDcEMsNEVBQUNoQixnREFBS0E7a0NBQ0osNEVBQUN1Qjs7OENBQ0MsOERBQUNBOzhDQUNDLDRFQUFDQztrREFBUUg7Ozs7Ozs7Ozs7OzhDQUVYLDhEQUFDRTs4Q0FBS0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O21CQU5DRjs7Ozs7WUFTTDs7Ozs7OztBQUloQixFQUVBOzs7Ozs7O0NBT0M7R0F6Q3VCYjs7UUFDVVYsOERBQWNBOzs7S0FEeEJVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL01hcC50c3g/YjE2NSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCB7IE1BUF9DT05GSUcgfSBmcm9tICdAL2NvbnN0YW50cy9tYXAnO1xuaW1wb3J0IHR5cGUgeyBJTG9jYXRpb24gfSBmcm9tICdAL3R5cGVzJztcbmltcG9ydCAnQC91dGlscy9sZWFmbGV0JztcbmltcG9ydCB7IGdyZWVuSWNvbiB9IGZyb20gJ0AvdXRpbHMvbGVhZmxldCc7XG5pbXBvcnQgeyB1c2VHZW9sb2NhdGlvbiB9IGZyb20gJ0B1aWRvdGRldi91c2Vob29rcyc7XG5pbXBvcnQgeyBNYXBDb250YWluZXIsIE1hcmtlciwgUG9wdXAsIFRpbGVMYXllciB9IGZyb20gJ3JlYWN0LWxlYWZsZXQnO1xuXG5jb25zdCB7IHpvb20sIGNlbnRlciB9ID0gTUFQX0NPTkZJRztcblxuY29uc3QgY29udGFpbmVyU3R5bGUgPSB7XG4gIGhlaWdodDogJzgwdmgnLFxuICB3aWR0aDogJzEwMCUnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFwKHsgbG9jYXRpb25zIH06IHsgbG9jYXRpb25zPzogSUxvY2F0aW9uW10gfSkge1xuICBjb25zdCB7IGxhdGl0dWRlLCBsb25naXR1ZGUgfSA9IHVzZUdlb2xvY2F0aW9uKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8TWFwQ29udGFpbmVyXG4gICAgICBjZW50ZXI9e2NlbnRlcn1cbiAgICAgIHpvb209e3pvb219XG4gICAgICBzY3JvbGxXaGVlbFpvb209e2ZhbHNlfVxuICAgICAgc3R5bGU9e2NvbnRhaW5lclN0eWxlfT5cbiAgICAgIHtsYXRpdHVkZSAmJiBsb25naXR1ZGUgJiYgKFxuICAgICAgICA8TWFya2VyIGljb249e2dyZWVuSWNvbn0gcG9zaXRpb249e3sgbGF0OiBsYXRpdHVkZSwgbG5nOiBsb25naXR1ZGUgfX0+XG4gICAgICAgICAgPFBvcHVwPllvdSBhcmUgaGVyZTwvUG9wdXA+XG4gICAgICAgIDwvTWFya2VyPlxuICAgICAgKX1cbiAgICAgIDxUaWxlTGF5ZXJcbiAgICAgICAgYXR0cmlidXRpb249JyZjb3B5OyA8YSBocmVmPVwiaHR0cHM6Ly93d3cub3BlbnN0cmVldG1hcC5vcmcvY29weXJpZ2h0XCI+T3BlblN0cmVldE1hcDwvYT4gY29udHJpYnV0b3JzJ1xuICAgICAgICB1cmw9XCJodHRwczovL3tzfS50aWxlLm9wZW5zdHJlZXRtYXAub3JnL3t6fS97eH0ve3l9LnBuZ1wiXG4gICAgICAvPlxuICAgICAge2xvY2F0aW9ucz8ubWFwKCh7IGlkLCBuYW1lLCBhZGRyZXNzLCBsYXQsIGxuZyB9KSA9PiAoXG4gICAgICAgIDxNYXJrZXIga2V5PXtpZH0gcG9zaXRpb249e3sgbGF0LCBsbmcgfX0+XG4gICAgICAgICAgPFBvcHVwPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8c3Ryb25nPntuYW1lfTwvc3Ryb25nPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj57YWRkcmVzc308L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvUG9wdXA+XG4gICAgICAgIDwvTWFya2VyPlxuICAgICAgKSl9XG4gICAgPC9NYXBDb250YWluZXI+XG4gICk7XG59XG5cbi8qKlxuICogVE9ET1xuICogLSBzdG9wIGF0IGNsaWNrIGV2ZW50IGFuZCBmbHkgdG8gY2VudGVyXG4gKiAtIG1hcmtlciBjbHVzdGVyaW5nXG4gKiAtIG1vdmUgYW5kIHJlZmFjdG9yIGZpbHRlciBmdW5jdGlvbnNcbiAqIC0gdXBkYXRlIHBvcHVwIHRvIHJpZ2h0IHBhbmVsIHNpbmdsZSBzZWxlY3Rpb24gZGV0YWlsc1xuICogLSBVcGRhdGUgYWxnb2xpYSBzZXR1cCBvbiBnZW8gZmlsdGVyaW5nLCB0YWdnaW5nc1xuICovXG4iXSwibmFtZXMiOlsiTUFQX0NPTkZJRyIsImdyZWVuSWNvbiIsInVzZUdlb2xvY2F0aW9uIiwiTWFwQ29udGFpbmVyIiwiTWFya2VyIiwiUG9wdXAiLCJUaWxlTGF5ZXIiLCJ6b29tIiwiY2VudGVyIiwiY29udGFpbmVyU3R5bGUiLCJoZWlnaHQiLCJ3aWR0aCIsIk1hcCIsImxvY2F0aW9ucyIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwic2Nyb2xsV2hlZWxab29tIiwic3R5bGUiLCJpY29uIiwicG9zaXRpb24iLCJsYXQiLCJsbmciLCJhdHRyaWJ1dGlvbiIsInVybCIsIm1hcCIsImlkIiwibmFtZSIsImFkZHJlc3MiLCJkaXYiLCJzdHJvbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Map.tsx\n"));

/***/ })

});