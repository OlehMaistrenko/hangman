(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{8596:function(e,t,r){Promise.resolve().then(r.bind(r,1316))},1316:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return h}});var l=r(7437),s=r(2265);let n=[(0,l.jsx)("circle",{cx:"170",cy:"79",r:"21.5",stroke:"currentColor",strokeWidth:"4"},"HEAD"),(0,l.jsx)("path",{d:"M167.5 176C167.5 177.381 168.619 178.5 170 178.5C171.381 178.5 172.5 177.381 172.5 176H167.5ZM167.5 100V176H172.5V100H167.5Z",fill:"currentColor"},"BODY"),(0,l.jsx)("path",{d:"M170 129L209 112",stroke:"currentColor",strokeWidth:"4",strokeLinecap:"round"},"ARM_LEFT"),(0,l.jsx)("path",{d:"M170 129L131 112",stroke:"currentColor",strokeWidth:"4",strokeLinecap:"round"},"ARM_RIGHT"),(0,l.jsx)("path",{d:"M207.643 213.47C208.455 214.219 209.72 214.168 210.47 213.357C211.219 212.545 211.168 211.28 210.357 210.53L207.643 213.47ZM168.643 177.47L207.643 213.47L210.357 210.53L171.357 174.53L168.643 177.47Z",fill:"currentColor"},"LEG_LEFT"),(0,l.jsx)("path",{d:"M132.357 213.47C131.545 214.219 130.28 214.168 129.53 213.357C128.781 212.545 128.832 211.28 129.643 210.53L132.357 213.47ZM171.357 177.47L132.357 213.47L129.643 210.53L168.643 174.53L171.357 177.47Z",fill:"currentColor"},"LEG_RIGHT")];var o=e=>{let{score:t}=e,r=n.slice(0,t);return(0,l.jsxs)("svg",{className:"max-v-full block h-max  max-h-full min-h-[20rem] text-teal-700",width:"337",height:"276",viewBox:"0 0 337 276",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r,(0,l.jsx)("line",{x1:"7.5",y1:"268.5",x2:"329.5",y2:"268.5",stroke:"currentColor",strokeWidth:"15",strokeLinecap:"round"}),(0,l.jsx)("line",{x1:"87.5282",y1:"13.4716",x2:"88.4905",y2:"268.472",stroke:"currentColor",strokeWidth:"15",strokeLinecap:"round"}),(0,l.jsx)("line",{x1:"87.5",y1:"7.5",x2:"206.5",y2:"7.5",stroke:"currentColor",strokeWidth:"15",strokeLinecap:"round"}),(0,l.jsx)("path",{d:"M172 7C172 5.89543 171.105 5 170 5C168.895 5 168 5.89543 168 7L172 7ZM168 7L168 58L172 58L172 7L168 7Z",fill:"currentColor"})]})};let a="abcdefghijklmnopqrstuvwxyz".split("");var i=e=>{let{disabledLetters:t,onKeyClick:r}=e;return(0,l.jsx)("div",{className:"grid grid-cols-9 gap-2 text-center sm:gap-4",children:a.map(e=>(0,l.jsx)("button",{disabled:t.includes(e),onClick:()=>r(e),className:" text-md cursor-pointer rounded-md border-2 border-teal-700  p-1 uppercase text-teal-700 hover:bg-teal-200 disabled:pointer-events-none disabled:opacity-30 sm:p-2 sm:text-2xl",children:e},e))})},c=e=>{let{letters:t,word:r}=e;return(0,l.jsx)("div",{className:"flex shrink-0 justify-center gap-4 p-5",children:r.split("").map((e,r)=>(0,l.jsx)("span",{className:"w-10 rounded-md border-b-4 border-b-teal-700 text-center text-2xl font-medium uppercase text-teal-700 empty:before:inline-block",children:t.includes(e)?e:""},r))})},d=r(4887),u=e=>{let{children:t}=e,r=(0,s.useRef)(null),[n,o]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{r.current=document.querySelector("#modal-root"),o(!0)},[]),n&&r.current&&d.createPortal((0,l.jsx)("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4",children:(0,l.jsx)("div",{className:"max-w-[400px] grow rounded-lg bg-white p-4 py-8 shadow-lg",children:t})}),r.current)};let x=["apple","music","happy","pizza","house","beach","tiger","smile","dance","pencil","cloud","river","grape","sunny","bread","heart","ocean","zebra","chair","snake","plane","robot","phone","moon","sugar","horse","jazz","fruit","light"];function p(){return x[Math.floor(Math.random()*x.length)]}var h=()=>{let[e,t]=(0,s.useState)(""),[r,n]=(0,s.useState)([]),[a,d]=(0,s.useState)([]),x=r.filter(t=>!e.includes(t)).length;(0,s.useEffect)(()=>{t(p())},[]);let h=a.length===new Set([...e.split("")]).size;return(0,l.jsxs)("div",{className:"flex h-full flex-col items-center gap-5 p-2 md:p-10",children:[(0,l.jsx)(o,{score:x}),(0,l.jsx)(c,{word:e,letters:r}),(0,l.jsx)(i,{disabledLetters:r,onKeyClick:t=>{n(e=>[...e,t]),e.includes(t)&&d(e=>[...e,t])}}),h&&(0,l.jsx)(u,{children:(0,l.jsxs)("div",{className:"flex flex-col items-center gap-5",children:[(0,l.jsx)("h1",{className:"text-3xl",children:"Congratulations! You have won!"}),(0,l.jsx)("button",{className:"rounded-lg bg-teal-500 px-4 py-2 text-white",onClick:()=>{t(p()),n([]),d([])},children:"Play again"})]})}),x>=6&&!h&&(0,l.jsx)(u,{children:(0,l.jsxs)("div",{className:"flex flex-col items-center gap-5",children:[(0,l.jsx)("h1",{className:"text-3xl",children:"You have lost!"}),(0,l.jsx)("button",{className:"rounded-lg bg-teal-500 px-4 py-2 text-white",onClick:()=>{t(p()),n([]),d([])},children:"Play again"})]})})]})}},622:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l=r(2265),s=Symbol.for("react.element"),n=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),o=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,r){var l,i={},c=null,d=null;for(l in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)n.call(t,l)&&!a.hasOwnProperty(l)&&(i[l]=t[l]);if(e&&e.defaultProps)for(l in t=e.defaultProps)void 0===i[l]&&(i[l]=t[l]);return{$$typeof:s,type:e,key:c,ref:d,props:i,_owner:o.current}}t.jsx=i,t.jsxs=i},7437:function(e,t,r){"use strict";e.exports=r(622)}},function(e){e.O(0,[971,596,744],function(){return e(e.s=8596)}),_N_E=e.O()}]);