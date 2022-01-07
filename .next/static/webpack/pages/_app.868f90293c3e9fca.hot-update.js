"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/gaming-setup.js":
/*!************************************!*\
  !*** ./components/gaming-setup.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var _libs_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../libs/model */ \"./libs/model.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nfunction easeOutCirc(x) {\n    return Math.sqrt(1 - Math.pow(x - 1, 4));\n}\nvar GamingSetup = function() {\n    _s();\n    var refContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), loading = ref[0], setLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), renderer = ref1[0], setRenderer = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), _camera = ref2[0], setCamera = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(-0.5, 1.2, 0)), target = ref3[0];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(20 * Math.sin(0.2 * Math.PI), 10, 20 * Math.sin(0.2 * Math.PI))), initialCameraPosition = ref4[0];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_4__.Scene()), scene = ref5[0];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), controls1 = ref6[0], setControls = ref6[1];\n    /* eslint-disable react-hooks/exhaustive-deps */ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var container = refContainer.current;\n        if (container && !renderer) {\n            var scW = container.clientWidth;\n            var scH = container.clientHeight;\n            var renderer1 = new three__WEBPACK_IMPORTED_MODULE_4__.WebGLRenderer({\n                antialias: true,\n                alpha: true\n            });\n            renderer1.setPixelRatio(window.devicePixelRatio);\n            renderer1.setSize(scW, scH);\n            renderer1.outputEncoding = three__WEBPACK_IMPORTED_MODULE_4__.sRGBEncoding;\n            container.appendChild(renderer1.domElement);\n            setRenderer(renderer1);\n            var scale = scH * 0.005 + 4.8;\n            var camera = new three__WEBPACK_IMPORTED_MODULE_4__.OrthographicCamera(-scale, scale, scale, -scale, 0.01, 50000);\n            camera.position.copy(initialCameraPosition);\n            camera.lookAt(target);\n            var ambientLight = new three__WEBPACK_IMPORTED_MODULE_4__.AmbientLight(13421772, 1);\n            scene.add(ambientLight);\n            var controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__.OrbitControls(camera, renderer1.domElement);\n            controls.autoRotate = true;\n            controls.target = target;\n            setControls(controls);\n            (0,_libs_model__WEBPACK_IMPORTED_MODULE_3__.loadGLTFModel)(scene, './gaming.glb', {\n                receiveShadow: false,\n                castShadow: false\n            }).then(function() {\n                animate();\n                setLoading(false);\n            });\n            var req = null;\n            var frame = 0;\n            var animate = function() {\n                req = requestAnimationFrame(animate);\n                frame = frame <= 100 ? frame + 1 : frame;\n                if (frame <= 100) {\n                    var p = initialCameraPosition;\n                    var rotSpeed = easeOutCirc(frame / 120) * Math.PI * 20;\n                    camera.position.y = 10;\n                    camera.position.x = p.x * Math.cos(rotSpeed) - p.z * Math.sin(rotSpeed);\n                    camera.position.z = p.z * Math.cos(rotSpeed) + p.x * Math.sin(rotSpeed);\n                    camera.lookAt(target);\n                } else {\n                    controls.update();\n                }\n                renderer1.render(scene, camera);\n            };\n            return function() {\n                cancelAnimationFrame(req);\n                renderer1.dispose();\n            };\n        }\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        ref: refContainer,\n        className: \"gaming-setup\",\n        m: \"auto\",\n        mt: [\n            '-20px',\n            '-60px',\n            '-120px'\n        ],\n        mb: [\n            '-40px',\n            '-140px',\n            '-200px'\n        ],\n        w: [\n            280,\n            480,\n            640\n        ],\n        h: [\n            280,\n            480,\n            640\n        ],\n        position: \"relative\",\n        __source: {\n            fileName: \"/Users/banjhaiti/Desktop/didierganthier-homepage/components/gaming-setup.js\",\n            lineNumber: 104,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: loading && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Spinner, {\n            size: \"xl\",\n            position: \"absolute\",\n            left: \"50%\",\n            top: \"50%\",\n            ml: \"calc(0px - var(--spinner-size) / 2)\",\n            mt: \"calc(0px - var(--spinner-size))\",\n            __source: {\n                fileName: \"/Users/banjhaiti/Desktop/didierganthier-homepage/components/gaming-setup.js\",\n                lineNumber: 115,\n                columnNumber: 17\n            },\n            __self: _this\n        })\n    }));\n};\n_s(GamingSetup, \"kp38CLZo/TF1IerGb+EHrG2eC+w=\");\n_c = GamingSetup;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GamingSetup);\nvar _c;\n$RefreshReg$(_c, \"GamingSetup\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxDQUFDO1lBQUEsR0FBRztZQUFFLEdBQUc7WUFBRSxHQUFHO1FBQUEsQ0FBQztRQUNsQkMsQ0FBQyxFQUFFLENBQUM7WUFBQSxHQUFHO1lBQUUsR0FBRztZQUFFLEdBQUc7UUFBQSxDQUFDO1FBQ2xCN0IsUUFBUSxFQUFDLENBQVU7Ozs7Ozs7a0JBRWxCbkMsT0FBTyx5RUFDSFgscURBQU87WUFDSjRFLElBQUksRUFBQyxDQUFJO1lBQ1Q5QixRQUFRLEVBQUMsQ0FBVTtZQUNuQitCLElBQUksRUFBQyxDQUFLO1lBQ1ZDLEdBQUcsRUFBQyxDQUFLO1lBQ1RDLEVBQUUsRUFBQyxDQUFxQztZQUN4Q1AsRUFBRSxFQUFDLENBQWlDOzs7Ozs7Ozs7QUFLeEQsQ0FBQztHQW5ISy9ELFdBQVc7S0FBWEEsV0FBVztBQXFIakIsK0RBQWVBLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWluZy1zZXR1cC5qcz85MTg5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJveCwgU3Bpbm5lciB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcbmltcG9ydCB7IE9yYml0Q29udHJvbHMgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vY29udHJvbHMvT3JiaXRDb250cm9scydcbmltcG9ydCB7IGxvYWRHTFRGTW9kZWwgfSBmcm9tIFwiLi4vbGlicy9tb2RlbFwiO1xuXG5mdW5jdGlvbiBlYXNlT3V0Q2lyYyh4KXtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KDEgLSBNYXRoLnBvdyh4IC0gMSwgNCkpO1xufVxuXG5jb25zdCBHYW1pbmdTZXR1cCA9ICgpID0+IHtcbiAgICBjb25zdCByZWZDb250YWluZXIgPSB1c2VSZWYoKTtcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgICBjb25zdCBbcmVuZGVyZXIsIHNldFJlbmRlcmVyXSA9IHVzZVN0YXRlKCk7XG4gICAgY29uc3QgW19jYW1lcmEsIHNldENhbWVyYV0gPSB1c2VTdGF0ZSgpO1xuICAgIGNvbnN0IFt0YXJnZXRdID0gdXNlU3RhdGUobmV3IFRIUkVFLlZlY3RvcjMoLTAuNSwgMS4yLCAwKSk7XG4gICAgY29uc3QgW2luaXRpYWxDYW1lcmFQb3NpdGlvbl0gPSB1c2VTdGF0ZShcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoXG4gICAgICAgICAgICAyMCAqIE1hdGguc2luKDAuMiAqIE1hdGguUEkpLFxuICAgICAgICAgICAgMTAsXG4gICAgICAgICAgICAyMCAqIE1hdGguc2luKDAuMiAqIE1hdGguUEkpLFxuICAgICAgICApXG4gICAgKVxuICAgIGNvbnN0IFtzY2VuZV0gPSB1c2VTdGF0ZShuZXcgVEhSRUUuU2NlbmUoKSk7XG4gICAgY29uc3QgW2NvbnRyb2xzLCBzZXRDb250cm9sc10gPSB1c2VTdGF0ZSgpO1xuXG4gICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzICovXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCB7IGN1cnJlbnQ6IGNvbnRhaW5lciB9ID0gcmVmQ29udGFpbmVyO1xuXG4gICAgICAgIGlmKGNvbnRhaW5lciAmJiAhcmVuZGVyZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IHNjVyA9IGNvbnRhaW5lci5jbGllbnRXaWR0aDtcbiAgICAgICAgICAgIGNvbnN0IHNjSCA9IGNvbnRhaW5lci5jbGllbnRIZWlnaHQ7XG5cbiAgICAgICAgICAgIGNvbnN0IHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe1xuICAgICAgICAgICAgICAgIGFudGlhbGlhczogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhbHBoYTogdHJ1ZSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZW5kZXJlci5zZXRQaXhlbFJhdGlvKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvKTtcbiAgICAgICAgICAgIHJlbmRlcmVyLnNldFNpemUoc2NXLCBzY0gpO1xuICAgICAgICAgICAgcmVuZGVyZXIub3V0cHV0RW5jb2RpbmcgPSBUSFJFRS5zUkdCRW5jb2Rpbmc7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocmVuZGVyZXIuZG9tRWxlbWVudCk7XG4gICAgICAgICAgICBzZXRSZW5kZXJlcihyZW5kZXJlcik7XG5cbiAgICAgICAgICAgIGNvbnN0IHNjYWxlID0gc2NIICogMC4wMDUgKyA0Ljg7XG4gICAgICAgICAgICBjb25zdCBjYW1lcmEgPSBuZXcgVEhSRUUuT3J0aG9ncmFwaGljQ2FtZXJhKFxuICAgICAgICAgICAgICAgIC1zY2FsZSxcbiAgICAgICAgICAgICAgICBzY2FsZSxcbiAgICAgICAgICAgICAgICBzY2FsZSxcbiAgICAgICAgICAgICAgICAtc2NhbGUsXG4gICAgICAgICAgICAgICAgMC4wMSxcbiAgICAgICAgICAgICAgICA1MDAwMFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLmNvcHkoaW5pdGlhbENhbWVyYVBvc2l0aW9uKTtcbiAgICAgICAgICAgIGNhbWVyYS5sb29rQXQodGFyZ2V0KTtcblxuICAgICAgICAgICAgY29uc3QgYW1iaWVudExpZ2h0ID0gbmV3IFRIUkVFLkFtYmllbnRMaWdodCgweGNjY2NjYywgMSk7XG4gICAgICAgICAgICBzY2VuZS5hZGQoYW1iaWVudExpZ2h0KTtcblxuICAgICAgICAgICAgY29uc3QgY29udHJvbHMgPSBuZXcgT3JiaXRDb250cm9scyhjYW1lcmEsIHJlbmRlcmVyLmRvbUVsZW1lbnQpO1xuICAgICAgICAgICAgY29udHJvbHMuYXV0b1JvdGF0ZSA9IHRydWU7XG4gICAgICAgICAgICBjb250cm9scy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgICAgICBzZXRDb250cm9scyhjb250cm9scyk7XG5cbiAgICAgICAgICAgIGxvYWRHTFRGTW9kZWwoc2NlbmUsICcuL2dhbWluZy5nbGInLCB7XG4gICAgICAgICAgICAgICAgcmVjZWl2ZVNoYWRvdzogZmFsc2UsXG4gICAgICAgICAgICAgICAgY2FzdFNoYWRvdzogZmFsc2UsXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBhbmltYXRlKCk7XG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbGV0IHJlcSA9IG51bGw7XG4gICAgICAgICAgICBsZXQgZnJhbWUgPSAwO1xuICAgICAgICAgICAgY29uc3QgYW5pbWF0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICByZXEgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG5cbiAgICAgICAgICAgICAgICBmcmFtZSA9IGZyYW1lIDw9IDEwMD8gZnJhbWUgKyAxIDogZnJhbWU7XG5cbiAgICAgICAgICAgICAgICBpZihmcmFtZSA8PSAxMDApe1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwID0gaW5pdGlhbENhbWVyYVBvc2l0aW9uXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvdFNwZWVkID0gZWFzZU91dENpcmMoZnJhbWUgLyAxMjApICogTWF0aC5QSSAqIDIwO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi55ID0gMTBcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnggPSBwLnggKiBNYXRoLmNvcyhyb3RTcGVlZCkgLSBwLnogKiBNYXRoLnNpbihyb3RTcGVlZClcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnogPSBwLnogKiBNYXRoLmNvcyhyb3RTcGVlZCkgKyBwLnggKiBNYXRoLnNpbihyb3RTcGVlZClcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhLmxvb2tBdCh0YXJnZXQpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbHMudXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcSk7XG4gICAgICAgICAgICAgICAgcmVuZGVyZXIuZGlzcG9zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW10pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Qm94IFxuICAgICAgICAgICAgcmVmPXtyZWZDb250YWluZXJ9IFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ2FtaW5nLXNldHVwXCIgXG4gICAgICAgICAgICBtPVwiYXV0b1wiIFxuICAgICAgICAgICAgbXQ9e1snLTIwcHgnLCAnLTYwcHgnLCAnLTEyMHB4J119IFxuICAgICAgICAgICAgbWI9e1snLTQwcHgnLCAnLTE0MHB4JywgJy0yMDBweCddfSBcbiAgICAgICAgICAgIHc9e1syODAsIDQ4MCwgNjQwXX0gXG4gICAgICAgICAgICBoPXtbMjgwLCA0ODAsIDY0MF19IFxuICAgICAgICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXG4gICAgICAgID5cbiAgICAgICAgICAgIHtsb2FkaW5nICYmIChcbiAgICAgICAgICAgICAgICA8U3Bpbm5lciBcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInhsXCIgXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwiYWJzb2x1dGVcIiBcbiAgICAgICAgICAgICAgICAgICAgbGVmdD1cIjUwJVwiIFxuICAgICAgICAgICAgICAgICAgICB0b3A9XCI1MCVcIiBcbiAgICAgICAgICAgICAgICAgICAgbWw9XCJjYWxjKDBweCAtIHZhcigtLXNwaW5uZXItc2l6ZSkgLyAyKVwiIFxuICAgICAgICAgICAgICAgICAgICBtdD1cImNhbGMoMHB4IC0gdmFyKC0tc3Bpbm5lci1zaXplKSlcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L0JveD5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWluZ1NldHVwOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZUNhbGxiYWNrIiwiQm94IiwiU3Bpbm5lciIsIlRIUkVFIiwiT3JiaXRDb250cm9scyIsImxvYWRHTFRGTW9kZWwiLCJlYXNlT3V0Q2lyYyIsIngiLCJNYXRoIiwic3FydCIsInBvdyIsIkdhbWluZ1NldHVwIiwicmVmQ29udGFpbmVyIiwibG9hZGluZyIsInNldExvYWRpbmciLCJyZW5kZXJlciIsInNldFJlbmRlcmVyIiwiX2NhbWVyYSIsInNldENhbWVyYSIsIlZlY3RvcjMiLCJ0YXJnZXQiLCJzaW4iLCJQSSIsImluaXRpYWxDYW1lcmFQb3NpdGlvbiIsIlNjZW5lIiwic2NlbmUiLCJjb250cm9scyIsInNldENvbnRyb2xzIiwiY29udGFpbmVyIiwiY3VycmVudCIsInNjVyIsImNsaWVudFdpZHRoIiwic2NIIiwiY2xpZW50SGVpZ2h0IiwiV2ViR0xSZW5kZXJlciIsImFudGlhbGlhcyIsImFscGhhIiwic2V0UGl4ZWxSYXRpbyIsIndpbmRvdyIsImRldmljZVBpeGVsUmF0aW8iLCJzZXRTaXplIiwib3V0cHV0RW5jb2RpbmciLCJzUkdCRW5jb2RpbmciLCJhcHBlbmRDaGlsZCIsImRvbUVsZW1lbnQiLCJzY2FsZSIsImNhbWVyYSIsIk9ydGhvZ3JhcGhpY0NhbWVyYSIsInBvc2l0aW9uIiwiY29weSIsImxvb2tBdCIsImFtYmllbnRMaWdodCIsIkFtYmllbnRMaWdodCIsImFkZCIsImF1dG9Sb3RhdGUiLCJyZWNlaXZlU2hhZG93IiwiY2FzdFNoYWRvdyIsInRoZW4iLCJhbmltYXRlIiwicmVxIiwiZnJhbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJwIiwicm90U3BlZWQiLCJ5IiwiY29zIiwieiIsInVwZGF0ZSIsInJlbmRlciIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiZGlzcG9zZSIsInJlZiIsImNsYXNzTmFtZSIsIm0iLCJtdCIsIm1iIiwidyIsImgiLCJzaXplIiwibGVmdCIsInRvcCIsIm1sIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/gaming-setup.js\n");

/***/ })

});