import{x as M,y as R,z as O,A as V,B as C,C as I,D as E,E as P,H as Y,F as B,G as T,I as g,J as A,K as $,L as y,M as j,N as q,O as z,P as F,Q as G,R as J,S as K,T as Q,p as W,h as b,a as U,k as X}from"./runtime.B1oNm3Mp.js";import{b as Z}from"./disclose-version.DkJrYwdm.js";const x=new Set,D=new Set;function m(r){var N;var e=this,s=e.ownerDocument,_=r.type,o=((N=r.composedPath)==null?void 0:N.call(r))||[],t=o[0]||r.target,d=0,h=r.__root;if(h){var u=o.indexOf(h);if(u!==-1&&(e===document||e===window)){r.__root=e;return}var l=o.indexOf(e);if(l===-1)return;u<=l&&(d=u)}if(t=o[d]||r.target,t!==e){M(r,"currentTarget",{configurable:!0,get(){return t||s}});var w=C,i=I;R(null),O(null);try{for(var a,n=[];t!==null;){var f=t.assignedSlot||t.parentNode||t.host||null;try{var c=t["__"+_];if(c!==void 0&&!t.disabled)if(V(c)){var[k,...H]=c;k.apply(t,[r,...H])}else c.call(t,r)}catch(v){a?n.push(v):a=v}if(r.cancelBubble||f===e||f===null)break;t=f}if(a){for(let v of n)queueMicrotask(()=>{throw v});throw a}}finally{r.__root=e,delete r.currentTarget,R(w),O(i)}}}const rr=["touchstart","touchmove"];function er(r){return rr.includes(r)}function sr(r,e){var s=e==null?"":typeof e=="object"?e+"":e;s!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=s,r.nodeValue=s==null?"":s+"")}function tr(r,e){return L(r,e)}function ir(r,e){E(),e.intro=e.intro??!1;const s=e.target,_=b,o=y;try{for(var t=P(s);t&&(t.nodeType!==8||t.data!==Y);)t=B(t);if(!t)throw T;g(!0),A(t),$();const d=L(r,{...e,anchor:t});if(y===null||y.nodeType!==8||y.data!==j)throw q(),T;return g(!1),d}catch(d){if(d===T)return e.recover===!1&&z(),E(),F(s),g(!1),tr(r,e);throw d}finally{g(_),A(o)}}const p=new Map;function L(r,{target:e,anchor:s,props:_={},events:o,context:t,intro:d=!0}){E();var h=new Set,u=i=>{for(var a=0;a<i.length;a++){var n=i[a];if(!h.has(n)){h.add(n);var f=er(n);e.addEventListener(n,m,{passive:f});var c=p.get(n);c===void 0?(document.addEventListener(n,m,{passive:f}),p.set(n,1)):p.set(n,c+1)}}};u(G(x)),D.add(u);var l=void 0,w=J(()=>{var i=s??e.appendChild(K());return Q(()=>{if(t){W({});var a=X;a.c=t}o&&(_.$$events=o),b&&Z(i,null),l=r(i,_)||{},b&&(I.nodes_end=y),t&&U()}),()=>{var f;for(var a of h){e.removeEventListener(a,m);var n=p.get(a);--n===0?(document.removeEventListener(a,m),p.delete(a)):p.set(a,n)}D.delete(u),S.delete(l),i!==s&&((f=i.parentNode)==null||f.removeChild(i))}});return S.set(l,w),l}let S=new WeakMap;function or(r){const e=S.get(r);e&&e()}export{ir as h,tr as m,sr as s,or as u};