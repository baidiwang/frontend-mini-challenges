import"./header-UgpiXrwD.js";import"./navbar-WONYROr5.js";const f=document.querySelector(".calculator"),p=document.querySelector(".display");let t="",c=null,s=null,l=null,i=!1,a=!1;const d=(r,e)=>e==="."?r!=null&&r.includes(".")?r:r===""?"0.":t+e:t===""||t==="0"?e:t+e,n=r=>{p.textContent=r},o=(r,e=+c,u=+t)=>{switch(r){case"+":return e+u;case"-":return e-u;case"x":return e*u;case"/":return e/u}};f.addEventListener("click",r=>{if(!r.target.classList.contains("btn"))return;const e=r.target.dataset.value;if(!Number.isNaN(+e)||e==="."){i&&(c=t,t="",i=!1,a=!1),t=d(t,e),n(t);return}if(e==="c"){t="",s=null,c=null,l=null,n("0");return}!a&&(e==="="||l)&&c?(a=!0,s=t,t=o(l),n(t)):e==="="&&l&&(t=o(l,+t,+s),n(t)),e!=="="&&(l=e),i=!0});n("0");