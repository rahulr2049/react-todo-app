(this["webpackJsonpreact-todo-app"]=this["webpackJsonpreact-todo-app"]||[]).push([[0],{21:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n.n(c),r=n(15),i=n.n(r),a=(n(21),n(11)),d=n(9),s=n(5),j=function(e){var t=e.todo,n=e.index,c=e.markTodo,o=e.removeTodo;return Object(s.jsxs)("div",{children:[Object(s.jsx)("span",{style:{textDecoration:t.isDone?"line-through":""},children:t.text}),Object(s.jsxs)("div",{children:[Object(s.jsx)("button",{variant:"outline-success",onClick:function(){return c(n)},children:"\u2713"})," ",Object(s.jsx)("button",{variant:"outline-danger",onClick:function(){return o(n)},children:"\u2715"})]})]})},u=n(29),b=n(31);function l(e){var t=e.addTodo,n=Object(c.useState)(""),o=Object(d.a)(n,2),r=o[0],i=o[1];return Object(s.jsxs)(u.a,{onSubmit:function(e){e.preventDefault(),r&&(t(r),i(""))},children:[Object(s.jsxs)(u.a.Group,{children:[Object(s.jsx)(u.a.Label,{children:Object(s.jsx)("b",{children:"Add Todo"})}),Object(s.jsx)(u.a.Control,{type:"text",value:r,onChange:function(e){return i(e.target.value)},placeholder:"Add new todo"})]}),Object(s.jsx)(b.a,{variant:"primary mb-3",type:"submit",children:"Submit"})]})}var O=n(30);n(26),n(27);var h=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],o=t[1],r=function(e){var t=Object(a.a)(n);t[e].isDone=!t[e].isDone,o(t)},i=function(e){var t=Object(a.a)(n);t.splice(e,1),o(t)};return Object(s.jsx)("div",{className:"app",children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("h1",{children:"Todo List"}),Object(s.jsx)(l,{addTodo:function(e){var t=[].concat(Object(a.a)(n),[{text:e,isDone:!1}]);o(t)}}),Object(s.jsx)(O.a,{children:n.map((function(e,t){return Object(s.jsx)(O.a.Body,{children:Object(s.jsx)(j,{index:t,todo:e,markTodo:r,removeTodo:i},t)})}))})]})})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),o(e),r(e),i(e)}))};i.a.render(Object(s.jsx)(o.a.StrictMode,{children:Object(s.jsx)(h,{})}),document.getElementById("root")),x()}},[[28,1,2]]]);
//# sourceMappingURL=main.5fcc4213.chunk.js.map