const Wt=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}};Wt();function ye(){}function Et(o){return o()}function Xe(){return Object.create(null)}function le(o){o.forEach(Et)}function Gt(o){return typeof o=="function"}function Jt(o,e){return o!=o?e==e:o!==e||o&&typeof o=="object"||typeof o=="function"}function Yt(o){return Object.keys(o).length===0}function K(o,e){o.appendChild(e)}function Qt(o,e,t){o.insertBefore(e,t||null)}function Pt(o){o.parentNode.removeChild(o)}function ee(o){return document.createElement(o)}function Xt(o){return document.createTextNode(o)}function Le(){return Xt(" ")}function $e(o,e,t,n){return o.addEventListener(e,t,n),()=>o.removeEventListener(e,t,n)}function F(o,e,t){t==null?o.removeAttribute(e):o.getAttribute(e)!==t&&o.setAttribute(e,t)}function Zt(o){return Array.from(o.childNodes)}function Ze(o,e){o.value=e==null?"":e}let ce;function re(o){ce=o}function eo(){if(!ce)throw new Error("Function called outside component initialization");return ce}function to(o){eo().$$.on_mount.push(o)}const ne=[],et=[],ge=[],tt=[],oo=Promise.resolve();let Me=!1;function no(){Me||(Me=!0,oo.then(St))}function Re(o){ge.push(o)}const ze=new Set;let ue=0;function St(){const o=ce;do{for(;ue<ne.length;){const e=ne[ue];ue++,re(e),io(e.$$)}for(re(null),ne.length=0,ue=0;et.length;)et.pop()();for(let e=0;e<ge.length;e+=1){const t=ge[e];ze.has(t)||(ze.add(t),t())}ge.length=0}while(ne.length);for(;tt.length;)tt.pop()();Me=!1,ze.clear(),re(o)}function io(o){if(o.fragment!==null){o.update(),le(o.before_update);const e=o.dirty;o.dirty=[-1],o.fragment&&o.fragment.p(o.ctx,e),o.after_update.forEach(Re)}}const so=new Set;function ro(o,e){o&&o.i&&(so.delete(o),o.i(e))}function ao(o,e,t,n){const{fragment:i,on_mount:s,on_destroy:r,after_update:a}=o.$$;i&&i.m(e,t),n||Re(()=>{const l=s.map(Et).filter(Gt);r?r.push(...l):le(l),o.$$.on_mount=[]}),a.forEach(Re)}function co(o,e){const t=o.$$;t.fragment!==null&&(le(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function lo(o,e){o.$$.dirty[0]===-1&&(ne.push(o),no(),o.$$.dirty.fill(0)),o.$$.dirty[e/31|0]|=1<<e%31}function ho(o,e,t,n,i,s,r,a=[-1]){const l=ce;re(o);const c=o.$$={fragment:null,ctx:null,props:s,update:ye,not_equal:i,bound:Xe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:Xe(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};r&&r(c.root);let h=!1;if(c.ctx=t?t(o,e.props||{},(d,u,...m)=>{const g=m.length?m[0]:u;return c.ctx&&i(c.ctx[d],c.ctx[d]=g)&&(!c.skip_bound&&c.bound[d]&&c.bound[d](g),h&&lo(o,d)),u}):[],c.update(),h=!0,le(c.before_update),c.fragment=n?n(c.ctx):!1,e.target){if(e.hydrate){const d=Zt(e.target);c.fragment&&c.fragment.l(d),d.forEach(Pt)}else c.fragment&&c.fragment.c();e.intro&&ro(o.$$.fragment),ao(o,e.target,e.anchor,e.customElement),St()}re(l)}class uo{$destroy(){co(this,1),this.$destroy=ye}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const i=n.indexOf(t);i!==-1&&n.splice(i,1)}}$set(e){this.$$set&&!Yt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function p(o,e,t,n){return new(t||(t=Promise))(function(i,s){function r(c){try{l(n.next(c))}catch(h){s(h)}}function a(c){try{l(n.throw(c))}catch(h){s(h)}}function l(c){var h;c.done?i(c.value):(h=c.value,h instanceof t?h:new t(function(d){d(h)})).then(r,a)}l((n=n.apply(o,e||[])).next())})}function C(o,e,t,n){if(t==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?o!==e||!n:!e.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?n:t==="a"?n.call(o):n?n.value:e.get(o)}function Ie(o,e,t,n,i){if(n==="m")throw new TypeError("Private method is not writable");if(n==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?o!==e||!i:!e.has(o))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n==="a"?i.call(o,t):i?i.value=t:e.set(o,t),t}async function Je(o,e={}){const{local:t=!1,version:n="latest",cdnUrl:i,...s}=e,r=function(u,m,g){let v=`https://cdn.jsdelivr.net/npm/emojibase-data@${m}/${u}`;return typeof g=="function"?v=g(u,m):typeof g=="string"&&(v=`${g}/${u}`),v}(o,n,i),a=t?localStorage:sessionStorage,l=`emojibase/${n}/${o}`,c=a.getItem(l);if(c)return Promise.resolve(JSON.parse(c));const h=await fetch(r,{credentials:"omit",mode:"cors",redirect:"error",...s});if(!h.ok)throw new Error("Failed to load Emojibase dataset.");const d=await h.json();try{a.setItem(l,JSON.stringify(d))}catch{}return d}const mo={discord:"joypixels",slack:"iamcal"};async function ot(o,e,t){var n;return Je(`${o}/shortcodes/${(n=mo[e])!==null&&n!==void 0?n:e}.json`,t)}function ie(o,e){if(e.length===0)return o;const t=new Set(o.shortcodes);return e.forEach(n=>{const i=n[o.hexcode];Array.isArray(i)?i.forEach(s=>t.add(s)):i&&t.add(i)}),o.shortcodes=[...t],o.skins&&o.skins.forEach(n=>{ie(n,e)}),o}async function nt(o,e={}){const{compact:t=!1,flat:n=!1,shortcodes:i=[],...s}=e,r=await Je(`${o}/${t?"compact":"data"}.json`,s);let a=[];return i.length>0&&(a=await Promise.all(i.map(l=>{let c;if(l.includes("/")){const[h,d]=l.split("/");c=ot(h,d,s)}else c=ot(o,l,s);return c.catch(()=>({}))}))),n?function(l,c=[]){const h=[];return l.forEach(d=>{if(d.skins){const{skins:u,...m}=d;h.push(ie(m,c)),u.forEach(g=>{const v={...g};m.tags&&(v.tags=[...m.tags]),h.push(ie(v,c))})}else h.push(ie(d,c))}),h}(r,a):function(l,c){return c.length===0||l.forEach(h=>{ie(h,c)}),l}(r,a)}async function it(o,e){return Je(`${o}/messages.json`,e)}function Te(o,e){const t=o.target.closest("[data-emoji]");if(t){const n=e.find(i=>i.emoji===t.dataset.emoji);if(n)return n}return null}function Lt(o){var e;const t=(e=window.matchMedia)===null||e===void 0?void 0:e.call(window,"(prefers-reduced-motion: reduce)");return o.animate&&!(t!=null&&t.matches)}function st(o,e){return o.toLowerCase().includes(e.toLowerCase())}function go(o,e){let t=null;return()=>{t||(t=window.setTimeout(()=>{o(),t=null},e))}}function po(o,e){let t=null;return(...n)=>{t&&window.clearTimeout(t),t=window.setTimeout(()=>{o(...n),t=null},e)}}function J(o,e,t,n){return Lt(n)&&o.animate?o.animate(e,t).finished:Promise.resolve()}function Oe(o){var e;const t=document.createElement("template");return t.innerHTML=o,(e=t.content)===null||e===void 0?void 0:e.firstElementChild}function fo(o){return p(this,void 0,void 0,function*(){const e=new TextEncoder().encode(o),t=yield crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(n=>n.toString(16).padStart(2,"0")).join("")})}function rt(o){return p(this,void 0,void 0,function*(){try{return(yield fetch(o,{method:"HEAD"})).headers.get("etag")}catch{return null}})}function $t(o,e,t){return p(this,void 0,void 0,function*(){const n=t||e(o);return yield n.open(),n})}function vo(o,e,t){return p(this,void 0,void 0,function*(){const n=yield $t(o,e,t),[i,s]=yield function(r){const{emojisUrl:a,messagesUrl:l}=function(c,h){const d=`https://cdn.jsdelivr.net/npm/emojibase-data@latest/${h}`;return{emojisUrl:`${d}/data.json`,messagesUrl:`${d}/messages.json`}}(0,r);try{return Promise.all([rt(a),rt(l)])}catch{return Promise.all([null,null])}}(o);if(yield n.isPopulated())i&&s&&(yield function(r,a,l){return p(this,void 0,void 0,function*(){let c;try{c=yield r.getEtags()}catch{c={}}const{storedEmojisEtag:h,storedMessagesEtag:d}=c;if(l!==d||a!==h){const[u,m]=yield Promise.all([it(r.locale),nt(r.locale)]);yield r.populate({groups:u.groups,emojis:m,emojisEtag:a,messagesEtag:l})}})}(n,i,s));else{const[r,a]=yield Promise.all([it(o),nt(o)]);yield n.populate({groups:r.groups,emojis:a,emojisEtag:i,messagesEtag:s})}return n})}function yo(o,e,t,n,i){return p(this,void 0,void 0,function*(){const s=yield $t(o,e,i),r=yield fo(n);return(yield s.isPopulated())&&!(yield function(a,l){return p(this,void 0,void 0,function*(){const c=yield a.getHash();return l!==c})}(s,r))||(yield s.populate({groups:t.groups,emojis:n,hash:r})),s})}function zt(o,e,t,n,i){return p(this,void 0,void 0,function*(){return t&&n?yo(o,e,t,n,i):vo(o,e,i)})}class Tt{constructor(){this.handleKeyDown=this.handleKeyDown.bind(this)}activate(e){this.rootElement=e,this.rootElement.addEventListener("keydown",this.handleKeyDown)}deactivate(){var e;(e=this.rootElement)===null||e===void 0||e.removeEventListener("keydown",this.handleKeyDown)}get focusableElements(){return this.rootElement.querySelectorAll('input, [tabindex="0"]')}get lastFocusableElement(){return this.focusableElements[this.focusableElements.length-1]}get firstFocusableElement(){return this.focusableElements[0]}checkFocus(e,t,n){e.target===t&&(n.focus(),e.preventDefault())}handleKeyDown(e){e.key==="Tab"&&this.checkFocus(e,e.shiftKey?this.firstFocusableElement:this.lastFocusableElement,e.shiftKey?this.lastFocusableElement:this.firstFocusableElement)}}class f{constructor({template:e,classes:t,parent:n}){this.isDestroyed=!1,this.appEvents={},this.uiEvents=[],this.uiElements={},this.ui={},this.template=e,this.classes=t,this.parent=n,this.keyBindingHandler=this.keyBindingHandler.bind(this)}initialize(){this.bindAppEvents()}setCustomEmojis(e){this.customEmojis=e}setEvents(e){this.events=e}setPickerId(e){this.pickerId=e}emit(e,...t){this.events.emit(e,...t)}setI18n(e){this.i18n=e}setRenderer(e){this.renderer=e}setEmojiData(e){this.emojiDataPromise=e,e.then(t=>{this.emojiData=t})}updateEmojiData(e){this.emojiData=e,this.emojiDataPromise=Promise.resolve(e)}setOptions(e){this.options=e}renderSync(e={}){return this.el=this.template.renderSync(Object.assign({classes:this.classes,i18n:this.i18n,pickerId:this.pickerId},e)),this.postRender(),this.el}render(e={}){return p(this,void 0,void 0,function*(){return yield this.emojiDataPromise,this.el=yield this.template.renderAsync(Object.assign({classes:this.classes,i18n:this.i18n,pickerId:this.pickerId},e)),this.postRender(),this.el})}postRender(){this.bindUIElements(),this.bindKeyBindings(),this.bindUIEvents(),this.scheduleShowAnimation()}bindAppEvents(){Object.keys(this.appEvents).forEach(e=>{this.events.on(e,this.appEvents[e],this)}),this.events.on("data:ready",this.updateEmojiData,this)}unbindAppEvents(){Object.keys(this.appEvents).forEach(e=>{this.events.off(e,this.appEvents[e])}),this.events.off("data:ready",this.updateEmojiData)}keyBindingHandler(e){const t=this.keyBindings[e.key];t&&t.call(this,e)}bindKeyBindings(){this.keyBindings&&this.el.addEventListener("keydown",this.keyBindingHandler)}unbindKeyBindings(){this.keyBindings&&this.el.removeEventListener("keydown",this.keyBindingHandler)}bindUIElements(){this.ui=Object.keys(this.uiElements).reduce((e,t)=>Object.assign(Object.assign({},e),{[t]:this.el.querySelector(this.uiElements[t])}),{})}bindUIEvents(){this.uiEvents.forEach(e=>{e.handler=e.handler.bind(this),(e.target?this.ui[e.target]:this.el).addEventListener(e.event,e.handler,e.options)})}unbindUIEvents(){this.uiEvents.forEach(e=>{(e.target?this.ui[e.target]:this.el).removeEventListener(e.event,e.handler)})}destroy(){this.unbindAppEvents(),this.unbindUIEvents(),this.unbindKeyBindings(),this.el.remove(),this.isDestroyed=!0}scheduleShowAnimation(){if(this.parent){const e=new MutationObserver(t=>{const[n]=t;n.type==="childList"&&n.addedNodes[0]===this.el&&(Lt(this.options)&&this.animateShow&&this.animateShow(),e.disconnect)});e.observe(this.parent,{childList:!0})}}static childEvent(e,t,n,i={}){return{target:e,event:t,handler:n,options:i}}static uiEvent(e,t,n={}){return{event:e,handler:t,options:n}}static byClass(e){return`.${e}`}}function P(o,e){e===void 0&&(e={});var t=e.insertAt;if(o&&typeof document<"u"){var n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",t==="top"&&n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i),i.styleSheet?i.styleSheet.cssText=o:i.appendChild(document.createTextNode(o))}}var at={icon:"icons_icon__YUQ3S","icon-small":"icons_icon-small__fEcU6","icon-medium":"icons_icon-medium__e5lKJ","icon-large":"icons_icon-large__t5mwg","icon-2x":"icons_icon-2x__on8is","icon-3x":"icons_icon-3x__RBDYg","icon-4x":"icons_icon-4x__UjvXP","icon-5x":"icons_icon-5x__zRG9K","icon-8x":"icons_icon-8x__PsCPS","icon-10x":"icons_icon-10x__WLjku"};P(`.icons_icon__YUQ3S {
  width: 1.25em;
  height: 1em;
  fill: currentColor;
}

.icons_icon-small__fEcU6 {
  font-size: 0.8em;
}

.icons_icon-medium__e5lKJ {
  font-size: 1em;
}

.icons_icon-large__t5mwg {
  font-size: 1.25em;
}

.icons_icon-2x__on8is {
  font-size: 2em;
}

.icons_icon-3x__RBDYg {
  font-size: 3em;
}

.icons_icon-4x__UjvXP {
  font-size: 4em;
}

.icons_icon-5x__zRG9K {
  font-size: 5em;
}

.icons_icon-8x__PsCPS {
  font-size: 8em;
}

.icons_icon-10x__WLjku {
  font-size: 10em;
}`);const ct={clock:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"/></svg>',flag:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M64 496C64 504.8 56.75 512 48 512h-32C7.25 512 0 504.8 0 496V32c0-17.75 14.25-32 32-32s32 14.25 32 32V496zM476.3 0c-6.365 0-13.01 1.35-19.34 4.233c-45.69 20.86-79.56 27.94-107.8 27.94c-59.96 0-94.81-31.86-163.9-31.87C160.9 .3055 131.6 4.867 96 15.75v350.5c32-9.984 59.87-14.1 84.85-14.1c73.63 0 124.9 31.78 198.6 31.78c31.91 0 68.02-5.971 111.1-23.09C504.1 355.9 512 344.4 512 332.1V30.73C512 11.1 495.3 0 476.3 0z"/></svg>',frown:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM176.4 240C194 240 208.4 225.7 208.4 208C208.4 190.3 194 176 176.4 176C158.7 176 144.4 190.3 144.4 208C144.4 225.7 158.7 240 176.4 240zM336.4 176C318.7 176 304.4 190.3 304.4 208C304.4 225.7 318.7 240 336.4 240C354 240 368.4 225.7 368.4 208C368.4 190.3 354 176 336.4 176zM259.9 369.4C288.8 369.4 316.2 375.2 340.6 385.5C352.9 390.7 366.7 381.3 361.4 369.1C344.8 330.9 305.6 303.1 259.9 303.1C214.3 303.1 175.1 330.8 158.4 369.1C153.1 381.3 166.1 390.6 179.3 385.4C203.7 375.1 231 369.4 259.9 369.4L259.9 369.4z"/></svg>',gamepad:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M448 64H192C85.96 64 0 149.1 0 256s85.96 192 192 192h256c106 0 192-85.96 192-192S554 64 448 64zM247.1 280h-32v32c0 13.2-10.78 24-23.98 24c-13.2 0-24.02-10.8-24.02-24v-32L136 279.1C122.8 279.1 111.1 269.2 111.1 256c0-13.2 10.85-24.01 24.05-24.01L167.1 232v-32c0-13.2 10.82-24 24.02-24c13.2 0 23.98 10.8 23.98 24v32h32c13.2 0 24.02 10.8 24.02 24C271.1 269.2 261.2 280 247.1 280zM431.1 344c-22.12 0-39.1-17.87-39.1-39.1s17.87-40 39.1-40s39.1 17.88 39.1 40S454.1 344 431.1 344zM495.1 248c-22.12 0-39.1-17.87-39.1-39.1s17.87-40 39.1-40c22.12 0 39.1 17.88 39.1 40S518.1 248 495.1 248z"/></svg>',lightbulb:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M112.1 454.3c0 6.297 1.816 12.44 5.284 17.69l17.14 25.69c5.25 7.875 17.17 14.28 26.64 14.28h61.67c9.438 0 21.36-6.401 26.61-14.28l17.08-25.68c2.938-4.438 5.348-12.37 5.348-17.7L272 415.1h-160L112.1 454.3zM191.4 .0132C89.44 .3257 16 82.97 16 175.1c0 44.38 16.44 84.84 43.56 115.8c16.53 18.84 42.34 58.23 52.22 91.45c.0313 .25 .0938 .5166 .125 .7823h160.2c.0313-.2656 .0938-.5166 .125-.7823c9.875-33.22 35.69-72.61 52.22-91.45C351.6 260.8 368 220.4 368 175.1C368 78.61 288.9-.2837 191.4 .0132zM192 96.01c-44.13 0-80 35.89-80 79.1C112 184.8 104.8 192 96 192S80 184.8 80 176c0-61.76 50.25-111.1 112-111.1c8.844 0 16 7.159 16 16S200.8 96.01 192 96.01z"/></svg>',mug:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M512 32H120c-13.25 0-24 10.75-24 24L96.01 288c0 53 43 96 96 96h192C437 384 480 341 480 288h32c70.63 0 128-57.38 128-128S582.6 32 512 32zM512 224h-32V96h32c35.25 0 64 28.75 64 64S547.3 224 512 224zM560 416h-544C7.164 416 0 423.2 0 432C0 458.5 21.49 480 48 480h480c26.51 0 48-21.49 48-48C576 423.2 568.8 416 560 416z"/></svg>',plane:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M482.3 192C516.5 192 576 221 576 256C576 292 516.5 320 482.3 320H365.7L265.2 495.9C259.5 505.8 248.9 512 237.4 512H181.2C170.6 512 162.9 501.8 165.8 491.6L214.9 320H112L68.8 377.6C65.78 381.6 61.04 384 56 384H14.03C6.284 384 0 377.7 0 369.1C0 368.7 .1818 367.4 .5398 366.1L32 256L.5398 145.9C.1818 144.6 0 143.3 0 142C0 134.3 6.284 128 14.03 128H56C61.04 128 65.78 130.4 68.8 134.4L112 192H214.9L165.8 20.4C162.9 10.17 170.6 0 181.2 0H237.4C248.9 0 259.5 6.153 265.2 16.12L365.7 192H482.3z"/></svg>',robot:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M9.375 233.4C3.375 239.4 0 247.5 0 256v128c0 8.5 3.375 16.62 9.375 22.62S23.5 416 32 416h32V224H32C23.5 224 15.38 227.4 9.375 233.4zM464 96H352V32c0-17.62-14.38-32-32-32S288 14.38 288 32v64H176C131.8 96 96 131.8 96 176V448c0 35.38 28.62 64 64 64h320c35.38 0 64-28.62 64-64V176C544 131.8 508.3 96 464 96zM256 416H192v-32h64V416zM224 296C201.9 296 184 278.1 184 256S201.9 216 224 216S264 233.9 264 256S246.1 296 224 296zM352 416H288v-32h64V416zM448 416h-64v-32h64V416zM416 296c-22.12 0-40-17.88-40-40S393.9 216 416 216S456 233.9 456 256S438.1 296 416 296zM630.6 233.4C624.6 227.4 616.5 224 608 224h-32v192h32c8.5 0 16.62-3.375 22.62-9.375S640 392.5 640 384V256C640 247.5 636.6 239.4 630.6 233.4z"/></svg>',sad:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <defs>
    <radialGradient gradientUnits="userSpaceOnUse" cy="10%" id="gradient-0">
      <stop offset="0" style="stop-color: hsl(50, 100%, 50%);"/>
      <stop offset="1" style="stop-color: hsl(50, 100%, 60%);"/>
    </radialGradient>
  </defs>
  <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
  <ellipse style="stroke: rgb(0, 0, 0); fill: rgba(0, 0, 0, 0.59);" cx="172.586" cy="207.006" rx="39.974" ry="39.974"/>
  <ellipse style="stroke: rgb(0, 0, 0); fill: rgba(0, 0, 0, 0.59);" cx="334.523" cy="207.481" rx="39.974" ry="39.974"/>
  <ellipse style="stroke: rgb(0, 0, 0); fill: rgba(0, 0, 0, 0.59);" cx="313.325" cy="356.208" rx="91.497" ry="59.893"/>
  <path style="fill: rgb(85, 167, 255);" d="M 159.427 274.06 L 102.158 363.286 L 124.366 417.011 L 160.476 423.338 L 196.937 414.736 L 218.502 375.214"></path>
  <path style="fill: url(#gradient-0);" d="M256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0zM256 352C290.9 352 323.2 367.8 348.3 394.9C354.3 401.4 364.4 401.7 370.9 395.7C377.4 389.7 377.7 379.6 371.7 373.1C341.6 340.5 301 320 256 320C247.2 320 240 327.2 240 336C240 344.8 247.2 352 256 352H256zM208 369C208 349 179.6 308.6 166.4 291.3C163.2 286.9 156.8 286.9 153.6 291.3C140.6 308.6 112 349 112 369C112 395 133.5 416 160 416C186.5 416 208 395 208 369H208zM303.6 208C303.6 225.7 317.1 240 335.6 240C353.3 240 367.6 225.7 367.6 208C367.6 190.3 353.3 176 335.6 176C317.1 176 303.6 190.3 303.6 208zM207.6 208C207.6 190.3 193.3 176 175.6 176C157.1 176 143.6 190.3 143.6 208C143.6 225.7 157.1 240 175.6 240C193.3 240 207.6 225.7 207.6 208z" />
</svg>`,search:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"/></svg>',smiley:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256.3 331.8C208.9 331.8 164.1 324.9 124.5 312.8C112.2 309 100.2 319.7 105.2 331.5C130.1 390.6 188.4 432 256.3 432C324.2 432 382.4 390.6 407.4 331.5C412.4 319.7 400.4 309 388.1 312.8C348.4 324.9 303.7 331.8 256.3 331.8H256.3zM176.4 176C158.7 176 144.4 190.3 144.4 208C144.4 225.7 158.7 240 176.4 240C194 240 208.4 225.7 208.4 208C208.4 190.3 194 176 176.4 176zM336.4 240C354 240 368.4 225.7 368.4 208C368.4 190.3 354 176 336.4 176C318.7 176 304.4 190.3 304.4 208C304.4 225.7 318.7 240 336.4 240z"/></svg>',symbols:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M500.3 7.251C507.7 13.33 512 22.41 512 31.1V175.1C512 202.5 483.3 223.1 447.1 223.1C412.7 223.1 383.1 202.5 383.1 175.1C383.1 149.5 412.7 127.1 447.1 127.1V71.03L351.1 90.23V207.1C351.1 234.5 323.3 255.1 287.1 255.1C252.7 255.1 223.1 234.5 223.1 207.1C223.1 181.5 252.7 159.1 287.1 159.1V63.1C287.1 48.74 298.8 35.61 313.7 32.62L473.7 .6198C483.1-1.261 492.9 1.173 500.3 7.251H500.3zM74.66 303.1L86.5 286.2C92.43 277.3 102.4 271.1 113.1 271.1H174.9C185.6 271.1 195.6 277.3 201.5 286.2L213.3 303.1H239.1C266.5 303.1 287.1 325.5 287.1 351.1V463.1C287.1 490.5 266.5 511.1 239.1 511.1H47.1C21.49 511.1-.0019 490.5-.0019 463.1V351.1C-.0019 325.5 21.49 303.1 47.1 303.1H74.66zM143.1 359.1C117.5 359.1 95.1 381.5 95.1 407.1C95.1 434.5 117.5 455.1 143.1 455.1C170.5 455.1 191.1 434.5 191.1 407.1C191.1 381.5 170.5 359.1 143.1 359.1zM440.3 367.1H496C502.7 367.1 508.6 372.1 510.1 378.4C513.3 384.6 511.6 391.7 506.5 396L378.5 508C372.9 512.1 364.6 513.3 358.6 508.9C352.6 504.6 350.3 496.6 353.3 489.7L391.7 399.1H336C329.3 399.1 323.4 395.9 321 389.6C318.7 383.4 320.4 376.3 325.5 371.1L453.5 259.1C459.1 255 467.4 254.7 473.4 259.1C479.4 263.4 481.6 271.4 478.7 278.3L440.3 367.1zM116.7 219.1L19.85 119.2C-8.112 90.26-6.614 42.31 24.85 15.34C51.82-8.137 93.26-3.642 118.2 21.83L128.2 32.32L137.7 21.83C162.7-3.642 203.6-8.137 231.6 15.34C262.6 42.31 264.1 90.26 236.1 119.2L139.7 219.1C133.2 225.6 122.7 225.6 116.7 219.1H116.7z"/></svg>',tree:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M413.8 447.1L256 448l0 31.99C256 497.7 241.8 512 224.1 512c-17.67 0-32.1-14.32-32.1-31.99l0-31.99l-158.9-.0099c-28.5 0-43.69-34.49-24.69-56.4l68.98-79.59H62.22c-25.41 0-39.15-29.8-22.67-49.13l60.41-70.85H89.21c-21.28 0-32.87-22.5-19.28-37.31l134.8-146.5c10.4-11.3 28.22-11.3 38.62-.0033l134.9 146.5c13.62 14.81 2.001 37.31-19.28 37.31h-10.77l60.35 70.86c16.46 19.34 2.716 49.12-22.68 49.12h-15.2l68.98 79.59C458.7 413.7 443.1 447.1 413.8 447.1z"/></svg>',users:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M224 256c70.7 0 128-57.31 128-128S294.7 0 224 0C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3c-95.73 0-173.3 77.6-173.3 173.3C0 496.5 15.52 512 34.66 512H413.3C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304zM479.1 320h-73.85C451.2 357.7 480 414.1 480 477.3C480 490.1 476.2 501.9 470 512h138C625.7 512 640 497.6 640 479.1C640 391.6 568.4 320 479.1 320zM432 256C493.9 256 544 205.9 544 144S493.9 32 432 32c-25.11 0-48.04 8.555-66.72 22.51C376.8 76.63 384 101.4 384 128c0 35.52-11.93 68.14-31.59 94.71C372.7 243.2 400.8 256 432 256z"/></svg>',warning:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <defs>
    <radialGradient id="radial" cy="85%">
      <stop offset="20%" stop-color="var(--color-secondary)" />
      <stop offset="100%" stop-color="var(--color-primary)" />
    </radialGradient>
  </defs>
  <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
  <path fill="url('#radial')" d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z" />
</svg>`,xmark:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg>'},we={recents:"clock","smileys-emotion":"smiley","people-body":"users","animals-nature":"tree","food-drink":"mug",activities:"gamepad","travel-places":"plane",objects:"lightbulb",symbols:"symbols",flags:"flag",custom:"robot"};function At(o,e){if(!(o in ct))return console.warn(`Unknown icon: "${o}"`),document.createElement("div");const t=function(n,i){const s=Oe(i);return s.dataset.icon=n,s.classList.add(at.icon),s}(o,ct[o]);return e&&t.classList.add(at[`icon-${e}`]),t}var V,se,pe,Ve,De,Be;const wo="sync";class x{constructor(e,t={}){V.add(this),se.set(this,void 0),pe.set(this,void 0),Ie(this,se,e,"f"),Ie(this,pe,t.mode||wo,"f")}renderSync(e={}){const t=Oe(C(this,se,"f").call(this,e));return C(this,V,"m",Be).call(this,t,e),C(this,V,"m",De).call(this,t),C(this,V,"m",Ve).call(this,t,e),t}renderAsync(e={}){return p(this,void 0,void 0,function*(){const t=Oe(C(this,se,"f").call(this,e));return C(this,V,"m",Be).call(this,t,e),C(this,V,"m",De).call(this,t),yield C(this,V,"m",Ve).call(this,t,e),t})}render(e){return C(this,pe,"f")==="sync"?this.renderSync(e):this.renderAsync(e)}}se=new WeakMap,pe=new WeakMap,V=new WeakSet,Ve=function(o,e){return p(this,void 0,void 0,function*(){const t=o.querySelectorAll("[data-view]"),n=[];for(const i of t){const s=e[i.dataset.view];s?i.dataset.render!=="sync"?n.push(s.render().then(r=>(i.replaceWith(r),r))):i.replaceWith(s.renderSync()):i.remove()}return Promise.all(n)})},De=function(o){o.querySelectorAll("i[data-icon]").forEach(e=>{const{icon:t,size:n}=e.dataset;e.replaceWith(At(t,n))})},Be=function(o,e){return o.querySelectorAll("[data-placeholder]").forEach(t=>{const n=t.dataset.placeholder;if(n&&e[n]){const i=e[n];t.replaceWith(...[i].flat())}else console.warn(`Missing placeholder element for key "${n}"`)}),o};var bo={imagePlaceholder:"common_imagePlaceholder__FRWLu",placeholder:"common_placeholder__qe-fo",shine:"common_shine__tUVG2"};P(`@keyframes common_shine__tUVG2 {
  to {
    transform: translateX(100%);
  }
}
.common_imagePlaceholder__FRWLu {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
}

.common_placeholder__qe-fo {
  background: #DDDBDD;
  position: relative;
}
.common_placeholder__qe-fo::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: translateX(-100%);
  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0));
  animation: common_shine__tUVG2 2s infinite;
  content: "";
}`);const _o=new x(({classes:o})=>`
  <div class="${o.placeholder} ${o.imagePlaceholder}"></div>
`);class jo extends f{constructor({classNames:e}={}){super({template:_o,classes:bo}),this.classNames=e}load(e){const t=document.createElement("img");this.classNames&&(t.className=this.classNames),t.addEventListener("load",()=>{this.el.replaceWith(t)},{once:!0}),Promise.resolve(e).then(n=>t.src=n)}renderSync(){return super.renderSync(),this.classNames&&this.classNames.split(" ").forEach(e=>this.el.classList.add(e)),this.el}}var Co={customEmoji:"custom_customEmoji__Kspg6"};P(`.custom_customEmoji__Kspg6 {
  width: 1em;
  height: 1em;
}`);class ko{renderElement(e){return{content:e}}renderImage(e="",t){const n=new jo({classNames:e});return n.renderSync(),{content:n,resolver:()=>(n.load(t()),n.el)}}doRender(e,t,n){if(e.custom)return this.renderCustom(e,t,n);const{content:i,resolver:s}=this.render(e,n),r=i instanceof Element?i:i.el;return s&&s(),r}doEmit(e){return e.custom?this.emitCustom(e):this.emit(e)}emitCustom({url:e,label:t,emoji:n,data:i}){return{url:e,label:t,emoji:n,data:i}}renderCustom(e,t,n=""){const i=[Co.customEmoji,n].join(" ").trim(),{content:s,resolver:r}=this.renderImage(i,()=>e.url),a=s instanceof Element?s:s.el;return r&&r(),a}}const xo=new x(({emoji:o})=>`<span>${o}</span>`);class Eo extends ko{render(e){return this.renderElement(xo.renderSync({emoji:e.emoji}))}emit({emoji:e,hexcode:t,label:n}){return{emoji:e,hexcode:t,label:n}}}P(`.themes_lightTheme__mMNem {
  color-scheme: light;
  --accent-color: #4f46e5;
  --background-color: #f9fafb;
  --border-color: #cccccc;
  --category-name-background-color: #f9fafb;
  --category-name-button-color: #999999;
  --category-name-text-color: hsl(214, 30%, 50%);
  --category-tab-active-background-color: rgba(255, 255, 255, 0.6);
  --category-tab-active-color: var(--accent-color);
  --category-tab-color: #666;
  --category-tab-highlight-background-color: rgba(0, 0, 0, 0.15);
  --error-color-dark: hsl(0, 100%, 45%);
  --error-color: hsl(0, 100%, 40%);
  --focus-indicator-background-color: hsl(198, 65%, 85%);
  --focus-indicator-color: #333333;
  --hover-background-color: #c7d2fe;
  --placeholder-background-color: #cccccc;
  --preview-background-color: var(--secondary-background-color);
  --scrollbar-background-color: var(--background-color);
  --scrollbar-color: rgba(0, 0, 0, 0.75);
  --search-background-color: #f9fafb;
  --search-focus-background-color: #ffffff;
  --search-icon-color: #999999;
  --search-placeholder-color: #71717a;
  --secondary-background-color: #e2e8f0;
  --secondary-text-color: #666666;
  --tag-background-color: rgba(162, 190, 245, 0.3);
  --text-color: #000000;
  --variant-popup-background-color: #ffffff;
}

.themes_darkTheme__qgrZP {
  color-scheme: dark;
  --accent-color: #A580F9;
  --background-color: #333333;
  --border-color: #666666;
  --category-name-background-color: #333333;
  --category-name-button-color: #eeeeee;
  --category-name-text-color: #ffffff;
  --category-tab-active-background-color: #000000;
  --category-tab-active-color: var(--accent-color);
  --category-tab-color: #cccccc;
  --category-tab-highlight-background-color: #4A4A4A;
  --error-color-dark: hsl(0, 7%, 3%);
  --error-color: hsl(0, 30%, 60%);
  --focus-indicator-background-color: hsl(0, 0%, 50%);
  --focus-indicator-color: #999999;
  --hover-background-color: hsla(0, 0%, 40%, 0.85);
  --image-placeholder-color: #ffffff;
  --placeholder-background-color: #666666;
  --search-background-color: #71717a;
  --search-focus-background-color: #52525b;
  --search-icon-color: #cccccc;
  --search-placeholder-color: #d4d4d8;
  --secondary-background-color: #000000 ;
  --secondary-text-color: #999999;
  --tag-background-color: rgba(162, 190, 245, 0.3);
  --text-color: #ffffff;
  --variant-popup-background-color: #333333;
}

.themes_autoTheme__tik-v {
  color-scheme: light;
  --accent-color: #4f46e5;
  --background-color: #f9fafb;
  --border-color: #cccccc;
  --category-name-background-color: #f9fafb;
  --category-name-button-color: #999999;
  --category-name-text-color: hsl(214, 30%, 50%);
  --category-tab-active-background-color: rgba(255, 255, 255, 0.6);
  --category-tab-active-color: var(--accent-color);
  --category-tab-color: #666;
  --category-tab-highlight-background-color: rgba(0, 0, 0, 0.15);
  --error-color-dark: hsl(0, 100%, 45%);
  --error-color: hsl(0, 100%, 40%);
  --focus-indicator-background-color: hsl(198, 65%, 85%);
  --focus-indicator-color: #333333;
  --hover-background-color: #c7d2fe;
  --placeholder-background-color: #cccccc;
  --preview-background-color: var(--secondary-background-color);
  --scrollbar-background-color: var(--background-color);
  --scrollbar-color: rgba(0, 0, 0, 0.75);
  --search-background-color: #f9fafb;
  --search-focus-background-color: #ffffff;
  --search-icon-color: #999999;
  --search-placeholder-color: #71717a;
  --secondary-background-color: #e2e8f0;
  --secondary-text-color: #666666;
  --tag-background-color: rgba(162, 190, 245, 0.3);
  --text-color: #000000;
  --variant-popup-background-color: #ffffff;
}

@media (prefers-color-scheme: dark) {
  .themes_autoTheme__tik-v {
    color-scheme: dark;
    --accent-color: #A580F9;
    --background-color: #333333;
    --border-color: #666666;
    --category-name-background-color: #333333;
    --category-name-button-color: #eeeeee;
    --category-name-text-color: #ffffff;
    --category-tab-active-background-color: #000000;
    --category-tab-active-color: var(--accent-color);
    --category-tab-color: #cccccc;
    --category-tab-highlight-background-color: #4A4A4A;
    --error-color-dark: hsl(0, 7%, 3%);
    --error-color: hsl(0, 30%, 60%);
    --focus-indicator-background-color: hsl(0, 0%, 50%);
    --focus-indicator-color: #999999;
    --hover-background-color: hsla(0, 0%, 40%, 0.85);
    --image-placeholder-color: #ffffff;
    --placeholder-background-color: #666666;
    --search-background-color: #71717a;
    --search-focus-background-color: #52525b;
    --search-icon-color: #cccccc;
    --search-placeholder-color: #d4d4d8;
    --secondary-background-color: #000000 ;
    --secondary-text-color: #999999;
    --tag-background-color: rgba(162, 190, 245, 0.3);
    --text-color: #ffffff;
    --variant-popup-background-color: #333333;
  }
}`);const{autoTheme:Wn,lightTheme:Po,darkTheme:Gn}={lightTheme:"themes_lightTheme__mMNem",darkTheme:"themes_darkTheme__qgrZP",autoTheme:"themes_autoTheme__tik-v"};var So={"categories.activities":"Activities","categories.animals-nature":"Animals & Nature","categories.custom":"Custom","categories.flags":"Flags","categories.food-drink":"Food & Drink","categories.objects":"Objects","categories.people-body":"People & Body","categories.recents":"Recently Used","categories.smileys-emotion":"Smileys & Emotion","categories.symbols":"Symbols","categories.travel-places":"Travel & Places","error.load":"Failed to load emojis","recents.clear":"Clear recent emojis","recents.none":"You haven't selected any emojis yet.",retry:"Try again","search.clear":"Clear search","search.error":"Failed to search emojis","search.notFound":"No results found",search:"Search emojis..."};const Lo=[(o,e)=>(o.hexcode==="1F91D"&&e<14&&(o.skins=[]),o),(o,e)=>(o.skins&&(o.skins=o.skins.filter(t=>!t.version||t.version<=e)),o)];function lt(o,e){return o.filter(t=>function(n,i){return Lo.some(s=>s(n,i)===null)?null:n}(t,e)!==null)}function He(o){var e;return{emoji:o.emoji,label:o.label,tags:o.tags,skins:(e=o.skins)===null||e===void 0?void 0:e.map(t=>He(t)),order:o.order,custom:!1,hexcode:o.hexcode,version:o.version}}function ht(o,e,t){var n;return!(t&&!t.some(i=>i.order===o.group))&&(st(o.label,e)||((n=o.tags)===null||n===void 0?void 0:n.some(i=>st(i,e))))}class $o{constructor(e="en"){this.locale=e}}function Ft(o){return new zo(o)}Ft.deleteDatabase=o=>new Promise((e,t)=>{const n=indexedDB.deleteDatabase(`PicMo-${o}`);n.addEventListener("success",e),n.addEventListener("error",t)});class zo extends $o{open(){return p(this,void 0,void 0,function*(){const e=indexedDB.open(`PicMo-${this.locale}`);return new Promise((t,n)=>{e.addEventListener("success",i=>{var s;this.db=(s=i.target)===null||s===void 0?void 0:s.result,t()}),e.addEventListener("error",n),e.addEventListener("upgradeneeded",i=>p(this,void 0,void 0,function*(){var s;this.db=(s=i.target)===null||s===void 0?void 0:s.result,this.db.createObjectStore("category",{keyPath:"order"});const r=this.db.createObjectStore("emoji",{keyPath:"emoji"});r.createIndex("category","group"),r.createIndex("version","version"),this.db.createObjectStore("meta")}))})})}delete(){return p(this,void 0,void 0,function*(){this.close();const e=indexedDB.deleteDatabase(`PicMo-${this.locale}`);yield this.waitForRequest(e)})}close(){this.db.close()}getEmojiCount(){return p(this,void 0,void 0,function*(){const e=this.db.transaction("emoji","readonly").objectStore("emoji");return(yield this.waitForRequest(e.count())).target.result})}getEtags(){return p(this,void 0,void 0,function*(){const e=this.db.transaction("meta","readonly").objectStore("meta"),[t,n]=yield Promise.all([this.waitForRequest(e.get("emojisEtag")),this.waitForRequest(e.get("messagesEtag"))]);return{storedEmojisEtag:t.target.result,storedMessagesEtag:n.target.result}})}setMeta(e){return p(this,void 0,void 0,function*(){const t=this.db.transaction("meta","readwrite"),n=t.objectStore("meta");return new Promise(i=>{t.oncomplete=i,Object.keys(e).filter(Boolean).forEach(s=>{n.put(e[s],s)})})})}getHash(){return p(this,void 0,void 0,function*(){const e=this.db.transaction("meta","readonly").objectStore("meta");return(yield this.waitForRequest(e.get("hash"))).target.result})}isPopulated(){return p(this,void 0,void 0,function*(){const e=this.db.transaction("category","readonly").objectStore("category");return(yield this.waitForRequest(e.count())).target.result>0})}populate({groups:e,emojis:t,emojisEtag:n,messagesEtag:i,hash:s}){return p(this,void 0,void 0,function*(){yield this.removeAllObjects("category","emoji");const r=[this.addObjects("category",e),this.addObjects("emoji",t),this.setMeta({emojisEtag:n,messagesEtag:i,hash:s})];yield Promise.all(r)})}getCategories(e){var t;return p(this,void 0,void 0,function*(){const n=this.db.transaction("category","readonly").objectStore("category");let i=(yield this.waitForRequest(n.getAll())).target.result.filter(s=>s.key!=="component");if(e.showRecents&&i.unshift({key:"recents",order:-1}),!((t=e.custom)===null||t===void 0)&&t.length&&i.push({key:"custom",order:10}),e.categories){const s=e.categories;i=i.filter(r=>s.includes(r.key)),i.sort((r,a)=>s.indexOf(r.key)-s.indexOf(a.key))}else i.sort((s,r)=>s.order-r.order);return i})}getEmojis(e,t){return p(this,void 0,void 0,function*(){const n=this.db.transaction("emoji","readonly").objectStore("emoji").index("category");return lt((yield this.waitForRequest(n.getAll(e.order))).target.result.filter(i=>i.version<=t).sort((i,s)=>i.order!=null&&s.order!=null?i.order-s.order:0).map(He),t)})}searchEmojis(e,t,n,i){return p(this,void 0,void 0,function*(){const s=[];return new Promise((r,a)=>{const l=this.db.transaction("emoji","readonly").objectStore("emoji").openCursor();l.addEventListener("success",c=>{var h;const d=(h=c.target)===null||h===void 0?void 0:h.result;if(!d)return r([...lt(s,n),...t.filter(m=>ht(m,e))]);const u=d.value;ht(u,e,i)&&u.version<=n&&s.push(He(u)),d.continue()}),l.addEventListener("error",c=>{a(c)})})})}waitForRequest(e){return p(this,void 0,void 0,function*(){return new Promise((t,n)=>{e.onsuccess=t,e.onerror=n})})}withTransaction(e,t="readwrite",n){return new Promise((i,s)=>{const r=this.db.transaction(e,t);r.oncomplete=i,r.onerror=s,n(r)})}removeAllObjects(...e){return p(this,void 0,void 0,function*(){const t=this.db.transaction(e,"readwrite"),n=e.map(i=>t.objectStore(i));yield Promise.all(n.map(i=>this.waitForRequest(i.clear())))})}addObjects(e,t){return p(this,void 0,void 0,function*(){return this.withTransaction(e,"readwrite",n=>{const i=n.objectStore(e);t.forEach(s=>{i.add(s)})})})}}class To{}class Ao extends To{constructor(e){super(),this.storage=e}clear(){this.storage.removeItem("PicMo:recents")}getRecents(e){var t;try{return JSON.parse((t=this.storage.getItem("PicMo:recents"))!==null&&t!==void 0?t:"[]").slice(0,e)}catch{return[]}}addOrUpdateRecent(e,t){const n=[e,...this.getRecents(t).filter(i=>i.hexcode!==e.hexcode)].slice(0,t);try{this.storage.setItem("PicMo:recents",JSON.stringify(n))}catch{console.warn("storage is not available, recent emojis will not be saved")}}}class Fo extends Ao{constructor(){super(localStorage)}}const Mo={renderer:new Eo,dataStore:Ft,theme:Po,animate:!0,showCategoryTabs:!0,showPreview:!0,showRecents:!0,showSearch:!0,showVariants:!0,emojisPerRow:8,visibleRows:6,emojiVersion:"auto",i18n:So,locale:"en",maxRecents:50,recentsProvider:new Fo,custom:[]};function Mt(o={}){return Object.assign(Object.assign({},Mo),o)}var q,W,be,Ne;class xe{constructor(){q.add(this),W.set(this,new Map)}on(e,t,n){C(this,q,"m",Ne).call(this,e,t,n)}once(e,t,n){C(this,q,"m",Ne).call(this,e,t,n,!0)}off(e,t){const n=C(this,q,"m",be).call(this,e);C(this,W,"f").set(e,n.filter(i=>i.handler!==t))}emit(e,...t){C(this,q,"m",be).call(this,e).forEach(n=>{n.handler.apply(n.context,t),n.once&&this.off(e,n.handler)})}removeAll(){C(this,W,"f").clear()}}W=new WeakMap,q=new WeakSet,be=function(o){return C(this,W,"f").has(o)||C(this,W,"f").set(o,[]),C(this,W,"f").get(o)},Ne=function(o,e,t,n=!1){C(this,q,"m",be).call(this,o).push({context:t,handler:e,once:n})};class Ro extends xe{}class Io extends xe{}var Ue={emojiCategory:"EmojiCategory_emojiCategory__7G3mq",categoryName:"EmojiCategory_categoryName__zHcOq",noRecents:"EmojiCategory_noRecents__Pk1Ys",recentEmojis:"EmojiCategory_recentEmojis__CybhN"};P(`.EmojiCategory_emojiCategory__7G3mq {
  position: relative;
}

.EmojiCategory_categoryName__zHcOq {
  font-size: 0.9em;
  padding: 0.5rem;
  margin: 0;
  background: var(--category-name-background-color);
  color: var(--category-name-text-color);
  top: 0;
  z-index: 1;
  display: grid;
  gap: 4px;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  line-height: 1;
  box-sizing: border-box;
  height: var(--category-name-height);
  justify-content: flex-start;
  text-transform: uppercase;
}
.EmojiCategory_categoryName__zHcOq button {
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: var(--category-name-button-color);
}
.EmojiCategory_categoryName__zHcOq button:hover {
  opacity: 1;
}

.EmojiCategory_noRecents__Pk1Ys {
  color: var(--secondary-text-color);
  grid-column: 1/span var(--emojis-per-row);
  font-size: 0.9em;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(var(--emoji-size) * var(--emoji-size-multiplier));
}

.EmojiCategory_recentEmojis__CybhN[data-empty=true] {
  display: none;
}

.EmojiCategory_recentEmojis__CybhN[data-empty=false] + div {
  display: none;
}`);class Ke extends f{constructor({template:e,category:t,showVariants:n,lazyLoader:i}){super({template:e,classes:Ue}),this.baseUIElements={categoryName:f.byClass(Ue.categoryName)},this.category=t,this.showVariants=n,this.lazyLoader=i}setActive(e,t,n){this.emojiContainer.setActive(e,t,n)}}var Oo=new x(({classes:o,emoji:e})=>`
  <button
    type="button"
    class="${o.emoji}"
    title="${e.label}"
    data-emoji="${e.emoji}"
    tabindex="-1">
    <div data-placeholder="emojiContent"></div>
  </button>
`),Vo={emoji:"Emoji_emoji__iKc1G"};P(`.Emoji_emoji__iKc1G {
  background: transparent;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  font-family: var(--emoji-font);
  font-size: var(--emoji-size);
  height: 100%;
  justify-content: center;
  margin: 0;
  overflow: hidden;
  padding: 0;
  width: 100%;
}
.Emoji_emoji__iKc1G:hover {
  background: var(--hover-background-color);
}
.Emoji_emoji__iKc1G:focus {
  border-radius: 0;
  background: var(--focus-indicator-background-color);
  outline: 1px soldi var(--focus-indicator-color);
}`);class Rt extends f{constructor({emoji:e,lazyLoader:t,category:n}){super({template:Oo,classes:Vo}),this.emoji=e,this.lazyLoader=t,this.category=n}initialize(){this.uiEvents=[f.uiEvent("focus",this.handleFocus)],super.initialize()}handleFocus(){this.category&&this.events.emit("focus:change",this.category)}activateFocus(e){this.el.tabIndex=0,e&&this.el.focus()}deactivateFocus(){this.el.tabIndex=-1}renderSync(){return super.renderSync({emoji:this.emoji,emojiContent:this.renderer.doRender(this.emoji,this.lazyLoader)})}}class Do{constructor(e,t,n=0,i=0,s=!1){this.events=new xe,this.keyHandlers={ArrowLeft:this.focusPrevious.bind(this),ArrowRight:this.focusNext.bind(this),ArrowUp:this.focusUp.bind(this),ArrowDown:this.focusDown.bind(this)},this.rowCount=Math.ceil(t/e),this.columnCount=e,this.focusedRow=n,this.focusedColumn=i,this.emojiCount=t,this.wrap=s,this.handleKeyDown=this.handleKeyDown.bind(this)}destroy(){this.events.removeAll()}on(e,t){this.events.on(e,t)}handleKeyDown(e){e.key in this.keyHandlers&&(e.preventDefault(),this.keyHandlers[e.key]())}setCell(e,t,n=!0){const i=this.getIndex();this.focusedRow=e,t!==void 0&&(this.focusedColumn=Math.min(this.columnCount,t)),(this.focusedRow>=this.rowCount||this.getIndex()>=this.emojiCount)&&(this.focusedRow=this.rowCount-1,this.focusedColumn=this.emojiCount%this.columnCount-1),this.events.emit("focus:change",{from:i,to:this.getIndex(),performFocus:n})}setFocusedIndex(e,t=!0){const n=Math.floor(e/this.columnCount),i=e%this.columnCount;this.setCell(n,i,t)}focusNext(){this.focusedColumn<this.columnCount-1&&this.getIndex()<this.emojiCount-1?this.setCell(this.focusedRow,this.focusedColumn+1):this.focusedRow<this.rowCount-1?this.setCell(this.focusedRow+1,0):this.wrap?this.setCell(0,0):this.events.emit("focus:overflow",0)}focusPrevious(){this.focusedColumn>0?this.setCell(this.focusedRow,this.focusedColumn-1):this.focusedRow>0?this.setCell(this.focusedRow-1,this.columnCount-1):this.wrap?this.setCell(this.rowCount-1,this.columnCount-1):this.events.emit("focus:underflow",this.columnCount-1)}focusUp(){this.focusedRow>0?this.setCell(this.focusedRow-1,this.focusedColumn):this.events.emit("focus:underflow",this.focusedColumn)}focusDown(){this.focusedRow<this.rowCount-1?this.setCell(this.focusedRow+1,this.focusedColumn):this.events.emit("focus:overflow",this.focusedColumn)}focusToIndex(e){this.setCell(Math.floor(e/this.columnCount),e%this.columnCount)}getIndex(){return this.focusedRow*this.columnCount+this.focusedColumn}getCell(){return{row:this.focusedRow,column:this.focusedColumn}}getRowCount(){return this.rowCount}}var Bo=new x(({classes:o})=>`
  <div class="${o.emojiContainer}">
    <div data-placeholder="emojis"></div>
  </div>
`),Ho={emojiContainer:"EmojiContainer_emojiContainer__4SPb5"};P(`.EmojiContainer_emojiContainer__4SPb5 {
  display: grid;
  justify-content: space-between;
  gap: 1px;
  padding: 0 0.5em;
  grid-template-columns: repeat(var(--emojis-per-row), calc(var(--emoji-size) * var(--emoji-size-multiplier)));
  grid-auto-rows: calc(var(--emoji-size) * var(--emoji-size-multiplier));
  align-items: center;
  justify-items: center;
}`);class he extends f{constructor({emojis:e,showVariants:t,preview:n=!0,lazyLoader:i,category:s,fullHeight:r=!1}){super({template:Bo,classes:Ho}),this.fullHeight=!1,this.showVariants=t,this.lazyLoader=i,this.preview=n,this.emojis=e,this.category=s,this.fullHeight=r,this.setFocus=this.setFocus.bind(this),this.triggerNextCategory=this.triggerNextCategory.bind(this),this.triggerPreviousCategory=this.triggerPreviousCategory.bind(this)}initialize(){this.grid=new Do(this.options.emojisPerRow,this.emojiCount,0,0,!this.category),this.grid.on("focus:change",this.setFocus),this.grid.on("focus:overflow",this.triggerNextCategory),this.grid.on("focus:underflow",this.triggerPreviousCategory),this.uiEvents=[f.uiEvent("click",this.selectEmoji),f.uiEvent("keydown",this.grid.handleKeyDown)],this.preview&&this.uiEvents.push(f.uiEvent("mouseover",this.showPreview),f.uiEvent("mouseout",this.hidePreview),f.uiEvent("focus",this.showPreview,{capture:!0}),f.uiEvent("blur",this.hidePreview,{capture:!0})),super.initialize()}setFocusedView(e,t){if(e)if(typeof e=="string"){const n=this.emojis.findIndex(i=>i.emoji===e);this.grid.setFocusedIndex(n,!1),setTimeout(()=>{var i,s,r,a;const l=this.emojiViews[n].el;l.scrollIntoView();const c=(i=l.parentElement)===null||i===void 0?void 0:i.previousElementSibling;((r=(s=l.parentElement)===null||s===void 0?void 0:s.parentElement)===null||r===void 0?void 0:r.parentElement).scrollTop-=(a=c==null?void 0:c.offsetHeight)!==null&&a!==void 0?a:0})}else e.row==="first"||e.row===0?this.grid.setCell(0,e.offset,t):e.row==="last"&&this.grid.setCell(this.grid.getRowCount()-1,e.offset,t)}setActive(e,t,n){var i;e?this.setFocusedView(t,n):(i=this.emojiViews[this.grid.getIndex()])===null||i===void 0||i.deactivateFocus()}renderSync(){return this.emojiViews=this.emojis.map(e=>this.viewFactory.create(Rt,{emoji:e,category:this.category,lazyLoader:this.lazyLoader,renderer:this.renderer})),this.emojiElements=this.emojiViews.map(e=>e.renderSync()),super.renderSync({emojis:this.emojiElements,i18n:this.i18n})}destroy(){super.destroy(),this.emojiViews.forEach(e=>e.destroy()),this.grid.destroy()}triggerPreviousCategory(e){this.events.emit("category:previous",e)}triggerNextCategory(e){this.category&&this.events.emit("category:next",e)}setFocus({from:e,to:t,performFocus:n}){var i,s;(i=this.emojiViews[e])===null||i===void 0||i.deactivateFocus(),(s=this.emojiViews[t])===null||s===void 0||s.activateFocus(n)}selectEmoji(e){const t=Te(e,this.emojis);t&&this.events.emit("emoji:select",{emoji:t,showVariants:this.showVariants})}showPreview(e){const t=e.target.closest("button"),n=t==null?void 0:t.firstElementChild,i=Te(e,this.emojis);i&&this.events.emit("preview:show",i,n==null?void 0:n.cloneNode(!0))}hidePreview(e){Te(e,this.emojis)&&this.events.emit("preview:hide")}get emojiCount(){return this.emojis.length}}var No=new x(({classes:o,category:e,pickerId:t,icon:n,i18n:i})=>`
  <section class="${o.emojiCategory}" role="tabpanel" aria-labelledby="${t}-category-${e.key}">
    <h3 data-category="${e.key}" class="${o.categoryName}">
      <i data-icon="${n}"></i>
      ${i.get(`categories.${e.key}`,e.message||e.key)}
    </h3>
    <div data-view="emojis" data-render="sync"></div>
  </section>
`);class Uo extends Ke{constructor({category:e,showVariants:t,lazyLoader:n,emojiVersion:i}){super({category:e,showVariants:t,lazyLoader:n,template:No}),this.showVariants=t,this.lazyLoader=n,this.emojiVersion=i}initialize(){this.uiElements=Object.assign({},this.baseUIElements),super.initialize()}render(){const e=Object.create(null,{render:{get:()=>super.render}});return p(this,void 0,void 0,function*(){yield this.emojiDataPromise;const t=yield this.emojiData.getEmojis(this.category,this.emojiVersion);return this.emojiContainer=this.viewFactory.create(he,{emojis:t,showVariants:this.showVariants,lazyLoader:this.lazyLoader,category:this.category.key}),e.render.call(this,{category:this.category,emojis:this.emojiContainer,emojiCount:t.length,icon:we[this.category.key]})})}}class Ko extends he{constructor({category:e,emojis:t,preview:n=!0,lazyLoader:i}){super({category:e,emojis:t,showVariants:!1,preview:n,lazyLoader:i})}addOrUpdate(e){return p(this,void 0,void 0,function*(){const t=this.el.querySelector(`[data-emoji="${e.emoji}"]`);t&&(this.el.removeChild(t),this.emojis=this.emojis.filter(i=>i!==e));const n=this.viewFactory.create(Rt,{emoji:e});if(this.el.insertBefore(n.renderSync(),this.el.firstChild),this.emojis=[e,...this.emojis.filter(i=>i!==e)],this.emojis.length>this.options.maxRecents){this.emojis=this.emojis.slice(0,this.options.maxRecents);const i=this.el.childElementCount-this.options.maxRecents;for(let s=0;s<i;s++)this.el.lastElementChild&&this.el.removeChild(this.el.lastElementChild)}})}}var qo=new x(({emojiCount:o,classes:e,category:t,pickerId:n,icon:i,i18n:s})=>`
  <section class="${e.emojiCategory}" role="tabpanel" aria-labelledby="${n}-category-${t.key}">
  <h3 data-category="${t.key}" class="${e.categoryName}">
    <i data-icon="${i}"></i>
    ${s.get(`categories.${t.key}`,t.message||t.key)}
  </h3>
  <div data-empty="${o===0}" class="${e.recentEmojis}">
    <div data-view="emojis" data-render="sync"></div>
  </div>
  <div class="${e.noRecents}">
    ${s.get("recents.none")}
  </div>
</section>
`,{mode:"async"}),Wo=new x(({classes:o,category:e,pickerId:t,icon:n,i18n:i})=>`
  <section class="${o.emojiCategory}" role="tabpanel" aria-labelledby="${t}-category-${e.key}">
    <h3 data-category="${e.key}" class="${o.categoryName}">
      <i data-icon="${n}"></i>
      ${i.get(`categories.${e.key}`,e.message||e.key)}
    </h3>
    <div data-view="emojis" data-render="sync"></div>
  </section>
`);class It{constructor(){this.elements=new Map}lazyLoad(e,t){return this.elements.set(e,t),e}observe(e){if(window.IntersectionObserver){const t=new IntersectionObserver(n=>{n.filter(i=>i.intersectionRatio>0).map(i=>i.target).forEach(i=>{const s=this.elements.get(i);s==null||s(),t.unobserve(i)})},{root:e});this.elements.forEach((n,i)=>{t.observe(i)})}else this.elements.forEach(t=>{t()})}}var dt={emojis:"EmojiArea_emojis__L4mMq"};P(`.EmojiArea_emojis__L4mMq {
  height: var(--emoji-area-height);
  overflow-y: auto;
  position: relative;
  scrollbar-color: var(--scrollbar-color) var(--scrollbar-background-color);
  scrollbar-width: 8px;
}
.EmojiArea_emojis__L4mMq::-webkit-scrollbar {
  background: var(--scrollbar-background-color);
  width: 1.1em;
}
.EmojiArea_emojis__L4mMq::-webkit-scrollbar-thumb {
  background: var(--scrollbar-color);
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  background-clip: padding-box;
  height: 1em;
  border-radius: 1em;
}`);const Go=new x(({classes:o})=>`
  <div class="${o.emojis}">
    <div data-placeholder="emojis"></div>
  </div>
`,{mode:"async"}),Jo={recents:class extends Ke{constructor({category:o,lazyLoader:e,provider:t}){super({category:o,showVariants:!1,lazyLoader:e,template:qo}),this.provider=t}initialize(){this.uiElements=Object.assign(Object.assign({},this.baseUIElements),{recents:f.byClass(Ue.recentEmojis)}),this.appEvents={"recent:add":this.addRecent},super.initialize()}addRecent(o){return p(this,void 0,void 0,function*(){yield this.emojiContainer.addOrUpdate(o),this.ui.recents.dataset.empty="false"})}render(){const o=Object.create(null,{render:{get:()=>super.render}});var e;return p(this,void 0,void 0,function*(){const t=(e=this.provider)===null||e===void 0?void 0:e.getRecents(this.options.maxRecents);return this.emojiContainer=this.viewFactory.create(Ko,{emojis:t,showVariants:!1,lazyLoader:this.lazyLoader,category:this.category.key}),yield o.render.call(this,{category:this.category,emojis:this.emojiContainer,emojiCount:t.length,icon:we[this.category.key]}),this.el})}},custom:class extends Ke{constructor({category:o,lazyLoader:e}){super({template:Wo,showVariants:!1,lazyLoader:e,category:o})}initialize(){this.uiElements=Object.assign({},this.baseUIElements),super.initialize()}render(){const o=Object.create(null,{render:{get:()=>super.render}});return p(this,void 0,void 0,function*(){return this.emojiContainer=this.viewFactory.create(he,{emojis:this.customEmojis,showVariants:this.showVariants,lazyLoader:this.lazyLoader,category:this.category.key}),o.render.call(this,{category:this.category,emojis:this.emojiContainer,emojiCount:this.customEmojis.length,icon:we[this.category.key]})})}}};class Yo extends f{constructor({categoryTabs:e,categories:t,emojiVersion:n}){super({template:Go,classes:dt}),this.selectedCategory=0,this.scrollListenerState="active",this.lazyLoader=new It,this.categoryTabs=e,this.categories=t,this.emojiVersion=n,this.handleScroll=go(this.handleScroll.bind(this),100)}initialize(){this.appEvents={"category:select":this.handleCategorySelect,"category:previous":this.focusPreviousCategory,"category:next":this.focusNextCategory,"focus:change":this.updateFocusedCategory},this.uiElements={emojis:f.byClass(dt.emojis)},this.uiEvents=[f.uiEvent("scroll",this.handleScroll)],super.initialize()}get focusableEmoji(){return this.el.querySelector('[tabindex="0"]')}render(){const e=Object.create(null,{render:{get:()=>super.render}});return p(this,void 0,void 0,function*(){this.emojiCategories=this.categories.map(this.createCategory,this);const t={};return this.categories.forEach((n,i)=>{t[`emojis-${n.key}`]=this.emojiCategories[i]}),yield e.render.call(this,{emojis:yield Promise.all(this.emojiCategories.map(n=>n.render()))}),this.lazyLoader.observe(this.el),window.ResizeObserver&&(this.observer=new ResizeObserver(()=>{const n=this.el.scrollHeight-this.scrollHeight;this.el.scrollTop-this.scrollTop===0&&n>0&&(this.el.scrollTop+=n),this.scrollHeight=this.el.scrollHeight,this.scrollTop=this.el.scrollTop}),this.emojiCategories.forEach(n=>{this.observer.observe(n.el)})),this.el})}destroy(){super.destroy(),this.emojiCategories.forEach(e=>{var t;(t=this.observer)===null||t===void 0||t.unobserve(e.el),e.destroy()})}handleCategorySelect(e,t){this.selectCategory(e,t)}createCategory(e){const t=function(n){return Jo[n.key]||Uo}(e);return this.viewFactory.create(t,{category:e,showVariants:!0,lazyLoader:this.lazyLoader,emojiVersion:this.emojiVersion,provider:this.options.recentsProvider})}determineInitialCategory(){var e;return this.options.initialCategory&&this.categories.find(t=>t.key===this.options.initialCategory)?this.options.initialCategory:(e=this.categories.find(t=>t.key!=="recents"))===null||e===void 0?void 0:e.key}determineFocusTarget(e){const t=this.emojiCategories.find(n=>n.category.key===e);return this.options.initialEmoji&&(t==null?void 0:t.el.querySelector(`[data-emoji="${this.options.initialEmoji}"]`))?this.options.initialEmoji:"button"}reset(){this.events.emit("preview:hide");const e=this.determineInitialCategory();e&&(this.selectCategory(e,{focus:this.determineFocusTarget(e),performFocus:!0,scroll:"jump"}),this.selectedCategory=this.getCategoryIndex(e))}getCategoryIndex(e){return this.categories.findIndex(t=>t.key===e)}focusPreviousCategory(e){this.selectedCategory>0&&this.focusCategory(this.selectedCategory-1,{row:"last",offset:e!=null?e:this.options.emojisPerRow})}focusNextCategory(e){this.selectedCategory<this.categories.length-1&&this.focusCategory(this.selectedCategory+1,{row:"first",offset:e!=null?e:0})}focusCategory(e,t){this.selectCategory(e,{focus:t,performFocus:!0})}selectCategory(e,t={}){var n;return p(this,void 0,void 0,function*(){this.scrollListenerState="suspend";const{focus:i,performFocus:s,scroll:r}=Object.assign({performFocus:!1},t);this.emojiCategories[this.selectedCategory].setActive(!1);const a=this.selectedCategory=typeof e=="number"?e:this.getCategoryIndex(e);(n=this.categoryTabs)===null||n===void 0||n.setActiveTab(this.selectedCategory,s,i==="button");const l=this.emojiCategories[a].el.offsetTop;this.emojiCategories[a].setActive(!0,function(c){return c&&c!=="button"?c:{row:"first",offset:0}}(i),i!=="button"&&s),r&&(this.el.scrollTop=l),this.scrollListenerState="resume"})}updateFocusedCategory(e){var t;this.categories[this.selectedCategory].key!==e&&(this.scrollListenerState="suspend",this.selectedCategory=this.getCategoryIndex(e),(t=this.categoryTabs)===null||t===void 0||t.setActiveTab(this.selectedCategory,!1),this.scrollListenerState="resume")}handleScroll(){if(this.scrollListenerState==="suspend"||!this.categoryTabs)return;if(this.scrollListenerState==="resume")return void(this.scrollListenerState="active");const e=this.el.scrollTop,t=this.el.scrollHeight-this.el.offsetHeight,n=this.emojiCategories.findIndex((i,s)=>{var r;return e<((r=this.emojiCategories[s+1])===null||r===void 0?void 0:r.el.offsetTop)});e===0?this.categoryTabs.setActiveTab(0,!1):Math.floor(e)===Math.floor(t)||n<0?this.categoryTabs.setActiveTab(this.categories.length-1,!1):this.categoryTabs.setActiveTab(n,!1)}}var Qo=new x(({classList:o,classes:e,icon:t,message:n})=>`
<div class="${o}" role="alert">
  <div class="${e.icon}"><i data-size="10x" data-icon="${t}"></i></div>
  <h3 class="${e.title}">${n}</h3>
</div>
`),ut={error:"ErrorMessage_error__7I7y1",icon:"ErrorMessage_icon__4---V","appear-grow":"ErrorMessage_appear-grow__oBenJ",title:"ErrorMessage_title__shDDT",appear:"ErrorMessage_appear__kry-R"};P(`@keyframes ErrorMessage_appear__kry-R {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.8;
  }
}
@keyframes ErrorMessage_appear-grow__oBenJ {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 0.8;
    transform: scale(1);
  }
}
.ErrorMessage_error__7I7y1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: var(--secondary-text-color);
}
.ErrorMessage_error__7I7y1 .ErrorMessage_icon__4---V {
  opacity: 0.8;
  animation: ErrorMessage_appear-grow__oBenJ 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  --color-primary: var(--error-color);
  --color-secondary: var(--error-color-dark);
}
.ErrorMessage_error__7I7y1 .ErrorMessage_title__shDDT {
  animation: ErrorMessage_appear__kry-R 250ms;
  animation-delay: 50ms;
  animation-fill-mode: both;
}
.ErrorMessage_error__7I7y1 button {
  padding: 8px 16px;
  cursor: pointer;
  background: var(--background-color);
  border: 1px solid var(--text-color);
  border-radius: 5px;
  color: var(--text-color);
}
.ErrorMessage_error__7I7y1 button:hover {
  background: var(--text-color);
  color: var(--background-color);
}`);class qe extends f{constructor({message:e,icon:t="warning",template:n=Qo,className:i}){super({template:n,classes:ut}),this.message=e,this.icon=t,this.className=i}renderSync(){const e=[ut.error,this.className].join(" ").trim();return super.renderSync({message:this.message,icon:this.icon,classList:e})}}var Xo="DataError_dataError__jyJ0H";P(`.DataError_dataError__jyJ0H [data-icon] {
  opacity: 0.8;
}`);var Zo=new x(({classList:o,classes:e,icon:t,i18n:n,message:i})=>`
  <div class="${o}">
    <div class="${e.icon}"><i data-size="10x" data-icon="${t}"></i></div>
    <h3 class="${e.title}">${i}</h3>
    <button type="button">${n.get("retry")}</button>
  </div>
