(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{UIoA:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class i{}var o=u("pMnS"),b=u("MKJQ"),t=u("sZkV"),r=u("SVse"),s=u("mrSG"),a=u("muhU"),c=u("5o9L");class p{constructor(l,n){this.firebaseAuthService=l,this.widgetUtilService=n,this.profileInfo={},this.profileAvailable=!1,this.getUserProfile()}ngOnInit(){}getUserProfile(){this.profileAvailable=!1,this.firebaseAuthService.getAuthState().subscribe(l=>{l&&(this.profileInfo=l.toJSON()),console.log("%%%",this.profileInfo),this.profileAvailable=!0},l=>{this.profileAvailable=!0})}logout(){return s.__awaiter(this,void 0,void 0,(function*(){try{yield this.firebaseAuthService.logout(),this.widgetUtilService.presentToast("You have logged out.")}catch(l){console.log("Error: ",l),this.widgetUtilService.presentToast(l.message)}}))}}var f=e.ob({encapsulation:0,styles:[[""]],data:{}});function h(l){return e.Ib(0,[(l()(),e.qb(0,0,null,null,39,"ion-row",[["class","ion-justify-content-center"]],null,null,null,b.Y,b.x)),e.pb(1,49152,null,0,t.fb,[e.h,e.k,e.x],null,null),(l()(),e.qb(2,0,null,0,37,"ion-col",[["size","12"],["size-lg","6"],["size-md","6"],["size-xs","12"]],null,null,null,b.J,b.i)),e.pb(3,49152,null,0,t.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.qb(4,0,null,0,35,"ion-card",[],null,null,null,b.I,b.e)),e.pb(5,49152,null,0,t.l,[e.h,e.k,e.x],null,null),(l()(),e.qb(6,0,null,0,4,"ion-card-header",[],null,null,null,b.G,b.g)),e.pb(7,49152,null,0,t.n,[e.h,e.k,e.x],null,null),(l()(),e.qb(8,0,null,0,2,"ion-card-title",[],null,null,null,b.H,b.h)),e.pb(9,49152,null,0,t.p,[e.h,e.k,e.x],null,null),(l()(),e.Hb(-1,0,[" Profile "])),(l()(),e.qb(11,0,null,0,28,"ion-card-content",[],null,null,null,b.F,b.f)),e.pb(12,49152,null,0,t.m,[e.h,e.k,e.x],null,null),(l()(),e.qb(13,0,null,0,21,"ion-row",[],null,null,null,b.Y,b.x)),e.pb(14,49152,null,0,t.fb,[e.h,e.k,e.x],null,null),(l()(),e.qb(15,0,null,0,3,"ion-col",[["size","12"]],null,null,null,b.J,b.i)),e.pb(16,49152,null,0,t.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.qb(17,0,null,0,1,"ion-img",[["class","user-avatar"]],null,null,null,b.O,b.n)),e.pb(18,49152,null,0,t.C,[e.h,e.k,e.x],{src:[0,"src"]},null),(l()(),e.qb(19,0,null,0,7,"ion-col",[["size","12"]],null,null,null,b.J,b.i)),e.pb(20,49152,null,0,t.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.qb(21,0,null,0,5,"ion-item",[],null,null,null,b.Q,b.p)),e.pb(22,49152,null,0,t.G,[e.h,e.k,e.x],null,null),(l()(),e.qb(23,0,null,0,2,"ion-label",[],null,null,null,b.R,b.q)),e.pb(24,49152,null,0,t.M,[e.h,e.k,e.x],null,null),(l()(),e.Hb(-1,0,[" Name "])),(l()(),e.Hb(26,0,[" "," "])),(l()(),e.qb(27,0,null,0,7,"ion-col",[["size","12"]],null,null,null,b.J,b.i)),e.pb(28,49152,null,0,t.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.qb(29,0,null,0,5,"ion-item",[],null,null,null,b.Q,b.p)),e.pb(30,49152,null,0,t.G,[e.h,e.k,e.x],null,null),(l()(),e.qb(31,0,null,0,2,"ion-label",[],null,null,null,b.R,b.q)),e.pb(32,49152,null,0,t.M,[e.h,e.k,e.x],null,null),(l()(),e.Hb(-1,0,[" Email "])),(l()(),e.Hb(34,0,[" "," "])),(l()(),e.qb(35,0,null,0,4,"ion-col",[["size","12"]],null,null,null,b.J,b.i)),e.pb(36,49152,null,0,t.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.qb(37,0,null,0,2,"ion-button",[["expand","block"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.logout()&&e),e}),b.D,b.c)),e.pb(38,49152,null,0,t.j,[e.h,e.k,e.x],{expand:[0,"expand"]},null),(l()(),e.Hb(-1,0,[" Logout "]))],(function(l,n){var u=n.component;l(n,3,0,"12"),l(n,16,0,"12"),l(n,18,0,e.ub(1,"",u.profileInfo.photoURL||"assets/user.png","")),l(n,20,0,"12"),l(n,28,0,"12"),l(n,36,0,"12"),l(n,38,0,"block")}),(function(l,n){var u=n.component;l(n,26,0,u.profileInfo.displayName||"-"),l(n,34,0,u.profileInfo.email)}))}function k(l){return e.Ib(0,[(l()(),e.qb(0,0,null,null,1,"ion-spinner",[["class","page-loader"],["color","secondary"],["name","lines"]],null,null,null,b.Z,b.y)),e.pb(1,49152,null,0,t.ob,[e.h,e.k,e.x],{color:[0,"color"],name:[1,"name"]},null)],(function(l,n){l(n,1,0,"secondary","lines")}),null)}function d(l){return e.Ib(0,[(l()(),e.qb(0,0,null,null,11,"ion-header",[],null,null,null,b.M,b.l)),e.pb(1,49152,null,0,t.A,[e.h,e.k,e.x],null,null),(l()(),e.qb(2,0,null,0,9,"ion-toolbar",[],null,null,null,b.bb,b.A)),e.pb(3,49152,null,0,t.yb,[e.h,e.k,e.x],null,null),(l()(),e.qb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,b.E,b.d)),e.pb(5,49152,null,0,t.k,[e.h,e.k,e.x],null,null),(l()(),e.qb(6,0,null,0,2,"ion-back-button",[["defaultHref","home"]],null,[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==e.Cb(l,8).onClick(u)&&i),i}),b.C,b.b)),e.pb(7,49152,null,0,t.f,[e.h,e.k,e.x],{defaultHref:[0,"defaultHref"]},null),e.pb(8,16384,null,0,t.g,[[2,t.eb],t.Eb],{defaultHref:[0,"defaultHref"]},null),(l()(),e.qb(9,0,null,0,2,"ion-title",[],null,null,null,b.ab,b.z)),e.pb(10,49152,null,0,t.wb,[e.h,e.k,e.x],null,null),(l()(),e.Hb(-1,0,["Profile"])),(l()(),e.qb(12,0,null,null,7,"ion-content",[],null,null,null,b.K,b.j)),e.pb(13,49152,null,0,t.t,[e.h,e.k,e.x],null,null),(l()(),e.qb(14,0,null,0,5,"ion-grid",[],null,null,null,b.L,b.k)),e.pb(15,49152,null,0,t.z,[e.h,e.k,e.x],null,null),(l()(),e.fb(16777216,null,0,1,null,h)),e.pb(17,16384,null,0,r.i,[e.N,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.fb(16777216,null,0,1,null,k)),e.pb(19,16384,null,0,r.i,[e.N,e.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,7,0,"home"),l(n,8,0,"home"),l(n,17,0,u.profileAvailable),l(n,19,0,!u.profileAvailable)}),null)}var g=e.mb("app-profile",p,(function(l){return e.Ib(0,[(l()(),e.qb(0,0,null,null,1,"app-profile",[],null,null,null,d,f)),e.pb(1,114688,null,0,p,[a.a,c.a],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),x=u("s7LF"),q=u("iInd");class A{}u.d(n,"ProfilePageModuleNgFactory",(function(){return v}));var v=e.nb(i,[],(function(l){return e.zb([e.Ab(512,e.j,e.Y,[[8,[o.a,g]],[3,e.j],e.v]),e.Ab(4608,r.k,r.j,[e.s,[2,r.q]]),e.Ab(4608,x.o,x.o,[]),e.Ab(4608,t.b,t.b,[e.x,e.g]),e.Ab(4608,t.Db,t.Db,[t.b,e.j,e.p]),e.Ab(4608,t.Gb,t.Gb,[t.b,e.j,e.p]),e.Ab(1073742336,r.b,r.b,[]),e.Ab(1073742336,x.n,x.n,[]),e.Ab(1073742336,x.g,x.g,[]),e.Ab(1073742336,t.Ab,t.Ab,[]),e.Ab(1073742336,q.o,q.o,[[2,q.t],[2,q.m]]),e.Ab(1073742336,A,A,[]),e.Ab(1073742336,i,i,[]),e.Ab(1024,q.k,(function(){return[[{path:"",component:p}]]}),[])])}))}}]);