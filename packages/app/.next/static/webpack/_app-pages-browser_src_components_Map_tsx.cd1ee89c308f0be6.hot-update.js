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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Map; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _constants_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/constants/map */ \"(app-pages-browser)/./src/constants/map.ts\");\n/* harmony import */ var _utils_leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/leaflet */ \"(app-pages-browser)/./src/utils/leaflet.ts\");\n/* harmony import */ var _uidotdev_usehooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @uidotdev/usehooks */ \"(app-pages-browser)/./node_modules/@uidotdev/usehooks/index.js\");\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-leaflet */ \"(app-pages-browser)/./node_modules/react-leaflet/lib/MapContainer.js\");\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-leaflet */ \"(app-pages-browser)/./node_modules/react-leaflet/lib/Marker.js\");\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-leaflet */ \"(app-pages-browser)/./node_modules/react-leaflet/lib/Popup.js\");\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-leaflet */ \"(app-pages-browser)/./node_modules/react-leaflet/lib/TileLayer.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst { zoom, center } = _constants_map__WEBPACK_IMPORTED_MODULE_1__.MAP_CONFIG;\nconst containerStyle = {\n    height: \"80vh\",\n    width: \"100%\"\n};\nfunction Map(param) {\n    let { locations } = param;\n    var _locations;\n    _s();\n    const { latitude, longitude } = (0,_uidotdev_usehooks__WEBPACK_IMPORTED_MODULE_3__.useGeolocation)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_4__.MapContainer, {\n        center: center,\n        zoom: zoom,\n        scrollWheelZoom: true,\n        style: containerStyle,\n        children: [\n            latitude && longitude && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_5__.Marker, {\n                zIndexOffset: 9999,\n                icon: _utils_leaflet__WEBPACK_IMPORTED_MODULE_2__.greenIcon,\n                position: {\n                    lat: latitude,\n                    lng: longitude\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_6__.Popup, {\n                    children: \"You are here\"\n                }, void 0, false, {\n                    fileName: \"/Users/kelokchan/Work/info-hub/src/components/Map.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/kelokchan/Work/info-hub/src/components/Map.tsx\",\n                lineNumber: 27,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_7__.TileLayer, {\n                attribution: '\\xa9 <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors',\n                url: \"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\"\n            }, void 0, false, {\n                fileName: \"/Users/kelokchan/Work/info-hub/src/components/Map.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            (_locations = locations) === null || _locations === void 0 ? void 0 : _locations.map((param)=>/*#__PURE__*/ {\n                let { id, name, address, lat, lng } = param;\n                return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_5__.Marker, {\n                    position: {\n                        lat,\n                        lng\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_6__.Popup, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kelokchan/Work/info-hub/src/components/Map.tsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/kelokchan/Work/info-hub/src/components/Map.tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: address\n                                }, void 0, false, {\n                                    fileName: \"/Users/kelokchan/Work/info-hub/src/components/Map.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/kelokchan/Work/info-hub/src/components/Map.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/kelokchan/Work/info-hub/src/components/Map.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, this)\n                }, id, false, {\n                    fileName: \"/Users/kelokchan/Work/info-hub/src/components/Map.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kelokchan/Work/info-hub/src/components/Map.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n} /**\n * TODO\n * - stop at click event and fly to center\n * - marker clustering\n * - move and refactor filter functions\n * - update popup to right panel single selection details\n * - Update algolia setup on geo filtering, taggings\n */ \n_s(Map, \"f+L9Bn3hKW7+eXdsdeRqC20kkJ0=\", false, function() {\n    return [\n        _uidotdev_usehooks__WEBPACK_IMPORTED_MODULE_3__.useGeolocation\n    ];\n});\n_c = Map;\nvar _c;\n$RefreshReg$(_c, \"Map\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL01hcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFNkM7QUFFcEI7QUFDbUI7QUFDUTtBQUNtQjtBQUV2RSxNQUFNLEVBQUVPLElBQUksRUFBRUMsTUFBTSxFQUFFLEdBQUdSLHNEQUFVQTtBQUVuQyxNQUFNUyxpQkFBaUI7SUFDckJDLFFBQVE7SUFDUkMsT0FBTztBQUNUO0FBRWUsU0FBU0MsSUFBSSxLQUEwQztRQUExQyxFQUFFQyxTQUFTLEVBQStCLEdBQTFDO1FBa0JyQkE7O0lBakJMLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxTQUFTLEVBQUUsR0FBR2Isa0VBQWNBO0lBRTlDLHFCQUNFLDhEQUFDQyx1REFBWUE7UUFDWEssUUFBUUE7UUFDUkQsTUFBTUE7UUFDTlMsZUFBZTtRQUNmQyxPQUFPUjs7WUFDTkssWUFBWUMsMkJBQ1gsOERBQUNYLGlEQUFNQTtnQkFBQ2MsY0FBYztnQkFBTUMsTUFBTWxCLHFEQUFTQTtnQkFBRW1CLFVBQVU7b0JBQUVDLEtBQUtQO29CQUFVUSxLQUFLUDtnQkFBVTswQkFDckYsNEVBQUNWLGdEQUFLQTs4QkFBQzs7Ozs7Ozs7Ozs7MEJBR1gsOERBQUNDLG9EQUFTQTtnQkFDUmlCLGFBQVk7Z0JBQ1pDLEtBQUk7Ozs7OzthQUVMWCxhQUFBQSx1QkFBQUEsaUNBQUFBLFdBQVdZLEdBQUcsQ0FBQztvQkFBQyxFQUFFQyxFQUFFLEVBQUVDLElBQUksRUFBRUMsT0FBTyxFQUFFUCxHQUFHLEVBQUVDLEdBQUcsRUFBRTt1QkFDOUMsOERBQUNsQixpREFBTUE7b0JBQVVnQixVQUFVO3dCQUFFQzt3QkFBS0M7b0JBQUk7OEJBQ3BDLDRFQUFDakIsZ0RBQUtBO2tDQUNKLDRFQUFDd0I7OzhDQUNDLDhEQUFDQTs4Q0FDQyw0RUFBQ0M7a0RBQVFIOzs7Ozs7Ozs7Ozs4Q0FFWCw4REFBQ0U7OENBQUtEOzs7Ozs7Ozs7Ozs7Ozs7OzttQkFOQ0Y7Ozs7O1lBU0w7Ozs7Ozs7QUFJaEIsRUFFQTs7Ozs7OztDQU9DO0dBekN1QmQ7O1FBQ1VWLDhEQUFjQTs7O0tBRHhCVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9NYXAudHN4P2IxNjUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgeyBNQVBfQ09ORklHIH0gZnJvbSAnQC9jb25zdGFudHMvbWFwJztcbmltcG9ydCB0eXBlIHsgSUxvY2F0aW9uIH0gZnJvbSAnQC90eXBlcyc7XG5pbXBvcnQgJ0AvdXRpbHMvbGVhZmxldCc7XG5pbXBvcnQgeyBncmVlbkljb24gfSBmcm9tICdAL3V0aWxzL2xlYWZsZXQnO1xuaW1wb3J0IHsgdXNlR2VvbG9jYXRpb24gfSBmcm9tICdAdWlkb3RkZXYvdXNlaG9va3MnO1xuaW1wb3J0IHsgTWFwQ29udGFpbmVyLCBNYXJrZXIsIFBvcHVwLCBUaWxlTGF5ZXIgfSBmcm9tICdyZWFjdC1sZWFmbGV0JztcblxuY29uc3QgeyB6b29tLCBjZW50ZXIgfSA9IE1BUF9DT05GSUc7XG5cbmNvbnN0IGNvbnRhaW5lclN0eWxlID0ge1xuICBoZWlnaHQ6ICc4MHZoJyxcbiAgd2lkdGg6ICcxMDAlJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hcCh7IGxvY2F0aW9ucyB9OiB7IGxvY2F0aW9ucz86IElMb2NhdGlvbltdIH0pIHtcbiAgY29uc3QgeyBsYXRpdHVkZSwgbG9uZ2l0dWRlIH0gPSB1c2VHZW9sb2NhdGlvbigpO1xuXG4gIHJldHVybiAoXG4gICAgPE1hcENvbnRhaW5lclxuICAgICAgY2VudGVyPXtjZW50ZXJ9XG4gICAgICB6b29tPXt6b29tfVxuICAgICAgc2Nyb2xsV2hlZWxab29tXG4gICAgICBzdHlsZT17Y29udGFpbmVyU3R5bGV9PlxuICAgICAge2xhdGl0dWRlICYmIGxvbmdpdHVkZSAmJiAoXG4gICAgICAgIDxNYXJrZXIgekluZGV4T2Zmc2V0PXs5OTk5fSBpY29uPXtncmVlbkljb259IHBvc2l0aW9uPXt7IGxhdDogbGF0aXR1ZGUsIGxuZzogbG9uZ2l0dWRlIH19PlxuICAgICAgICAgIDxQb3B1cD5Zb3UgYXJlIGhlcmU8L1BvcHVwPlxuICAgICAgICA8L01hcmtlcj5cbiAgICAgICl9XG4gICAgICA8VGlsZUxheWVyXG4gICAgICAgIGF0dHJpYnV0aW9uPScmY29weTsgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm9wZW5zdHJlZXRtYXAub3JnL2NvcHlyaWdodFwiPk9wZW5TdHJlZXRNYXA8L2E+IGNvbnRyaWJ1dG9ycydcbiAgICAgICAgdXJsPVwiaHR0cHM6Ly97c30udGlsZS5vcGVuc3RyZWV0bWFwLm9yZy97en0ve3h9L3t5fS5wbmdcIlxuICAgICAgLz5cbiAgICAgIHtsb2NhdGlvbnM/Lm1hcCgoeyBpZCwgbmFtZSwgYWRkcmVzcywgbGF0LCBsbmcgfSkgPT4gKFxuICAgICAgICA8TWFya2VyIGtleT17aWR9IHBvc2l0aW9uPXt7IGxhdCwgbG5nIH19PlxuICAgICAgICAgIDxQb3B1cD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHN0cm9uZz57bmFtZX08L3N0cm9uZz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+e2FkZHJlc3N9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L1BvcHVwPlxuICAgICAgICA8L01hcmtlcj5cbiAgICAgICkpfVxuICAgIDwvTWFwQ29udGFpbmVyPlxuICApO1xufVxuXG4vKipcbiAqIFRPRE9cbiAqIC0gc3RvcCBhdCBjbGljayBldmVudCBhbmQgZmx5IHRvIGNlbnRlclxuICogLSBtYXJrZXIgY2x1c3RlcmluZ1xuICogLSBtb3ZlIGFuZCByZWZhY3RvciBmaWx0ZXIgZnVuY3Rpb25zXG4gKiAtIHVwZGF0ZSBwb3B1cCB0byByaWdodCBwYW5lbCBzaW5nbGUgc2VsZWN0aW9uIGRldGFpbHNcbiAqIC0gVXBkYXRlIGFsZ29saWEgc2V0dXAgb24gZ2VvIGZpbHRlcmluZywgdGFnZ2luZ3NcbiAqL1xuIl0sIm5hbWVzIjpbIk1BUF9DT05GSUciLCJncmVlbkljb24iLCJ1c2VHZW9sb2NhdGlvbiIsIk1hcENvbnRhaW5lciIsIk1hcmtlciIsIlBvcHVwIiwiVGlsZUxheWVyIiwiem9vbSIsImNlbnRlciIsImNvbnRhaW5lclN0eWxlIiwiaGVpZ2h0Iiwid2lkdGgiLCJNYXAiLCJsb2NhdGlvbnMiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsInNjcm9sbFdoZWVsWm9vbSIsInN0eWxlIiwiekluZGV4T2Zmc2V0IiwiaWNvbiIsInBvc2l0aW9uIiwibGF0IiwibG5nIiwiYXR0cmlidXRpb24iLCJ1cmwiLCJtYXAiLCJpZCIsIm5hbWUiLCJhZGRyZXNzIiwiZGl2Iiwic3Ryb25nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Map.tsx\n"));

/***/ })

});