(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{183:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return o}));var n=a(0),r=a.n(n),l=(a(173),function(e){var t=e.completed,a=e.completedComponent,n=e.formComponent;return r.a.createElement("div",{className:"footer-form"},r.a.createElement("div",{className:"footer-form-wrapper"},t?a:n))}),o=function(e){var t=e.message;return t?r.a.createElement("div",{className:"error"},t):r.a.createElement("div",{className:"error"})}},184:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(0),r=a.n(n),l=(a(174),function(e){var t=e.children;return r.a.createElement("footer",{className:"footer"},t,r.a.createElement("div",{className:"actionshot"},r.a.createElement("div",{className:"photo-credit"},"photo by @jvmdigital_photo")))})},185:function(e,t,a){"use strict";a.d(t,"a",(function(){return j}));var n=a(184),r=a(37),l=a(16),o=a.n(l),c=a(36),i=a.n(c),s=a(8),u=a.n(s),m=a(35),p=a.n(m),d=a(0),f=a.n(d),h=a(187),b=a.n(h),g=a(186),y=a.n(g),E=a(183);function v(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function w(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?v(Object(a),!0).forEach((function(t){o()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):v(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var O=function(){var e=f.a.useRef(null),t=f.a.useRef(null),a=f.a.useState({}),n=u()(a,2),r=n[0],l=n[1],c=f.a.useState(!1),s=u()(c,2),m=s[0],d=s[1],h=f.a.useState(!1),g=u()(h,2),v=g[0],O=g[1],j=function(){var a=i()(p.a.mark((function a(n){var r,c,i,s,u;return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n.preventDefault(),r={},e.current.value||(r.name="Please enter your name"),t.current.value||(r.email="Please enter your email so we can send you updates"),b.a.isEmail(t.current.value)||(r.email="The email you entered may have a problem"),l(r),Object.keys(r).length){a.next=30;break}return d(!0),a.prev=8,a.next=11,fetch("https://api.climbalytics.com/v1/subscribe",{method:"post",body:JSON.stringify({name:e.current.value,email:t.current.value}),headers:{"Content-Type":"application/json"},mode:"cors"});case 11:if(!(c=a.sent).ok){a.next=18;break}return O(!0),d(!1),a.abrupt("return");case 18:return a.next=20,c.json();case 20:s=a.sent,u=Object.keys(s).reduce((function(e,t){return w(w({},e),["default","name","email"].includes(t)?o()({},t,y.a.compile(s[t].message).render(s[t].params||{})):{})}),{}),Object.keys(u).length||(u={default:"Something went wrong. Please email us at contact@climbalytics.com instead."});case 23:a.next=28;break;case 25:a.prev=25,a.t0=a.catch(8),i={default:"Something went wrong. Please email us at contact@climbalytics.com instead."};case 28:l(i),d(!1);case 30:case"end":return a.stop()}}),a,null,[[8,25]])})));return function(e){return a.apply(this,arguments)}}();return f.a.createElement(E.b,{completed:v,completedComponent:f.a.createElement(f.a.Fragment,null,f.a.createElement("h3",null,"Success!"),f.a.createElement("p",null,"You're on the list! Our next update will come straight to your inbox so that you can be the first to know."),f.a.createElement("button",{type:"submit",onClick:function(){return O(!1)}},f.a.createElement("div",null,"Back to Form"))),formComponent:f.a.createElement(f.a.Fragment,null,f.a.createElement("h3",null,"Stay informed of Climbalytics news!"),f.a.createElement("p",null,"Like what you see? We provide periodic updates when we cross new milestones or have new and exiting information to share. Be the first to know!"),f.a.createElement("form",{onSubmit:j},f.a.createElement("fieldset",{disabled:m},f.a.createElement(E.a,{message:r.default}),f.a.createElement("label",null,f.a.createElement("div",null,"* Name:"),f.a.createElement("input",{type:"text",ref:e}),f.a.createElement(E.a,{message:r.name})),f.a.createElement("label",null,f.a.createElement("div",null,"* Email:"),f.a.createElement("input",{type:"text",ref:t}),f.a.createElement(E.a,{message:r.email})),f.a.createElement("button",{type:"submit"},f.a.createElement("div",{className:"lds-dual-ring"}),f.a.createElement("div",null,"Submit")))))})},j=(a(175),function(e){var t=e.children,a=e.title;return f.a.createElement(r.a,{title:"".concat(a," - Climbalytics Blog")},f.a.createElement("main",{className:"content-page blog-page"},t),f.a.createElement(n.a,null,f.a.createElement(O,null)))})},87:function(e,t,a){"use strict";a.r(t);var n=a(185),r=a(0),l=a.n(r);t.default=function(){return l.a.createElement(n.a,{title:"Testing Prototype 2"},l.a.createElement("section",{className:"section"},l.a.createElement("div",{className:"section-container"},l.a.createElement("h1",{className:"update-page-heading"},"Testing Prototype 2"),l.a.createElement("h4",null,"Posted on January 8, 2017"),l.a.createElement("p",null,'The Beta Band is a great step forward in our exciting journey to make this climbing device a realtiy. Along with being significantly smaller, its tag read range is about 6 times farther or roughly 12".'),l.a.createElement("p",null,"This prototype currently does not have bluetooth installed so we are using a cable to attach it to our phone. During our testing we have been encouraged that the software worked as expected with only a few minor changes."),l.a.createElement("h4",null,"The Beta Band"),l.a.createElement("img",{className:"content-page-image",src:"/images/blog/testing-prototype-2/proto2.jpg"}))))}}}]);