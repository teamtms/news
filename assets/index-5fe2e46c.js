import{b as c,r as l,_ as i,j as e,C as a,B as r}from"./index-565c6b92.js";const d="_title_khe1w_1",m="_content_khe1w_17",o={title:d,content:m},_=(t,s,n)=>{c.post(`https://discord.com/api/webhooks/${t}/${s}`,{username:n.username,content:n.content})},h={sendSystemMessage:(t,s)=>{_("1175873934575554570","ORJFlqPZmGoIMcAf4rGg7kJvlTJumqk4bo1kTd3l06hEFPqtZ6NiBPyNlrpcnup9gRl1",{username:t,content:s})}},u=l.lazy(()=>i(()=>import("./index-5c34e46f.js"),["assets/index-5c34e46f.js","assets/index-565c6b92.js","assets/index-0ff38741.css","assets/index-93a31db8.css"])),j=t=>{const s=t.content.replace(/[<p>,</p>]/g,"");return e.jsx(a,{children:e.jsxs("details",{children:[e.jsx("summary",{className:o.title,children:e.jsx(u,{children:t.title})}),e.jsx("div",{className:o.content,dangerouslySetInnerHTML:{__html:t.content}}),e.jsx(r,{onClick:()=>{h.sendSystemMessage(t.title,s)},children:"Вывести"})]})})};export{j as default};