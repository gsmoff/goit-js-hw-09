var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},n=e.parcelRequire7bc7;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var l={id:e,exports:{}};return o[e]=l,n.call(l.exports,l,l.exports),l.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){t[e]=o},e.parcelRequire7bc7=n);var l=n("iQIUW");document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();const{elements:{delay:o,step:t,amount:n}}=e.currentTarget,i=Number(o.value),r=Number(t.value),s=Number(n.value);console.log("Button was clicked");let a=i,u=1;setTimeout((()=>{setInterval((()=>{if(u>s)return clearInterval(0);var e,o;(e=u,o=a,console.log(a),a+=r,console.log(u),u+=1,new Promise(((t,n)=>{Math.random()>.3?t({position:e,delay:o}):n({position:e,delay:o})}))).then((({position:e,delay:o})=>{console.log(`✅ Fulfilled promise ${e} in ${o}ms`),l.Notify.success(`Fulfilled promise ${e} in ${o}ms`,{timeout:6e3})})).catch((({position:e,delay:o})=>{console.log(`❌ Rejected promise ${e} in ${o}ms`),l.Notify.failure(`Rejected promise ${e} in ${o}ms`,{timeout:6e3})}))}),r)}),i)}));
//# sourceMappingURL=03-promises.81605a82.js.map