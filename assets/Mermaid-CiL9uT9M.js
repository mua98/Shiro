const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./mermaid.core-D-7ZtuBl.js","./index-vtFYCCwT.js","./index-BUILuLAv.css","./owner-CGzhp8Ob.js","./StyledButton-D_mDAIdz.js","./proxy-C75VZz0P.js","./isEmpty-DVc1NNx0.js","./line-DXtxjsEH.js","./array-BKyUJesY.js","./path-CbwjOpE9.js"])))=>i.map(i=>d[i]);
import{r as t,_ as g,j as s}from"./index-vtFYCCwT.js";import{u as b}from"./use-is-dark-CnCmKQ4d.js";import{u as w,F as y}from"./Gallery-DV3M0Oa-.js";import{B as L}from"./alert-BOGq95R_.js";import"./StyledButton-D_mDAIdz.js";import"./proxy-C75VZz0P.js";import"./image-Cy70ji3u.js";import"./use-ref-value-Dhs9XOWF.js";import"./owner-CGzhp8Ob.js";import"./index-CJ6TwJFg.js";import"./viewport-DNjV6eYB.js";import"./use-is-unmounted-CjqzUkEi.js";import"./index-NNockhGF.js";import"./dom-BowoBODo.js";import"./Shiki-CNT6NmDX.js";import"./spring-C80N1tKa.js";import"./use-event-callback-D7g3hTY7.js";import"./index-B1kYst_u.js";import"./FloatPopover-BrRilUgl.js";import"./index-DckUB7F3.js";import"./visual-element-8NDSsh1w.js";import"./provider-ym3ko2yE.js";import"./use-drag-controls-7ZLk2nL8.js";import"./SocialSourceLink-Ba5si4bR.js";import"./LinkCard-Bh6MD4kF.js";import"./use-motion-template-0DtsSFZU.js";import"./Collapse-MO11l_kf.js";import"./useQuery-3Brhejs9.js";const it=m=>{const[h,d]=t.useState(!0),[E,n]=t.useState(""),[c,p]=t.useState(""),[x,u]=t.useState(),[v,l]=t.useState(),f=b();t.useEffect(()=>{g(()=>import("./mermaid.core-D-7ZtuBl.js").then(r=>r.af),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]),import.meta.url).then(async r=>{r.default.initialize({theme:f?"dark":"default"})})},[f]);const a=t.useId().split(":").join("");t.useEffect(()=>{if(!m.content)return;n(""),d(!0);let r=!1;g(()=>import("./mermaid.core-D-7ZtuBl.js").then(o=>o.af),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]),import.meta.url).then(async o=>{const I=o.default;let i;try{i=await I.render(`mermaid-${a}`,m.content)}catch(e){document.getElementById(`dmermaid-${a}`)?.remove(),e instanceof Error&&n(e.message),p(""),u(void 0),l(void 0)}if(!r){if(i){p(i.svg);const e=i.svg.match(/viewBox="[^"]*\s([\d.]+)\s([\d.]+)"/);e?.[1]&&e?.[2]&&(u(Number.parseInt(e?.[1])),l(Number.parseInt(e?.[2]))),n("")}return d(!1),()=>{r=!0}}})},[a,m.content]);const{w:_}=w(),S=new TextEncoder().encode(c),j=`data:image/svg+xml;base64,${btoa(String.fromCharCode(...new Uint8Array(S)))}`;return h?s.jsx(L,{children:"Mermaid Loading..."}):c?s.jsx("div",{children:s.jsx(y,{containerWidth:_,src:j,width:x,height:v})}):s.jsx("div",{className:"flex min-h-[50px] items-center justify-center rounded-lg bg-red-100 text-sm",children:E||"Error"})};export{it as Mermaid};