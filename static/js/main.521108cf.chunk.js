(this["webpackJsonptest-ci-cd"]=this["webpackJsonptest-ci-cd"]||[]).push([[0],{13:function(t,e,c){},15:function(t,e,c){"use strict";c.r(e);var n=c(1),s=c(7),a=c.n(s),o=(c(13),c(6)),r=c(8),i=c(5),u=c(0);var j=function(t){var e=t.todos,c=t.removeTodo;return Object(u.jsx)(u.Fragment,{children:e.map((function(t,e){return Object(u.jsx)("li",{onClick:function(){c(t)},children:t.task},e)}))})};var l=function(){var t=Object(n.useState)({task:"",completed:!1}),e=Object(i.a)(t,2),c=e[0],s=e[1],a=Object(n.useState)([]),l=Object(i.a)(a,2),d=l[0],b=l[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h2",{className:"todo_list",children:"Todo List"}),Object(u.jsxs)("form",{children:[Object(u.jsx)("input",{className:"input_field",type:"text",value:c.task,onChange:function(t){return s(Object(o.a)(Object(o.a)({},c),{},{task:t.target.value}))}}),Object(u.jsx)("input",{className:"add_btn",type:"submit",value:"ADD",onClick:function(t){t.preventDefault(),""!==c.task&&(b([].concat(Object(r.a)(d),[c])),s({task:"",completed:!1}))}}),Object(u.jsx)("ul",{children:Object(u.jsx)(j,{todos:d,removeTodo:function(t){var e=d.filter((function(e){return e.task!==t.task}));b(e)}})})]})]})};a.a.render(Object(u.jsx)(l,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.521108cf.chunk.js.map