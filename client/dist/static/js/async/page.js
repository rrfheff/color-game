"use strict";
(self['webpackChunkclient'] = self['webpackChunkclient'] || []).push([["page"], {
"./src/routes/page.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_sliced_to_array.js");
/* ESM import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-dev-runtime.js");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* ESM import */var _modern_js_runtime_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/.pnpm/react-router@6.27.0_react@18.3.1/node_modules/react-router/dist/index.js");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../node_modules/.pnpm/@rspack+plugin-react-refresh@1.0.1_react-refresh@0.16.0/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");

var _this = undefined;

var _s = $RefreshSig$();


/* ESM default export */ __webpack_exports__["default"] = (_s(function() {
    _s();
    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), 2), gameId = _useState[0], setGameId = _useState[1];
    var navigate = (0,_modern_js_runtime_router__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();
    var handleSubmit = function(e) {
        e.preventDefault();
        navigate("/game?gameId=".concat(gameId));
    };
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "prepare-page",
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
                children: "Join Game"
            }, void 0, false, {
                fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/page.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                        type: "text",
                        value: gameId,
                        onChange: function(e) {
                            return setGameId(e.target.value);
                        },
                        placeholder: "Enter Game ID",
                        required: true
                    }, void 0, false, {
                        fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/page.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                        type: "submit",
                        children: "Join Game"
                    }, void 0, false, {
                        fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/page.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/page.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, _this)
        ]
    }, void 0, true, {
        fileName: "/Users/ruofan.ruan/Desktop/projects/color-game/client/src/routes/page.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, _this);
}, "3Yj1/lDPuitzU6KuHc4VCoByO6w=", false, function() {
    return [
        _modern_js_runtime_router__WEBPACK_IMPORTED_MODULE_3__.useNavigate
    ];
}));

function $RefreshSig$() {
  return $ReactRefreshRuntime$.createSignatureFunctionForTransform();
}
function $RefreshReg$(type, id) {
  $ReactRefreshRuntime$.register(type, module.id + "_" + id);
}
Promise.resolve().then(function() {
  $ReactRefreshRuntime$.refresh(module.id, module.hot);
});


}),

}]);
//# sourceMappingURL=page.js.map