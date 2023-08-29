"use strict";
(() => {
var exports = {};
exports.id = 148;
exports.ids = [148];
exports.modules = {

/***/ 614:
/***/ ((module) => {

module.exports = require("next-auth/jwt");

/***/ }),

/***/ 8869:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ lib_prisma)
});

;// CONCATENATED MODULE: external "@prisma/client"
const client_namespaceObject = require("@prisma/client");
;// CONCATENATED MODULE: ./lib/prisma.ts

let prisma;
if (true) {
    prisma = new client_namespaceObject.PrismaClient();
} else {}
/* harmony default export */ const lib_prisma = (prisma);


/***/ }),

/***/ 322:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(614);
/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8869);


async function handler(req, res) {
    if (req.method === "GET") {
        const token = await (0,next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__.getToken)({
            req
        });
        if (token) {
            const tours = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.tour.findMany({
                include: {
                    categories: true
                }
            });
            if (tours) {
                res.status(200).json(tours);
            } else {
                res.status(404).json({
                    error: "Nenhum tour encontrado"
                });
            }
        } else {
            res.status(401).send({
                message: "Acesso negado"
            });
        }
    } else if (req.method === "POST") {
        const token = await (0,next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__.getToken)({
            req
        });
        const data = req.body;
        const { price, finalPrice, durationHours } = data;
        delete data.id;
        delete data.featuredPhoto;
        delete data.itinerary;
        delete data.photoGallery;
        delete data.featuredPhotoId;
        if (token) {
            if (data.categories?.length > 0) {
                const tour = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.tour.create({
                    data: {
                        ...data,
                        price: Number(price),
                        finalPrice: Number(finalPrice),
                        durationHours: Number(durationHours),
                        categories: {
                            connect: data.categories
                        }
                    }
                });
                res.status(200).json(tour);
            } else {
                delete data.categories;
                const tour = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.tour.create({
                    data: {
                        ...data,
                        price: Number(price),
                        finalPrice: Number(finalPrice),
                        durationHours: Number(durationHours)
                    }
                });
                res.status(200).json(tour);
            }
        // res.status(200).send('ok');
        } else {
            res.status(401).send({
                message: "Acesso negado"
            });
        }
    } else {
        return res.status(405).json({
            error: "Esse tipo de requisi\xe7\xe3o n\xe3o \xe9 suportada nesta rota"
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(322));
module.exports = __webpack_exports__;

})();