exports.id = 55;
exports.ids = [55];
exports.modules = {

/***/ 9132:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(1175);
// EXTERNAL MODULE: external "react-loading"
var external_react_loading_ = __webpack_require__(9041);
var external_react_loading_default = /*#__PURE__*/__webpack_require__.n(external_react_loading_);
;// CONCATENATED MODULE: ./components/sections/LoginLoad.tsx


function LoginLoad() {
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "h-[100vh] w-full flex items-center justify-center bg-raisin-black-light ",
        children: /*#__PURE__*/ jsx_runtime.jsx((external_react_loading_default()), {
            type: "spinningBubbles",
            color: "#16161F",
            height: 160,
            width: 160
        })
    });
}

;// CONCATENATED MODULE: ./pages/_app.tsx





function Auth(props) {
    // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
    const { status } = (0,react_.useSession)({
        required: true
    });
    if (status === "loading") {
        return /*#__PURE__*/ jsx_runtime.jsx(LoginLoad, {});
    }
    return props.children;
}
// Use the <SessionProvider> to improve performance and allow components that call
// `useSession()` anywhere in your application to access the `session` object.
function App({ Component, pageProps }) {
    const queryClient = new external_react_query_.QueryClient();
    return /*#__PURE__*/ jsx_runtime.jsx(react_.SessionProvider, {
        session: pageProps.session,
        children: /*#__PURE__*/ jsx_runtime.jsx(external_react_query_.QueryClientProvider, {
            client: queryClient,
            children: Component.auth ? /*#__PURE__*/ jsx_runtime.jsx(Auth, {
                children: /*#__PURE__*/ jsx_runtime.jsx(Component, {
                    ...pageProps
                })
            }) : /*#__PURE__*/ jsx_runtime.jsx(Component, {
                ...pageProps
            })
        })
    });
}


/***/ }),

/***/ 6764:
/***/ (() => {



/***/ })

};
;