`);class en extends qe{constructor({message:e}){super({message:e,template:Zo,className:Xo})}initialize(){this.uiElements={retryButton:"button"},this.uiEvents=[f.childEvent("retryButton","click",this.onRetry)],super.initialize()}onRetry(){return p(this,void 0,void 0,function*(){this.emojiData?yield this.emojiData.delete():yield this.options.dataStore.deleteDatabase(this.options.locale),this.events.emit("reinitialize");const e=yield zt(this.options.locale,this.options.dataStore,this.options.messages,this.options.emojiData,this.emojiData);this.viewFactory.setEmojiData(e),this.events.emit("data:ready",e)})}}var te={preview:"Preview_preview__HcFH6",previewEmoji:"Preview_previewEmoji__vjUki",previewName:"Preview_previewName__C79nL",tagList:"Preview_tagList__DielP",tag:"Preview_tag__aUSTM"};P(`.Preview_preview__HcFH6 {
  border-top: 1px solid var(--border-color);
  display: grid;
  align-items: center;
  gap: 6px;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas: "emoji name" "emoji tags";
  height: var(--emoji-preview-height);
  box-sizing: border-box;
  padding: 0.5em;
  position: relative;
  background: var(--preview-background-color);
}

.Preview_previewEmoji__vjUki {
  grid-area: emoji;
  font-size: var(--emoji-preview-size);
  font-family: var(--emoji-font);
  width: 1.25em;
  display: flex;
  align-items: center;
  justify-content: center;
}

