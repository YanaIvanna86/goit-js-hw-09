import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const r={email:"",message:""},o="feedback-form-state",a=document.querySelector(".feedback-form");c();a.addEventListener("input",l);a.addEventListener("submit",n);function l(e){r.email=e.currentTarget.email.value,r.message=e.currentTarget.message.value;try{localStorage.setItem(o,JSON.stringify(r).trim())}catch{console.log(err);return}}function n(e){if(e.preventDefault(),!r.email||!r.message)return console.log("Fill please all fields");console.dir(r),localStorage.removeItem(o),e.currentTarget.reset()}function c(){let e={};try{e=JSON.parse(localStorage.getItem(o))}catch{console.log(err);return}if(e)for(const t in e)a.elements[t].value=e[t]}
//# sourceMappingURL=commonHelpers2.js.map
