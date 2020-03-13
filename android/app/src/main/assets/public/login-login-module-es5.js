(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-title>Login</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-grid fixed>\n        <ion-row class=\"ion-justify-content-center\">\n            <ion-col size=\"12\" size-md=\"6\" size-lg=\"6\">\n                <ion-card>\n                    <ion-card-header>\n                        <ion-card-title class=\"ion-text-center\">\n                            <ion-icon name=\"lock-closed\" color=\"tertiary\"></ion-icon>\n                            Login\n                        </ion-card-title>\n                    </ion-card-header>\n                    <ion-card-content>\n                        <form [formGroup]=\"loginForm\" autocomplete=\"off\">\n                            <ion-item>\n                                <ion-label position=\"floating\">\n                                    Email\n                                </ion-label>\n                                <ion-input type=\"text\" formControlName=\"email\">\n                                </ion-input>\n                            </ion-item>\n                            <div class=\"error-message\">\n                                {{formError.email}}\n                            </div>\n                            <ion-item>\n                                <ion-label position=\"floating\">\n                                    Password\n                                </ion-label>\n                                <ion-input type=\"password\" formControlName=\"password\">\n                                </ion-input>\n                            </ion-item>\n                            <div class=\"error-message\">\n                                {{formError.password}}\n                            </div>\n                            <ion-row>\n                                <ion-col>\n                                    <ion-button expand=\"block\" color=\"tertiary\" class=\"ion-margin-top\" [disabled]=\"loginForm.invalid\" (click)=\"loginWithEmailPassword()\">\n                                        Email Login \n                                        <ion-spinner name=\"dots\" *ngIf=\"showLoginSpinner\">\n                                        </ion-spinner>\n                                    </ion-button>\n                                </ion-col>\n                                <ion-col>\n                                    <ion-button expand=\"block\" color=\"danger\" class=\"ion-margin-top\" (click)=\"googleLoginWeb()\">\n                                        <ion-icon name=\"logo-google\"></ion-icon>\n                                        &nbsp;Google Login\n                                    </ion-button>\n                                </ion-col>\n                            </ion-row>\n                            <ion-button expand=\"block\" color=\"light\" class=\"ion-margin-top\" (click)=\"goToSignupPage()\">\n                                Signup\n                            </ion-button>\n                        </form>\n                    </ion-card-content>\n                </ion-card>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/login/login-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/login/login-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: LoginPageRoutingModule */

  /***/
  function srcAppLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
      return LoginPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/login/login.page.ts");

    const routes = [{
      path: '',
      component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }];
    let LoginPageRoutingModule = class LoginPageRoutingModule {};
    LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/login/login.module.ts":
  /*!***************************************!*\
    !*** ./src/app/login/login.module.ts ***!
    \***************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/login/login-routing.module.ts");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/login/login.page.ts");

    let LoginPageModule = class LoginPageModule {};
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/login/login.page.scss":
  /*!***************************************!*\
    !*** ./src/app/login/login.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/login/login.page.ts":
  /*!*************************************!*\
    !*** ./src/app/login/login.page.ts ***!
    \*************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _providers_firebase_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../providers/firebase-auth.service */
    "./src/app/providers/firebase-auth.service.ts");
    /* harmony import */


    var _providers_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../providers/helper.service */
    "./src/app/providers/helper.service.ts");
    /* harmony import */


    var _constants_formValidationMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../constants/formValidationMessage */
    "./src/app/constants/formValidationMessage.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _providers_widget_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../providers/widget-util.service */
    "./src/app/providers/widget-util.service.ts");

    let LoginPage = class LoginPage {
      constructor(helperService, router, firebaseAuthService, widgetUtilService) {
        this.helperService = helperService;
        this.router = router;
        this.firebaseAuthService = firebaseAuthService;
        this.widgetUtilService = widgetUtilService;
        this.formError = {
          email: '',
          password: ''
        };
        this.validationMessage = _constants_formValidationMessage__WEBPACK_IMPORTED_MODULE_3__["LOGIN"];
        this.showLoginSpinner = false;
      }

      ngOnInit() {
        this.createFormControl();
        this.createForm();
      }

      googleLogin() {
        if (this.helperService.isNativePlatform()) {
          this.nativeGoogleLogin();
        } else {
          this.googleLoginWeb();
        }
      }

      nativeGoogleLogin() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          try {
            this.widgetUtilService.presentLoading();
            yield this.firebaseAuthService.nativeGoogleLogin();
            this.widgetUtilService.presentToast('Login Success');
            this.router.navigate(['/home']);
            this.widgetUtilService.dismissLoader();
          } catch (error) {
            this.widgetUtilService.presentToast('Something Went Wrong');
            this.widgetUtilService.dismissLoader();
          }
        });
      }

      googleLoginWeb() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          try {
            yield this.firebaseAuthService.googleLoginWeb();
          } catch (error) {
            console.log(error);
            this.widgetUtilService.presentToast(error.message);
          }
        });
      }

      resetForm() {
        this.loginForm.reset();
        this.formError = {
          email: '',
          password: ''
        };
      }

      loginWithEmailPassword() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          try {
            this.showLoginSpinner = true;
            const result = yield this.firebaseAuthService.loginWithEmailPassword(this.email.value, this.password.value);
            console.log('Result: ', result);
            this.showLoginSpinner = false;
            this.widgetUtilService.presentToast('Logged In');
            this.resetForm();
            this.router.navigate(['/home']);
          } catch (error) {
            console.log('Error: ', error);
            this.showLoginSpinner = false;
            this.widgetUtilService.presentToast(error.message);
          }
        });
      }

      goToSignupPage() {
        this.router.navigate(['/signup']);
      }

      createFormControl() {
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email]);
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(5)]);
      }

      createForm() {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
          email: this.email,
          password: this.password
        });
        this.loginForm.valueChanges.subscribe(data => this.onFormValueChanged(data));
      }

      onFormValueChanged(data) {
        this.formError = this.helperService.prepareValidationMessage(this.loginForm, this.validationMessage, this.formError);
      }

    };

    LoginPage.ctorParameters = () => [{
      type: _providers_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
    }, {
      type: _providers_firebase_auth_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseAuthService"]
    }, {
      type: _providers_widget_util_service__WEBPACK_IMPORTED_MODULE_7__["WidgetUtilService"]
    }];

    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/login/login.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _providers_firebase_auth_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseAuthService"], _providers_widget_util_service__WEBPACK_IMPORTED_MODULE_7__["WidgetUtilService"]])], LoginPage);
    /***/
  }
}]);
//# sourceMappingURL=login-login-module-es5.js.map