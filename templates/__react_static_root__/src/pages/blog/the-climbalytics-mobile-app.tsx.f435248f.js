(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{183:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return l}));var n=a(0),r=a.n(n),o=(a(173),function(e){var t=e.completed,a=e.completedComponent,n=e.formComponent;return r.a.createElement("div",{className:"footer-form"},r.a.createElement("div",{className:"footer-form-wrapper"},t?a:n))}),l=function(e){var t=e.message;return t?r.a.createElement("div",{className:"error"},t):r.a.createElement("div",{className:"error"})}},184:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(0),r=a.n(n),o=(a(174),function(e){var t=e.children;return r.a.createElement("footer",{className:"footer"},t,r.a.createElement("div",{className:"actionshot"},r.a.createElement("div",{className:"photo-credit"},"photo by @jvmdigital_photo")))})},185:function(e,t,a){"use strict";a.d(t,"a",(function(){return O}));var n=a(184),r=a(37),o=a(16),l=a.n(o),i=a(36),c=a.n(i),s=a(8),u=a.n(s),m=a(35),d=a.n(m),h=a(0),p=a.n(h),f=a(187),g=a.n(f),b=a(186),y=a.n(b),w=a(183);function v(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function E(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?v(Object(a),!0).forEach((function(t){l()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):v(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var k=function(){var e=p.a.useRef(null),t=p.a.useRef(null),a=p.a.useState({}),n=u()(a,2),r=n[0],o=n[1],i=p.a.useState(!1),s=u()(i,2),m=s[0],h=s[1],f=p.a.useState(!1),b=u()(f,2),v=b[0],k=b[1],O=function(){var a=c()(d.a.mark((function a(n){var r,i,c,s,u;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n.preventDefault(),r={},e.current.value||(r.name="Please enter your name"),t.current.value||(r.email="Please enter your email so we can send you updates"),g.a.isEmail(t.current.value)||(r.email="The email you entered may have a problem"),o(r),Object.keys(r).length){a.next=30;break}return h(!0),a.prev=8,a.next=11,fetch("https://api.climbalytics.com/v1/subscribe",{method:"post",body:JSON.stringify({name:e.current.value,email:t.current.value}),headers:{"Content-Type":"application/json"},mode:"cors"});case 11:if(!(i=a.sent).ok){a.next=18;break}return k(!0),h(!1),a.abrupt("return");case 18:return a.next=20,i.json();case 20:s=a.sent,u=Object.keys(s).reduce((function(e,t){return E(E({},e),["default","name","email"].includes(t)?l()({},t,y.a.compile(s[t].message).render(s[t].params||{})):{})}),{}),Object.keys(u).length||(u={default:"Something went wrong. Please email us at contact@climbalytics.com instead."});case 23:a.next=28;break;case 25:a.prev=25,a.t0=a.catch(8),c={default:"Something went wrong. Please email us at contact@climbalytics.com instead."};case 28:o(c),h(!1);case 30:case"end":return a.stop()}}),a,null,[[8,25]])})));return function(e){return a.apply(this,arguments)}}();return p.a.createElement(w.b,{completed:v,completedComponent:p.a.createElement(p.a.Fragment,null,p.a.createElement("h3",null,"Success!"),p.a.createElement("p",null,"You're on the list! Our next update will come straight to your inbox so that you can be the first to know."),p.a.createElement("button",{type:"submit",onClick:function(){return k(!1)}},p.a.createElement("div",null,"Back to Form"))),formComponent:p.a.createElement(p.a.Fragment,null,p.a.createElement("h3",null,"Stay informed of Climbalytics news!"),p.a.createElement("p",null,"Like what you see? We provide periodic updates when we cross new milestones or have new and exiting information to share. Be the first to know!"),p.a.createElement("form",{onSubmit:O},p.a.createElement("fieldset",{disabled:m},p.a.createElement(w.a,{message:r.default}),p.a.createElement("label",null,p.a.createElement("div",null,"* Name:"),p.a.createElement("input",{type:"text",ref:e}),p.a.createElement(w.a,{message:r.name})),p.a.createElement("label",null,p.a.createElement("div",null,"* Email:"),p.a.createElement("input",{type:"text",ref:t}),p.a.createElement(w.a,{message:r.email})),p.a.createElement("button",{type:"submit"},p.a.createElement("div",{className:"lds-dual-ring"}),p.a.createElement("div",null,"Submit")))))})},O=(a(175),function(e){var t=e.children,a=e.title;return p.a.createElement(r.a,{title:"".concat(a," - Climbalytics Blog")},p.a.createElement("main",{className:"content-page blog-page"},t),p.a.createElement(n.a,null,p.a.createElement(k,null)))})},88:function(e,t,a){"use strict";a.r(t);var n=a(185),r=a(0),o=a.n(r);t.default=function(){return o.a.createElement(n.a,{title:"The Climbalytics Mobile App"},o.a.createElement("section",{className:"section"},o.a.createElement("div",{className:"section-container"},o.a.createElement("h1",{className:"update-page-heading"},"The Climbalytics Mobile App"),o.a.createElement("h4",null,"Posted on Setember 29, 2017"),o.a.createElement("img",{src:"/images/blog/the-climbalytics-mobile-app/landscape.png",className:"content-page-image",style:{maxWidth:"none"}}),o.a.createElement("div",{className:"content-page-caption",style:{textAlign:"center"}},"Yosemite under clouds. Photo by Vladimir Kudinov"),o.a.createElement("p",null,"The number of different things we're juggling simultaneously is starting to grow. Brandon and I are really starting to rely on our awesome team to keep things moving towards our goal of being in a gym by the end of the year. The most noteworthy accomplishments this month are probably not the most interesting, but they're super crucial to our success. We've validated that 90% of the components on our newest circuit board are working (the last 10% should be validated this coming month). We've also come up with a design that we're really excited about and started 3D modeling (we will also be finishing that up in October)."),o.a.createElement("p",null,"But we can't just tell you about stuff coming next month! So today we released a very preliminary version of our mobile app. I wouldn't call it the V1 or even V0 release, so to set your expectations at the right level we'll call it the VB release :) Since we don't have the hardware finished yet, this version of the app lets you manually log climbs, their grade and whether you attempted, sent or flashed them. It's mostly a placeholder that's giving us a way to experiment with the interface and start integrating real, automated data as soon as our new board is fully validated. You can search for \"Climbalytics\" on the Google Play and Apple App stores if you want to check it out. Just remember... VB... Next on the agenda for the app is to build out a slick calendar view that will give you some insight into how your climbing skill and strength is changing over time, and help you build consistent climbing habits."),o.a.createElement("p",null,"If you check out the app and have feedback, ideas or suggestions we are always looking to chat with other climbers. The easiest way to get in touch is to email us: contact@climbalytics.com."),o.a.createElement("p",null,"Thanks for following along on this crazy journey and we look forward to announcing some exciting news in the next few months!"))))}}}]);