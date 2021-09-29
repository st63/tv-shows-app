(this["webpackJsonptvshow-app"]=this["webpackJsonptvshow-app"]||[]).push([[0],{91:function(e,t,n){"use strict";n.r(t);var c,r,a,i,s,o,j,u,b,d,l=n(0),p=n.n(l),x=n(54),O=n.n(x),h=n(6),g=n(12),v=Object(g.a)(c||(c=Object(h.a)(["\n  *, html, body {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n"]))),f=g.b.div(r||(r=Object(h.a)(["\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 15px;\n"]))),m=g.b.thead(a||(a=Object(h.a)(["\n  font-size: 20px;\n  height: 70px;\n"]))),w=n(2),P=function(){return Object(w.jsx)(m,{children:Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{children:"\u041e\u0431\u043b\u043e\u0436\u043a\u0430"}),Object(w.jsx)("td",{children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),Object(w.jsx)("td",{children:"\u0416\u0430\u043d\u0440"}),Object(w.jsx)("td",{children:"\u0421\u0442\u0440\u0430\u043d\u0430"}),Object(w.jsx)("td",{children:"\u0414\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c"}),Object(w.jsx)("td",{children:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433"})]})})},C=n(57),k=g.b.img(i||(i=Object(h.a)(["\n  width: 50px;\n"]))),y=g.b.tr(s||(s=Object(h.a)(["\n  background-color: ",";\n"])),(function(e){return e.isEven&&"#CBE1DD"})),S=function(e){var t=e.id,n=e.cover,c=e.name,r=e.rating,a=e.duration,i=e.genres,s=e.country;return Object(w.jsxs)(y,{isEven:!(t%2),children:[Object(w.jsx)("td",{children:Object(w.jsx)(k,{alt:"Cover",src:n})}),Object(w.jsx)("td",{children:c}),Object(w.jsx)("td",{children:i.length?i.map((function(e){return e})):"---"}),Object(w.jsx)("td",{children:s||"---"}),Object(w.jsx)("td",{children:"".concat(a," \u043c\u0438\u043d\u0443\u0442")}),Object(w.jsx)("td",{children:r||"---"})]})},z=function(e){var t=e.tvShow;return Object(w.jsx)("tbody",{children:t.map((function(e){return Object(w.jsx)(S,Object(C.a)({},e),e.id)}))})},E=n(108),F=n(107),N=g.b.div(o||(o=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),T=Object(g.b)(E.a)(j||(j=Object(h.a)([""]))),B=Object(g.b)(E.a)(u||(u=Object(h.a)(["\n  margin-bottom: 20px;\n"]))),D=function(e){var t=e.pageCount,n=e.pageNumbers,c=e.paginate,r=e.prevPage,a=e.nextPage,i=e.currentPage;return Object(w.jsxs)(N,{children:[Object(w.jsx)(B,{container:!0,spacing:2,children:n.map((function(e){return Object(w.jsx)(E.a,{item:!0,children:Object(w.jsx)(F.a,{size:"small",onClick:c,variant:i===e?"contained":"outlined",value:e,children:e})},e)}))}),Object(w.jsxs)(T,{container:!0,spacing:2,children:[Object(w.jsx)(E.a,{item:!0,children:Object(w.jsx)(F.a,{disabled:1===i,size:"small",onClick:r,variant:"contained",children:"PrevPage"})}),Object(w.jsx)(E.a,{item:!0,children:Object(w.jsx)(F.a,{disabled:i===t,size:"small",onClick:a,variant:"contained",children:"NextPage"})})]})]})},L=g.b.div(b||(b=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"]))),I=g.b.table(d||(d=Object(h.a)(["\n  border-collapse: collapse;\n  margin-bottom: 30px;\n"]))),J=n(26),M=n.n(J),U=n(35),A=n(15),R=n(61),q=n.n(R).a.create({baseURL:"https://api.tvmaze.com",headers:{"Content-type":"application/json; charset=UTF-8"}}),G=function(e){var t,n=e.id,c=e.image,r=e.genres,a=e.name,i=e.rating,s=e.weight,o=e.network;return{id:n,cover:c.medium,genres:r,name:a,rating:i.average,duration:s,country:null===o||void 0===o||null===(t=o.country)||void 0===t?void 0:t.name}},H=function(){var e=Object(U.a)(M.a.mark((function e(){var t,n;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.get("shows?page=1");case 2:return t=e.sent,n=t.data,e.abrupt("return",n.map(G));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),K=function(){var e=function(){var e=Object(l.useState)([]),t=Object(A.a)(e,2),n=t[0],c=t[1],r=Object(l.useState)(1),a=Object(A.a)(r,2),i=a[0],s=a[1],o=50*i,j=o-50,u=n.slice(j,o),b=Math.ceil(n.length/50),d=Object(l.useCallback)((function(e){return s(+e.currentTarget.value)}),[i]),p=Object(l.useCallback)((function(){return s((function(e){return e+1}))}),[i]),x=Object(l.useCallback)((function(){return s((function(e){return e-1}))}),[i]);return Object(l.useEffect)((function(){Object(U.a)(M.a.mark((function e(){var t;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H();case 3:t=e.sent,c(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}),[]),{tvShow:u,pageNumbers:Array.from({length:b},(function(e,t){return t+1})),paginate:d,nextPage:p,prevPage:x,currentPage:i,pageCount:b}}(),t=e.tvShow,n=e.pageNumbers,c=e.paginate,r=e.prevPage,a=e.nextPage,i=e.currentPage,s=e.pageCount;return Object(w.jsxs)(L,{children:[Object(w.jsxs)(I,{children:[Object(w.jsx)(P,{}),Object(w.jsx)(z,{tvShow:t})]}),Object(w.jsx)(D,{pageCount:s,pageNumbers:n,paginate:c,prevPage:r,nextPage:a,currentPage:i})]})};var Q=function(){return Object(w.jsx)(f,{children:Object(w.jsx)(K,{})})},V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,110)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};O.a.render(Object(w.jsxs)(p.a.StrictMode,{children:[Object(w.jsx)(v,{}),Object(w.jsx)(Q,{})]}),document.getElementById("root")),V()}},[[91,1,2]]]);
//# sourceMappingURL=main.fce8f6b2.chunk.js.map