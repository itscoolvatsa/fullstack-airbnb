"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/auth/signout";
exports.ids = ["pages/auth/signout"];
exports.modules = {

/***/ "./hooks/use-request.js":
/*!******************************!*\
  !*** ./hooks/use-request.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ url , method , body , onSuccess  })=>{\n    const { 0: errors , 1: setErrors  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const doRequest = async ()=>{\n        try {\n            setErrors(null);\n            const response = await (axios__WEBPACK_IMPORTED_MODULE_1___default())[method](url, body, {\n                withCredentials: true\n            });\n            if (onSuccess) {\n                onSuccess(response.data);\n            }\n            return response.data;\n        } catch (err1) {\n            setErrors(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"alert alert-danger\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: \"Ooops....\"\n                    }, void 0, false, {\n                        fileName: \"/home/adityavatsa/code/fullstack/frontend/hooks/use-request.js\",\n                        lineNumber: 20,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"my-0\",\n                        children: err1.response.data.errors.map((err)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: err.message\n                            }, err.message, false, {\n                                fileName: \"/home/adityavatsa/code/fullstack/frontend/hooks/use-request.js\",\n                                lineNumber: 23,\n                                columnNumber: 29\n                            }, undefined)\n                        )\n                    }, void 0, false, {\n                        fileName: \"/home/adityavatsa/code/fullstack/frontend/hooks/use-request.js\",\n                        lineNumber: 21,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/adityavatsa/code/fullstack/frontend/hooks/use-request.js\",\n                lineNumber: 19,\n                columnNumber: 17\n            }, undefined));\n        }\n    };\n    return {\n        doRequest,\n        errors\n    };\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2UtcmVxdWVzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF5QjtBQUNPO0FBRWhDLGlFQUFnQixFQUFDLENBQUNFLEdBQUcsR0FBRUMsTUFBTSxHQUFFQyxJQUFJLEdBQUVDLFNBQVMsRUFBQyxDQUFDLEdBQUssQ0FBQztJQUNsRCxLQUFLLE1BQUVDLE1BQU0sTUFBRUMsU0FBUyxNQUFJTiwrQ0FBUSxDQUFDLElBQUk7SUFFekMsS0FBSyxDQUFDTyxTQUFTLGFBQWUsQ0FBQztRQUMzQixHQUFHLENBQUMsQ0FBQztZQUNERCxTQUFTLENBQUMsSUFBSTtZQUNkLEtBQUssQ0FBQ0UsUUFBUSxHQUFHLEtBQUssQ0FBQ1QsOENBQUssQ0FBQ0csTUFBTSxFQUFFRCxHQUFHLEVBQUVFLElBQUksRUFBRSxDQUFDO2dCQUM3Q00sZUFBZSxFQUFFLElBQUk7WUFDekIsQ0FBQztZQUNELEVBQUUsRUFBRUwsU0FBUyxFQUFFLENBQUM7Z0JBQ1pBLFNBQVMsQ0FBQ0ksUUFBUSxDQUFDRSxJQUFJO1lBQzNCLENBQUM7WUFDRCxNQUFNLENBQUNGLFFBQVEsQ0FBQ0UsSUFBSTtRQUN4QixDQUFDLENBQUMsS0FBSyxFQUFFQyxJQUFHLEVBQUUsQ0FBQztZQUNYTCxTQUFTLDZFQUNKTSxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBb0I7O2dHQUM5QkMsQ0FBRTtrQ0FBQyxDQUFTOzs7Ozs7Z0dBQ1pDLENBQUU7d0JBQUNGLFNBQVMsRUFBQyxDQUFNO2tDQUNmRixJQUFHLENBQUNILFFBQVEsQ0FBQ0UsSUFBSSxDQUFDTCxNQUFNLENBQUNXLEdBQUcsRUFBRUwsR0FBRywrRUFDN0JNLENBQUU7MENBQW9CTixHQUFHLENBQUNPLE9BQU87K0JBQXpCUCxHQUFHLENBQUNPLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7O1FBS3hDLENBQUM7SUFDTCxDQUFDO0lBRUQsTUFBTSxDQUFDLENBQUM7UUFBQ1gsU0FBUztRQUFFRixNQUFNO0lBQUMsQ0FBQztBQUNoQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9ob29rcy91c2UtcmVxdWVzdC5qcz9hNDZiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0ICh7IHVybCwgbWV0aG9kLCBib2R5LCBvblN1Y2Nlc3MgfSkgPT4ge1xuICAgIGNvbnN0IFtlcnJvcnMsIHNldEVycm9yc10gPSB1c2VTdGF0ZShudWxsKTtcblxuICAgIGNvbnN0IGRvUmVxdWVzdCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNldEVycm9ycyhudWxsKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3NbbWV0aG9kXSh1cmwsIGJvZHksIHtcbiAgICAgICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChvblN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICBvblN1Y2Nlc3MocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBzZXRFcnJvcnMoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGg0Pk9vb3BzLi4uLjwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJteS0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZXJyLnJlc3BvbnNlLmRhdGEuZXJyb3JzLm1hcCgoZXJyKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17ZXJyLm1lc3NhZ2V9PntlcnIubWVzc2FnZX08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiB7IGRvUmVxdWVzdCwgZXJyb3JzIH07XG59O1xuIl0sIm5hbWVzIjpbImF4aW9zIiwidXNlU3RhdGUiLCJ1cmwiLCJtZXRob2QiLCJib2R5Iiwib25TdWNjZXNzIiwiZXJyb3JzIiwic2V0RXJyb3JzIiwiZG9SZXF1ZXN0IiwicmVzcG9uc2UiLCJ3aXRoQ3JlZGVudGlhbHMiLCJkYXRhIiwiZXJyIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDQiLCJ1bCIsIm1hcCIsImxpIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/use-request.js\n");

/***/ }),

