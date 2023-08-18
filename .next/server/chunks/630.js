"use strict";
exports.id = 630;
exports.ids = [630];
exports.modules = {

/***/ 4017:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ FormTextareaLine)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);

function FormTextareaLine({ label, placeHolder, name, state, setState }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-wrap items-start -mx-4 pb-8 mb-8 border-b border-cool-gray-900 border-opacity-10",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full sm:w-1/3 px-4 mb-4 sm:mb-0",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "text-md font-medium text-cool-gray-500",
                    children: label
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full sm:w-2/3 px-4",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "max-w-xl",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex flex-wrap items-center -mx-3",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-full px-3 mb-3 sm:mb-0",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                value: state ?? "",
                                name: name,
                                rows: 10,
                                className: "block text-md placeholder:text-gray-700 py-4 px-3 w-full text-sm text-cool-gray-200 placeholder-cool-gray-200 font-medium outline-none bg-transparent border border-raisin-black-lighter hover:border-cool-gray-900 focus-within:border-carolina-blue rounded-lg",
                                placeholder: placeHolder,
                                onChange: (e)=>setState && setState((prev)=>({
                                            ...prev,
                                            [name]: e.target.value
                                        }))
                            })
                        })
                    })
                })
            })
        ]
    });
}


/***/ }),

