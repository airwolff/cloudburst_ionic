(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"f+ep":function(l,n,u){"use strict";u.r(n);var i=u("8Y7J");class o{}var e=u("pMnS"),t=u("MKJQ"),r=u("sZkV"),s=u("s7LF"),a=u("SVse"),b=u("mrSG"),g=u("muhU"),c=u("v5Ob"),h=u("xFKz"),p=u("5o9L");class d{constructor(l,n,u,i){this.helperService=l,this.router=n,this.firebaseAuthService=u,this.widgetUtilService=i,this.formError={email:"",password:""},this.validationMessage=h.c,this.showLoginSpinner=!1}ngOnInit(){this.createFormControl(),this.createForm()}googleLogin(){this.helperService.isNativePlatform()?this.nativeGoogleLogin():this.googleLoginWeb()}nativeGoogleLogin(){return b.__awaiter(this,void 0,void 0,(function*(){try{this.widgetUtilService.presentLoading(),yield this.firebaseAuthService.nativeGoogleLogin(),this.widgetUtilService.presentToast("Login Success"),this.router.navigate(["/home"]),this.widgetUtilService.dismissLoader()}catch(l){this.widgetUtilService.presentToast("Something Went Wrong"),this.widgetUtilService.dismissLoader()}}))}googleLoginWeb(){return b.__awaiter(this,void 0,void 0,(function*(){try{yield this.firebaseAuthService.googleLoginWeb()}catch(l){console.log(l),this.widgetUtilService.presentToast(l.message)}}))}resetForm(){this.loginForm.reset(),this.formError={email:"",password:""}}loginWithEmailPassword(){return b.__awaiter(this,void 0,void 0,(function*(){try{this.showLoginSpinner=!0;const l=yield this.firebaseAuthService.loginWithEmailPassword(this.email.value,this.password.value);console.log("Result: ",l),this.showLoginSpinner=!1,this.widgetUtilService.presentToast("Logged In"),this.resetForm(),this.router.navigate(["/home"])}catch(l){console.log("Error: ",l),this.showLoginSpinner=!1,this.widgetUtilService.presentToast(l.message)}}))}goToSignupPage(){this.router.navigate(["/signup"])}createFormControl(){this.email=new s.c("",[s.m.required,s.m.email]),this.password=new s.c("",[s.m.required,s.m.minLength(5)])}createForm(){this.loginForm=new s.e({email:this.email,password:this.password}),this.loginForm.valueChanges.subscribe(l=>this.onFormValueChanged(l))}onFormValueChanged(l){this.formError=this.helperService.prepareValidationMessage(this.loginForm,this.validationMessage,this.formError)}}var m=u("iInd"),v=i.ob({encapsulation:0,styles:[[""]],data:{}});function C(l){return i.Ib(0,[(l()(),i.qb(0,0,null,null,1,"ion-spinner",[["name","dots"]],null,null,null,t.Z,t.y)),i.pb(1,49152,null,0,r.ob,[i.h,i.k,i.x],{name:[0,"name"]},null)],(function(l,n){l(n,1,0,"dots")}),null)}function f(l){return i.Ib(0,[(l()(),i.qb(0,0,null,null,6,"ion-header",[],null,null,null,t.M,t.l)),i.pb(1,49152,null,0,r.A,[i.h,i.k,i.x],null,null),(l()(),i.qb(2,0,null,0,4,"ion-toolbar",[],null,null,null,t.bb,t.A)),i.pb(3,49152,null,0,r.yb,[i.h,i.k,i.x],null,null),(l()(),i.qb(4,0,null,0,2,"ion-title",[],null,null,null,t.ab,t.z)),i.pb(5,49152,null,0,r.wb,[i.h,i.k,i.x],null,null),(l()(),i.Hb(-1,0,["Login"])),(l()(),i.qb(7,0,null,null,70,"ion-content",[],null,null,null,t.K,t.j)),i.pb(8,49152,null,0,r.t,[i.h,i.k,i.x],null,null),(l()(),i.qb(9,0,null,0,68,"ion-grid",[["fixed",""]],null,null,null,t.L,t.k)),i.pb(10,49152,null,0,r.z,[i.h,i.k,i.x],{fixed:[0,"fixed"]},null),(l()(),i.qb(11,0,null,0,66,"ion-row",[["class","ion-justify-content-center"]],null,null,null,t.Y,t.x)),i.pb(12,49152,null,0,r.fb,[i.h,i.k,i.x],null,null),(l()(),i.qb(13,0,null,0,64,"ion-col",[["size","12"],["size-lg","6"],["size-md","6"]],null,null,null,t.J,t.i)),i.pb(14,49152,null,0,r.s,[i.h,i.k,i.x],{size:[0,"size"]},null),(l()(),i.qb(15,0,null,0,62,"ion-card",[],null,null,null,t.I,t.e)),i.pb(16,49152,null,0,r.l,[i.h,i.k,i.x],null,null),(l()(),i.qb(17,0,null,0,6,"ion-card-header",[],null,null,null,t.G,t.g)),i.pb(18,49152,null,0,r.n,[i.h,i.k,i.x],null,null),(l()(),i.qb(19,0,null,0,4,"ion-card-title",[["class","ion-text-center"]],null,null,null,t.H,t.h)),i.pb(20,49152,null,0,r.p,[i.h,i.k,i.x],null,null),(l()(),i.qb(21,0,null,0,1,"ion-icon",[["color","tertiary"],["name","lock-closed"]],null,null,null,t.N,t.m)),i.pb(22,49152,null,0,r.B,[i.h,i.k,i.x],{color:[0,"color"],name:[1,"name"]},null),(l()(),i.Hb(-1,0,[" Login "])),(l()(),i.qb(24,0,null,0,53,"ion-card-content",[],null,null,null,t.F,t.f)),i.pb(25,49152,null,0,r.m,[i.h,i.k,i.x],null,null),(l()(),i.qb(26,0,null,0,51,"form",[["autocomplete","off"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,u){var o=!0;return"submit"===n&&(o=!1!==i.Cb(l,28).onSubmit(u)&&o),"reset"===n&&(o=!1!==i.Cb(l,28).onReset()&&o),o}),null,null)),i.pb(27,16384,null,0,s.q,[],null,null),i.pb(28,540672,null,0,s.f,[[8,null],[8,null]],{form:[0,"form"]},null),i.Eb(2048,null,s.a,null,[s.f]),i.pb(30,16384,null,0,s.k,[[4,s.a]],null,null),(l()(),i.qb(31,0,null,null,11,"ion-item",[],null,null,null,t.Q,t.p)),i.pb(32,49152,null,0,r.G,[i.h,i.k,i.x],null,null),(l()(),i.qb(33,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,t.R,t.q)),i.pb(34,49152,null,0,r.M,[i.h,i.k,i.x],{position:[0,"position"]},null),(l()(),i.Hb(-1,0,[" Email "])),(l()(),i.qb(36,0,null,0,6,"ion-input",[["formControlName","email"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var o=!0;return"ionBlur"===n&&(o=!1!==i.Cb(l,37)._handleBlurEvent(u.target)&&o),"ionChange"===n&&(o=!1!==i.Cb(l,37)._handleInputEvent(u.target)&&o),o}),t.P,t.o)),i.pb(37,16384,null,0,r.Ib,[i.k],null,null),i.Eb(1024,null,s.h,(function(l){return[l]}),[r.Ib]),i.pb(39,671744,null,0,s.d,[[3,s.a],[8,null],[8,null],[6,s.h],[2,s.p]],{name:[0,"name"]},null),i.Eb(2048,null,s.i,null,[s.d]),i.pb(41,16384,null,0,s.j,[[4,s.i]],null,null),i.pb(42,49152,null,0,r.F,[i.h,i.k,i.x],{type:[0,"type"]},null),(l()(),i.qb(43,0,null,null,1,"div",[["class","error-message"]],null,null,null,null,null)),(l()(),i.Hb(44,null,[" "," "])),(l()(),i.qb(45,0,null,null,11,"ion-item",[],null,null,null,t.Q,t.p)),i.pb(46,49152,null,0,r.G,[i.h,i.k,i.x],null,null),(l()(),i.qb(47,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,t.R,t.q)),i.pb(48,49152,null,0,r.M,[i.h,i.k,i.x],{position:[0,"position"]},null),(l()(),i.Hb(-1,0,[" Password "])),(l()(),i.qb(50,0,null,0,6,"ion-input",[["formControlName","password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var o=!0;return"ionBlur"===n&&(o=!1!==i.Cb(l,51)._handleBlurEvent(u.target)&&o),"ionChange"===n&&(o=!1!==i.Cb(l,51)._handleInputEvent(u.target)&&o),o}),t.P,t.o)),i.pb(51,16384,null,0,r.Ib,[i.k],null,null),i.Eb(1024,null,s.h,(function(l){return[l]}),[r.Ib]),i.pb(53,671744,null,0,s.d,[[3,s.a],[8,null],[8,null],[6,s.h],[2,s.p]],{name:[0,"name"]},null),i.Eb(2048,null,s.i,null,[s.d]),i.pb(55,16384,null,0,s.j,[[4,s.i]],null,null),i.pb(56,49152,null,0,r.F,[i.h,i.k,i.x],{type:[0,"type"]},null),(l()(),i.qb(57,0,null,null,1,"div",[["class","error-message"]],null,null,null,null,null)),(l()(),i.Hb(58,null,[" "," "])),(l()(),i.qb(59,0,null,null,15,"ion-row",[],null,null,null,t.Y,t.x)),i.pb(60,49152,null,0,r.fb,[i.h,i.k,i.x],null,null),(l()(),i.qb(61,0,null,0,6,"ion-col",[],null,null,null,t.J,t.i)),i.pb(62,49152,null,0,r.s,[i.h,i.k,i.x],null,null),(l()(),i.qb(63,0,null,0,4,"ion-button",[["class","ion-margin-top"],["color","tertiary"],["expand","block"]],null,[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==l.component.loginWithEmailPassword()&&i),i}),t.D,t.c)),i.pb(64,49152,null,0,r.j,[i.h,i.k,i.x],{color:[0,"color"],disabled:[1,"disabled"],expand:[2,"expand"]},null),(l()(),i.Hb(-1,0,[" Email Login "])),(l()(),i.fb(16777216,null,0,1,null,C)),i.pb(67,16384,null,0,a.i,[i.N,i.J],{ngIf:[0,"ngIf"]},null),(l()(),i.qb(68,0,null,0,6,"ion-col",[],null,null,null,t.J,t.i)),i.pb(69,49152,null,0,r.s,[i.h,i.k,i.x],null,null),(l()(),i.qb(70,0,null,0,4,"ion-button",[["class","ion-margin-top"],["color","danger"],["expand","block"]],null,[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==l.component.googleLoginWeb()&&i),i}),t.D,t.c)),i.pb(71,49152,null,0,r.j,[i.h,i.k,i.x],{color:[0,"color"],expand:[1,"expand"]},null),(l()(),i.qb(72,0,null,0,1,"ion-icon",[["name","logo-google"]],null,null,null,t.N,t.m)),i.pb(73,49152,null,0,r.B,[i.h,i.k,i.x],{name:[0,"name"]},null),(l()(),i.Hb(-1,0,[" \xa0Google Login "])),(l()(),i.qb(75,0,null,null,2,"ion-button",[["class","ion-margin-top"],["color","light"],["expand","block"]],null,[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==l.component.goToSignupPage()&&i),i}),t.D,t.c)),i.pb(76,49152,null,0,r.j,[i.h,i.k,i.x],{color:[0,"color"],expand:[1,"expand"]},null),(l()(),i.Hb(-1,0,[" Signup "]))],(function(l,n){var u=n.component;l(n,10,0,""),l(n,14,0,"12"),l(n,22,0,"tertiary","lock-closed"),l(n,28,0,u.loginForm),l(n,34,0,"floating"),l(n,39,0,"email"),l(n,42,0,"text"),l(n,48,0,"floating"),l(n,53,0,"password"),l(n,56,0,"password"),l(n,64,0,"tertiary",u.loginForm.invalid,"block"),l(n,67,0,u.showLoginSpinner),l(n,71,0,"danger","block"),l(n,73,0,"logo-google"),l(n,76,0,"light","block")}),(function(l,n){var u=n.component;l(n,26,0,i.Cb(n,30).ngClassUntouched,i.Cb(n,30).ngClassTouched,i.Cb(n,30).ngClassPristine,i.Cb(n,30).ngClassDirty,i.Cb(n,30).ngClassValid,i.Cb(n,30).ngClassInvalid,i.Cb(n,30).ngClassPending),l(n,36,0,i.Cb(n,41).ngClassUntouched,i.Cb(n,41).ngClassTouched,i.Cb(n,41).ngClassPristine,i.Cb(n,41).ngClassDirty,i.Cb(n,41).ngClassValid,i.Cb(n,41).ngClassInvalid,i.Cb(n,41).ngClassPending),l(n,44,0,u.formError.email),l(n,50,0,i.Cb(n,55).ngClassUntouched,i.Cb(n,55).ngClassTouched,i.Cb(n,55).ngClassPristine,i.Cb(n,55).ngClassDirty,i.Cb(n,55).ngClassValid,i.Cb(n,55).ngClassInvalid,i.Cb(n,55).ngClassPending),l(n,58,0,u.formError.password)}))}var k=i.mb("app-login",d,(function(l){return i.Ib(0,[(l()(),i.qb(0,0,null,null,1,"app-login",[],null,null,null,f,v)),i.pb(1,114688,null,0,d,[c.a,m.m,g.a,p.a],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]);class x{}u.d(n,"LoginPageModuleNgFactory",(function(){return w}));var w=i.nb(o,[],(function(l){return i.zb([i.Ab(512,i.j,i.Y,[[8,[e.a,k]],[3,i.j],i.v]),i.Ab(4608,a.k,a.j,[i.s,[2,a.q]]),i.Ab(4608,s.o,s.o,[]),i.Ab(4608,r.b,r.b,[i.x,i.g]),i.Ab(4608,r.Db,r.Db,[r.b,i.j,i.p]),i.Ab(4608,r.Gb,r.Gb,[r.b,i.j,i.p]),i.Ab(4608,s.b,s.b,[]),i.Ab(1073742336,a.b,a.b,[]),i.Ab(1073742336,s.n,s.n,[]),i.Ab(1073742336,s.g,s.g,[]),i.Ab(1073742336,r.Ab,r.Ab,[]),i.Ab(1073742336,m.o,m.o,[[2,m.t],[2,m.m]]),i.Ab(1073742336,x,x,[]),i.Ab(1073742336,s.l,s.l,[]),i.Ab(1073742336,o,o,[]),i.Ab(1024,m.k,(function(){return[[{path:"",component:d}]]}),[])])}))}}]);