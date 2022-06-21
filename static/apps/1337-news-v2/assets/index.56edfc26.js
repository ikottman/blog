const fe=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}};fe();function b(){}function te(t){return t()}function J(){return Object.create(null)}function P(t){t.forEach(te)}function ue(t){return typeof t=="function"}function H(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function ae(t){return Object.keys(t).length===0}function d(t,e){t.appendChild(e)}function y(t,e,n){t.insertBefore(e,n||null)}function g(t){t.parentNode.removeChild(t)}function ne(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function h(t){return document.createElement(t)}function $(t){return document.createTextNode(t)}function w(){return $(" ")}function de(){return $("")}function m(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function _e(t){return Array.from(t.childNodes)}function j(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let M;function A(t){M=t}function me(){if(!M)throw new Error("Function called outside component initialization");return M}function he(t){me().$$.on_mount.push(t)}const N=[],Q=[],R=[],V=[],pe=Promise.resolve();let U=!1;function ge(){U||(U=!0,pe.then(le))}function D(t){R.push(t)}const K=new Set;let F=0;function le(){const t=M;do{for(;F<N.length;){const e=N[F];F++,A(e),$e(e.$$)}for(A(null),N.length=0,F=0;Q.length;)Q.pop()();for(let e=0;e<R.length;e+=1){const n=R[e];K.has(n)||(K.add(n),n())}R.length=0}while(N.length);for(;V.length;)V.pop()();U=!1,K.clear(),A(t)}function $e(t){if(t.fragment!==null){t.update(),P(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(D)}}const z=new Set;let L;function re(){L={r:0,c:[],p:L}}function oe(){L.r||P(L.c),L=L.p}function k(t,e){t&&t.i&&(z.delete(t),t.i(e))}function E(t,e,n,l){if(t&&t.o){if(z.has(t))return;z.add(t),L.c.push(()=>{z.delete(t),l&&(n&&t.d(1),l())}),t.o(e)}}function G(t){t&&t.c()}function O(t,e,n,l){const{fragment:r,on_mount:s,on_destroy:o,after_update:f}=t.$$;r&&r.m(e,n),l||D(()=>{const i=s.map(te).filter(ue);o?o.push(...i):P(i),t.$$.on_mount=[]}),f.forEach(D)}function T(t,e){const n=t.$$;n.fragment!==null&&(P(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ye(t,e){t.$$.dirty[0]===-1&&(N.push(t),ge(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function C(t,e,n,l,r,s,o,f=[-1]){const i=M;A(t);const c=t.$$={fragment:null,ctx:null,props:s,update:b,not_equal:r,bound:J(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(i?i.$$.context:[])),callbacks:J(),dirty:f,skip_bound:!1,root:e.target||i.$$.root};o&&o(c.root);let u=!1;if(c.ctx=n?n(t,e.props||{},(a,_,...p)=>{const S=p.length?p[0]:_;return c.ctx&&r(c.ctx[a],c.ctx[a]=S)&&(!c.skip_bound&&c.bound[a]&&c.bound[a](S),u&&ye(t,a)),_}):[],c.update(),u=!0,P(c.before_update),c.fragment=l?l(c.ctx):!1,e.target){if(e.hydrate){const a=_e(e.target);c.fragment&&c.fragment.l(a),a.forEach(g)}else c.fragment&&c.fragment.c();e.intro&&k(t.$$.fragment),O(t,e.target,e.anchor,e.customElement),le()}A(i)}class q{$destroy(){T(this,1),this.$destroy=b}$on(e,n){const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(n),()=>{const r=l.indexOf(n);r!==-1&&l.splice(r,1)}}$set(e){this.$$set&&!ae(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function ve(t){let e;return{c(){e=h("h3"),e.innerHTML='<a href="?page=0#stories" class="svelte-1dgmmpj">1337 News</a>'},m(n,l){y(n,e,l)},p:b,i:b,o:b,d(n){n&&g(e)}}}class be extends q{constructor(e){super(),C(this,e,null,ve,H,{})}}function ke(){const t=new URLSearchParams(window.location.search).get("page");return t?Number.parseInt(t):0}function se(t){return fetch(`https://hacker-news.firebaseio.com/v0/${t}`).then(e=>e.json())}function ie(t){return se(`item/${t}.json`)}function ce(t,e,n){return Promise.all(t.slice(e*n,(e+1)*n).map(ie)).then(l=>l.filter(Boolean))}const we=30;function je(t){const e=ke();return se(`${t}stories.json`).then(n=>ce(n,e,we))}function Ee(t){let e,n,l=t[0].title+"",r,s,o,f,i,c,u=t[0].descendants?`${t[0].descendants}`:"0",a,_,p=t[0].descendants===1?"comment":"comments",S,B;return{c(){e=h("li"),n=h("a"),r=$(l),o=w(),f=h("br"),i=w(),c=h("a"),a=$(u),_=w(),S=$(p),m(n,"href",s=t[0].url),m(n,"class","svelte-1926qjf"),m(c,"class","comments svelte-1926qjf"),m(c,"href",B=`#comments/${t[0].id}`),m(e,"class","svelte-1926qjf")},m(v,I){y(v,e,I),d(e,n),d(n,r),d(e,o),d(e,f),d(e,i),d(e,c),d(c,a),d(c,_),d(c,S)},p(v,[I]){I&1&&l!==(l=v[0].title+"")&&j(r,l),I&1&&s!==(s=v[0].url)&&m(n,"href",s),I&1&&u!==(u=v[0].descendants?`${v[0].descendants}`:"0")&&j(a,u),I&1&&p!==(p=v[0].descendants===1?"comment":"comments")&&j(S,p),I&1&&B!==(B=`#comments/${v[0].id}`)&&m(c,"href",B)},i:b,o:b,d(v){v&&g(e)}}}function Ie(t,e,n){let{story:l}=e;return t.$$set=r=>{"story"in r&&n(0,l=r.story)},[l]}class Le extends q{constructor(e){super(),C(this,e,Ie,Ee,H,{story:0})}}function W(t,e,n){const l=t.slice();return l[1]=e[n],l}function X(t){let e,n,l,r;return e=new Le({props:{story:t[1]}}),{c(){G(e.$$.fragment),n=w(),l=h("div"),m(l,"class","divider svelte-g0ap0j")},m(s,o){O(e,s,o),y(s,n,o),y(s,l,o),r=!0},p(s,o){const f={};o&1&&(f.story=s[1]),e.$set(f)},i(s){r||(k(e.$$.fragment,s),r=!0)},o(s){E(e.$$.fragment,s),r=!1},d(s){T(e,s),s&&g(n),s&&g(l)}}}function Se(t){let e,n,l=t[0],r=[];for(let o=0;o<l.length;o+=1)r[o]=X(W(t,l,o));const s=o=>E(r[o],1,1,()=>{r[o]=null});return{c(){e=h("ul");for(let o=0;o<r.length;o+=1)r[o].c();m(e,"class","svelte-g0ap0j")},m(o,f){y(o,e,f);for(let i=0;i<r.length;i+=1)r[i].m(e,null);n=!0},p(o,[f]){if(f&1){l=o[0];let i;for(i=0;i<l.length;i+=1){const c=W(o,l,i);r[i]?(r[i].p(c,f),k(r[i],1)):(r[i]=X(c),r[i].c(),k(r[i],1),r[i].m(e,null))}for(re(),i=l.length;i<r.length;i+=1)s(i);oe()}},i(o){if(!n){for(let f=0;f<l.length;f+=1)k(r[f]);n=!0}},o(o){r=r.filter(Boolean);for(let f=0;f<r.length;f+=1)E(r[f]);n=!1},d(o){o&&g(e),ne(r,o)}}}function Ne(t,e,n){let l=[];return he(async()=>{n(0,l=await je("top"))}),[l]}class Ae extends q{constructor(e){super(),C(this,e,Ne,Se,H,{})}}function Y(t,e,n){const l=t.slice();return l[3]=e[n],l}function Z(t){let e,n,l=t[0].title+"",r,s;return{c(){e=h("li"),n=h("a"),r=$(l),m(n,"href",s=t[0].url),m(n,"class","svelte-12kunyc"),m(e,"class","svelte-12kunyc")},m(o,f){y(o,e,f),d(e,n),d(n,r)},p(o,f){f&1&&l!==(l=o[0].title+"")&&j(r,l),f&1&&s!==(s=o[0].url)&&m(n,"href",s)},d(o){o&&g(e)}}}function x(t){let e,n,l,r=t[3].text+"",s,o,f;function i(a,_){return a[3].kids?Pe:Me}let c=i(t),u=c(t);return{c(){e=h("li"),u.c(),n=w(),l=h("p"),s=w(),o=h("div"),o.innerHTML='<div class="divider svelte-12kunyc"></div>',f=w(),m(l,"class","comment svelte-12kunyc"),m(e,"class","svelte-12kunyc")},m(a,_){y(a,e,_),u.m(e,null),d(e,n),d(e,l),l.innerHTML=r,d(e,s),d(e,o),d(e,f)},p(a,_){c===(c=i(a))&&u?u.p(a,_):(u.d(1),u=c(a),u&&(u.c(),u.m(e,n))),_&2&&r!==(r=a[3].text+"")&&(l.innerHTML=r)},d(a){a&&g(e),u.d()}}}function Me(t){let e,n=t[3].by+"",l;return{c(){e=h("span"),l=$(n),m(e,"class","username svelte-12kunyc")},m(r,s){y(r,e,s),d(e,l)},p(r,s){s&2&&n!==(n=r[3].by+"")&&j(l,n)},d(r){r&&g(e)}}}function Pe(t){let e,n,l=t[3].by+"",r,s,o=t[3].kids.length+"",f,i,c=t[3].kids.length===1?"comment":"comments",u,a;return{c(){e=h("a"),n=h("span"),r=$(l),s=$(" - "),f=$(o),i=$(" child "),u=$(c),m(e,"class","username svelte-12kunyc"),m(e,"href",a=`#comments/${t[3].id}`)},m(_,p){y(_,e,p),d(e,n),d(n,r),d(n,s),d(n,f),d(n,i),d(n,u)},p(_,p){p&2&&l!==(l=_[3].by+"")&&j(r,l),p&2&&o!==(o=_[3].kids.length+"")&&j(f,o),p&2&&c!==(c=_[3].kids.length===1?"comment":"comments")&&j(u,c),p&2&&a!==(a=`#comments/${_[3].id}`)&&m(e,"href",a)},d(_){_&&g(e)}}}function ee(t){let e,n=t[3].text&&x(t);return{c(){n&&n.c(),e=de()},m(l,r){n&&n.m(l,r),y(l,e,r)},p(l,r){l[3].text?n?n.p(l,r):(n=x(l),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(l){n&&n.d(l),l&&g(e)}}}function He(t){let e,n,l=t[0].title&&Z(t),r=t[1],s=[];for(let o=0;o<r.length;o+=1)s[o]=ee(Y(t,r,o));return{c(){e=h("ul"),l&&l.c(),n=w();for(let o=0;o<s.length;o+=1)s[o].c();m(e,"class","svelte-12kunyc")},m(o,f){y(o,e,f),l&&l.m(e,null),d(e,n);for(let i=0;i<s.length;i+=1)s[i].m(e,null)},p(o,[f]){if(o[0].title?l?l.p(o,f):(l=Z(o),l.c(),l.m(e,n)):l&&(l.d(1),l=null),f&2){r=o[1];let i;for(i=0;i<r.length;i+=1){const c=Y(o,r,i);s[i]?s[i].p(c,f):(s[i]=ee(c),s[i].c(),s[i].m(e,null))}for(;i<s.length;i+=1)s[i].d(1);s.length=r.length}},i:b,o:b,d(o){o&&g(e),l&&l.d(),ne(s,o)}}}function Oe(t,e,n){let{storyId:l}=e,r={title:"",url:""},s=[];return t.$$set=o=>{"storyId"in o&&n(2,l=o.storyId)},t.$$.update=()=>{t.$$.dirty&5&&ie(l).then(o=>n(0,r=o)).then(()=>ce(r.kids,0,30)).then(o=>n(1,s=o))},[r,s,l]}class Te extends q{constructor(e){super(),C(this,e,Oe,He,H,{storyId:2})}}function Ce(t){let e,n;return e=new Te({props:{storyId:t[1]}}),{c(){G(e.$$.fragment)},m(l,r){O(e,l,r),n=!0},p(l,r){const s={};r&2&&(s.storyId=l[1]),e.$set(s)},i(l){n||(k(e.$$.fragment,l),n=!0)},o(l){E(e.$$.fragment,l),n=!1},d(l){T(e,l)}}}function qe(t){let e,n;return e=new Ae({}),{c(){G(e.$$.fragment)},m(l,r){O(e,l,r),n=!0},p:b,i(l){n||(k(e.$$.fragment,l),n=!0)},o(l){E(e.$$.fragment,l),n=!1},d(l){T(e,l)}}}function Be(t){let e,n,l,r,s,o;n=new be({});const f=[qe,Ce],i=[];function c(u,a){return u[0]==="stories"?0:1}return r=c(t),s=i[r]=f[r](t),{c(){e=h("main"),G(n.$$.fragment),l=w(),s.c(),m(e,"class","svelte-16h26i5")},m(u,a){y(u,e,a),O(n,e,null),d(e,l),i[r].m(e,null),o=!0},p(u,[a]){let _=r;r=c(u),r===_?i[r].p(u,a):(re(),E(i[_],1,1,()=>{i[_]=null}),oe(),s=i[r],s?s.p(u,a):(s=i[r]=f[r](u),s.c()),k(s,1),s.m(e,null))},i(u){o||(k(n.$$.fragment,u),k(s),o=!0)},o(u){E(n.$$.fragment,u),E(s),o=!1},d(u){u&&g(e),T(n),i[r].d()}}}function Fe(t,e,n){let l="stories",r;function s(){n(0,l=window.location.hash.slice(1)||"stories"),n(1,r=window.location.hash.split("/")[1]),console.log("changed story",r)}return window.addEventListener("hashchange",s),[l,r]}class Re extends q{constructor(e){super(),C(this,e,Fe,Be,H,{})}}new Re({target:document.getElementById("app")});
