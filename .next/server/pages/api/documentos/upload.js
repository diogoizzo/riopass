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
exports.id = "pages/api/documentos/upload";
exports.ids = ["pages/api/documentos/upload"];
exports.modules = {

/***/ "aws-sdk/clients/s3":
/*!*************************************!*\
  !*** external "aws-sdk/clients/s3" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("aws-sdk/clients/s3");

/***/ }),

/***/ "next-auth/jwt":
/*!********************************!*\
  !*** external "next-auth/jwt" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("next-auth/jwt");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "(api)/./pages/api/documentos/upload/index.ts":
/*!**********************************************!*\
  !*** ./pages/api/documentos/upload/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/jwt */ \"next-auth/jwt\");\n/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var aws_sdk_clients_s3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aws-sdk/clients/s3 */ \"aws-sdk/clients/s3\");\n/* harmony import */ var aws_sdk_clients_s3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aws_sdk_clients_s3__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst region = process.env.REGION;\nconst bucketName = process.env.BUCKET_NAME;\nconst accessKeyId = process.env.ACCESS_KEY;\nconst secretAccessKey = process.env.SECRET_ACCESS_KEY;\nconst bucket = new (aws_sdk_clients_s3__WEBPACK_IMPORTED_MODULE_1___default())({\n    apiVersion: \"2006-03-01\",\n    region,\n    accessKeyId,\n    secretAccessKey,\n    signatureVersion: \"v4\"\n});\nasync function handler(req, res) {\n    if (req.method === \"GET\") {\n        const token = await (0,next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__.getToken)({\n            req\n        });\n        if (token) {\n            const fileName = (0,crypto__WEBPACK_IMPORTED_MODULE_2__.randomUUID)();\n            const params = {\n                Bucket: bucketName,\n                Key: fileName,\n                Expires: 60\n            };\n            const uploadUrl = await bucket.getSignedUrlPromise(\"putObject\", params);\n            if (uploadUrl) {\n                res.status(200).json({\n                    uploadUrl,\n                    fileName\n                });\n            } else {\n                res.status(503).json({\n                    error: \"N\\xe3o foi poss\\xedvel criar a url\"\n                });\n            }\n        } else {\n            res.status(401).send({\n                message: \"Acesso negado\"\n            });\n        }\n    } else {\n        return res.status(405).json({\n            error: \"Esse tipo de requisi\\xe7\\xe3o n\\xe3o \\xe9 suportada nesta rota\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZG9jdW1lbnRvcy91cGxvYWQvaW5kZXgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUN5QztBQUNMO0FBQ0E7QUFHcEMsTUFBTUcsU0FBU0MsUUFBUUMsR0FBRyxDQUFDQyxNQUFNO0FBQ2pDLE1BQU1DLGFBQWFILFFBQVFDLEdBQUcsQ0FBQ0csV0FBVztBQUMxQyxNQUFNQyxjQUFjTCxRQUFRQyxHQUFHLENBQUNLLFVBQVU7QUFDMUMsTUFBTUMsa0JBQWtCUCxRQUFRQyxHQUFHLENBQUNPLGlCQUFpQjtBQUVyRCxNQUFNQyxTQUFTLElBQUlaLDJEQUFFQSxDQUFDO0lBQ25CYSxZQUFZO0lBQ1pYO0lBQ0FNO0lBQ0FFO0lBQ0FJLGtCQUFrQjtBQUNyQjtBQUVlLGVBQWVDLFFBQzNCQyxHQUFtQixFQUNuQkMsR0FBb0I7SUFFcEIsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLE9BQU87UUFDdkIsTUFBTUMsUUFBUSxNQUFNcEIsdURBQVFBLENBQUM7WUFBRWlCO1FBQUk7UUFDbkMsSUFBSUcsT0FBTztZQUNSLE1BQU1DLFdBQVduQixrREFBVUE7WUFDM0IsTUFBTW9CLFNBQVM7Z0JBQ1pDLFFBQVFoQjtnQkFDUmlCLEtBQUtIO2dCQUNMSSxTQUFTO1lBQ1o7WUFDQSxNQUFNQyxZQUFZLE1BQU1iLE9BQU9jLG1CQUFtQixDQUMvQyxhQUNBTDtZQUVILElBQUlJLFdBQVc7Z0JBQ1pSLElBQUlVLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7b0JBQ2xCSDtvQkFDQUw7Z0JBQ0g7WUFDSCxPQUFPO2dCQUNKSCxJQUFJVSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO29CQUNsQkMsT0FBTztnQkFDVjtZQUNIO1FBQ0gsT0FBTztZQUNKWixJQUFJVSxNQUFNLENBQUMsS0FBS0csSUFBSSxDQUFDO2dCQUFFQyxTQUFTO1lBQWdCO1FBQ25EO0lBQ0gsT0FBTztRQUNKLE9BQU9kLElBQ0hVLE1BQU0sQ0FBQyxLQUNQQyxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUFxRDtJQUMxRTtBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hlZ2FqdW50by8uL3BhZ2VzL2FwaS9kb2N1bWVudG9zL3VwbG9hZC9pbmRleC50cz9lZjFmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IHsgZ2V0VG9rZW4gfSBmcm9tICduZXh0LWF1dGgvand0JztcbmltcG9ydCBzMyBmcm9tICdhd3Mtc2RrL2NsaWVudHMvczMnO1xuaW1wb3J0IHsgcmFuZG9tVVVJRCB9IGZyb20gJ2NyeXB0byc7XG5pbXBvcnQgeyBTM0NvbnRyb2wgfSBmcm9tICdhd3Mtc2RrJztcblxuY29uc3QgcmVnaW9uID0gcHJvY2Vzcy5lbnYuUkVHSU9OO1xuY29uc3QgYnVja2V0TmFtZSA9IHByb2Nlc3MuZW52LkJVQ0tFVF9OQU1FO1xuY29uc3QgYWNjZXNzS2V5SWQgPSBwcm9jZXNzLmVudi5BQ0NFU1NfS0VZO1xuY29uc3Qgc2VjcmV0QWNjZXNzS2V5ID0gcHJvY2Vzcy5lbnYuU0VDUkVUX0FDQ0VTU19LRVk7XG5cbmNvbnN0IGJ1Y2tldCA9IG5ldyBzMyh7XG4gICBhcGlWZXJzaW9uOiAnMjAwNi0wMy0wMScsXG4gICByZWdpb24sXG4gICBhY2Nlc3NLZXlJZCxcbiAgIHNlY3JldEFjY2Vzc0tleSxcbiAgIHNpZ25hdHVyZVZlcnNpb246ICd2NCdcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxuICAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgIHJlczogTmV4dEFwaVJlc3BvbnNlXG4pIHtcbiAgIGlmIChyZXEubWV0aG9kID09PSAnR0VUJykge1xuICAgICAgY29uc3QgdG9rZW4gPSBhd2FpdCBnZXRUb2tlbih7IHJlcSB9KTtcbiAgICAgIGlmICh0b2tlbikge1xuICAgICAgICAgY29uc3QgZmlsZU5hbWUgPSByYW5kb21VVUlEKCk7XG4gICAgICAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICAgICAgICBCdWNrZXQ6IGJ1Y2tldE5hbWUsXG4gICAgICAgICAgICBLZXk6IGZpbGVOYW1lLFxuICAgICAgICAgICAgRXhwaXJlczogNjBcbiAgICAgICAgIH07XG4gICAgICAgICBjb25zdCB1cGxvYWRVcmwgPSBhd2FpdCBidWNrZXQuZ2V0U2lnbmVkVXJsUHJvbWlzZShcbiAgICAgICAgICAgICdwdXRPYmplY3QnLFxuICAgICAgICAgICAgcGFyYW1zXG4gICAgICAgICApO1xuICAgICAgICAgaWYgKHVwbG9hZFVybCkge1xuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgICAgICAgICAgdXBsb2FkVXJsLFxuICAgICAgICAgICAgICAgZmlsZU5hbWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAzKS5qc29uKHtcbiAgICAgICAgICAgICAgIGVycm9yOiAnTsOjbyBmb2kgcG9zc8OtdmVsIGNyaWFyIGEgdXJsJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgcmVzLnN0YXR1cyg0MDEpLnNlbmQoeyBtZXNzYWdlOiAnQWNlc3NvIG5lZ2FkbycgfSk7XG4gICAgICB9XG4gICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc1xuICAgICAgICAgLnN0YXR1cyg0MDUpXG4gICAgICAgICAuanNvbih7IGVycm9yOiAnRXNzZSB0aXBvIGRlIHJlcXVpc2nDp8OjbyBuw6NvIMOpIHN1cG9ydGFkYSBuZXN0YSByb3RhJyB9KTtcbiAgIH1cbn1cbiJdLCJuYW1lcyI6WyJnZXRUb2tlbiIsInMzIiwicmFuZG9tVVVJRCIsInJlZ2lvbiIsInByb2Nlc3MiLCJlbnYiLCJSRUdJT04iLCJidWNrZXROYW1lIiwiQlVDS0VUX05BTUUiLCJhY2Nlc3NLZXlJZCIsIkFDQ0VTU19LRVkiLCJzZWNyZXRBY2Nlc3NLZXkiLCJTRUNSRVRfQUNDRVNTX0tFWSIsImJ1Y2tldCIsImFwaVZlcnNpb24iLCJzaWduYXR1cmVWZXJzaW9uIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInRva2VuIiwiZmlsZU5hbWUiLCJwYXJhbXMiLCJCdWNrZXQiLCJLZXkiLCJFeHBpcmVzIiwidXBsb2FkVXJsIiwiZ2V0U2lnbmVkVXJsUHJvbWlzZSIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsInNlbmQiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/documentos/upload/index.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/documentos/upload/index.ts"));
module.exports = __webpack_exports__;

})();