.Preview_previewName__C79nL {
  grid-area: name;
  color: var(--text-color);
  font-size: 0.8em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 500;
}

.Preview_tagList__DielP {
  grid-area: tags;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 0;
  font-size: 0.75em;
  overflow: hidden;
}

.Preview_tag__aUSTM {
  border-radius: 3px;
  background: var(--tag-background-color);
  color: var(--text-color);
  padding: 2px 8px;
  margin-right: 0.25em;
  white-space: nowrap;
}
.Preview_tag__aUSTM:last-child {
  margin-right: 0;
}`);const tn=new x(({classes:o,tag:e})=>`
  <li class="${o.tag}">${e}</li>
`),on=new x(({classes:o})=>`
  <div class="${o.preview}">
    <div class="${o.previewEmoji}"></div>
    <div class="${o.previewName}"></div>
    <ul class="${o.tagList}"></ul>
  </div>
`);class nn extends f{constructor(){super({template:on,classes:te})}initialize(){this.uiElements={emoji:f.byClass(te.previewEmoji),name:f.byClass(te.previewName),tagList:f.byClass(te.tagList)},this.appEvents={"preview:show":this.showPreview,"preview:hide":this.hidePreview},super.initialize()}showPreview(e,t){if(this.ui.emoji.replaceChildren(t),this.ui.name.textContent=e.label,e.tags){this.ui.tagList.style.display="flex";const n=e.tags.map(i=>tn.renderSync({tag:i,classes:te}));this.ui.tagList.replaceChildren(...n)}}hidePreview(){this.ui.emoji.replaceChildren(),this.ui.name.textContent="",this.ui.tagList.replaceChildren()}}var oe={searchContainer:"Search_searchContainer__aJW7V",searchField:"Search_searchField__tENKn",clearButton:"Search_clearButton__oFTEY",searchAccessory:"Search_searchAccessory__0rdYO",clearSearchButton:"Search_clearSearchButton__AoDtB",notFound:"Search_notFound__rOdr1"};P(`.Search_searchContainer__aJW7V {
  display: flex;
  height: var(--search-height);
  box-sizing: border-box;
  padding: 0 8px;
  position: relative;
}

