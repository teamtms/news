import{r as a,S as f,j as e,W as j}from"./index-5dc5a09b.js";import{g as o}from"./getRandomInt-13b272fe.js";import{B as i}from"./index.module-632e5402.js";import{C as N}from"./index-3189acef.js";import{I as C}from"./index-b899cc3f.js";import{u as I,f as t}from"./index-9a5e4403.js";import{u as S}from"./useQuery-f9b36f33.js";const L="_header_108ne_1",k="_container_108ne_5",v="_logo_108ne_18",$="_icon_108ne_29",b="_menu_108ne_34",E="_menuItem_108ne_50",F="_ip_108ne_54",y="_profileCard_108ne_70",s={header:L,container:k,logo:v,icon:$,menu:b,menuItem:E,ip:F,profileCard:y},P=()=>{const[c,l]=a.useState(!1),{login:m,loginData:d}=I(),n=a.useContext(f),{isLoading:u,isError:p,isSuccess:g,data:_,error:h}=S(["pages"],()=>j.getPages());return p?(console.log(h),e.jsx(e.Fragment,{children:"Ошибка. См. подробности в консоли"})):u?e.jsx(e.Fragment,{children:"Подождите..."}):g?(c||(m("",""),l(!0)),e.jsx("header",{className:s.header,children:e.jsxs("div",{className:`container ${s.container}`,children:[e.jsx("div",{className:s.logo,children:e.jsxs("a",{href:`?${o(512)}`,className:s.link,children:[e.jsx("img",{src:n.icon,alt:"",className:s.icon}),e.jsxs("div",{className:s.text,children:[e.jsx("h2",{className:s.bigLabel,children:n.title}),e.jsx("span",{className:s.description,children:n.description})]})]})}),e.jsx("ul",{className:s.menu,children:_.data.map((r,x)=>e.jsx("li",{className:s.menuItem,children:e.jsx(i,{appearance:"link",href:`?${o(512)}/#/p/${r.id}`,className:s.menuLink,children:r.title.rendered})},x))}),t.isLoggedIn()?e.jsxs(N,{className:s.profileCard,onClick:()=>t.logOut(),children:[e.jsx(C,{icon:"monetization_on"})," ",d.balance," | Выход"]}):e.jsx(i,{as:"a",href:"/#/login",children:"Войти"})]})})):e.jsx(e.Fragment,{children:"Неизвестная ошибка"})};export{P as default};