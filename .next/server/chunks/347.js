"use strict";
exports.id = 347;
exports.ids = [347];
exports.modules = {

/***/ 8347:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _atoms_FormInputLine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(827);
/* harmony import */ var _services_UserServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6858);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _parts_ConfirmationModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8793);
/* harmony import */ var _atoms_PrimaryBtn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2838);
/* harmony import */ var _atoms_DangerBtn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1379);
/* harmony import */ var _hooks_useErrorToast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1614);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_UserServices__WEBPACK_IMPORTED_MODULE_3__, _parts_ConfirmationModal__WEBPACK_IMPORTED_MODULE_6__]);
([_services_UserServices__WEBPACK_IMPORTED_MODULE_3__, _parts_ConfirmationModal__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function UserForm({ user }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const errorToast = (0,_hooks_useErrorToast__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)();
    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [form, setForm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        id: user?.id || undefined,
        name: user?.name || "",
        email: user?.email || "",
        phone: user?.phone || "",
        cpf: user?.cpf || "",
        password: "",
        confirmPassword: ""
    });
    const userUpdateMutation = (0,react_query__WEBPACK_IMPORTED_MODULE_5__.useMutation)({
        mutationFn: _services_UserServices__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.updateById,
        onSuccess: ()=>{
            router.push(`/admin/usuarios?updated=true`);
        }
    });
    const userDeleteMutation = (0,react_query__WEBPACK_IMPORTED_MODULE_5__.useMutation)({
        mutationFn: _services_UserServices__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.delete,
        onSuccess: ()=>{
            router.push("/admin/usuarios?deleted=true");
        }
    });
    async function register(e) {
        e.preventDefault();
        if (!user) {
            if (!form.name) {
                errorToast("\xc9 preciso informar ao menos o nome do paciente");
            } else if (!form.password) {
                errorToast("\xc9 necess\xe1rio informar uma senha");
            } else if (form.password !== form.confirmPassword) {
                errorToast("As senhas precisam ser iguais");
            } else {
                const isRegistred = await _services_UserServices__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.register(form);
                if (isRegistred) {
                    router.push("/admin/usuarios?saved=true");
                }
            }
        } else {
            delete form?.password;
            delete form?.confirmPassword;
            userUpdateMutation.mutate(form);
        }
    }
    function deleteAction() {
        closeModal();
        userDeleteMutation.mutate(user?.id);
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
                text: "Tem certeza que deseja apagar o usu\xe1rio?",
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
                                            children: "Informa\xe7\xf5es Pessoais"
                                        }),
                                        user ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-sm text-cool-gray-500",
                                            children: "Edite as informa\xe7\xf5es pessoais do usu\xe1rio acima."
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-sm text-cool-gray-500",
                                            children: "Preencha as informa\xe7\xf5es pessoais do novo usu\xe1rio."
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
                                        placeHolder: "Digite o nome do novo usu\xe1rio..."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_atoms_FormInputLine__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        state: form.email,
                                        setState: setForm,
                                        name: "email",
                                        label: "Email",
                                        type: "email",
                                        placeHolder: "Digite o email do novo usu\xe1rio..."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_atoms_FormInputLine__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        state: form.phone,
                                        setState: setForm,
                                        name: "phone",
                                        label: "Telefone",
                                        type: "tel",
                                        placeHolder: "Digite o telefone do novo usu\xe1rio..."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_atoms_FormInputLine__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        state: form.cpf,
                                        setState: setForm,
                                        name: "cpf",
                                        label: "CPF",
                                        type: "text",
                                        placeHolder: "Digite o CPF do novo usu\xe1rio..."
                                    }),
                                    !user ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "flex flex-wrap items-center justify-between -mx-4 mb-8 pb-6 mt-12 border-b border-gray-400 border-opacity-20",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "w-full sm:w-auto px-4 mb-6 sm:mb-0",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                        className: "text-2xl font-bold tracking-wide text-cool-gray-200 mb-1",
                                                        children: "Senha"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_atoms_FormInputLine__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                state: form.password,
                                                setState: setForm,
                                                name: "password",
                                                label: "Senha",
                                                type: "password",
                                                placeHolder: "Digite a senha do novo usu\xe1rio"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_atoms_FormInputLine__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                state: form.confirmPassword,
                                                setState: setForm,
                                                name: "confirmPassword",
                                                label: "Repita a Senha",
                                                type: "password",
                                                placeHolder: "Repita a senha do novo usu\xe1rio"
                                            })
                                        ]
                                    }) : null,
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "text-right space-x-6",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_atoms_PrimaryBtn__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                text: "Salvar",
                                                clickHandle: register
                                            }),
                                            user ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_atoms_DangerBtn__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                text: "Apagar Usu\xe1rio",
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;