.Search_searchField__tENKn {
  background: var(--search-background-color);
  border-radius: 3px;
  border: none;
  box-sizing: border-box;
  color: var(--text-color);
  font-size: 0.9em;
  outline: none;
  padding-right: 2em;
  padding: 0.5em 2.25em 0.5em 0.5em;
  width: 100%;
}
.Search_searchField__tENKn:focus {
  background: var(--search-focus-background-color);
}
.Search_searchField__tENKn::placeholder {
  color: var(--search-placeholder-color);
}

.Search_clearButton__oFTEY {
  border: 0;
  color: var(--search-icon-color);
  background: transparent;
  cursor: pointer;
}

.Search_searchAccessory__0rdYO {
  color: var(--search-icon-color);
  height: 100%;
  position: absolute;
  right: 1em;
  top: 0;
  width: 1.25rem;
  display: flex;
  align-items: center;
}
.Search_searchAccessory__0rdYO svg {
  fill: var(--search-icon-color);
}

.Search_clearSearchButton__AoDtB {
  cursor: pointer;
  border: none;
  background: transparent;
  color: var(--search-icon-color);
  font-size: 1em;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0;
}

.Search_notFound__rOdr1 [data-icon] {
  fill: #f3e265;
}`);const sn=new x(({classes:o,i18n:e})=>`
  <button title="${e.get("search.clear")}" class="${o.clearSearchButton}">
    <i data-icon="xmark"></i>
  </button>
