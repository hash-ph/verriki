import{r as i,h as r}from"./p-0815b0a8.js";import{C as s}from"./p-c75f912f.js";let t=class{constructor(r){i(this,r),this.debug=""}render(){return r("div",{class:"riki-entity"},{[s.NOTES]:r("riki-notes",{e:this.e}),[s.PIN]:r("riki-pin",{e:this.e})}[this.e.kind])}};t.style="";let e=class{constructor(r){i(this,r)}render(){return r("div",{class:"riki-notes"},r("code",null,"Debssusg: ",this.e.id))}};e.style=".riki-notes{min-width:100px;min-height:60px;background-color:#ffffff;outline:1px solid #a6a6a6}";let n=class{constructor(r){i(this,r)}render(){return r("div",{class:"riki-pin"})}};n.style=".riki-pin{width:20px;height:20px;background-color:#fe3a3a;outline:1px solid #3e3e3e;border-radius:100%;z-index:100}";export{t as riki_entity,e as riki_notes,n as riki_pin}