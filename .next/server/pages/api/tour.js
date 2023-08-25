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
exports.id = "pages/api/tour";
exports.ids = ["pages/api/tour"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next-auth/jwt":
/*!********************************!*\
  !*** external "next-auth/jwt" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("next-auth/jwt");

/***/ }),

/***/ "(api)/./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nlet prisma;\nif (false) {} else {\n    if (!global.prisma) {\n        global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    }\n    prisma = global.prisma;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvcHJpc21hLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQUU5QyxJQUFJQztBQU1KLElBQUlDLEtBQXlCLEVBQWMsRUFFMUMsTUFBTTtJQUNKLElBQUksQ0FBQ0MsT0FBT0YsTUFBTSxFQUFFO1FBQ2pCRSxPQUFPRixNQUFNLEdBQUcsSUFBSUQsd0RBQVlBO0lBQ25DO0lBQ0FDLFNBQVNFLE9BQU9GLE1BQU07QUFDekI7QUFFQSxpRUFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NoZWdhanVudG8vLi9saWIvcHJpc21hLnRzPzk4MjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xuXG5sZXQgcHJpc21hOiBQcmlzbWFDbGllbnQ7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgIHZhciBwcmlzbWE6IFByaXNtYUNsaWVudDtcbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgIHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbn0gZWxzZSB7XG4gICBpZiAoIWdsb2JhbC5wcmlzbWEpIHtcbiAgICAgIGdsb2JhbC5wcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG4gICB9XG4gICBwcmlzbWEgPSBnbG9iYWwucHJpc21hO1xufVxuXG5leHBvcnQgZGVmYXVsdCBwcmlzbWE7XG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwicHJvY2VzcyIsImdsb2JhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/prisma.ts\n");

/***/ }),

