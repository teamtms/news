import{r as n,_ as s,j as e,w as a}from"./index-565c6b92.js";import{u as i}from"./useQuery-ab070b3a.js";const c="_container_1xxn8_1",l={container:c},d=n.lazy(()=>s(()=>import("./index-5fe2e46c.js"),["assets/index-5fe2e46c.js","assets/index-565c6b92.js","assets/index-0ff38741.css","assets/index-22a0491d.css"])),x=()=>{const{data:r,error:t}=i({queryKey:["webhook-files"],queryFn:()=>a.getWebhookFiles()});return r?e.jsx("div",{className:`${l.container} container`,children:r.data.map(o=>e.jsx(d,{title:o.title.rendered,content:o.content.rendered}))}):(console.log(t),e.jsx(e.Fragment,{children:"error"}))};export{x as default};