`),rn=new x(({classes:o,i18n:e})=>`
<div class="${o.searchContainer}">
  <input class="${o.searchField}" placeholder="${e.get("search")}">
  <span class="${o.searchAccessory}"></span>
</div>
`,{mode:"async"});class an extends f{constructor({categories:e,emojiVersion:t}){super({template:rn,classes:oe}),this.categories=e.filter(n=>n.key!=="recents"),this.emojiVersion=t,this.search=po(this.search.bind(this),100)}initialize(){this.uiElements={searchField:f.byClass(oe.searchField),searchAccessory:f.byClass(oe.searchAccessory)},this.uiEvents=[f.childEvent("searchField","keydown",this.onKeyDown),f.childEvent("searchField","input",this.onSearchInput)],super.initialize()}render(){const e=Object.create(null,{render:{get:()=>super.render}});return p(this,void 0,void 0,function*(){return yield e.render.call(this),this.searchIcon=At("search"),this.notFoundMessage=this.viewFactory.create(qe,{message:this.i18n.get("search.notFound"),className:oe.notFound,icon:"sad"}),this.notFoundMessage.renderSync(),this.errorMessage=this.viewFactory.create(qe,{message:this.i18n.get("search.error")}),this.errorMessage.renderSync(),this.clearSearchButton=sn.render({classes:oe,i18n:this.i18n}),this.clearSearchButton.addEventListener("click",t=>this.onClearSearch(t)),this.searchField=this.ui.searchField,this.showSearchIcon(),this.el})}showSearchIcon(){this.showSearchAccessory(this.searchIcon)}showClearSearchButton(){this.showSearchAccessory(this.clearSearchButton)}showSearchAccessory(e){this.ui.searchAccessory.replaceChildren(e)}clear(){this.searchField.value="",this.showSearchIcon()}focus(){this.searchField.focus()}onClearSearch(e){var t;e.stopPropagation(),this.searchField.value="",(t=this.resultsContainer)===null||t===void 0||t.destroy(),this.resultsContainer=null,this.showSearchIcon(),this.events.emit("content:show"),this.searchField.focus()}handleResultsKeydown(e){this.resultsContainer&&e.key==="Escape"&&this.onClearSearch(e)}onKeyDown(e){var t;e.key==="Escape"&&this.searchField.value?this.onClearSearch(e):e.key!=="Enter"&&e.key!=="ArrowDown"||!this.resultsContainer||(e.preventDefault(),(t=this.resultsContainer.el.querySelector('[tabindex="0"]'))===null||t===void 0||t.focus())}onSearchInput(e){this.searchField.value?(this.showClearSearchButton(),this.search()):this.onClearSearch(e)}search(){var e;return p(this,void 0,void 0,function*(){if(this.searchField.value)try{const t=yield this.emojiData.searchEmojis(this.searchField.value,this.customEmojis,this.emojiVersion,this.categories);if(this.events.emit("preview:hide"),t.length){const n=new It;this.resultsContainer=this.viewFactory.create(he,{emojis:t,fullHeight:!0,showVariants:!0,lazyLoader:n}),this.resultsContainer.renderSync(),!((e=this.resultsContainer)===null||e===void 0)&&e.el&&(n.observe(this.resultsContainer.el),this.resultsContainer.setActive(!0,{row:0,offset:0},!1),this.resultsContainer.el.addEventListener("keydown",i=>this.handleResultsKeydown(i)),this.events.emit("content:show",this.resultsContainer))}else this.events.emit("content:show",this.notFoundMessage)}catch{this.events.emit("content:show",this.errorMessage)}})}}var cn=new x(({classes:o})=>`
  <div class="${o.variantOverlay}">
    <div class="${o.variantPopup}">
      <div data-view="emojis" data-render="sync"></div>
    </div>
  </div>
`),mt={variantOverlay:"VariantPopup_variantOverlay__gGwue",variantPopup:"VariantPopup_variantPopup__c2pHF"};P(`.VariantPopup_variantOverlay__gGwue {
  background: var(--overlay-background-color);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
}

.VariantPopup_variantPopup__c2pHF {
  background: var(--variant-popup-background-color);
  border-radius: 5px;
  margin: 0.5em;
  padding: 0.5em;
  text-align: center;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
}`);const Ae={easing:"ease-in-out",duration:250,fill:"both"},gt={opacity:[0,1]},pt={opacity:[0,1],transform:["scale3d(0.8, 0.8, 0.8)","scale3d(1, 1, 1)"]};class ln extends f{constructor({emoji:e,parent:t}){super({template:cn,classes:mt,parent:t}),this.focusedEmojiIndex=0,this.focusTrap=new Tt,this.animateShow=()=>Promise.all([J(this.el,gt,Ae,this.options),J(this.ui.popup,pt,Ae,this.options)]),this.emoji=e}initialize(){this.uiElements={popup:f.byClass(mt.variantPopup)},this.uiEvents=[f.uiEvent("click",this.handleClick),f.uiEvent("keydown",this.handleKeydown)],super.initialize()}animateHide(){const e=Object.assign(Object.assign({},Ae),{direction:"reverse"});return Promise.all([J(this.el,gt,e,this.options),J(this.ui.popup,pt,e,this.options)])}hide(){return p(this,void 0,void 0,function*(){yield this.animateHide(),this.events.emit("variantPopup:hide")})}handleKeydown(e){e.key==="Escape"&&(this.hide(),e.stopPropagation())}handleClick(e){this.ui.popup.contains(e.target)||this.hide()}getEmoji(e){return this.renderedEmojis[e]}setFocusedEmoji(e){this.getEmoji(this.focusedEmojiIndex).tabIndex=-1,this.focusedEmojiIndex=e;const t=this.getEmoji(this.focusedEmojiIndex);t.tabIndex=0,t.focus()}destroy(){this.emojiContainer.destroy(),this.focusTrap.deactivate(),super.destroy()}renderSync(){const e=[Object.assign(Object.assign({},this.emoji),{skins:null}),...(this.emoji.skins||[]).map(t=>Object.assign(Object.assign({},t),{label:this.emoji.label,tags:this.emoji.tags}))];return this.emojiContainer=this.viewFactory.create(he,{emojis:e,preview:!1}),super.renderSync({emojis:this.emojiContainer}),e.length<this.options.emojisPerRow&&this.el.style.setProperty("--emojis-per-row",e.length.toString()),this.el}activate(){this.emojiContainer.setActive(!0,{row:0,offset:0},!0),this.focusTrap.activate(this.el)}}var hn=new x(({classes:o,i18n:e,category:t,pickerId:n,icon:i})=>`
<li class="${o.categoryTab}">
  <button
    aria-selected="false"
    role="tab"
    class="${o.categoryButton}"
    tabindex="-1"
    title="${e.get(`categories.${t.key}`,t.message||t.key)}"
    type="button"
    data-category="${t.key}"
    id="${n}-category-${t.key}"
  >
    <i data-icon="${i}"></i>
</li>
`),fe={categoryButtons:"CategoryTabs_categoryButtons__dJVp-",categoryButton:"CategoryTabs_categoryButton__AsR9b",categoryTab:"CategoryTabs_categoryTab__fAgQT",categoryTabActive:"CategoryTabs_categoryTabActive__691be"};P(`.CategoryTabs_categoryButtons__dJVp- {
  --tab-size-ratio: 1.55;
  --tab-padding: 0.5em;
  --tab-area-width: calc(var(--picker-width) - (var(--tab-padding) * 2));
  --tab-size: calc((var(--tab-area-width) / var(--category-count))) / var(--tab-size-ratio);
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  gap: var(--tab-gap);
  justify-content: center;
  margin: 0;
  padding: 0 var(--tab-padding);
  align-items: center;
  height: var(--category-tabs-height);
  box-sizing: border-box;
  position: relative;
  list-style-type: none;
}

