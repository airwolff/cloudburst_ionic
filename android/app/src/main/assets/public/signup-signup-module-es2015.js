(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"login\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Signup</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-grid fixed>\n        <ion-row class=\"ion-justify-content-center\">\n            <ion-col size=\"12\" size-md=\"6\" size-lg=\"6\">\n                <ion-card>\n                    <ion-card-header>\n                        <ion-card-title class=\"ion-text-center\">\n                            <ion-icon name=\"lock-closed\" color=\"tertiary\"></ion-icon>\n                            Signup\n                        </ion-card-title>\n                    </ion-card-header>\n                    <ion-card-content>\n                        <form [formGroup]=\"signupForm\" autocomplete=\"off\">\n                            <ion-item>\n                                <ion-label position=\"floating\">\n                                    Email\n                                </ion-label>\n                                <ion-input type=\"text\" formControlName=\"email\">\n                                </ion-input>\n                            </ion-item>\n                            <div class=\"error-message\">\n                                {{formError.email}}\n                            </div>\n                            <ion-item>\n                                <ion-label position=\"floating\">\n                                    Password\n                                </ion-label>\n                                <ion-input type=\"password\" formControlName=\"password\">\n                                </ion-input>\n                            </ion-item>\n                            <div class=\"error-message\">\n                                {{formError.password}}\n                            </div>\n                            <ion-button color=\"tertiary\" expand=\"block\" class=\"ion-margin-top login-button\" [disabled]=\"signupForm.invalid\" (click)=\"signup()\">\n                                Signup\n                                <ion-spinner name=\"dots\" *ngIf=\"showSignupSpinner\"></ion-spinner>\n                            </ion-button>\n                            <ion-button expand=\"full\" color=\"light\" class=\"button ion-margin-top signup-button\" (click)=\"goToLoginPage()\">\n                                Go to Login\n                            </ion-button>\n                        </form>\n                    </ion-card-content>\n                </ion-card>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./src/app/signup/signup-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/signup/signup-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SignupPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function() { return SignupPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup.page */ "./src/app/signup/signup.page.ts");




const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
    }
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SignupPageRoutingModule);



/***/ }),

/***/ "./src/app/signup/signup.module.ts":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.module.ts ***!
  \*****************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup-routing.module */ "./src/app/signup/signup-routing.module.ts");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.page */ "./src/app/signup/signup.page.ts");







let SignupPageModule = class SignupPageModule {
};
SignupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
    })
], SignupPageModule);



/***/ }),

/***/ "./src/app/signup/signup.page.scss":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/signup/signup.page.ts":
/*!***************************************!*\
  !*** ./src/app/signup/signup.page.ts ***!
  \***************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _providers_firebase_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../providers/firebase-auth.service */ "./src/app/providers/firebase-auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _providers_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../providers/helper.service */ "./src/app/providers/helper.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _constants_formValidationMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants/formValidationMessage */ "./src/app/constants/formValidationMessage.ts");
/* harmony import */ var _providers_widget_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../providers/widget-util.service */ "./src/app/providers/widget-util.service.ts");








let SignupPage = class SignupPage {
    constructor(helperService, router, firebaseAuthService, widgetUtilService) {
        this.helperService = helperService;
        this.router = router;
        this.firebaseAuthService = firebaseAuthService;
        this.widgetUtilService = widgetUtilService;
        this.formError = {
            email: '',
            password: ''
        };
        this.validationMessage = _constants_formValidationMessage__WEBPACK_IMPORTED_MODULE_6__["SIGNUP"];
        this.showSignupSpinner = false;
    }
    ngOnInit() {
        this.createFormControl();
        this.createForm();
    }
    resetForm() {
        this.signupForm.reset();
        this.formError = {
            email: '',
            password: ''
        };
    }
    signup() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                this.showSignupSpinner = true;
                const result = yield this.firebaseAuthService.registerWithEmailPassword(this.email.value, this.password.value);
                console.log('Result: ', result);
                this.showSignupSpinner = false;
                this.widgetUtilService.presentToast('Signup Success! Verification Email Sent...');
                this.resetForm();
                this.router.navigate(['/login']);
            }
            catch (error) {
                console.log('Error: ', error);
                this.showSignupSpinner = false;
                this.widgetUtilService.presentToast(error.message);
            }
        });
    }
    goToLoginPage() {
        this.router.navigate(['/login']);
    }
    createFormControl() {
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email
        ]);
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(5)
        ]);
    }
    createForm() {
        this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            email: this.email,
            password: this.password
        });
        this.signupForm.valueChanges.subscribe(data => this.onFormValueChanged(data));
    }
    onFormValueChanged(data) {
        this.formError = this.helperService.prepareValidationMessage(this.signupForm, this.validationMessage, this.formError);
    }
};
SignupPage.ctorParameters = () => [
    { type: _providers_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _providers_firebase_auth_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseAuthService"] },
    { type: _providers_widget_util_service__WEBPACK_IMPORTED_MODULE_7__["WidgetUtilService"] }
];
SignupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-signup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.page.scss */ "./src/app/signup/signup.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _providers_firebase_auth_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseAuthService"],
        _providers_widget_util_service__WEBPACK_IMPORTED_MODULE_7__["WidgetUtilService"]])
], SignupPage);



/***/ })

}]);
//# sourceMappingURL=signup-signup-module-es2015.js.map