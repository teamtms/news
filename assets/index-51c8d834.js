import{r,_ as l,j as e}from"./index-565c6b92.js";const c=r.lazy(()=>l(()=>import("./index-793d49fb.js"),["assets/index-793d49fb.js","assets/index-565c6b92.js","assets/index-0ff38741.css","assets/index-ce6fa04b.css"])),o={};location.search.split("?")[1]&&location.search.split("?")[1].split("&").forEach(t=>{o[t.split("=")[0]]=t.split("=")[1]});const a=()=>e.jsxs("div",{className:"container",children:[e.jsx(c,{children:"Редактор компонентов"}),e.jsx("div",{className:"components",children:e.jsx("table",{children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"#"}),e.jsx("td",{children:"ключ"}),e.jsx("td",{children:"значение"})]}),Object.keys(localStorage).map((t,s)=>e.jsxs("tr",{children:[e.jsx("td",{children:s}),e.jsx("td",{children:t}),e.jsx("td",{children:localStorage.getItem(t)})]}))]})})}),e.jsx("form",{onSubmit:t=>{t.preventDefault(),localStorage.setItem(document.querySelector("#component-name").value,document.querySelector("#component-value").value)}})]});export{a as default};