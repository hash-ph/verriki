import{c as t,f as e,r as i,h as s}from"./p-c255254f.js";import{C as n}from"./p-c75f912f.js";const a=t=>!("isConnected"in t)||t.isConnected,d=(()=>{let t;return(...e)=>{t&&clearTimeout(t),t=setTimeout((()=>{t=0,(t=>{for(let e of t.keys())t.set(e,t.get(e).filter(a))})(...e)}),2e3)}})(),{state:o}=(()=>{const i=((t,e=((t,e)=>t!==e))=>{let i=new Map(Object.entries(null!=t?t:{}));const s={dispose:[],get:[],set:[],reset:[]},n=()=>{i=new Map(Object.entries(null!=t?t:{})),s.reset.forEach((t=>t()))},a=t=>(s.get.forEach((e=>e(t))),i.get(t)),d=(t,n)=>{const a=i.get(t);e(n,a,t)&&(i.set(t,n),s.set.forEach((e=>e(t,n,a))))},o="undefined"==typeof Proxy?{}:new Proxy(t,{get:(t,e)=>a(e),ownKeys:()=>Array.from(i.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(t,e)=>i.has(e),set:(t,e,i)=>(d(e,i),!0)}),c=(t,e)=>(s[t].push(e),()=>{((t,e)=>{const i=t.indexOf(e);i>=0&&(t[i]=t[t.length-1],t.length--)})(s[t],e)});return{state:o,get:a,set:d,on:c,onChange:(e,i)=>{const s=c("set",((t,s)=>{t===e&&i(s)})),n=c("reset",(()=>i(t[e])));return()=>{s(),n()}},use:(...t)=>{const e=t.reduce(((t,e)=>(e.set&&t.push(c("set",e.set)),e.get&&t.push(c("get",e.get)),e.reset&&t.push(c("reset",e.reset)),e.dispose&&t.push(c("dispose",e.dispose)),t)),[]);return()=>e.forEach((t=>t()))},dispose:()=>{s.dispose.forEach((t=>t())),n()},reset:n,forceUpdate:t=>{const e=i.get(t);s.set.forEach((i=>i(t,e,e)))}}})({elements:[]},void 0);return i.use((()=>{if("function"!=typeof t)return{};const i=new Map;return{dispose:()=>i.clear(),get:e=>{const s=t();s&&((t,e,i)=>{const s=t.get(e);s?s.includes(i)||s.push(i):t.set(e,[i])})(i,e,s)},set:t=>{const s=i.get(t);s&&i.set(t,s.filter(e)),d(i)},reset:()=>{i.forEach((t=>t.forEach(e))),d(i)}}})()),i})();function c(t){const e=["RIKI-ENTITY"];return t.composedPath().filter((t=>e.includes(t.tagName)))}let h=class{constructor(t){i(this,t),this.width=640,this.height=480,this.pinnables=[{id:"abcdef1",x:20,y:30,kind:n.NOTES},{id:"abcdef2",x:22,y:32,kind:n.NOTES},{id:"abcdef3",x:24,y:34,kind:n.NOTES},{id:"abcdef4",x:26,y:36,kind:n.NOTES},{id:"abcdef5",x:28,y:38,kind:n.NOTES},{id:"abcdef6",x:30,y:40,kind:n.NOTES},{id:"abcdef7",x:32,y:42,kind:n.NOTES}],this.pins=[{id:"abcdef8",x:34,y:44,kind:n.PIN},{id:"abcdef9",x:36,y:46,kind:n.PIN},{id:"abcdef10",x:36,y:46,kind:n.PIN},{id:"abcdef11",x:36,y:46,kind:n.PIN},{id:"abcdef12",x:36,y:46,kind:n.PIN},{id:"abcdef13",x:36,y:46,kind:n.PIN}],this.edges=[{a:"abcdef8",ax:0,ay:0,z:"abcdef9",zx:0,zy:0},{a:"abcdef8",ax:0,ay:0,z:"abcdef10",zx:0,zy:0},{a:"abcdef8",ax:0,ay:0,z:"abcdef11",zx:0,zy:0},{a:"abcdef11",ax:0,ay:0,z:"abcdef12",zx:0,zy:0},{a:"abcdef12",ax:0,ay:0,z:"abcdef13",zx:0,zy:0},{a:"abcdef9",ax:0,ay:0,z:"abcdef13",zx:0,zy:0}],this.canvasOffset={x:0,y:0},this.focusedEntitiesIds=new Set,this.isDragging=!1,this.isDraggingPin=!1,this.isDraggingCanvas=!1,this.mouseStartOffset={x:0,y:0}}handleMousedown(t){this.mouseStartOffset={x:t.clientX,y:t.clientY};const e=c(t)[0];if(e&&(this.isDragging=!0,t.preventDefault(),this.focusedEntitiesIds.clear(),"RIKI-CANVAS"===e.tagName&&(this.isDraggingCanvas=!0),"RIKI-ENTITY"===e.tagName)){const t=this.pinnables.map((t=>t.id)).find((t=>t===e.id));t&&this.focusedEntitiesIds.add(t);const i=this.pins.map((t=>t.id)).find((t=>t===e.id));i&&(this.isDraggingPin=!0,this.focusedEntitiesIds.add(i))}}handleMousemove(t){if(o.elements=c(t).map((t=>t.tagName)),!this.isDragging)return;const e=t.clientX-this.mouseStartOffset.x,i=t.clientY-this.mouseStartOffset.y;this.isDraggingCanvas?this.canvasOffset={x:this.canvasOffset.x+e,y:this.canvasOffset.y+i}:this.isDraggingPin?this.pins=this.pins.map((t=>(this.focusedEntitiesIds.has(t.id)&&(t.x+=e,t.y+=i),t))):(this.pinnables=this.pinnables.map((t=>(this.focusedEntitiesIds.has(t.id)&&(t.x+=e,t.y+=i),t))),this.pins=this.pins.map((t=>(this.focusedEntitiesIds.has(t.pinnedTo)&&(t.x+=e,t.y+=i),t)))),this.mouseStartOffset={x:t.clientX,y:t.clientY},this.refreshEdges()}handleMouseup(t){if(this.isDragging){if(this.isDraggingPin){const e=c(t)[0];this.pins=this.pins.map((t=>this.focusedEntitiesIds.has(t.id)?Object.assign(Object.assign({},t),{pinnedTo:null==e?void 0:e.id}):t))}this.focusedEntitiesIds.clear(),this.isDragging=!1,this.isDraggingPin=!1,this.isDraggingCanvas=!1}}refreshEdges(){const t=this.pins.reduce(((t,e)=>Object.assign(Object.assign({},t),{[e.id]:e})),{});this.edges=this.edges.map((e=>Object.assign(Object.assign({},e),{ax:t[e.a].x,ay:t[e.a].y,zx:t[e.z].x,zy:t[e.z].y})))}render(){return s("div",{class:"riki-canvas",style:{position:"absolute",left:`${this.canvasOffset.x}px`,top:`${this.canvasOffset.y}px`}},s("div",{style:{position:"absolute"}},o.elements),this.pinnables.map((t=>s("riki-entity",{style:{position:"absolute",left:`${t.x}px`,top:`${t.y}px`,"z-index":"10"},id:t.id,e:t}))),s("svg",{style:{position:"absolute",width:"100%",height:"100%","z-index":"90","pointer-events":"none"}},this.edges.map((t=>s("line",{x1:t.ax,y1:t.ay,x2:t.zx,y2:t.zy,stroke:"black"})))),this.pins.map((t=>s("riki-entity",{style:{position:"absolute",left:`${t.x}px`,top:`${t.y}px`,"z-index":"100","pointer-events":this.isDraggingPin?"none":"fill"},id:t.id,e:t}))))}};h.style=".riki-canvas{width:800px;height:600px;background-size:10px 10px;background-image:radial-gradient(circle, #a6a6a6 1px, #fefefe 1px)}";export{h as riki_canvas}