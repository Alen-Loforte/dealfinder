import{c as l}from"./index.d66737ec.js";let s,i=0;const e=new Array(256);for(let t=0;t<256;t++)e[t]=(t+256).toString(16).substring(1);const f=(()=>{const t=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(t!==void 0){if(t.randomBytes!==void 0)return t.randomBytes;if(t.getRandomValues!==void 0)return n=>{const r=new Uint8Array(n);return t.getRandomValues(r),r}}return n=>{const r=[];for(let u=n;u>0;u--)r.push(Math.floor(Math.random()*256));return r}})(),d=4096;function p(){(s===void 0||i+16>d)&&(i=0,s=f(d));const t=Array.prototype.slice.call(s,i,i+=16);return t[6]=t[6]&15|64,t[8]=t[8]&63|128,e[t[0]]+e[t[1]]+e[t[2]]+e[t[3]]+"-"+e[t[4]]+e[t[5]]+"-"+e[t[6]]+e[t[7]]+"-"+e[t[8]]+e[t[9]]+"-"+e[t[10]]+e[t[11]]+e[t[12]]+e[t[13]]+e[t[14]]+e[t[15]]}const m={dark:{type:Boolean,default:null}};function F(t,n){return l(()=>t.dark===null?n.dark.isActive:t.dark)}let o=[],a=[];function c(t){a=a.filter(n=>n!==t)}function g(t){c(t),a.push(t)}function h(t){c(t),a.length===0&&o.length!==0&&(o[o.length-1](),o=[])}function w(t){a.length===0?t():o.push(t)}function v(t){o=o.filter(n=>n!==t)}export{F as a,w as b,p as c,h as d,g as e,v as r,m as u};