.CategoryTabs_categoryButton__AsR9b {
  border-radius: 5px;
  background: transparent;
  border: 2px solid transparent;
  color: var(--category-tab-color);
  cursor: pointer;
  padding: 2px;
  vertical-align: middle;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-size: min(var(--tab-size), 1.2rem);
  width: 1.6em;
  height: 1.6em;
  transition: all 100ms;
}
.CategoryTabs_categoryButton__AsR9b img {
  width: var(--category-tab-size);
  height: var(--category-tab-size);
}
.CategoryTabs_categoryButton__AsR9b:hover {
  background: var(--category-tab-highlight-background-color);
}

.CategoryTabs_categoryTab__fAgQT {
  display: flex;
  align-items: center;
  justify-content: stretch;
  transition: all 100ms;
}

.CategoryTabs_categoryTabActive__691be .CategoryTabs_categoryButton__AsR9b {
  color: var(--category-tab-active-color);
  background: linear-gradient(rgba(255, 255, 255, 0.75) 0%, rgba(255, 255, 255, 0.75) 100%), linear-gradient(var(--category-tab-active-color) 0%, var(--category-tab-active-color) 100%);
  border: 2px solid var(--category-tab-active-color);
}
.CategoryTabs_categoryTabActive__691be .CategoryTabs_categoryButton__AsR9b:hover {
  background-color: var(--category-tab-active-background-color);
}`);class dn extends f{constructor({category:e,icon:t}){super({template:hn,classes:fe}),this.isActive=!1,this.category=e,this.icon=t}initialize(){this.uiElements={button:f.byClass(fe.categoryButton)},this.uiEvents=[f.childEvent("button","click",this.selectCategory)],super.initialize()}renderSync(){return super.renderSync({category:this.category,icon:this.icon}),this.ui.button.ariaSelected="false",this.el}setActive(e,t=!0,n=!1){this.el.classList.toggle(fe.categoryTabActive,e),t&&this.setFocused(e,n),this.isActive=e}setFocused(e,t=!1){this.ui.button.ariaSelected=e.toString(),e?(this.ui.button.tabIndex=0,this.ui.button.focus(),t&&this.events.emit("category:select",this.category.key,{scroll:"animate",focus:"button",performFocus:!1})):this.ui.button.tabIndex=-1}selectCategory(){this.isActive||this.events.emit("category:select",this.category.key,{scroll:"animate",focus:"button",performFocus:!0})}}var un=new x(({classes:o})=>`
  <ul role="tablist" class="${o.categoryButtons}">
    <div data-placeholder="tabs"></div>
  </ul>
`);class mn extends f{constructor({categories:e}){super({template:un,classes:fe}),this.activeCategoryIndex=0,this.categories=e}initialize(){this.keyBindings={ArrowLeft:this.stepSelectedTab(-1),ArrowRight:this.stepSelectedTab(1)},super.initialize()}renderSync(){return this.tabViews=this.categories.map(e=>this.viewFactory.create(dn,{category:e,icon:we[e.key]})),super.renderSync({tabs:this.tabViews.map(e=>e.renderSync())}),this.currentTabView.setActive(!0),this.el}get currentCategory(){return this.categories[this.activeCategoryIndex]}get currentTabView(){return this.tabViews[this.activeCategoryIndex]}setActiveTab(e,t=!0,n=!0){if(e===this.activeCategoryIndex)return;const i=this.currentTabView,s=this.tabViews[e];i.setActive(!1,t),s.setActive(!0,t,n),this.activeCategoryIndex=e}getTargetCategory(e){return e<0?this.categories.length-1:e>=this.categories.length?0:e}stepSelectedTab(e){return()=>{const t=this.activeCategoryIndex+e;this.setActiveTab(this.getTargetCategory(t))}}}const gn=[{version:15,emoji:String.fromCodePoint(129768)},{version:14,emoji:String.fromCodePoint(128733)},{version:13,emoji:String.fromCodePoint(129729)},{version:12,emoji:String.fromCodePoint(129449)},{version:11,emoji:String.fromCodePoint(129463)},{version:5,emoji:String.fromCodePoint(129322)},{version:4,emoji:String.fromCodePoint(9877)},{version:3,emoji:String.fromCodePoint(129314)},{version:2,emoji:String.fromCodePoint(128488)},{version:1,emoji:String.fromCodePoint(128512)}];function pn(){var o;const e=gn.find(t=>function(n){const i=document.createElement("canvas").getContext("2d");if(i)return i.textBaseline="top",i.font="32px Arial",i.fillText(n,0,0),i.getImageData(16,16,1,1).data[0]!==0}(t.emoji));return(o=e==null?void 0:e.version)!==null&&o!==void 0?o:1}function Fe(o,e){return Array.from({length:o},()=>e).join("")}function fn(o){const{emojiCount:e,classes:t,theme:n,className:i}=o;return`
    <div class="${t.skeleton} ${t.picker} ${n} ${i}">
      ${(({showHeader:s,classes:r})=>s?`
    <header class="${r.header}">
      ${(({showSearch:a,classes:l})=>a?`
    <div class="${l.searchSkeleton}">
      <div class="${l.searchInput} ${l.placeholder}"></div>
    </div>
  `:"")(o)}
      ${(({showCategoryTabs:a,classes:l})=>a?`
    <div class="${l.categoryTabsSkeleton}">
      ${Fe(10,`<div class="${l.placeholder} ${l.categoryTab}"></div>`)}
    </div>
  `:"")(o)}
    </header>
  `:"")(o)}
      <div class="${t.contentSkeleton}">
        <div class="${t.placeholder} ${t.categoryName}"></div>
        <div class="${t.emojiGrid}">
          ${Fe(e,`<div class="${t.placeholder} ${t.emoji}"></div>`)}
        </div>
      </div>
      ${(({showPreview:s,classes:r})=>s?`
    <div class="${r.previewSkeleton}">
      <div class="${r.placeholder} ${r.previewEmoji}"></div>
      <div class="${r.placeholder} ${r.previewName}"></div>
      <ul class="${r.tagList}">
        ${Fe(3,`<li class="${r.placeholder} ${r.tag}"></li>`)}
      </ul>
    </div>
  `:"")(o)}
    </div>
  `}var vn=new x(o=>o.isLoaded?function(e){const{classes:t,theme:n,className:i=""}=e;return`
    <div class="${t.picker} ${n} ${i}">
      ${function({showHeader:s,classes:r}){return s?`
    <header class="${r.header}">
      <div data-view="search"></div>
      <div data-view="categoryTabs" data-render="sync"></div>
    </header>
  `:""}(e)}
      <div class="${t.content}">
        <div data-view="emojiArea"></div>
      </div>
      <div data-view="preview"></div>
    </div>
  `}(o):fn(o)),me={picker:"EmojiPicker_picker__19Vln",skeleton:"EmojiPicker_skeleton__M1a2g",placeholder:"EmojiPicker_placeholder__YDJn-",shine:"EmojiPicker_shine__s-vEs",searchSkeleton:"EmojiPicker_searchSkeleton__gNgdU",searchInput:"EmojiPicker_searchInput__tpaBs",categoryTabsSkeleton:"EmojiPicker_categoryTabsSkeleton__2dISl",categoryTab:"EmojiPicker_categoryTab__mmSVF",contentSkeleton:"EmojiPicker_contentSkeleton__UWfQu",categoryName:"EmojiPicker_categoryName__d2-Ed",emojiGrid:"EmojiPicker_emojiGrid__WnoCI",emoji:"EmojiPicker_emoji__jaN-w",previewSkeleton:"EmojiPicker_previewSkeleton__Bjqkm",previewEmoji:"EmojiPicker_previewEmoji__uOLbA",previewName:"EmojiPicker_previewName__QJ47d",tagList:"EmojiPicker_tagList__tc6nv",tag:"EmojiPicker_tag__gAU6B",overlay:"EmojiPicker_overlay__kDT99",content:"EmojiPicker_content__xT6Kl",fullHeight:"EmojiPicker_fullHeight__7kz2H",pluginContainer:"EmojiPicker_pluginContainer__Gz3yT",header:"EmojiPicker_header__eDZPD"};P(`@keyframes EmojiPicker_shine__s-vEs {
  to {
    transform: translateX(100%);
  }
}
.EmojiPicker_picker__19Vln {
  --border-radius: 5px;
  --emoji-area-height: calc(
    (var(--row-count) * var(--emoji-size) * var(--emoji-size-multiplier)) + var(--category-name-height)
  );
  --content-height: var(--emoji-area-height);
  --emojis-per-row: 8;
  --row-count: 6;
  --emoji-preview-margin: 4px;
  --emoji-preview-height: calc(var(--emoji-preview-size) + 1em + 1px);
  --emoji-preview-height-full: calc(var(--emoji-preview-height) + var(--emoji-preview-margin));
  --emoji-preview-size: 2.75em;
  --emoji-size: 2rem;
  --emoji-size-multiplier: 1.3;
  --content-margin: 8px;
  --category-tabs-height: calc(1.5em + 4px + 4px + 1px);
  --category-tabs-offset: 8px;
  --category-tab-size: 1.2rem;
  --category-name-height: 2rem;
  --category-name-padding-y: 6px;
  --search-height: 2em;
  --search-margin: 0.5em;
  --search-margin-bottom: 4px;
  --search-height-full: calc(var(--search-height) + var(--search-margin) + var(--search-margin-bottom));
  --overlay-background-color: rgba(0, 0, 0, 0.8);
  --emoji-font: "Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "Apple Color Emoji", "Twemoji Mozilla",
    "Noto Color Emoji", "EmojiOne Color", "Android Emoji";
  --ui-font: -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif;
  --ui-font-size: 16px;
  --picker-width: calc(var(--emojis-per-row) * var(--emoji-size) * var(--emoji-size-multiplier) + 2.75rem);
  background: var(--background-color);
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  font-family: var(--ui-font);
  font-size: var(--ui-font-size);
  overflow: hidden;
  position: relative;
  width: var(--picker-width);
  display: grid;
  gap: 8px;
}
.EmojiPicker_picker__19Vln > * {
  font-family: var(--ui-font);
}

