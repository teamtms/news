import{r as o,S as p,P as _,j as e,B as i,f as c,C as u,w as j}from"./index-b4839567.js";import{I as t}from"./index-c1ad9253.js";import{u as g}from"./useQuery-b2d8eefc.js";const N="_header_1h3fi_1",k="_container_1h3fi_5",v="_logo_1h3fi_18",C="_icon_1h3fi_29",B="_menu_1h3fi_34",I="_menuItem_1h3fi_50",S="_ip_1h3fi_54",L="_profileBlock_1h3fi_70",b="_profileCard_1h3fi_76",E="_avatar_1h3fi_84",s={header:N,container:k,logo:v,icon:C,menu:B,menuItem:I,ip:S,profileBlock:L,profileCard:b,avatar:E},y=()=>{const a=o.useContext(p),{isLoading:l,isError:d,isSuccess:m,data:h,error:f}=g(["pages"],()=>j.getPages()),r=o.useContext(_);return d?(console.log(f),e.jsx(e.Fragment,{children:"Ошибка. См. подробности в консоли"})):l?e.jsx(e.Fragment,{children:"Подождите..."}):m?e.jsx("header",{className:s.header,children:e.jsxs("div",{className:`container ${s.container}`,children:[e.jsx("div",{className:s.logo,children:e.jsxs("a",{href:"#",className:s.link,children:[e.jsx("img",{src:a.icon,alt:"",className:s.icon}),e.jsxs("div",{className:s.text,children:[e.jsx("h2",{className:s.bigLabel,children:a.title}),e.jsx("span",{className:s.description,children:a.description})]})]})}),e.jsx("ul",{className:s.menu,children:h.data.map((n,x)=>e.jsx("li",{className:s.menuItem,children:e.jsx(i,{appearance:"link",as:"a",href:`#/p/${n.id}`,className:s.menuLink,children:n.title.rendered})},x))}),c.isLoggedIn()?e.jsx("a",{href:"#/profile",children:e.jsxs(u,{className:s.profileCard,children:[e.jsxs("div",{className:s.profileBlock,children:[e.jsx("img",{className:s.avatar,src:r.avatar,alt:""})," ",r.username]}),e.jsxs("div",{className:s.profileBlock,children:[e.jsx(t,{icon:"monetization_on"})," ",r.balance]}),e.jsxs("div",{className:s.profileBlock,children:[e.jsx(t,{icon:"logout"}),e.jsx(i,{appearance:"link",onClick:()=>c.logOut(),children:"Выйти"})]})]})}):e.jsx(i,{as:"a",href:"/#/login",children:"Войти"})]})}):e.jsx(e.Fragment,{children:"Неизвестная ошибка"})};export{y as default};
