(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{22:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var c,s=n(1),r=n.n(s),a=n(17),l=n.n(a),i=(n(22),n(3)),o=n.n(i),u=n(5),j=n(4),x=n(6),d=n.n(x),b=function(){var e=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get(t,{cancelToken:new d.a.CancelToken((function(e){return c=e}))});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get(t);case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),h=n(0);var f=function(e){var t=e.pokemon,n=e.Details,c=e.open;return Object(h.jsx)("div",{className:"containery",children:Object(h.jsx)("div",{className:"flx flex-col justify-center items-center",children:t.map((function(e){var t=e.name,s=e.url;return Object(h.jsx)("div",{onClick:c,className:"bg-blue-300 flex border-4 justify-center items-center m-0 p-3 ",children:Object(h.jsx)("p",{className:" text-xl font-bold ",onClick:function(){return n(s)},children:t})},t)}))})})};var p=function(e){var t=e.Details,n=e.close,c=e.isopen;return t?Object(h.jsxs)("div",{className:c?"flex h-screen bg-blue-300 rounded-l-xl md:top-0 right-0 fixed md:w-2/5 w-full flex-wrap":"hidden",children:[Object(h.jsx)("svg",{onClick:n,xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8 text-black-700 mt-2 ml-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})}),Object(h.jsxs)("div",{className:"flex items-center bg-gray-800 md:m-5 mx-5 mt-2 rounded-xl w-full justify-between",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{className:"font-bold text-4xl text-white self-start ml-5",children:t.name}),Object(h.jsxs)("p",{className:"font-normal text-xl text-white self-start mt-2 ml-5",children:["Height:",t.height]}),Object(h.jsxs)("p",{className:"font-normal text-xl text-white self-start mt-2 ml-5",children:["Exp:",t.base_experience]})]}),Object(h.jsx)("div",{className:"containerx",children:Object(h.jsx)("img",{src:t.sprites.other.dream_world.front_default})})]}),Object(h.jsxs)("div",{className:" w-full h-60 lg:h-96 rounded-xl w-full md:w-2/5 mx-5 mt-2 bg-gray-800 flex flex-col justify-center items-center",children:[Object(h.jsx)("p",{className:"font-bold text-white text-4xl ",children:"Moves"}),Object(h.jsx)("div",{className:"overflow-y-scroll flex flex-col justify-center my-2",children:t.moves.map((function(e){var t=e.move.name;return Object(h.jsx)("p",{className:"font-normal text-cl text-white mt-2",children:t})}))})]}),Object(h.jsxs)("div",{className:" w-full h-60 lg:h-96 rounded-xl w-full md:w-2/5 mx-5 mt-2 bg-gray-800 flex flex-col justify-center items-center",children:[Object(h.jsx)("p",{className:"font-bold text-white text-4xl ",children:"Stats"}),Object(h.jsx)("div",{className:"overflow-y-auto flex flex-col justify-center my-2",children:t.stats.map((function(e){var t=e.base_stat,n=e.stat.name;return Object(h.jsxs)("p",{className:"font-normal text-cl text-white mt-2",children:[n,":",t]})}))})]})]}):null},v=n.p+"static/media/pokemonhunts.b05fd55e.png";n(44);var O=function(){var e=Object(s.useState)([]),t=Object(j.a)(e,2),n=t[0],r=t[1],a=Object(s.useState)(""),l=Object(j.a)(a,2),i=l[0],x=l[1],d=Object(s.useState)(""),O=Object(j.a)(d,2),w=O[0],g=O[1],N=Object(s.useState)("https://pokeapi.co/api/v2/pokemon/?limit=11"),y=Object(j.a)(N,2),k=y[0],C=y[1],S=Object(s.useState)(),T=Object(j.a)(S,2),I=T[0],P=T[1],D=Object(s.useState)(!1),L=Object(j.a)(D,2),M=L[0],B=L[1];Object(s.useEffect)((function(){return function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(k);case 2:t=e.sent,r(t.results),g(t.previous),x(t.next);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),function(){c()}}),[k]);var E=function(){var e=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(t);case 2:n=e.sent,P(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return console.log(I),Object(h.jsx)("div",{className:"flexd",children:Object(h.jsxs)("div",{className:"flex justify-between",children:[Object(h.jsxs)("div",{className:"flex flex-col ",children:[Object(h.jsx)(f,{pokemon:n,Details:E,open:function(){B(!0)}}),Object(h.jsxs)("div",{className:"bg-blue-300 border-4 py-1",children:[i?Object(h.jsx)("button",{onClick:function(){C(i)},className:"bg-blue-300 p-3 m-1 border-4 rounded-xl text-black",children:"Next"}):null,w?Object(h.jsx)("button",{onClick:function(){C(w)},className:"bg-blue-300 p-3 m-1 border-4 rounded-xl text-black",children:"Previous"}):null]})]}),Object(h.jsx)("img",{className:"img stick",src:v,alt:"hero"}),Object(h.jsx)(p,{Details:I,close:function(){B(!1)},isopen:M}),Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("h3",{className:"pcs",children:"Pokemon !!"}),Object(h.jsx)("br",{}),Object(h.jsx)("h3",{className:"pcsc",children:"\u201cEven If we don\u2019t understand each other, that\u2019s not a reason to reject each other. There are two sides to any argument. Is there one point of view that has all the answers? Give it some thought.\u201d \u2013 Alder"}),Object(h.jsx)("br",{}),Object(h.jsx)("h3",{className:"pcsc",children:"\u201cMake your wonderful dream a reality, it will become your truth. If anyone can, it\u2019s you.\u201d \u2013 N, Pokemon Black/White"}),Object(h.jsx)("br",{}),Object(h.jsx)("h3",{className:"pcsc",children:"\u201cTake charge of your destiny.\u201d \u2013 Rayquaza"}),Object(h.jsx)("br",{}),Object(h.jsx)("h3",{className:"pcsc",children:"\u201cThe important thing is not how long you live. It\u2019s what you accomplish with your life.\u201d \u2013 Grovyle"})]}),Object(h.jsx)("div",{className:"containerz",children:Object(h.jsx)("h3",{className:"pcse",children:"Click on left side names and Next & Previous buttons !!"})})]})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),r(e),a(e)}))};l.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(O,{})}),document.getElementById("root")),w()}},[[45,1,2]]]);
//# sourceMappingURL=main.6c939094.chunk.js.map