.EmojiPicker_skeleton__M1a2g {
  background: var(--background-color);
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  font-family: var(--ui-font);
  width: var(--picker-width);
  color: var(--secondary-text-color);
}
.EmojiPicker_skeleton__M1a2g * {
  box-sizing: border-box;
}
.EmojiPicker_skeleton__M1a2g .EmojiPicker_placeholder__YDJn- {
  background: var(--placeholder-background-color);
  position: relative;
  overflow: hidden;
}
.EmojiPicker_skeleton__M1a2g .EmojiPicker_placeholder__YDJn-::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: translateX(-100%);
  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0));
  animation: EmojiPicker_shine__s-vEs 2s infinite;
  content: "";
}
.EmojiPicker_skeleton__M1a2g .EmojiPicker_searchSkeleton__gNgdU {
  padding: 0 8px;
  height: var(--search-height);
}
.EmojiPicker_skeleton__M1a2g .EmojiPicker_searchSkeleton__gNgdU .EmojiPicker_searchInput__tpaBs {
  width: 100%;
  height: 28px;
  border-radius: 3px;
}
.EmojiPicker_skeleton__M1a2g .EmojiPicker_categoryTabsSkeleton__2dISl {
  height: var(--category-tabs-height);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.EmojiPicker_skeleton__M1a2g .EmojiPicker_categoryTabsSkeleton__2dISl .EmojiPicker_categoryTab__mmSVF {
  width: 25px;
  height: 25px;
  padding: 2px;
  border-radius: 5px;
}
.EmojiPicker_skeleton__M1a2g .EmojiPicker_contentSkeleton__UWfQu {
  height: var(--content-height);
  padding-right: 8px;
  opacity: 0.7;
}
.EmojiPicker_skeleton__M1a2g .EmojiPicker_contentSkeleton__UWfQu .EmojiPicker_categoryName__d2-Ed {
  width: 50%;
  height: 1rem;
  margin: 0.5rem;
  box-sizing: border-box;
}
.EmojiPicker_skeleton__M1a2g .EmojiPicker_contentSkeleton__UWfQu .EmojiPicker_emojiGrid__WnoCI {
  display: grid;
  justify-content: space-between;
  gap: 1px;
  padding: 0 0.5em;
  grid-template-columns: repeat(var(--emojis-per-row), calc(var(--emoji-size) * var(--emoji-size-multiplier)));
  grid-auto-rows: calc(var(--emoji-size) * var(--emoji-size-multiplier));
  align-items: center;
  justify-items: center;
}
.EmojiPicker_skeleton__M1a2g .EmojiPicker_contentSkeleton__UWfQu .EmojiPicker_emojiGrid__WnoCI .EmojiPicker_emoji__jaN-w {
  width: var(--emoji-size);
  height: var(--emoji-size);
  border-radius: 50%;
}
.EmojiPicker_skeleton__M1a2g .EmojiPicker_previewSkeleton__Bjqkm {
  height: var(--emoji-preview-height);
  border-top: 1px solid var(--border-color);
  display: grid;
  align-items: center;
  padding: 0.5em;
  gap: 6px;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas: "emoji name" "emoji tags";
}
.EmojiPicker_skeleton__M1a2g .EmojiPicker_previewSkeleton__Bjqkm .EmojiPicker_previewEmoji__uOLbA {
  grid-area: emoji;
  border-radius: 50%;
  width: var(--emoji-preview-size);
  height: var(--emoji-preview-size);
}
.EmojiPicker_skeleton__M1a2g .EmojiPicker_previewSkeleton__Bjqkm .EmojiPicker_previewName__QJ47d {
  grid-area: name;
  width: 12em;
  height: 0.8em;
}
.EmojiPicker_skeleton__M1a2g .EmojiPicker_previewSkeleton__Bjqkm .EmojiPicker_tagList__tc6nv {
  grid-area: tags;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 0;
}
.EmojiPicker_skeleton__M1a2g .EmojiPicker_previewSkeleton__Bjqkm .EmojiPicker_tagList__tc6nv .EmojiPicker_tag__gAU6B {
  border-radius: 3px;
  padding: 2px 8px;
  margin-right: 0.25em;
  height: 1em;
  width: 3em;
}

.EmojiPicker_overlay__kDT99 {
  background: rgba(0, 0, 0, 0.75);
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}

.EmojiPicker_content__xT6Kl {
  position: relative;
  overflow: hidden;
  height: var(--content-height);
}
.EmojiPicker_content__xT6Kl.EmojiPicker_fullHeight__7kz2H {
  height: calc(var(--content-height) + var(--category-tabs-height) + var(--category-tabs-offset));
  overflow-y: auto;
  scrollbar-color: var(--scrollbar-color) var(--scrollbar-background-color);
  scrollbar-width: 8px;
}
.EmojiPicker_content__xT6Kl.EmojiPicker_fullHeight__7kz2H::-webkit-scrollbar {
  background: var(--scrollbar-background-color);
  width: 1.1em;
}
.EmojiPicker_content__xT6Kl.EmojiPicker_fullHeight__7kz2H::-webkit-scrollbar-thumb {
  background: var(--scrollbar-color);
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  background-clip: padding-box;
  height: 1em;
  border-radius: 1em;
}

.EmojiPicker_pluginContainer__Gz3yT {
  margin: 0.5em;
  display: flex;
  flex-direction: row;
}

.EmojiPicker_header__eDZPD {
  background-color: var(--secondary-background-color);
  padding-top: 8px;
  padding-bottom: 8px;
  display: grid;
  gap: 8px;
  border-bottom: 1px solid var(--border-color);
}

@media (prefers-reduced-motion: reduce) {
  .EmojiPicker_placeholder__YDJn- {
    background: var(--placeholder-background-color);
    position: relative;
    overflow: hidden;
  }
  .EmojiPicker_placeholder__YDJn-::after {
    display: none;
  }
}`);const ft={emojisPerRow:"--emojis-per-row",visibleRows:"--row-count",emojiSize:"--emoji-size"};class yn extends f{constructor(){super({template:vn,classes:me}),this.pickerReady=!1,this.externalEvents=new Io}initialize(){this.uiElements={pickerContent:f.byClass(me.content),header:f.byClass(me.header)},this.uiEvents=[f.uiEvent("keydown",this.handleKeyDown)],this.appEvents={error:this.onError,reinitialize:this.reinitialize,"data:ready":this.onDataReady,"content:show":this.showContent,"variantPopup:hide":this.hideVariantPopup,"emoji:select":this.selectEmoji},super.initialize(),this.options.recentsProvider}destroy(){var e,t;super.destroy(),(e=this.search)===null||e===void 0||e.destroy(),this.emojiArea.destroy(),(t=this.categoryTabs)===null||t===void 0||t.destroy(),this.events.removeAll(),this.externalEvents.removeAll()}clearRecents(){this.options.recentsProvider.clear()}addEventListener(e,t){this.externalEvents.on(e,t)}removeEventListener(e,t){this.externalEvents.off(e,t)}initializePickerView(){this.pickerReady&&(this.showContent(),this.emojiArea.reset())}handleKeyDown(e){const t=e.ctrlKey||e.metaKey;e.key==="s"&&t&&this.search&&(e.preventDefault(),this.search.focus())}buildChildViews(){return this.options.showPreview&&(this.preview=this.viewFactory.create(nn)),this.options.showSearch&&(this.search=this.viewFactory.create(an,{categories:this.categories,emojiVersion:this.emojiVersion})),this.options.showCategoryTabs&&(this.categoryTabs=this.viewFactory.create(mn,{categories:this.categories})),this.currentView=this.emojiArea=this.viewFactory.create(Yo,{categoryTabs:this.categoryTabs,categories:this.categories,emojiVersion:this.emojiVersion}),[this.preview,this.search,this.emojiArea,this.categoryTabs]}setStyleProperties(){this.options.showSearch||this.el.style.setProperty("--search-height-full","0px"),this.options.showCategoryTabs||(this.el.style.setProperty("--category-tabs-height","0px"),this.el.style.setProperty("--category-tabs-offset","0px")),this.options.showPreview||this.el.style.setProperty("--emoji-preview-height-full","0px"),Object.keys(ft).forEach(e=>{this.options[e]&&this.el.style.setProperty(ft[e],this.options[e].toString())})}reinitialize(){this.renderSync()}onError(e){const t=this.viewFactory.create(en,{message:this.i18n.get("error.load")}),n=this.el.offsetHeight||375;throw this.el.style.height=`${n}px`,this.el.replaceChildren(t.renderSync()),e}onDataReady(e){const t=Object.create(null,{render:{get:()=>super.render}});return p(this,void 0,void 0,function*(){const n=this.el;try{e?this.emojiData=e:yield this.emojiDataPromise,this.options.emojiVersion==="auto"?this.emojiVersion=pn()||parseFloat("14.0"):this.emojiVersion=this.options.emojiVersion,this.categories=yield this.emojiData.getCategories(this.options);const[i,s,r,a]=this.buildChildViews();yield t.render.call(this,{isLoaded:!0,search:s,categoryTabs:a,emojiArea:r,preview:i,showHeader:Boolean(this.search||this.categoryTabs),theme:this.options.theme,className:this.options.className}),this.el.style.setProperty("--category-count",this.categories.length.toString()),this.pickerReady=!0,n.replaceWith(this.el),this.setStyleProperties(),this.initializePickerView(),this.setInitialFocus(),this.externalEvents.emit("data:ready")}catch(i){this.events.emit("error",i)}})}renderSync(){if(super.renderSync({isLoaded:!1,theme:this.options.theme,showSearch:this.options.showSearch,showPreview:this.options.showPreview,showCategoryTabs:this.options.showCategoryTabs,showHeader:this.options.showSearch||this.options.showCategoryTabs,emojiCount:this.options.emojisPerRow*this.options.visibleRows}),!this.options.rootElement)throw new Error("Picker must be given a root element via the rootElement option");return this.options.rootElement.replaceChildren(this.el),this.setStyleProperties(),this.pickerReady&&this.initializePickerView(),this.el}getInitialFocusTarget(){if(this.options.autoFocus!==void 0)switch(this.options.autoFocus){case"emojis":return this.emojiArea.focusableEmoji;case"search":return this.search;default:return null}if(this.options.autoFocusSearch===!0)return console.warn("options.autoFocusSearch is deprecated, please use options.focusTarget instead"),this.search}setInitialFocus(){var e;this.pickerReady&&((e=this.getInitialFocusTarget())===null||e===void 0||e.focus())}reset(){this.pickerReady&&(this.emojiArea.reset(),this.showContent(this.emojiArea)),this.search&&this.search.clear()}showContent(e=this.emojiArea){var t,n;e!==this.currentView&&(this.currentView!==this.emojiArea&&((t=this.currentView)===null||t===void 0||t.destroy()),this.ui.pickerContent.classList.toggle(me.fullHeight,e!==this.emojiArea),this.ui.pickerContent.replaceChildren(e.el),this.currentView=e,e===this.emojiArea?(this.emojiArea.reset(),this.categoryTabs&&this.ui.header.appendChild(this.categoryTabs.el)):(n=this.categoryTabs)===null||n===void 0||n.el.remove())}hideVariantPopup(){var e;(e=this.variantPopup)===null||e===void 0||e.destroy()}isPickerClick(e){var t,n;const i=e.target,s=this.el.contains(i),r=(n=(t=this.variantPopup)===null||t===void 0?void 0:t.el)===null||n===void 0?void 0:n.contains(i);return s||r}selectEmoji({emoji:e}){var t,n;return p(this,void 0,void 0,function*(){((t=e.skins)===null||t===void 0?void 0:t.length)&&this.options.showVariants&&!this.isVariantPopupOpen?this.showVariantPopup(e):(yield(n=this.variantPopup)===null||n===void 0?void 0:n.animateHide(),this.events.emit("variantPopup:hide"),yield this.emitEmoji(e))})}get isVariantPopupOpen(){return this.variantPopup&&!this.variantPopup.isDestroyed}showVariantPopup(e){return p(this,void 0,void 0,function*(){const t=document.activeElement;this.events.once("variantPopup:hide",()=>{t==null||t.focus()}),this.variantPopup=this.viewFactory.create(ln,{emoji:e,parent:this.el}),this.el.appendChild(this.variantPopup.renderSync()),this.variantPopup.activate()})}emitEmoji(e){return p(this,void 0,void 0,function*(){this.externalEvents.emit("emoji:select",yield this.renderer.doEmit(e)),this.options.recentsProvider.addOrUpdateRecent(e,this.options.maxRecents),this.events.emit("recent:add",e)})}}class wn{constructor({events:e,i18n:t,renderer:n,emojiData:i,options:s,customEmojis:r=[],pickerId:a}){this.events=e,this.i18n=t,this.renderer=n,this.emojiData=i,this.options=s,this.customEmojis=r,this.pickerId=a}setEmojiData(e){this.emojiData=Promise.resolve(e)}create(e,...t){const n=new e(...t);return n.setPickerId(this.pickerId),n.setEvents(this.events),n.setI18n(this.i18n),n.setRenderer(this.renderer),n.setEmojiData(this.emojiData),n.setOptions(this.options),n.setCustomEmojis(this.customEmojis),n.viewFactory=this,n.initialize(),n}}var ve;class bn{constructor(e={}){ve.set(this,void 0),Ie(this,ve,new Map(Object.entries(e)),"f")}get(e,t=e){return C(this,ve,"f").get(e)||t}}ve=new WeakMap;let _n=0;function jn(o){const e=Mt(o),t=((e==null?void 0:e.custom)||[]).map(a=>Object.assign(Object.assign({},a),{custom:!0,tags:["custom",...a.tags||[]]})),n=new Ro,i=function(a){return zt(a.locale,a.dataStore,a.messages,a.emojiData)}(e),s=new bn(e.i18n);i.then(a=>{n.emit("data:ready",a)}).catch(a=>{n.emit("error",a)});const r=new wn({events:n,i18n:s,customEmojis:t,renderer:e.renderer,options:e,emojiData:i,pickerId:`picmo-${Date.now()}-${_n++}`}).create(yn);return r.renderSync(),r}function D(o,e,t,n){return new(t||(t=Promise))(function(i,s){function r(c){try{l(n.next(c))}catch(h){s(h)}}function a(c){try{l(n.throw(c))}catch(h){s(h)}}function l(c){var h;c.done?i(c.value):(h=c.value,h instanceof t?h:new t(function(d){d(h)})).then(r,a)}l((n=n.apply(o,e||[])).next())})}class Cn extends xe{}function G(o){return o.split("-")[0]}function Y(o){return o.split("-")[1]}function Ee(o){return["top","bottom"].includes(G(o))?"x":"y"}function Ot(o){return o==="y"?"height":"width"}function vt(o,e,t){let{reference:n,floating:i}=o;const s=n.x+n.width/2-i.width/2,r=n.y+n.height/2-i.height/2,a=Ee(e),l=Ot(a),c=n[l]/2-i[l]/2,h=a==="x";let d;switch(G(e)){case"top":d={x:s,y:n.y-i.height};break;case"bottom":d={x:s,y:n.y+n.height};break;case"right":d={x:n.x+n.width,y:r};break;case"left":d={x:n.x-i.width,y:r};break;default:d={x:n.x,y:n.y}}switch(Y(e)){case"start":d[a]-=c*(t&&h?-1:1);break;case"end":d[a]+=c*(t&&h?-1:1)}return d}function _e(o){return{...o,top:o.y,left:o.x,right:o.x+o.width,bottom:o.y+o.height}}async function Ye(o,e){var t;e===void 0&&(e={});const{x:n,y:i,platform:s,rects:r,elements:a,strategy:l}=o,{boundary:c="clippingAncestors",rootBoundary:h="viewport",elementContext:d="floating",altBoundary:u=!1,padding:m=0}=e,g=function(y){return typeof y!="number"?function(b){return{top:0,right:0,bottom:0,left:0,...b}}(y):{top:y,right:y,bottom:y,left:y}}(m),v=a[u?d==="floating"?"reference":"floating":d],w=_e(await s.getClippingRect({element:(t=await(s.isElement==null?void 0:s.isElement(v)))==null||t?v:v.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(a.floating)),boundary:c,rootBoundary:h,strategy:l})),j=_e(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({rect:d==="floating"?{...r.floating,x:n,y:i}:r.reference,offsetParent:await(s.getOffsetParent==null?void 0:s.getOffsetParent(a.floating)),strategy:l}):r[d]);return{top:w.top-j.top+g.top,bottom:j.bottom-w.bottom+g.bottom,left:w.left-j.left+g.left,right:j.right-w.right+g.right}}const kn=Math.min,xn=Math.max;function yt(o,e,t){return xn(o,kn(e,t))}const En={left:"right",right:"left",bottom:"top",top:"bottom"};function je(o){return o.replace(/left|right|bottom|top/g,e=>En[e])}function Vt(o,e,t){t===void 0&&(t=!1);const n=Y(o),i=Ee(o),s=Ot(i);let r=i==="x"?n===(t?"end":"start")?"right":"left":n==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(r=je(r)),{main:r,cross:je(r)}}const Pn={start:"end",end:"start"};function We(o){return o.replace(/start|end/g,e=>Pn[e])}const Sn=["top","right","bottom","left"].reduce((o,e)=>o.concat(e,e+"-start",e+"-end"),[]),Ln=function(o){return o===void 0&&(o={}),{name:"autoPlacement",options:o,async fn(e){var t,n,i,s,r;const{x:a,y:l,rects:c,middlewareData:h,placement:d,platform:u,elements:m}=e,{alignment:g=null,allowedPlacements:v=Sn,autoAlignment:w=!0,...j}=o,y=function(z,X,Z){return(z?[...Z.filter(T=>Y(T)===z),...Z.filter(T=>Y(T)!==z)]:Z.filter(T=>G(T)===T)).filter(T=>!z||Y(T)===z||!!X&&We(T)!==T)}(g,w,v),b=await Ye(e,j),k=(t=(n=h.autoPlacement)==null?void 0:n.index)!=null?t:0,_=y[k];if(_==null)return{};const{main:E,cross:S}=Vt(_,c,await(u.isRTL==null?void 0:u.isRTL(m.floating)));if(d!==_)return{x:a,y:l,reset:{placement:y[0]}};const L=[b[G(_)],b[E],b[S]],$=[...(i=(s=h.autoPlacement)==null?void 0:s.overflows)!=null?i:[],{placement:_,overflows:L}],N=y[k+1];if(N)return{data:{index:k+1,overflows:$},reset:{placement:N}};const Q=$.slice().sort((z,X)=>z.overflows[0]-X.overflows[0]),U=(r=Q.find(z=>{let{overflows:X}=z;return X.every(Z=>Z<=0)}))==null?void 0:r.placement,O=U!=null?U:Q[0].placement;return O!==d?{data:{index:k+1,overflows:$},reset:{placement:O}}:{}}}},$n=function(o){return o===void 0&&(o={}),{name:"flip",options:o,async fn(e){var t;const{placement:n,middlewareData:i,rects:s,initialPlacement:r,platform:a,elements:l}=e,{mainAxis:c=!0,crossAxis:h=!0,fallbackPlacements:d,fallbackStrategy:u="bestFit",flipAlignment:m=!0,...g}=o,v=G(n),w=d||(v===r||!m?[je(r)]:function(L){const $=je(L);return[We(L),$,We($)]}(r)),j=[r,...w],y=await Ye(e,g),b=[];let k=((t=i.flip)==null?void 0:t.overflows)||[];if(c&&b.push(y[v]),h){const{main:L,cross:$}=Vt(n,s,await(a.isRTL==null?void 0:a.isRTL(l.floating)));b.push(y[L],y[$])}if(k=[...k,{placement:n,overflows:b}],!b.every(L=>L<=0)){var _,E;const L=((_=(E=i.flip)==null?void 0:E.index)!=null?_:0)+1,$=j[L];if($)return{data:{index:L,overflows:k},reset:{placement:$}};let N="bottom";switch(u){case"bestFit":{var S;const Q=(S=k.map(U=>[U,U.overflows.filter(O=>O>0).reduce((O,z)=>O+z,0)]).sort((U,O)=>U[1]-O[1])[0])==null?void 0:S[0].placement;Q&&(N=Q);break}case"initialPlacement":N=r}if(n!==N)return{reset:{placement:N}}}return{}}}},wt=function(o){return o===void 0&&(o=0),{name:"offset",options:o,async fn(e){const{x:t,y:n}=e,i=await async function(s,r){const{placement:a,platform:l,elements:c}=s,h=await(l.isRTL==null?void 0:l.isRTL(c.floating)),d=G(a),u=Y(a),m=Ee(a)==="x",g=["left","top"].includes(d)?-1:1,v=h&&m?-1:1,w=typeof r=="function"?r(s):r;let{mainAxis:j,crossAxis:y,alignmentAxis:b}=typeof w=="number"?{mainAxis:w,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...w};return u&&typeof b=="number"&&(y=u==="end"?-1*b:b),m?{x:y*v,y:j*g}:{x:j*g,y:y*v}}(e,o);return{x:t+i.x,y:n+i.y,data:i}}}},bt=function(o){return o===void 0&&(o={}),{name:"shift",options:o,async fn(e){const{x:t,y:n,placement:i}=e,{mainAxis:s=!0,crossAxis:r=!1,limiter:a={fn:w=>{let{x:j,y}=w;return{x:j,y}}},...l}=o,c={x:t,y:n},h=await Ye(e,l),d=Ee(G(i)),u=d==="x"?"y":"x";let m=c[d],g=c[u];if(s){const w=d==="y"?"bottom":"right";m=yt(m+h[d==="y"?"top":"left"],m,m-h[w])}if(r){const w=u==="y"?"bottom":"right";g=yt(g+h[u==="y"?"top":"left"],g,g-h[w])}const v=a.fn({...e,[d]:m,[u]:g});return{...v,data:{x:v.x-t,y:v.y-n}}}}};function Dt(o){return o&&o.document&&o.location&&o.alert&&o.setInterval}function I(o){if(o==null)return window;if(!Dt(o)){const e=o.ownerDocument;return e&&e.defaultView||window}return o}function de(o){return I(o).getComputedStyle(o)}function M(o){return Dt(o)?"":o?(o.nodeName||"").toLowerCase():""}function Bt(){const o=navigator.userAgentData;return o!=null&&o.brands?o.brands.map(e=>e.brand+"/"+e.version).join(" "):navigator.userAgent}function A(o){return o instanceof I(o).HTMLElement}function H(o){return o instanceof I(o).Element}function Qe(o){return typeof ShadowRoot>"u"?!1:o instanceof I(o).ShadowRoot||o instanceof ShadowRoot}function Pe(o){const{overflow:e,overflowX:t,overflowY:n}=de(o);return/auto|scroll|overlay|hidden/.test(e+n+t)}function zn(o){return["table","td","th"].includes(M(o))}function _t(o){const e=/firefox/i.test(Bt()),t=de(o);return t.transform!=="none"||t.perspective!=="none"||t.contain==="paint"||["transform","perspective"].includes(t.willChange)||e&&t.willChange==="filter"||e&&!!t.filter&&t.filter!=="none"}function Ht(){return!/^((?!chrome|android).)*safari/i.test(Bt())}const jt=Math.min,ae=Math.max,Ce=Math.round;function R(o,e,t){var n,i,s,r;e===void 0&&(e=!1),t===void 0&&(t=!1);const a=o.getBoundingClientRect();let l=1,c=1;e&&A(o)&&(l=o.offsetWidth>0&&Ce(a.width)/o.offsetWidth||1,c=o.offsetHeight>0&&Ce(a.height)/o.offsetHeight||1);const h=H(o)?I(o):window,d=!Ht()&&t,u=(a.left+(d&&(n=(i=h.visualViewport)==null?void 0:i.offsetLeft)!=null?n:0))/l,m=(a.top+(d&&(s=(r=h.visualViewport)==null?void 0:r.offsetTop)!=null?s:0))/c,g=a.width/l,v=a.height/c;return{width:g,height:v,top:m,right:u+g,bottom:m+v,left:u,x:u,y:m}}function B(o){return(e=o,(e instanceof I(e).Node?o.ownerDocument:o.document)||window.document).documentElement;var e}function Se(o){return H(o)?{scrollLeft:o.scrollLeft,scrollTop:o.scrollTop}:{scrollLeft:o.pageXOffset,scrollTop:o.pageYOffset}}function Nt(o){return R(B(o)).left+Se(o).scrollLeft}function Tn(o,e,t){const n=A(e),i=B(e),s=R(o,n&&function(l){const c=R(l);return Ce(c.width)!==l.offsetWidth||Ce(c.height)!==l.offsetHeight}(e),t==="fixed");let r={scrollLeft:0,scrollTop:0};const a={x:0,y:0};if(n||!n&&t!=="fixed")if((M(e)!=="body"||Pe(i))&&(r=Se(e)),A(e)){const l=R(e,!0);a.x=l.x+e.clientLeft,a.y=l.y+e.clientTop}else i&&(a.x=Nt(i));return{x:s.left+r.scrollLeft-a.x,y:s.top+r.scrollTop-a.y,width:s.width,height:s.height}}function Ut(o){return M(o)==="html"?o:o.assignedSlot||o.parentNode||(Qe(o)?o.host:null)||B(o)}function Ct(o){return A(o)&&getComputedStyle(o).position!=="fixed"?o.offsetParent:null}function Ge(o){const e=I(o);let t=Ct(o);for(;t&&zn(t)&&getComputedStyle(t).position==="static";)t=Ct(t);return t&&(M(t)==="html"||M(t)==="body"&&getComputedStyle(t).position==="static"&&!_t(t))?e:t||function(n){let i=Ut(n);for(Qe(i)&&(i=i.host);A(i)&&!["html","body"].includes(M(i));){if(_t(i))return i;i=i.parentNode}return null}(o)||e}function kt(o){if(A(o))return{width:o.offsetWidth,height:o.offsetHeight};const e=R(o);return{width:e.width,height:e.height}}function Kt(o){const e=Ut(o);return["html","body","#document"].includes(M(e))?o.ownerDocument.body:A(e)&&Pe(e)?e:Kt(e)}function ke(o,e){var t;e===void 0&&(e=[]);const n=Kt(o),i=n===((t=o.ownerDocument)==null?void 0:t.body),s=I(n),r=i?[s].concat(s.visualViewport||[],Pe(n)?n:[]):n,a=e.concat(r);return i?a:a.concat(ke(r))}function xt(o,e,t){return e==="viewport"?_e(function(n,i){const s=I(n),r=B(n),a=s.visualViewport;let l=r.clientWidth,c=r.clientHeight,h=0,d=0;if(a){l=a.width,c=a.height;const u=Ht();(u||!u&&i==="fixed")&&(h=a.offsetLeft,d=a.offsetTop)}return{width:l,height:c,x:h,y:d}}(o,t)):H(e)?function(n,i){const s=R(n,!1,i==="fixed"),r=s.top+n.clientTop,a=s.left+n.clientLeft;return{top:r,left:a,x:a,y:r,right:a+n.clientWidth,bottom:r+n.clientHeight,width:n.clientWidth,height:n.clientHeight}}(e,t):_e(function(n){var i;const s=B(n),r=Se(n),a=(i=n.ownerDocument)==null?void 0:i.body,l=ae(s.scrollWidth,s.clientWidth,a?a.scrollWidth:0,a?a.clientWidth:0),c=ae(s.scrollHeight,s.clientHeight,a?a.scrollHeight:0,a?a.clientHeight:0);let h=-r.scrollLeft+Nt(n);const d=-r.scrollTop;return de(a||s).direction==="rtl"&&(h+=ae(s.clientWidth,a?a.clientWidth:0)-l),{width:l,height:c,x:h,y:d}}(B(o)))}function An(o){const e=ke(o),t=["absolute","fixed"].includes(de(o).position)&&A(o)?Ge(o):o;return H(t)?e.filter(n=>H(n)&&function(i,s){const r=s.getRootNode==null?void 0:s.getRootNode();if(i.contains(s))return!0;if(r&&Qe(r)){let a=s;do{if(a&&i===a)return!0;a=a.parentNode||a.host}while(a)}return!1}(n,t)&&M(n)!=="body"):[]}const Fn={getClippingRect:function(o){let{element:e,boundary:t,rootBoundary:n,strategy:i}=o;const s=[...t==="clippingAncestors"?An(e):[].concat(t),n],r=s[0],a=s.reduce((l,c)=>{const h=xt(e,c,i);return l.top=ae(h.top,l.top),l.right=jt(h.right,l.right),l.bottom=jt(h.bottom,l.bottom),l.left=ae(h.left,l.left),l},xt(e,r,i));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(o){let{rect:e,offsetParent:t,strategy:n}=o;const i=A(t),s=B(t);if(t===s)return e;let r={scrollLeft:0,scrollTop:0};const a={x:0,y:0};if((i||!i&&n!=="fixed")&&((M(t)!=="body"||Pe(s))&&(r=Se(t)),A(t))){const l=R(t,!0);a.x=l.x+t.clientLeft,a.y=l.y+t.clientTop}return{...e,x:e.x-r.scrollLeft+a.x,y:e.y-r.scrollTop+a.y}},isElement:H,getDimensions:kt,getOffsetParent:Ge,getDocumentElement:B,getElementRects:o=>{let{reference:e,floating:t,strategy:n}=o;return{reference:Tn(e,Ge(t),n),floating:{...kt(t),x:0,y:0}}},getClientRects:o=>Array.from(o.getClientRects()),isRTL:o=>de(o).direction==="rtl"},Mn=(o,e,t)=>(async(n,i,s)=>{const{placement:r="bottom",strategy:a="absolute",middleware:l=[],platform:c}=s,h=await(c.isRTL==null?void 0:c.isRTL(i));let d=await c.getElementRects({reference:n,floating:i,strategy:a}),{x:u,y:m}=vt(d,r,h),g=r,v={},w=0;for(let j=0;j<l.length;j++){const{name:y,fn:b}=l[j],{x:k,y:_,data:E,reset:S}=await b({x:u,y:m,initialPlacement:r,placement:g,strategy:a,middlewareData:v,rects:d,platform:c,elements:{reference:n,floating:i}});u=k!=null?k:u,m=_!=null?_:m,v={...v,[y]:{...v[y],...E}},S&&w<=50&&(w++,typeof S=="object"&&(S.placement&&(g=S.placement),S.rects&&(d=S.rects===!0?await c.getElementRects({reference:n,floating:i,strategy:a}):S.rects),{x:u,y:m}=vt(d,g,h)),j=-1)}return{x:u,y:m,placement:g,strategy:a,middlewareData:v}})(o,e,{platform:Fn,...t});function Rn(o,e,t){return D(this,void 0,void 0,function*(){if(!t)throw new Error("Must provide a positioning option");return yield typeof t=="string"?function(n,i,s){return D(this,void 0,void 0,function*(){if(!i)throw new Error("Reference element is required for relative positioning");let r;return r=s==="auto"?{middleware:[Ln(),bt(),wt({mainAxis:5,crossAxis:12})]}:{placement:s,middleware:[$n(),bt(),wt(5)]},function(a,l,c,h){h===void 0&&(h={});const{ancestorScroll:d=!0,ancestorResize:u=!0,elementResize:m=!0,animationFrame:g=!1}=h,v=d&&!g,w=u&&!g,j=v||w?[...H(a)?ke(a):[],...ke(l)]:[];j.forEach(_=>{v&&_.addEventListener("scroll",c,{passive:!0}),w&&_.addEventListener("resize",c)});let y,b=null;if(m){let _=!0;b=new ResizeObserver(()=>{_||c(),_=!1}),H(a)&&!g&&b.observe(a),b.observe(l)}let k=g?R(a):null;return g&&function _(){const E=R(a);!k||E.x===k.x&&E.y===k.y&&E.width===k.width&&E.height===k.height||c(),k=E,y=requestAnimationFrame(_)}(),c(),()=>{var _;j.forEach(E=>{v&&E.removeEventListener("scroll",c),w&&E.removeEventListener("resize",c)}),(_=b)==null||_.disconnect(),b=null,g&&cancelAnimationFrame(y)}}(i,n,()=>D(this,void 0,void 0,function*(){const{x:a,y:l}=yield Mn(i,n,r);Object.assign(n.style,{position:"absolute",left:`${a}px`,top:`${l}px`})}))})}(o,e,t):function(n,i){return n.style.position="fixed",Object.entries(i).forEach(([s,r])=>{n.style[s]=r}),()=>{}}(o,t)})}const In={hideOnClickOutside:!0,hideOnEmojiSelect:!0,hideOnEscape:!0,position:"auto",showCloseButton:!0};var On="popupPicker_popupContainer__-DboI",Vn="popupPicker_closeButton__j1nuQ";(function(o,e){e===void 0&&(e={});var t=e.insertAt;if(o&&typeof document<"u"){var n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",t==="top"&&n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i),i.styleSheet?i.styleSheet.cssText=o:i.appendChild(document.createTextNode(o))}})(`.popupPicker_popupContainer__-DboI {
  display: flex;
  flex-direction: column;
  position: absolute;
}

.popupPicker_closeButton__j1nuQ {
  position: absolute;
  opacity: 0;
  background: transparent;
  border: none;
  z-index: 1;
  right: 0;
  top: 0;
  cursor: pointer;
  padding: 4px;
  align-self: flex-end;
  transform: translate(50%, -50%);
  background: #999999;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}
.popupPicker_closeButton__j1nuQ:hover {
  background: var(--accent-color);
}
.popupPicker_closeButton__j1nuQ svg {
  fill: white;
  width: 1.25rem;
  height: 1.25rem;
}`);class Dn{constructor(e,t){this.isOpen=!1,this.externalEvents=new Cn,this.options=Object.assign(Object.assign({},function(i={}){return Object.assign(Object.assign(Object.assign({},In),{rootElement:document.body}),i)}(t)),Mt(e)),this.popupEl=document.createElement("div"),this.popupEl.classList.add(On),this.popupEl.classList.add(this.options.theme),t.className&&this.popupEl.classList.add(t.className),this.options.showCloseButton&&(this.closeButton=document.createElement("button"),this.closeButton.classList.add(Vn),this.closeButton.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg>',this.popupEl.appendChild(this.closeButton));const n=document.createElement("div");this.popupEl.appendChild(n),this.picker=jn(Object.assign(Object.assign({},this.options),{rootElement:n})),this.focusTrap=new Tt,this.picker.addEventListener("data:ready",()=>{this.focusTrap.activate(this.picker.el),this.picker.setInitialFocus()}),this.options.hideOnEmojiSelect&&this.picker.addEventListener("emoji:select",()=>{this.close()}),this.options.hideOnClickOutside&&(this.onDocumentClick=this.onDocumentClick.bind(this),document.addEventListener("click",this.onDocumentClick)),this.options.hideOnEscape&&(this.handleKeydown=this.handleKeydown.bind(this),this.popupEl.addEventListener("keydown",this.handleKeydown))}addEventListener(e,t){this.externalEvents.on(e,t),this.picker.addEventListener(e,t)}removeEventListener(e,t){this.externalEvents.off(e,t),this.picker.removeEventListener(e,t)}handleKeydown(e){e.key==="Escape"&&this.close()}destroy(){return D(this,void 0,void 0,function*(){this.isOpen&&(yield this.close()),document.removeEventListener("click",this.onDocumentClick),this.picker.destroy(),this.externalEvents.removeAll()})}toggle(){return this.isOpen?this.close():this.open()}open(){return D(this,void 0,void 0,function*(){this.isOpen||(yield this.initiateOpenStateChange(!0),this.options.rootElement.appendChild(this.popupEl),yield this.setPosition(),this.picker.reset(),yield this.animatePopup(!0),yield this.animateCloseButton(!0),this.picker.setInitialFocus(),this.externalEvents.emit("picker:open"))})}close(){var e,t;return D(this,void 0,void 0,function*(){this.isOpen&&(yield this.initiateOpenStateChange(!1),yield this.animateCloseButton(!1),yield this.animatePopup(!1),this.popupEl.remove(),this.picker.reset(),(e=this.positionCleanup)===null||e===void 0||e.call(this),this.focusTrap.deactivate(),(t=this.options.triggerElement)===null||t===void 0||t.focus(),this.externalEvents.emit("picker:close"))})}getRunningAnimations(){return this.picker.el.getAnimations().filter(e=>e.playState==="running")}setPosition(){var e;return D(this,void 0,void 0,function*(){(e=this.positionCleanup)===null||e===void 0||e.call(this),this.positionCleanup=yield Rn(this.popupEl,this.options.referenceElement,this.options.position)})}awaitPendingAnimations(){return Promise.all(this.getRunningAnimations().map(e=>e.finished))}onDocumentClick(e){var t;const n=e.target,i=(t=this.options.triggerElement)===null||t===void 0?void 0:t.contains(n);!this.isOpen||this.picker.isPickerClick(e)||i||this.close()}animatePopup(e){return J(this.picker.el,{opacity:[0,1],transform:["scale(0.9)","scale(1)"]},{duration:150,id:e?"show-picker":"hide-picker",easing:"ease-in-out",direction:e?"normal":"reverse",fill:"both"},this.options)}animateCloseButton(e){if(this.closeButton)return J(this.closeButton,{opacity:[0,1]},{duration:25,id:e?"show-close":"hide-close",easing:"ease-in-out",direction:e?"normal":"reverse",fill:"both"},this.options)}initiateOpenStateChange(e){return D(this,void 0,void 0,function*(){this.isOpen=e,yield this.awaitPendingAnimations()})}}function Bn(o,e){return new Dn(o,e)}function Hn(o){let e,t,n,i,s,r,a,l,c,h,d;return{c(){e=ee("main"),t=ee("textarea"),i=Le(),s=ee("br"),r=Le(),a=ee("button"),a.textContent="Emoji",l=Le(),c=ee("button"),c.textContent="Save",F(t,"id","movies"),F(t,"rows",n=o[0].split(`
`).length+5+","),F(t,"cols","90"),F(t,"class","svelte-1nd66lh"),F(a,"id","emoji"),F(a,"class","svelte-1nd66lh"),F(c,"class","svelte-1nd66lh"),F(e,"class","svelte-1nd66lh")},m(u,m){Qt(u,e,m),K(e,t),Ze(t,o[0]),K(e,i),K(e,s),K(e,r),K(e,a),K(e,l),K(e,c),h||(d=[$e(t,"input",o[2]),$e(a,"click",o[3]),$e(c,"click",Un)],h=!0)},p(u,[m]){m&1&&n!==(n=u[0].split(`
`).length+5+",")&&F(t,"rows",n),m&1&&Ze(t,u[0])},i:ye,o:ye,d(u){u&&Pt(e),h=!1,le(d)}}}const qt="https://movies.ikottman.workers.dev/";function Nn(o){const e=document.getElementById("movies"),t=o.emoji;if(e.selectionStart||e.selectionStart=="0"){var n=e.selectionStart,i=e.selectionEnd;e.value=e.value.substring(0,n)+t+e.value.substring(i,e.value.length)}else e.value+=t}async function Un(){const o=document.getElementById("movies").value;await fetch(qt,{method:"POST",body:o})}function Kn(o,e,t){let n="",i;to(async()=>{await fetch(qt).then(l=>l.text()).then(l=>t(0,n=l));const a=document.getElementById("emoji");t(1,i=Bn({showVariants:!1},{triggerElement:a,referenceElement:a,position:"bottom-start"})),i.addEventListener("emoji:select",Nn)});function s(){n=this.value,t(0,n)}return[n,i,s,()=>i.toggle()]}class qn extends uo{constructor(e){super(),ho(this,e,Kn,Hn,Jt,{})}}new qn({target:document.getElementById("app")});