/***/ 8365:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _ui_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7690);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_select__WEBPACK_IMPORTED_MODULE_1__]);
_ui_select__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function SelectTourInput({ title, options, state, placeholder, setState, name }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-wrap items-center -mx-4 pb-8 mb-8 border-b border-cool-gray-900 border-opacity-10",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full sm:w-1/3 px-4 mb-4 sm:mb-0",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "text-md font-medium text-cool-gray-500",
                    children: title
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full sm:w-2/3 px-4",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "max-w-xl",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_ui_select__WEBPACK_IMPORTED_MODULE_1__/* .Select */ .Ph, {
                        name: name,
                        value: state,
                        onValueChange: (e)=>setState && setState((prev)=>({
                                    ...prev,
                                    [name]: e
                                })),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_select__WEBPACK_IMPORTED_MODULE_1__/* .SelectTrigger */ .i4, {
                                className: "w-full text-cool-gray-200 py-6 border border-raisin-black-lighter",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_select__WEBPACK_IMPORTED_MODULE_1__/* .SelectValue */ .ki, {
                                    className: "",
                                    placeholder: placeholder
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_select__WEBPACK_IMPORTED_MODULE_1__/* .SelectContent */ .Bw, {
                                children: options && options.map((user)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_select__WEBPACK_IMPORTED_MODULE_1__/* .SelectItem */ .Ql, {
                                        value: user.id || "",
                                        children: user.name
                                    }, user.id))
                            })
                        ]
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectTourInput);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9960:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _ui_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7690);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_select__WEBPACK_IMPORTED_MODULE_1__]);
_ui_select__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function StringSelectInput({ title, options, state, placeholder, setState, name }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-wrap items-center -mx-4 pb-8 mb-8 border-b border-cool-gray-900 border-opacity-10",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full sm:w-1/3 px-4 mb-4 sm:mb-0",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "text-md font-medium text-cool-gray-500",
                    children: title
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full sm:w-2/3 px-4",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "max-w-xl",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_ui_select__WEBPACK_IMPORTED_MODULE_1__/* .Select */ .Ph, {
                        name: name,
                        value: state,
                        onValueChange: (e)=>setState && setState((prev)=>({
                                    ...prev,
                                    [name]: e
                                })),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_select__WEBPACK_IMPORTED_MODULE_1__/* .SelectTrigger */ .i4, {
                                className: "w-full text-cool-gray-200 py-6 border border-raisin-black-lighter",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_select__WEBPACK_IMPORTED_MODULE_1__/* .SelectValue */ .ki, {
                                    className: "",
                                    placeholder: placeholder
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_select__WEBPACK_IMPORTED_MODULE_1__/* .SelectContent */ .Bw, {
                                children: options && options.map((user)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_select__WEBPACK_IMPORTED_MODULE_1__/* .SelectItem */ .Ql, {
                                        value: user,
                                        children: user
                                    }, user))
                            })
                        ]
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StringSelectInput);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 630:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _atoms_FormInputLine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(827);
/* harmony import */ var _atoms_SelectTourInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8365);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _parts_ConfirmationModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8793);
/* harmony import */ var _atoms_PrimaryBtn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2838);
/* harmony import */ var _atoms_DangerBtn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1379);
/* harmony import */ var _atoms_FormTextareaLine__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4017);
/* harmony import */ var _hooks_useErrorToast__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1614);
/* harmony import */ var _atoms_StringSelectInput__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9960);
/* harmony import */ var _services_TourServices__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7797);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_atoms_SelectTourInput__WEBPACK_IMPORTED_MODULE_3__, _parts_ConfirmationModal__WEBPACK_IMPORTED_MODULE_6__, _atoms_StringSelectInput__WEBPACK_IMPORTED_MODULE_11__, _services_TourServices__WEBPACK_IMPORTED_MODULE_12__]);
([_atoms_SelectTourInput__WEBPACK_IMPORTED_MODULE_3__, _parts_ConfirmationModal__WEBPACK_IMPORTED_MODULE_6__, _atoms_StringSelectInput__WEBPACK_IMPORTED_MODULE_11__, _services_TourServices__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













function TourForm({ tour }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const errorToast = (0,_hooks_useErrorToast__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)();
    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [form, setForm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        id: tour?.id || "",
        name: tour?.name || "",
        description: tour?.description || "",
        longDescription: tour?.longDescription || "",
        categories: tour?.categories || "",
        price: tour?.price || 0,
        finalPrice: tour?.finalPrice || 0,
        include: tour?.include || "",
        itinerary: tour?.itinerary || "",
        featuredPhoto: tour?.featuredPhoto || "",
        featuredPhotoId: tour?.featuredPhotoId || "",
        destination: tour?.destination || "",
        durationHours: tour?.durationHours || 0,
        obs: tour?.obs || "",
        restrictions: tour?.restrictions || "",
        languages: tour?.languages || "",
        placeOfDeparture: tour?.placeOfDeparture || "",
        placeOfReturn: tour?.placeOfReturn || "",
        timeOfDeparture: tour?.timeOfDeparture || "",
        timeOfReturn: tour?.timeOfReturn || "",
        belongsTobring: tour?.belongsTobring || "",
        availability: tour?.availability || "",
        notInclude: tour?.notInclude || "",
        textLanguage: tour?.textLanguage || "",
        partner: tour?.partner || "",
        photoGallery: tour?.photoGallery || ""
    });
    const categories = [
        {
            id: "csedrevcva14",
            name: "Barco",
            esName: "Navio",
            enName: "Ship"
        },
        {
            id: "cse254981624vcva14",
            name: "Praia",
            esName: "beach",
            enName: "playa"
        }
    ];
    const tourUpdateMutation = (0,react_query__WEBPACK_IMPORTED_MODULE_5__.useMutation)({
        mutationFn: _services_TourServices__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z.updateById,
        onSuccess: ()=>{
            router.push(`/admin/tours?updated=true`);
        },
        onError: ()=>{
            errorToast("N\xe3o foi poss\xedvel atualizar o tour");
        }
    });
    const tourDeleteMutation = (0,react_query__WEBPACK_IMPORTED_MODULE_5__.useMutation)({
        mutationFn: _services_TourServices__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z.delete,
        onSuccess: ()=>{
            router.push("/admin/tours?deleted=true");
        },
        onError: ()=>{
            errorToast("N\xe3o foi poss\xedvel apagar o tour.");
        }
    });
    const tourCreateMutation = (0,react_query__WEBPACK_IMPORTED_MODULE_5__.useMutation)({
        mutationFn: _services_TourServices__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z.create,
        onSuccess: ()=>{
            router.push("/admin/tours?saved=true");
        },
        onError: ()=>{
            errorToast("N\xe3o foi poss\xedvel criar o novo tour.");
        }
    });
    async function salvar(e) {
        e.preventDefault();
        console.log(form);
        if (!tour) {
            tourCreateMutation.mutate(form);
        } else {
            tourUpdateMutation.mutate(form);
        }
    }
    function deleteAction() {
        closeModal();
        tourDeleteMutation.mutate(tour?.id);
    }
    function closeModal() {
        setIsOpen(false);
    }
    function openConfirmationModal(e) {
        e.preventDefault();
        setIsOpen(true);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_parts_ConfirmationModal__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                text: "Tem certeza que deseja apagar o tour?",
                isOpen: isOpen,
                closeModal: closeModal,
                deleteAction: deleteAction
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "py-3 mt-3",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container px-4 mx-auto",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "p-10 bg-raisin-black rounded-lg",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex flex-wrap items-center justify-between -mx-4 mb-8 pb-6 border-b border-gray-400 border-opacity-20",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "w-full sm:w-auto px-4 mb-6 sm:mb-0",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                            className: "text-2xl font-bold tracking-wide text-cool-gray-200 mb-1",
                                            children: "Informa\xe7\xf5es B\xe1sicas"
                                        }),
                                        tour ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-sm text-cool-gray-500",
                                            children: "Edite as informa\xe7\xf5es b\xe1sicas do tour acima."
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-sm text-cool-gray-500",
                                            children: "Preencha as informa\xe7\xf5es b\xe1sicas do novo tour."
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_atoms_FormInputLine__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        state: form.name,
                                        setState: setForm,
                                        name: "name",
                                        label: "Nome",
                                        type: "text",
                                        placeHolder: "Digite o nome do novo tour..."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_atoms_FormTextareaLine__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                        state: form.description,
                                        setState: setForm,
                                        name: "description",
                                        label: "Descri\xe7\xe3o Curta",
                                        placeHolder: "Digite a descri\xe7\xe3o curta do tour..."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_atoms_FormTextareaLine__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                        state: form.longDescription,
                                        setState: setForm,
                                        name: "longDescription",
                                        label: "Descri\xe7\xe3o Longa",
                                        placeHolder: "Digite a descri\xe7\xe3o longa do tour..."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_atoms_FormTextareaLine__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                        state: form.obs,
                                        setState: setForm,
                                        name: "obs",
                                        label: "Observa\xe7\xf5es",
                                        placeHolder: "Digite as oberva\xe7\xf5es sobre o tour..."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_atoms_SelectTourInput__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        name: "categories",
                                        title: "Selecione a Categoria do Tour",
                                        setState: setForm,
                                        options: categories,
                                        placeholder: "Selecione a Categoria do Tour",
                                        state: form.categories
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_atoms_StringSelectInput__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                        name: "textLanguage",
                                        title: "Qual o Idioma do Conte\xfado?",
                                        setState: setForm,
                                        options: [
                                            "Portugu\xeas",
                                            "Ingl\xeas",
                                            "Espanhol"
                                        ],
                                        placeholder: "Selecione o idioma do conte\xfado...",
                                        state: form.textLanguage
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_atoms_FormInputLine__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        state: form.partner,
                                        setState: setForm,
                                        name: "partner",
                                        label: "Quem \xe9 o Parceiro Respons\xe1vel pelo Tour? ",
                                        type: "text",
                                        placeHolder: "Digite os idiomas que o tour atende..."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex flex-wrap items-center justify-between -mx-4 mb-8 pb-6 border-b border-gray-400 border-opacity-20",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "w-full sm:w-auto px-4 mb-6 sm:mb-0",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                    className: "text-2xl font-bold tracking-wide text-cool-gray-200 mb-1",
                                                    children: "Informa\xe7\xf5es Financeiras"
                                                }),
                                                tour ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-sm text-cool-gray-500",
                                                    children: "Edite as informa\xe7\xf5es financeiras do tour acima."
                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-sm text-cool-gray-500",
                                                    children: "Preencha as informa\xe7\xf5es financeiras do novo tour."
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_atoms_FormInputLine__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        state: form.price,
                                        setState: setForm,
                                        name: "price",
                                        label: "Pre\xe7o",
                                        type: "number",
                                        placeHolder: "Digite o pre\xe7o do tour..."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_atoms_FormInputLine__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        state: form.finalPrice,
                                        setState: setForm,
                                        name: "finalPrice",
                                        label: "Pre\xe7o Final",
                                        type: "number",
                                        placeHolder: "Digite o pre\xe7o final do tour..."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex flex-wrap items-center justify-between -mx-4 mb-8 pb-6 border-b border-gray-400 border-opacity-20",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "w-full sm:w-auto px-4 mb-6 sm:mb-0",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                    className: "text-2xl font-bold tracking-wide text-cool-gray-200 mb-1",
                                                    children: "Informa\xe7\xf5es sobre o Trajeto"
                                                }),
                                                tour ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-sm text-cool-gray-500",
                                                    children: "Edite as informa\xe7\xf5es sobre o trajeto do tour acima."
                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-sm text-cool-gray-500",
                                                    children: "Preencha as informa\xe7\xf5es sobre o trajeto do novo tour."
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_atoms_FormInputLine__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        state: form.destination,
                                        setState: setForm,
                                        name: "destination",
                                        label: "Destino Principal",
                                        type: "text",
                                        placeHolder: "Digite o destino principal do tour..."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_atoms_FormInputLine__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        state: form.durationHours,
                                        setState: setForm,
                                        name: "durationHours",
                                        label: "Dura\xe7\xe3o do Tour",
                                        type: "number",
                                        placeHolder: "Digite a dura\xe7\xe3o em horas do tour..."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_atoms_FormInputLine__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        state: form.languages,
                                        setState: setForm,
                                        name: "languages",
                                        label: "Quais idiomas s\xe3o atendidos?",
                                        type: "text",
                                        placeHolder: "Digite os idiomas que o tour atende..."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_atoms_FormInputLine__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        state: form.placeOfDeparture,
                                        setState: setForm,
                                        name: "placeOfDeparture",
                                        label: "Local de Partida",
                                        type: "text",
                                        placeHolder: "Digite o local de partida do tour..."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_atoms_FormInputLine__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        state: form.timeOfDeparture,
                                        setState: setForm,
                                        name: "timeOfDeparture",
                                        label: "Hor\xe1rio de Partida",
                                        type: "time",
                                        placeHolder: "Digite o hor\xe1rio de partida do tour..."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_atoms_FormInputLine__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        state: form.placeOfReturn,
                                        setState: setForm,
                                        name: "placeOfReturn",
                                        label: "Local de Retorno",
                                        type: "text",
                                        placeHolder: "Digite o local de retorno do tour..."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_atoms_FormInputLine__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        state: form.timeOfReturn,
                                        setState: setForm,
                                        name: "timeOfReturn",
                                        label: "Hor\xe1rio de Retorno",
                                        type: "time",
                                        placeHolder: "Digite o hor\xe1rio de retorno do tour..."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_atoms_FormInputLine__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        state: form.availability,
                                        setState: setForm,
                                        name: "availability",
                                        label: "Disponibilidade",
                                        type: "text",
                                        placeHolder: "Digite o local de retorno do tour..."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex flex-wrap items-center justify-between -mx-4 mb-8 pb-6 border-b border-gray-400 border-opacity-20",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "w-full sm:w-auto px-4 mb-6 sm:mb-0",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                    className: "text-2xl font-bold tracking-wide text-cool-gray-200 mb-1",
                                                    children: "Detalhes para Informar ao Consumidor"
                                                }),
                                                tour ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-sm text-cool-gray-500",
                                                    children: "Edite os detalhes que precisam ser informados ao consumidor."
                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-sm text-cool-gray-500",
                                                    children: "Preencha os detalhes sobre o novo tour, que precisam ser informados ao consumidor"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_atoms_FormInputLine__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        state: form.restrictions,
                                        setState: setForm,
                                        name: "restrictions",
                                        label: "Restri\xe7\xf5es do Tour",
                                        type: "text",
                                        placeHolder: "Digite as eventuais restri\xe7\xf5es do tour..."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_atoms_FormInputLine__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        state: form.include,
                                        setState: setForm,
                                        name: "include",
                                        label: "O que esta Incluso",
                                        type: "text",
                                        placeHolder: "Digite o que est\xe1 inclu\xeddo no tour..."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_atoms_FormInputLine__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        state: form.notInclude,
                                        setState: setForm,
                                        name: "notInclude",
                                        label: "O que n\xe3o esta Incluso",
                                        type: "text",
                                        placeHolder: "Digite o que n\xe3o est\xe1 inclu\xeddo no tour..."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_atoms_FormInputLine__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        state: form.belongsTobring,
                                        setState: setForm,
                                        name: "belongsTobring",
                                        label: "O que Trazer para o Tour",
                                        type: "text",
                                        placeHolder: "Digite o que o cliente deve trazer para o tour..."
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "text-right space-x-6",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_atoms_PrimaryBtn__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                text: "Salvar",
                                                clickHandle: salvar
                                            }),
                                            tour ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_atoms_DangerBtn__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                text: "Apagar Tour",
                                                openConfirmation: openConfirmationModal
                                            }) : null
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TourForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7690:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bw: () => (/* binding */ SelectContent),
/* harmony export */   Ph: () => (/* binding */ Select),
/* harmony export */   Ql: () => (/* binding */ SelectItem),
/* harmony export */   i4: () => (/* binding */ SelectTrigger),
/* harmony export */   ki: () => (/* binding */ SelectValue)
/* harmony export */ });
/* unused harmony exports SelectGroup, SelectLabel, SelectSeparator */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3567);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6152);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8728);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__, lucide_react__WEBPACK_IMPORTED_MODULE_3__, _lib_utils__WEBPACK_IMPORTED_MODULE_4__]);
([_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__, lucide_react__WEBPACK_IMPORTED_MODULE_3__, _lib_utils__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* __next_internal_client_entry_do_not_use__ Select,SelectGroup,SelectValue,SelectTrigger,SelectContent,SelectLabel,SelectItem,SelectSeparator auto */ 




const Select = _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__.Root;
const SelectGroup = _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__.Group;
const SelectValue = _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__.Value;
const SelectTrigger = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, children, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__.Trigger, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("flex h-10 w-full items-center justify-between rounded-md  border focus-within:border-carolina-blue border-slate-200  bg-transparent px-3 py-2 text-sm  placeholder:text-slate-500 focus:outline-none  disabled:cursor-not-allowed disabled:opacity-50  dark:border-slate-800 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus:ring-slate-800", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                asChild: true,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_3__.ChevronDown, {
                    className: "h-4 w-4 opacity-50"
                })
            })
        ]
    }));
SelectTrigger.displayName = _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__.Trigger.displayName;
const SelectContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, children, position = "popper", ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__.Portal, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__.Content, {
            ref: ref,
            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("relative z-50 min-w-[8rem]  overflow-hidden rounded-md border border-raisin-black-lighter bg-raisin-black-light text-cool-gray-500 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
            position: position,
            ...props,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__.Viewport, {
                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
                children: children
            })
        })
    }));
SelectContent.displayName = _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__.Content.displayName;
const SelectLabel = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__.Label, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("py-1.5 pl-8 pr-2 text-sm  font-semibold", className),
        ...props
    }));
SelectLabel.displayName = _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__.Label.displayName;
const SelectItem = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, children, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__.Item, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-raisin-black-lighter focus:text-cool-gray-500 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50", className),
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__.ItemIndicator, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_3__.Check, {
                        className: "h-4 w-4"
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__.ItemText, {
                children: children
            })
        ]
    }));
SelectItem.displayName = _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__.Item.displayName;
const SelectSeparator = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__.Separator, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("-mx-1 my-1 h-px bg-slate-100 dark:bg-slate-800", className),
        ...props
    }));
SelectSeparator.displayName = _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__.Separator.displayName;


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;