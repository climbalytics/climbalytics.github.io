(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{183:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return l}));var n=a(0),r=a.n(n),o=(a(173),function(e){var t=e.completed,a=e.completedComponent,n=e.formComponent;return r.a.createElement("div",{className:"footer-form"},r.a.createElement("div",{className:"footer-form-wrapper"},t?a:n))}),l=function(e){var t=e.message;return t?r.a.createElement("div",{className:"error"},t):r.a.createElement("div",{className:"error"})}},184:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(0),r=a.n(n),o=(a(174),function(e){var t=e.children;return r.a.createElement("footer",{className:"footer"},t,r.a.createElement("div",{className:"actionshot"},r.a.createElement("div",{className:"photo-credit"},"photo by @jvmdigital_photo")))})},185:function(e,t,a){"use strict";a.d(t,"a",(function(){return x}));var n=a(184),r=a(37),o=a(16),l=a.n(o),i=a(36),c=a.n(i),s=a(8),u=a.n(s),m=a(35),p=a.n(m),d=a(0),h=a.n(d),f=a(187),g=a.n(f),b=a(186),w=a.n(b),y=a(183);function v(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function E(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?v(Object(a),!0).forEach((function(t){l()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):v(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var k=function(){var e=h.a.useRef(null),t=h.a.useRef(null),a=h.a.useState({}),n=u()(a,2),r=n[0],o=n[1],i=h.a.useState(!1),s=u()(i,2),m=s[0],d=s[1],f=h.a.useState(!1),b=u()(f,2),v=b[0],k=b[1],x=function(){var a=c()(p.a.mark((function a(n){var r,i,c,s,u;return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n.preventDefault(),r={},e.current.value||(r.name="Please enter your name"),t.current.value||(r.email="Please enter your email so we can send you updates"),g.a.isEmail(t.current.value)||(r.email="The email you entered may have a problem"),o(r),Object.keys(r).length){a.next=30;break}return d(!0),a.prev=8,a.next=11,fetch("https://api.climbalytics.com/v1/subscribe",{method:"post",body:JSON.stringify({name:e.current.value,email:t.current.value}),headers:{"Content-Type":"application/json"},mode:"cors"});case 11:if(!(i=a.sent).ok){a.next=18;break}return k(!0),d(!1),a.abrupt("return");case 18:return a.next=20,i.json();case 20:s=a.sent,u=Object.keys(s).reduce((function(e,t){return E(E({},e),["default","name","email"].includes(t)?l()({},t,w.a.compile(s[t].message).render(s[t].params||{})):{})}),{}),Object.keys(u).length||(u={default:"Something went wrong. Please email us at contact@climbalytics.com instead."});case 23:a.next=28;break;case 25:a.prev=25,a.t0=a.catch(8),c={default:"Something went wrong. Please email us at contact@climbalytics.com instead."};case 28:o(c),d(!1);case 30:case"end":return a.stop()}}),a,null,[[8,25]])})));return function(e){return a.apply(this,arguments)}}();return h.a.createElement(y.b,{completed:v,completedComponent:h.a.createElement(h.a.Fragment,null,h.a.createElement("h3",null,"Success!"),h.a.createElement("p",null,"You're on the list! Our next update will come straight to your inbox so that you can be the first to know."),h.a.createElement("button",{type:"submit",onClick:function(){return k(!1)}},h.a.createElement("div",null,"Back to Form"))),formComponent:h.a.createElement(h.a.Fragment,null,h.a.createElement("h3",null,"Stay informed of Climbalytics news!"),h.a.createElement("p",null,"Like what you see? We provide periodic updates when we cross new milestones or have new and exiting information to share. Be the first to know!"),h.a.createElement("form",{onSubmit:x},h.a.createElement("fieldset",{disabled:m},h.a.createElement(y.a,{message:r.default}),h.a.createElement("label",null,h.a.createElement("div",null,"* Name:"),h.a.createElement("input",{type:"text",ref:e}),h.a.createElement(y.a,{message:r.name})),h.a.createElement("label",null,h.a.createElement("div",null,"* Email:"),h.a.createElement("input",{type:"text",ref:t}),h.a.createElement(y.a,{message:r.email})),h.a.createElement("button",{type:"submit"},h.a.createElement("div",{className:"lds-dual-ring"}),h.a.createElement("div",null,"Submit")))))})},x=(a(175),function(e){var t=e.children,a=e.title;return h.a.createElement(r.a,{title:"".concat(a," - Climbalytics Blog")},h.a.createElement("main",{className:"content-page blog-page"},t),h.a.createElement(n.a,null,h.a.createElement(k,null)))})},71:function(e,t,a){"use strict";a.r(t);var n=a(185),r=a(0),o=a.n(r);t.default=function(){return o.a.createElement(n.a,{title:"A sneak peak at the newest prototype"},o.a.createElement("section",{className:"section"},o.a.createElement("div",{className:"section-container"},o.a.createElement("h1",{className:"update-page-heading"},"A sneak peak at the newest prototype"),o.a.createElement("h4",null,"Posted on June 30, 2017"),o.a.createElement("p",null,"After our whirlwind of demos in May, Brandon and I turned back to focusing on the product this past month. We've been focusing on two specific areas while we prepare to develop our next prototype, the Delta."),o.a.createElement("p",null,"The Delta is going to be a huge step forward in terms of polish and functionality. The most exciting news is that we've brought on an incredible industrial designer, David, to help us design the look, feel, and functionality of the new prototype. David has a breadth of experience designing watches from concept through mass production. He has already challenged us to think about the Delta in new ways and come up with some really impressive initial sketches."),o.a.createElement("img",{src:"/images/blog/a-sneak-peak-at-the-newest-prototype/sketch.png",className:"content-page-image"}),o.a.createElement("div",{className:"content-page-caption",style:{width:"400px"}},"One of our rough sketches for the design of the Delta"),o.a.createElement("p",null,"In addition to beginning to think about the industrial design we've prioritized improving the Climbalytics app. Thus far the app has been great for demoing and proving that the technology works, but there's so much more we can do. Seeing your climbs automatically logged is cool and all, but we're working on some really fun ways to use and play with the data that we're able to collect."),o.a.createElement("p",null,"With all of these new product improvements coming down the pipeline we'd love to get your feedback. If you've got a few minutes to fill out"," ",o.a.createElement("a",{href:"https://docs.google.com/forms/d/e/1FAIpQLSe3VsJ0LwXXAc5_k_o-IkLicmtQJfvVUz2z8sKazh9taTi2Ww/viewform"},"this short survey")," ","it would help a ton to guide which new features we build out. At the end you can optionally set up a time to video chat with Brandon or I one on one to share your ideas and get a sneak peek at David's sketches!"),o.a.createElement("a",{style:{background:"#96B642",color:"#fff",padding:"1rem",display:"block",margin:"0 auto",width:"14rem",fontWeight:"bold",textDecoration:"none",textAlign:"center",borderRadius:"5px",fontSize:"1.5rem",marginTop:"2rem",marginBottom:"5rem",boxShadow:"1px 1px 4px 0px rgba(0,0,0,0.75)"},href:"https://docs.google.com/forms/d/e/1FAIpQLSe3VsJ0LwXXAc5_k_o-IkLicmtQJfvVUz2z8sKazh9taTi2Ww/viewform"},"Take the Survey"))))}}}]);