/***/ "./pages/auth/signout.js":
/*!*******************************!*\
  !*** ./pages/auth/signout.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks_use_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/use-request */ \"./hooks/use-request.js\");\n\n\n\n\nconst Signout = ()=>{\n    const { doRequest  } = (0,_hooks_use_request__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n        url: \"http://localhost:5000/auth/signout\",\n        method: \"post\",\n        body: {},\n        onSuccess: ()=>{\n            next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/\");\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        doRequest();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Signing you out\"\n    }, void 0, false, {\n        fileName: \"/home/adityavatsa/code/fullstack/frontend/pages/auth/signout.js\",\n        lineNumber: 19,\n        columnNumber: 12\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Signout);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hdXRoL3NpZ25vdXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ0Q7QUFDZ0I7QUFFaEQsS0FBSyxDQUFDRyxPQUFPLE9BQVMsQ0FBQztJQUNuQixLQUFLLENBQUMsQ0FBQyxDQUFDQyxTQUFTLEVBQUMsQ0FBQyxHQUFHRiw4REFBVSxDQUFDLENBQUM7UUFDOUJHLEdBQUcsRUFBRSxDQUFvQztRQUN6Q0MsTUFBTSxFQUFFLENBQU07UUFDZEMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNSQyxTQUFTLE1BQVEsQ0FBQztZQUNkUCx1REFBVyxDQUFDLENBQUc7UUFDbkIsQ0FBQztJQUNMLENBQUM7SUFFREQsZ0RBQVMsS0FBTyxDQUFDO1FBQ2JJLFNBQVM7SUFDYixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRUwsTUFBTSw2RUFBRU0sQ0FBRztrQkFBQyxDQUFlOzs7Ozs7QUFDL0IsQ0FBQztBQUVELGlFQUFlUCxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3BhZ2VzL2F1dGgvc2lnbm91dC5qcz8xNGU1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB1c2VSZXF1ZXN0IGZyb20gXCIuLi8uLi9ob29rcy91c2UtcmVxdWVzdFwiO1xuXG5jb25zdCBTaWdub3V0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgZG9SZXF1ZXN0IH0gPSB1c2VSZXF1ZXN0KHtcbiAgICAgICAgdXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hdXRoL3NpZ25vdXRcIixcbiAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgICAgYm9keToge30sXG4gICAgICAgIG9uU3VjY2VzczogKCkgPT4ge1xuICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvXCIpO1xuICAgICAgICB9LFxuICAgIH0pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZG9SZXF1ZXN0KCk7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIDxkaXY+U2lnbmluZyB5b3Ugb3V0PC9kaXY+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2lnbm91dDtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJSb3V0ZXIiLCJ1c2VSZXF1ZXN0IiwiU2lnbm91dCIsImRvUmVxdWVzdCIsInVybCIsIm1ldGhvZCIsImJvZHkiLCJvblN1Y2Nlc3MiLCJwdXNoIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/auth/signout.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/auth/signout.js"));
module.exports = __webpack_exports__;

})();