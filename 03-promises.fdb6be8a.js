function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var u=r("eWCmQ");refs={submit:document.querySelector(".form"),delayForm:document.querySelector('input[name="delay"]'),stepForm:document.querySelector('input[name="step"]'),amountForm:document.querySelector('input[name="amount"]')},refs.submit.addEventListener("submit",(function(e){e.preventDefault();let t=0,n=s.delay;const o=s.step;for(i=0;i<s.amount;i+=1)t+=1,n+=o,console.log(n),a(t,n),e.currentTarget.reset()})),refs.delayForm.addEventListener("input",(function(e){const t=Number(e.target.value);s.delay=t})),refs.stepForm.addEventListener("input",(function(e){const t=Number(e.target.value);s.step=t})),refs.amountForm.addEventListener("input",(function(e){const t=Number(e.target.value);s.amount=t}));const s={};function a(t,n){return new Promise(((e,o)=>{const r=Math.random()>.3;setTimeout((()=>{r?e({position:t,delay:n}):o({position:t,delay:n})}),n)})).then((({position:t,delay:n})=>{e(u).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(u).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)}))}
//# sourceMappingURL=03-promises.fdb6be8a.js.map