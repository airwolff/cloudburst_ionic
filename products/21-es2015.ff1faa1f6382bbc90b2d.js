(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{mH0F:function(l,n,u){"use strict";u.r(n);var i=u("8Y7J");class e{}var o=u("pMnS"),t=u("MKJQ"),r=u("sZkV"),s=u("s7LF"),a=u("SVse"),b=u("mrSG"),p=u("muhU"),g=u("v5Ob"),c=u("xFKz"),d=u("5o9L");class h{constructor(l,n,u,i){this.helperService=l,this.router=n,this.firebaseAuthService=u,this.widgetUtilService=i,this.formError={email:"",password:""},this.validationMessage=c.d,this.showSignupSpinner=!1}ngOnInit(){this.createFormControl(),this.createForm()}resetForm(){this.signupForm.reset(),this.formError={email:"",password:""}}signup(){return b.__awaiter(this,void 0,void 0,(function*(){try{this.showSignupSpinner=!0;const l=yield this.firebaseAuthService.registerWithEmailPassword(this.email.value,this.password.value);console.log("Result: ",l),this.showSignupSpinner=!1,this.widgetUtilService.presentToast("Signup Success! Verification Email Sent..."),this.resetForm(),this.router.navigate(["/login"])}catch(l){console.log("Error: ",l),this.showSignupSpinner=!1,this.widgetUtilService.presentToast(l.message)}}))}goToLoginPage(){this.router.navigate(["/login"])}createFormControl(){this.email=new s.c("",[s.m.required,s.m.email]),this.password=new s.c("",[s.m.required,s.m.minLength(5)])}createForm(){this.signupForm=new s.e({email:this.email,password:this.password}),this.signupForm.valueChanges.subscribe(l=>this.onFormValueChanged(l))}onFormValueChanged(l){this.formError=this.helperService.prepareValidationMessage(this.signupForm,this.validationMessage,this.formError)}}var m=u("iInd"),f=i.ob({encapsulation:0,styles:[[""]],data:{}});function C(l){return i.Ib(0,[(l()(),i.qb(0,0,null,null,1,"ion-spinner",[["name","dots"]],null,null,null,t.Z,t.y)),i.pb(1,49152,null,0,r.ob,[i.h,i.k,i.x],{name:[0,"name"]},null)],(function(l,n){l(n,1,0,"dots")}),null)}function v(l){return i.Ib(0,[(l()(),i.qb(0,0,null,null,11,"ion-header",[],null,null,null,t.M,t.l)),i.pb(1,49152,null,0,r.A,[i.h,i.k,i.x],null,null),(l()(),i.qb(2,0,null,0,9,"ion-toolbar",[],null,null,null,t.bb,t.A)),i.pb(3,49152,null,0,r.yb,[i.h,i.k,i.x],null,null),(l()(),i.qb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,t.E,t.d)),i.pb(5,49152,null,0,r.k,[i.h,i.k,i.x],null,null),(l()(),i.qb(6,0,null,0,2,"ion-back-button",[["defaultHref","login"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==i.Cb(l,8).onClick(u)&&e),e}),t.C,t.b)),i.pb(7,49152,null,0,r.f,[i.h,i.k,i.x],{defaultHref:[0,"defaultHref"]},null),i.pb(8,16384,null,0,r.g,[[2,r.eb],r.Eb],{defaultHref:[0,"defaultHref"]},null),(l()(),i.qb(9,0,null,0,2,"ion-title",[],null,null,null,t.ab,t.z)),i.pb(10,49152,null,0,r.wb,[i.h,i.k,i.x],null,null),(l()(),i.Hb(-1,0,["Signup"])),(l()(),i.qb(12,0,null,null,59,"ion-content",[],null,null,null,t.K,t.j)),i.pb(13,49152,null,0,r.t,[i.h,i.k,i.x],null,null),(l()(),i.qb(14,0,null,0,57,"ion-grid",[["fixed",""]],null,null,null,t.L,t.k)),i.pb(15,49152,null,0,r.z,[i.h,i.k,i.x],{fixed:[0,"fixed"]},null),(l()(),i.qb(16,0,null,0,55,"ion-row",[["class","ion-justify-content-center"]],null,null,null,t.Y,t.x)),i.pb(17,49152,null,0,r.fb,[i.h,i.k,i.x],null,null),(l()(),i.qb(18,0,null,0,53,"ion-col",[["size","12"],["size-lg","6"],["size-md","6"]],null,null,null,t.J,t.i)),i.pb(19,49152,null,0,r.s,[i.h,i.k,i.x],{size:[0,"size"]},null),(l()(),i.qb(20,0,null,0,51,"ion-card",[],null,null,null,t.I,t.e)),i.pb(21,49152,null,0,r.l,[i.h,i.k,i.x],null,null),(l()(),i.qb(22,0,null,0,6,"ion-card-header",[],null,null,null,t.G,t.g)),i.pb(23,49152,null,0,r.n,[i.h,i.k,i.x],null,null),(l()(),i.qb(24,0,null,0,4,"ion-card-title",[["class","ion-text-center"]],null,null,null,t.H,t.h)),i.pb(25,49152,null,0,r.p,[i.h,i.k,i.x],null,null),(l()(),i.qb(26,0,null,0,1,"ion-icon",[["color","tertiary"],["name","lock-closed"]],null,null,null,t.N,t.m)),i.pb(27,49152,null,0,r.B,[i.h,i.k,i.x],{color:[0,"color"],name:[1,"name"]},null),(l()(),i.Hb(-1,0,[" Signup "])),(l()(),i.qb(29,0,null,0,42,"ion-card-content",[],null,null,null,t.F,t.f)),i.pb(30,49152,null,0,r.m,[i.h,i.k,i.x],null,null),(l()(),i.qb(31,0,null,0,40,"form",[["autocomplete","off"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,u){var e=!0;return"submit"===n&&(e=!1!==i.Cb(l,33).onSubmit(u)&&e),"reset"===n&&(e=!1!==i.Cb(l,33).onReset()&&e),e}),null,null)),i.pb(32,16384,null,0,s.q,[],null,null),i.pb(33,540672,null,0,s.f,[[8,null],[8,null]],{form:[0,"form"]},null),i.Eb(2048,null,s.a,null,[s.f]),i.pb(35,16384,null,0,s.k,[[4,s.a]],null,null),(l()(),i.qb(36,0,null,null,11,"ion-item",[],null,null,null,t.Q,t.p)),i.pb(37,49152,null,0,r.G,[i.h,i.k,i.x],null,null),(l()(),i.qb(38,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,t.R,t.q)),i.pb(39,49152,null,0,r.M,[i.h,i.k,i.x],{position:[0,"position"]},null),(l()(),i.Hb(-1,0,[" Email "])),(l()(),i.qb(41,0,null,0,6,"ion-input",[["formControlName","email"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var e=!0;return"ionBlur"===n&&(e=!1!==i.Cb(l,42)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==i.Cb(l,42)._handleInputEvent(u.target)&&e),e}),t.P,t.o)),i.pb(42,16384,null,0,r.Ib,[i.k],null,null),i.Eb(1024,null,s.h,(function(l){return[l]}),[r.Ib]),i.pb(44,671744,null,0,s.d,[[3,s.a],[8,null],[8,null],[6,s.h],[2,s.p]],{name:[0,"name"]},null),i.Eb(2048,null,s.i,null,[s.d]),i.pb(46,16384,null,0,s.j,[[4,s.i]],null,null),i.pb(47,49152,null,0,r.F,[i.h,i.k,i.x],{type:[0,"type"]},null),(l()(),i.qb(48,0,null,null,1,"div",[["class","error-message"]],null,null,null,null,null)),(l()(),i.Hb(49,null,[" "," "])),(l()(),i.qb(50,0,null,null,11,"ion-item",[],null,null,null,t.Q,t.p)),i.pb(51,49152,null,0,r.G,[i.h,i.k,i.x],null,null),(l()(),i.qb(52,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,t.R,t.q)),i.pb(53,49152,null,0,r.M,[i.h,i.k,i.x],{position:[0,"position"]},null),(l()(),i.Hb(-1,0,[" Password "])),(l()(),i.qb(55,0,null,0,6,"ion-input",[["formControlName","password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var e=!0;return"ionBlur"===n&&(e=!1!==i.Cb(l,56)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==i.Cb(l,56)._handleInputEvent(u.target)&&e),e}),t.P,t.o)),i.pb(56,16384,null,0,r.Ib,[i.k],null,null),i.Eb(1024,null,s.h,(function(l){return[l]}),[r.Ib]),i.pb(58,671744,null,0,s.d,[[3,s.a],[8,null],[8,null],[6,s.h],[2,s.p]],{name:[0,"name"]},null),i.Eb(2048,null,s.i,null,[s.d]),i.pb(60,16384,null,0,s.j,[[4,s.i]],null,null),i.pb(61,49152,null,0,r.F,[i.h,i.k,i.x],{type:[0,"type"]},null),(l()(),i.qb(62,0,null,null,1,"div",[["class","error-message"]],null,null,null,null,null)),(l()(),i.Hb(63,null,[" "," "])),(l()(),i.qb(64,0,null,null,4,"ion-button",[["class","ion-margin-top login-button"],["color","tertiary"],["expand","block"]],null,[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==l.component.signup()&&i),i}),t.D,t.c)),i.pb(65,49152,null,0,r.j,[i.h,i.k,i.x],{color:[0,"color"],disabled:[1,"disabled"],expand:[2,"expand"]},null),(l()(),i.Hb(-1,0,[" Signup "])),(l()(),i.fb(16777216,null,0,1,null,C)),i.pb(68,16384,null,0,a.i,[i.N,i.J],{ngIf:[0,"ngIf"]},null),(l()(),i.qb(69,0,null,null,2,"ion-button",[["class","button ion-margin-top signup-button"],["color","light"],["expand","full"]],null,[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==l.component.goToLoginPage()&&i),i}),t.D,t.c)),i.pb(70,49152,null,0,r.j,[i.h,i.k,i.x],{color:[0,"color"],expand:[1,"expand"]},null),(l()(),i.Hb(-1,0,[" Go to Login "]))],(function(l,n){var u=n.component;l(n,7,0,"login"),l(n,8,0,"login"),l(n,15,0,""),l(n,19,0,"12"),l(n,27,0,"tertiary","lock-closed"),l(n,33,0,u.signupForm),l(n,39,0,"floating"),l(n,44,0,"email"),l(n,47,0,"text"),l(n,53,0,"floating"),l(n,58,0,"password"),l(n,61,0,"password"),l(n,65,0,"tertiary",u.signupForm.invalid,"block"),l(n,68,0,u.showSignupSpinner),l(n,70,0,"light","full")}),(function(l,n){var u=n.component;l(n,31,0,i.Cb(n,35).ngClassUntouched,i.Cb(n,35).ngClassTouched,i.Cb(n,35).ngClassPristine,i.Cb(n,35).ngClassDirty,i.Cb(n,35).ngClassValid,i.Cb(n,35).ngClassInvalid,i.Cb(n,35).ngClassPending),l(n,41,0,i.Cb(n,46).ngClassUntouched,i.Cb(n,46).ngClassTouched,i.Cb(n,46).ngClassPristine,i.Cb(n,46).ngClassDirty,i.Cb(n,46).ngClassValid,i.Cb(n,46).ngClassInvalid,i.Cb(n,46).ngClassPending),l(n,49,0,u.formError.email),l(n,55,0,i.Cb(n,60).ngClassUntouched,i.Cb(n,60).ngClassTouched,i.Cb(n,60).ngClassPristine,i.Cb(n,60).ngClassDirty,i.Cb(n,60).ngClassValid,i.Cb(n,60).ngClassInvalid,i.Cb(n,60).ngClassPending),l(n,63,0,u.formError.password)}))}function k(l){return i.Ib(0,[(l()(),i.qb(0,0,null,null,1,"app-signup",[],null,null,null,v,f)),i.pb(1,114688,null,0,h,[g.a,m.m,p.a,d.a],null,null)],(function(l,n){l(n,1,0)}),null)}var x=i.mb("app-signup",h,k,{},{},[]);class q{}u.d(n,"SignupPageModuleNgFactory",(function(){return w}));var w=i.nb(e,[],(function(l){return i.zb([i.Ab(512,i.j,i.Y,[[8,[o.a,x]],[3,i.j],i.v]),i.Ab(4608,a.k,a.j,[i.s,[2,a.q]]),i.Ab(4608,s.o,s.o,[]),i.Ab(4608,r.b,r.b,[i.x,i.g]),i.Ab(4608,r.Db,r.Db,[r.b,i.j,i.p]),i.Ab(4608,r.Gb,r.Gb,[r.b,i.j,i.p]),i.Ab(4608,s.b,s.b,[]),i.Ab(1073742336,a.b,a.b,[]),i.Ab(1073742336,s.n,s.n,[]),i.Ab(1073742336,s.g,s.g,[]),i.Ab(1073742336,r.Ab,r.Ab,[]),i.Ab(1073742336,m.o,m.o,[[2,m.t],[2,m.m]]),i.Ab(1073742336,q,q,[]),i.Ab(1073742336,s.l,s.l,[]),i.Ab(1073742336,e,e,[]),i.Ab(1024,m.k,(function(){return[[{path:"",component:h}]]}),[])])}))}}]);