/***/ "(api)/./pages/api/tour/index.ts":
/*!*********************************!*\
  !*** ./pages/api/tour/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/jwt */ \"next-auth/jwt\");\n/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/prisma */ \"(api)/./lib/prisma.ts\");\n\n\nasync function handler(req, res) {\n    if (req.method === \"GET\") {\n        const token = await (0,next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__.getToken)({\n            req\n        });\n        if (token) {\n            const tours = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].tour.findMany({\n                include: {\n                    categories: true\n                }\n            });\n            if (tours) {\n                res.status(200).json(tours);\n            } else {\n                res.status(404).json({\n                    error: \"Nenhum tour encontrado\"\n                });\n            }\n        } else {\n            res.status(401).send({\n                message: \"Acesso negado\"\n            });\n        }\n    } else if (req.method === \"POST\") {\n        const token = await (0,next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__.getToken)({\n            req\n        });\n        const data = req.body;\n        console.log(data);\n        const { price, finalPrice, durationHours } = data;\n        delete data.id;\n        delete data.featuredPhoto;\n        delete data.itinerary;\n        delete data.photoGallery;\n        delete data.featuredPhotoId;\n        if (token) {\n            if (data.categories?.length > 0) {\n                const tour = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].tour.create({\n                    data: {\n                        ...data,\n                        price: Number(price),\n                        finalPrice: Number(finalPrice),\n                        durationHours: Number(durationHours),\n                        categories: {\n                            connect: data.categories\n                        }\n                    }\n                });\n                res.status(200).json(tour);\n            } else {\n                const tour = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].tour.create({\n                    data: {\n                        ...data,\n                        price: Number(price),\n                        finalPrice: Number(finalPrice),\n                        durationHours: Number(durationHours)\n                    }\n                });\n                res.status(200).json(tour);\n            }\n        // res.status(200).send('ok');\n        } else {\n            res.status(401).send({\n                message: \"Acesso negado\"\n            });\n        }\n    } else {\n        return res.status(405).json({\n            error: \"Esse tipo de requisi\\xe7\\xe3o n\\xe3o \\xe9 suportada nesta rota\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdG91ci9pbmRleC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ3lDO0FBQ0E7QUFFMUIsZUFBZUUsUUFDM0JDLEdBQW1CLEVBQ25CQyxHQUFvQjtJQUVwQixJQUFJRCxJQUFJRSxNQUFNLEtBQUssT0FBTztRQUN2QixNQUFNQyxRQUFRLE1BQU1OLHVEQUFRQSxDQUFDO1lBQUVHO1FBQUk7UUFDbkMsSUFBSUcsT0FBTztZQUNSLE1BQU1DLFFBQVEsTUFBTU4sd0RBQVcsQ0FBQ1EsUUFBUSxDQUFDO2dCQUN0Q0MsU0FBUztvQkFDTkMsWUFBWTtnQkFDZjtZQUNIO1lBQ0EsSUFBSUosT0FBTztnQkFDUkgsSUFBSVEsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ047WUFDeEIsT0FBTztnQkFDSkgsSUFBSVEsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztvQkFBRUMsT0FBTztnQkFBeUI7WUFDMUQ7UUFDSCxPQUFPO1lBQ0pWLElBQUlRLE1BQU0sQ0FBQyxLQUFLRyxJQUFJLENBQUM7Z0JBQUVDLFNBQVM7WUFBZ0I7UUFDbkQ7SUFDSCxPQUFPLElBQUliLElBQUlFLE1BQU0sS0FBSyxRQUFRO1FBQy9CLE1BQU1DLFFBQVEsTUFBTU4sdURBQVFBLENBQUM7WUFBRUc7UUFBSTtRQUNuQyxNQUFNYyxPQUFPZCxJQUFJZSxJQUFJO1FBQ3JCQyxRQUFRQyxHQUFHLENBQUNIO1FBQ1osTUFBTSxFQUFFSSxLQUFLLEVBQUVDLFVBQVUsRUFBRUMsYUFBYSxFQUFFLEdBQUdOO1FBQzdDLE9BQU9BLEtBQUtPLEVBQUU7UUFDZCxPQUFPUCxLQUFLUSxhQUFhO1FBQ3pCLE9BQU9SLEtBQUtTLFNBQVM7UUFDckIsT0FBT1QsS0FBS1UsWUFBWTtRQUN4QixPQUFPVixLQUFLVyxlQUFlO1FBQzNCLElBQUl0QixPQUFPO1lBQ1IsSUFBSVcsS0FBS04sVUFBVSxFQUFFa0IsU0FBUyxHQUFHO2dCQUM5QixNQUFNckIsT0FBTyxNQUFNUCx3REFBVyxDQUFDNkIsTUFBTSxDQUFDO29CQUNuQ2IsTUFBTTt3QkFDSCxHQUFHQSxJQUFJO3dCQUNQSSxPQUFPVSxPQUFPVjt3QkFDZEMsWUFBWVMsT0FBT1Q7d0JBQ25CQyxlQUFlUSxPQUFPUjt3QkFDdEJaLFlBQVk7NEJBQ1RxQixTQUFTZixLQUFLTixVQUFVO3dCQUMzQjtvQkFDSDtnQkFDSDtnQkFDQVAsSUFBSVEsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0w7WUFDeEIsT0FBTztnQkFDSixNQUFNQSxPQUFPLE1BQU1QLHdEQUFXLENBQUM2QixNQUFNLENBQUM7b0JBQ25DYixNQUFNO3dCQUNILEdBQUdBLElBQUk7d0JBQ1BJLE9BQU9VLE9BQU9WO3dCQUNkQyxZQUFZUyxPQUFPVDt3QkFDbkJDLGVBQWVRLE9BQU9SO29CQUN6QjtnQkFDSDtnQkFDQW5CLElBQUlRLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNMO1lBQ3hCO1FBRUEsOEJBQThCO1FBQ2pDLE9BQU87WUFDSkosSUFBSVEsTUFBTSxDQUFDLEtBQUtHLElBQUksQ0FBQztnQkFBRUMsU0FBUztZQUFnQjtRQUNuRDtJQUNILE9BQU87UUFDSixPQUFPWixJQUNIUSxNQUFNLENBQUMsS0FDUEMsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBcUQ7SUFDMUU7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL2NoZWdhanVudG8vLi9wYWdlcy9hcGkvdG91ci9pbmRleC50cz9mN2FhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IHsgZ2V0VG9rZW4gfSBmcm9tICduZXh0LWF1dGgvand0JztcbmltcG9ydCBwcmlzbWEgZnJvbSAnLi4vLi4vLi4vbGliL3ByaXNtYSc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXG4gICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICAgcmVzOiBOZXh0QXBpUmVzcG9uc2Vcbikge1xuICAgaWYgKHJlcS5tZXRob2QgPT09ICdHRVQnKSB7XG4gICAgICBjb25zdCB0b2tlbiA9IGF3YWl0IGdldFRva2VuKHsgcmVxIH0pO1xuICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgICBjb25zdCB0b3VycyA9IGF3YWl0IHByaXNtYS50b3VyLmZpbmRNYW55KHtcbiAgICAgICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgIH0pO1xuICAgICAgICAgaWYgKHRvdXJzKSB7XG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih0b3Vycyk7XG4gICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBlcnJvcjogJ05lbmh1bSB0b3VyIGVuY29udHJhZG8nIH0pO1xuICAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgIHJlcy5zdGF0dXMoNDAxKS5zZW5kKHsgbWVzc2FnZTogJ0FjZXNzbyBuZWdhZG8nIH0pO1xuICAgICAgfVxuICAgfSBlbHNlIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgZ2V0VG9rZW4oeyByZXEgfSk7XG4gICAgICBjb25zdCBkYXRhID0gcmVxLmJvZHk7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgIGNvbnN0IHsgcHJpY2UsIGZpbmFsUHJpY2UsIGR1cmF0aW9uSG91cnMgfSA9IGRhdGE7XG4gICAgICBkZWxldGUgZGF0YS5pZDtcbiAgICAgIGRlbGV0ZSBkYXRhLmZlYXR1cmVkUGhvdG87XG4gICAgICBkZWxldGUgZGF0YS5pdGluZXJhcnk7XG4gICAgICBkZWxldGUgZGF0YS5waG90b0dhbGxlcnk7XG4gICAgICBkZWxldGUgZGF0YS5mZWF0dXJlZFBob3RvSWQ7XG4gICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgIGlmIChkYXRhLmNhdGVnb3JpZXM/Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHRvdXIgPSBhd2FpdCBwcmlzbWEudG91ci5jcmVhdGUoe1xuICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgLi4uZGF0YSxcbiAgICAgICAgICAgICAgICAgIHByaWNlOiBOdW1iZXIocHJpY2UpLFxuICAgICAgICAgICAgICAgICAgZmluYWxQcmljZTogTnVtYmVyKGZpbmFsUHJpY2UpLFxuICAgICAgICAgICAgICAgICAgZHVyYXRpb25Ib3VyczogTnVtYmVyKGR1cmF0aW9uSG91cnMpLFxuICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllczoge1xuICAgICAgICAgICAgICAgICAgICAgY29ubmVjdDogZGF0YS5jYXRlZ29yaWVzXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHRvdXIpO1xuICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHRvdXIgPSBhd2FpdCBwcmlzbWEudG91ci5jcmVhdGUoe1xuICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgLi4uZGF0YSxcbiAgICAgICAgICAgICAgICAgIHByaWNlOiBOdW1iZXIocHJpY2UpLFxuICAgICAgICAgICAgICAgICAgZmluYWxQcmljZTogTnVtYmVyKGZpbmFsUHJpY2UpLFxuICAgICAgICAgICAgICAgICAgZHVyYXRpb25Ib3VyczogTnVtYmVyKGR1cmF0aW9uSG91cnMpXG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHRvdXIpO1xuICAgICAgICAgfVxuXG4gICAgICAgICAvLyByZXMuc3RhdHVzKDIwMCkuc2VuZCgnb2snKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICByZXMuc3RhdHVzKDQwMSkuc2VuZCh7IG1lc3NhZ2U6ICdBY2Vzc28gbmVnYWRvJyB9KTtcbiAgICAgIH1cbiAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzXG4gICAgICAgICAuc3RhdHVzKDQwNSlcbiAgICAgICAgIC5qc29uKHsgZXJyb3I6ICdFc3NlIHRpcG8gZGUgcmVxdWlzacOnw6NvIG7Do28gw6kgc3Vwb3J0YWRhIG5lc3RhIHJvdGEnIH0pO1xuICAgfVxufVxuIl0sIm5hbWVzIjpbImdldFRva2VuIiwicHJpc21hIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInRva2VuIiwidG91cnMiLCJ0b3VyIiwiZmluZE1hbnkiLCJpbmNsdWRlIiwiY2F0ZWdvcmllcyIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsInNlbmQiLCJtZXNzYWdlIiwiZGF0YSIsImJvZHkiLCJjb25zb2xlIiwibG9nIiwicHJpY2UiLCJmaW5hbFByaWNlIiwiZHVyYXRpb25Ib3VycyIsImlkIiwiZmVhdHVyZWRQaG90byIsIml0aW5lcmFyeSIsInBob3RvR2FsbGVyeSIsImZlYXR1cmVkUGhvdG9JZCIsImxlbmd0aCIsImNyZWF0ZSIsIk51bWJlciIsImNvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/tour/index.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/tour/index.ts"));
module.exports = __webpack_exports__;

})();