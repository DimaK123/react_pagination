(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{11:function(e,a,t){},13:function(e,a,t){"use strict";t.r(a);var c=t(5),n=t.n(c),r=t(4),l=t(6),i=t(1);t(11);function s(e,a){for(var t=[],c=e;c<=a;c+=1)t.push(c);return t}var o=t(2),d=t.n(o),j=t(0),u=function(e){var a,t,c=e.total,n=e.perPage,r=e.currentPage,l=e.arrOfItems,i=e.onPageChange,o=(a=c,t=n,s(1,Math.ceil(a/t)));return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("ul",{className:"pagination",children:[Object(j.jsx)("li",{className:d()("page-item",{disabled:1===r}),children:Object(j.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":1===r,"data-name":"currentPage","data-value":+r-1,onClick:i,children:"\xab"})}),o.map((function(e){return Object(j.jsx)("li",{className:d()("page-item",{active:+r===e}),children:Object(j.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),"data-name":"currentPage","data-value":e,onClick:i,children:e})},e)})),Object(j.jsx)("li",{className:d()("page-item",{disabled:r===o.length}),children:Object(j.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":r===o.length,"data-name":"currentPage","data-value":+r+1,onClick:i,children:"\xbb"})})]}),Object(j.jsx)("ul",{children:l.map((function(e){return Object(j.jsx)("li",{"data-cy":"item",children:"Item ".concat(e)},e)}))})]})},g=function(){var e=Object(i.useState)({perPage:5,currentPage:1}),a=Object(l.a)(e,2),t=a[0],c=a[1],n=t.perPage,o=t.currentPage,d=function(e,a,t){var c=a*t;return c>e&&(c=e),s(1===t?1:a*t-a+1,c)}(42,n,o),g=d[0],h=d[d.length-1];return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{children:"Items with Pagination"}),Object(j.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(o," (items ").concat(g," - ").concat(h," of 42)")}),Object(j.jsxs)("div",{className:"form-group row",children:[Object(j.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(j.jsxs)("select",{name:"perPage",value:"".concat(n),"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",onChange:function(e){var a=e.target.value;c({perPage:+a,currentPage:1})},children:[Object(j.jsx)("option",{value:"3",children:"3"}),Object(j.jsx)("option",{value:"5",children:"5"}),Object(j.jsx)("option",{value:"10",children:"10"}),Object(j.jsx)("option",{value:"20",children:"20"})]})}),Object(j.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(j.jsx)(u,{total:42,perPage:n,currentPage:o,arrOfItems:d,onPageChange:function(e){var a=e.currentTarget.dataset;c(Object(r.a)(Object(r.a)({},t),{},{currentPage:Number(a.value)}))}})]})};n.a.render(Object(j.jsx)(g,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.7aa54bc4.chunk.js.map