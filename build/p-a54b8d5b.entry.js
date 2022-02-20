import{c as t,f as e,r as s,h as i}from"./p-0815b0a8.js";import{C as n}from"./p-c75f912f.js";const o=t=>!("isConnected"in t)||t.isConnected,r=(()=>{let t;return(...e)=>{t&&clearTimeout(t),t=setTimeout((()=>{t=0,(t=>{for(let e of t.keys())t.set(e,t.get(e).filter(o))})(...e)}),2e3)}})(),{state:a}=(()=>{const s=((t,e=((t,e)=>t!==e))=>{let s=new Map(Object.entries(null!=t?t:{}));const i={dispose:[],get:[],set:[],reset:[]},n=()=>{s=new Map(Object.entries(null!=t?t:{})),i.reset.forEach((t=>t()))},o=t=>(i.get.forEach((e=>e(t))),s.get(t)),r=(t,n)=>{const o=s.get(t);e(n,o,t)&&(s.set(t,n),i.set.forEach((e=>e(t,n,o))))},a="undefined"==typeof Proxy?{}:new Proxy(t,{get:(t,e)=>o(e),ownKeys:()=>Array.from(s.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(t,e)=>s.has(e),set:(t,e,s)=>(r(e,s),!0)}),d=(t,e)=>(i[t].push(e),()=>{((t,e)=>{const s=t.indexOf(e);s>=0&&(t[s]=t[t.length-1],t.length--)})(i[t],e)});return{state:a,get:o,set:r,on:d,onChange:(e,s)=>{const i=d("set",((t,i)=>{t===e&&s(i)})),n=d("reset",(()=>s(t[e])));return()=>{i(),n()}},use:(...t)=>{const e=t.reduce(((t,e)=>(e.set&&t.push(d("set",e.set)),e.get&&t.push(d("get",e.get)),e.reset&&t.push(d("reset",e.reset)),e.dispose&&t.push(d("dispose",e.dispose)),t)),[]);return()=>e.forEach((t=>t()))},dispose:()=>{i.dispose.forEach((t=>t())),n()},reset:n,forceUpdate:t=>{const e=s.get(t);i.set.forEach((s=>s(t,e,e)))}}})({elements:[]},void 0);return s.use((()=>{if("function"!=typeof t)return{};const s=new Map;return{dispose:()=>s.clear(),get:e=>{const i=t();i&&((t,e,s)=>{const i=t.get(e);i?i.includes(s)||i.push(s):t.set(e,[s])})(s,e,i)},set:t=>{const i=s.get(t);i&&s.set(t,i.filter(e)),r(s)},reset:()=>{s.forEach((t=>t.forEach(e))),r(s)}}})()),s})();function d(t){const e=["RIKI-CANVAS","RIKI-ENTITY"],s=t.composedPath().filter((t=>e.includes(t.tagName)));return console.log(t.composedPath()),s}let c=class{constructor(t){s(this,t),this.width=640,this.height=480,this.entities=[{id:"abcdef1",x:20,y:30,kind:n.NOTES},{id:"abcdef2",x:22,y:32,kind:n.NOTES},{id:"abcdef3",x:24,y:34,kind:n.NOTES},{id:"abcdef4",x:26,y:36,kind:n.NOTES},{id:"abcdef5",x:28,y:38,kind:n.NOTES},{id:"abcdef6",x:30,y:40,kind:n.NOTES},{id:"abcdef7",x:32,y:42,kind:n.NOTES},{id:"abcdef8",x:34,y:44,kind:n.PIN},{id:"abcdef9",x:36,y:46,kind:n.PIN}],this.edges=[{a:"abcdef8",z:"abcdef9"}],this.canvasOffset={x:0,y:0},this.focusedEntitiesIds=new Set,this.isDragging=!1,this.isDraggingCanvas=!1,this.mouseStartOffset={x:0,y:0}}handleMousedown(t){this.mouseStartOffset={x:t.clientX,y:t.clientY};const e=d(t)[0];e&&(this.isDragging=!0,t.preventDefault(),this.focusedEntitiesIds.clear(),"RIKI-CANVAS"===e.tagName&&(this.isDraggingCanvas=!0),"RIKI-ENTITY"===e.tagName&&this.focusedEntitiesIds.add(this.entities.map((t=>t.id)).find((t=>t===e.id))))}handleMousemove(t){if(a.elements=d(t).map((t=>t.tagName)),!this.isDragging)return;const e=t.clientX-this.mouseStartOffset.x,s=t.clientY-this.mouseStartOffset.y;this.isDraggingCanvas?this.canvasOffset={x:this.canvasOffset.x+e,y:this.canvasOffset.y+s}:this.entities=this.entities.map((t=>(this.focusedEntitiesIds.has(t.id)&&(t.x+=e,t.y+=s),t))),this.mouseStartOffset={x:t.clientX,y:t.clientY}}handleMouseup(t){this.isDragging&&(this.focusedEntitiesIds.clear(),this.isDragging=!1,this.isDraggingCanvas=!1)}render(){return i("div",{class:"riki-canvas",style:{position:"absolute",left:`${this.canvasOffset.x}px`,top:`${this.canvasOffset.y}px`}},i("div",{style:{position:"absolute"}},a.elements),this.entities.map((t=>i("riki-entity",{style:{position:"absolute",left:`${t.x}px`,top:`${t.y}px`},id:t.id,e:t}))),i("canvas",null))}};c.style=".riki-canvas{width:800px;height:600px;background-size:10px 10px;background-image:radial-gradient(circle, #a6a6a6 1px, #fefefe 1px)}";export{c as riki_canvas}