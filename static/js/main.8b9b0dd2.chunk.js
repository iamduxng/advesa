(this.webpackJsonpadvesa=this.webpackJsonpadvesa||[]).push([[1],{18:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=function(){return o.a.createElement("div",{className:"advesa-loading"},o.a.createElement("img",{src:"loading.svg",alt:""}))},s=function(e){return Object(a.forwardRef)((function(t,n){return o.a.createElement(a.Suspense,{fallback:o.a.createElement(r,null)},o.a.createElement(e,Object.assign({},t,{forwardedRef:n})))}))};n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return s}))},43:function(e,t,n){e.exports=n(70)},48:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(12),s=n.n(r),i=(n(48),n(7)),c=n(14),u=n(10),l=n(13),f=n(1),d=n(8),h=n(15),b=n.n(h);Object(f.f)({enforeActions:"observed"});var v=function(){function e(){Object(u.a)(this,e),this.stateUser=d.b.pending,this.statePost=d.b.pending,this.keyword="",this._users=[],this._posts=[]}return Object(l.a)(e,[{key:"getUsersAndPosts",value:function(){var e=this;this._users=[],this._posts=[],this._setStates(d.b.pending),b.a.all([b.a.get("".concat(d.a,"/users")),b.a.get("".concat(d.a,"/posts"))]).then((function(t){var n=Object(c.a)(t,2),a=n[0],o=n[1];Object(f.n)((function(){e._users=a.data||[],e._posts=o.data||[],e.keyword="",e._setStates(d.b.done)}))})).catch((function(t){Object(f.n)((function(){e._setStates(d.b.error)}))}))}},{key:"_setStates",value:function(e){this.stateUser=e,this.statePost=e}},{key:"fUsers",get:function(){var e=this,t=this._users.filter((function(t){return t.name.includes(e.keyword)}));return t.length>0?t:this._users}},{key:"fPosts",get:function(){var e=this,t=this._posts.filter((function(t){return t.title.includes(e.keyword)||t.body.includes(e.keyword)}));return t.length>0?t:this._posts}}]),e}();Object(f.h)(v,{keyword:f.m,stateUser:f.m,statePost:f.m,fUsers:f.e,fPosts:f.e,getUsersAndPosts:f.d,filterPosts:f.d});var m=v,p=new function e(){Object(u.a)(this,e),this.advesaApi=new m},g=n(21),w=n(18),y=Object(w.b)(Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,135))}))),j=Object(w.b)(Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(4),n.e(7)]).then(n.bind(null,130))}))),O=function(){var e=Object(a.useState)(""),t=Object(c.a)(e,2),n=t[0],r=t[1],s=Object(a.useRef)(),i=function(e,t,n){var a;return function(){var o=this,r=arguments,s=function(){a=null,n||e.apply(o,r)},i=n&&!a;clearTimeout(a),a=setTimeout(s,t),i&&e.apply(o,r)}}((function(){r(s.current.value)}),250);return o.a.createElement(g.b,{store:p},o.a.createElement("div",{className:"home"},o.a.createElement(j,{ref:s,handleSubmit:i}),o.a.createElement(y,{keyword:n})))},k=n(39),E=n(40),_=n(42),P=function(e){function t(){return Object(u.a)(this,t),Object(k.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"page-404 flex-center"},"No Matching")}}]),t}(o.a.Component),S=function(){return o.a.createElement(i.c,null,o.a.createElement(i.a,{exact:!0,path:"/",component:O}),o.a.createElement(i.a,{component:P}))};var U=function(){return o.a.createElement(S,null)},A=n(17),N=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(69);s.a.render(o.a.createElement(A.a,{basename:"/advesa"},o.a.createElement(U,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/advesa",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/advesa","/custom-sw.js");N?(!function(e,t){fetch(e).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):R(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):R(t,e)}))}}()},8:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o}));var a="https://jsonplaceholder.typicode.com",o={done:"DONE",error:"ERROR",pending:"PENDING"}}},[[43,2,3]]]);
//# sourceMappingURL=main.8b9b0dd2.chunk.js.map