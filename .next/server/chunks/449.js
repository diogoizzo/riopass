"use strict";
exports.id = 449;
exports.ids = [449];
exports.modules = {

/***/ 1617:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Tour)
/* harmony export */ });
class Tour {
    constructor(id, name, categories, description, longDescription, price, finalPrice, itinerary, featuredPhoto, featuredPhotoId, destination, durationHours, obs, restrictions, languages, placeOfDeparture, placeOfReturn, timeOfDeparture, timeOfReturn, belongsTobring, availability, include, notInclude, textLanguage, partner, photoGallery){
        this.id = id;
        this.name = name;
        this.categories = categories;
        this.description = description;
        this.longDescription = longDescription;
        this.price = price;
        this.finalPrice = finalPrice;
        this.itinerary = itinerary;
        this.featuredPhoto = featuredPhoto;
        this.featuredPhotoId = featuredPhotoId;
        this.destination = destination;
        this.durationHours = durationHours;
        this.obs = obs;
        this.restrictions = restrictions;
        this.languages = languages;
        this.placeOfDeparture = placeOfDeparture;
        this.placeOfReturn = placeOfReturn;
        this.timeOfDeparture = timeOfDeparture;
        this.timeOfReturn = timeOfReturn;
        this.belongsTobring = belongsTobring;
        this.availability = availability;
        this.include = include;
        this.notInclude = notInclude;
        this.textLanguage = textLanguage;
        this.partner = partner;
        this.photoGallery = photoGallery;
    }
    static createFromObject({ id, name, categories, description, longDescription, price, finalPrice, itinerary, featuredPhoto, featuredPhotoId, destination, durationHours, obs, restrictions, languages, placeOfDeparture, placeOfReturn, timeOfDeparture, timeOfReturn, belongsTobring, availability, include, notInclude, textLanguage, partner, photoGallery }) {
        return new Tour(id, name, categories, description, longDescription, price, finalPrice, itinerary, featuredPhoto, featuredPhotoId, destination, durationHours, obs, restrictions, languages, placeOfDeparture, placeOfReturn, timeOfDeparture, timeOfReturn, belongsTobring, availability, include, notInclude, textLanguage, partner, photoGallery);
    }
    static createMany(patients) {
        return patients.map(({ id, name, categories, description, longDescription, price, finalPrice, itinerary, featuredPhoto, featuredPhotoId, destination, durationHours, obs, restrictions, languages, placeOfDeparture, placeOfReturn, timeOfDeparture, timeOfReturn, belongsTobring, availability, include, notInclude, textLanguage, partner, photoGallery })=>{
            return new Tour(id, name, categories, description, longDescription, price, finalPrice, itinerary, featuredPhoto, featuredPhotoId, destination, durationHours, obs, restrictions, languages, placeOfDeparture, placeOfReturn, timeOfDeparture, timeOfReturn, belongsTobring, availability, include, notInclude, textLanguage, partner, photoGallery);
        });
    }
    get tourLink() {
        return `/admin/tours/${this.id}`;
    }
    get tourEditLink() {
        return `/admin/tours/editar/${this.id}`;
    }
}


/***/ }),

/***/ 7797:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ TourServices)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

class TourServices {
    static async getAll() {
        try {
            const res = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("/api/tour");
            return res.data;
        } catch (e) {
            console.log(e);
        }
    }
    static async getById(id) {
        try {
            const res = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`/api/tour/${id}`);
            return res.data;
        } catch (e) {
            console.log(e);
        }
    }
    static async updateById(formData) {
        if (formData) {
            const res = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].patch(`/api/tour/${formData.id}`, formData);
            return res.data;
        }
    }
    static async delete(id) {
        if (id) {
            const rest = await axios__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"](`/api/tour/${id}`);
            return rest.data;
        }
    }
    static async create(formData) {
        if (formData) {
            const rest = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(`/api/tour/`, formData);
            return rest.data;
        }
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;