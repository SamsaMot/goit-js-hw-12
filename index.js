import{a as v,S as M,i}from"./assets/vendor-B5nsgUv9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function l(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(e){if(e.ep)return;e.ep=!0;const s=l(e);fetch(e.href,s)}})();const P="54675250-921b736f026c47058d05b606e",C="https://pixabay.com/api/";async function h(o,t){return(await v.get(C,{params:{key:P,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}})).data}const m=document.querySelector(".gallery"),y=document.querySelector(".loader"),p=document.querySelector(".load-more-btn"),$=new M(".gallery a");function L(o){const t=o.map(({webformatURL:l,largeImageURL:c,tags:e,likes:s,views:a,comments:q,downloads:x})=>`<li class="gallery-list">
  <a class="gallery-link" href="${c}">
    <img class="gallery-img" src="${l}" alt="${e}" width="360" height="200"/>
  </a>
  <ul class="info">
    <li class="info-list">
      <h3 class="gallery-item-title">Likes</h3>
      <p class="gallery-item-text">${s}</p>
    </li>
    <li class="info-list">
      <h3 class="gallery-item-title">Views</h3>
      <p class="gallery-item-text">${a}</p>
    </li>
    <li class="info-list">
      <h3 class="gallery-item-title">Comments</h3>
      <p class="gallery-item-text">${q}</p>
    </li>
    <li class="info-list">
      <h3 class="gallery-item-title">Downloads</h3>
      <p class="gallery-item-text">${x}</p>
    </li>
  </ul>
</li>`).join("");m.insertAdjacentHTML("beforeend",t),$.refresh()}function B(){m.innerHTML=""}function b(){y.classList.remove("hide")}function S(){y.classList.add("hide")}function d(){p.classList.remove("hide")}function n(){p.classList.add("hide")}const O=document.querySelector(".form"),R=document.querySelector("input"),z=document.querySelector(".load-more-btn"),w=document.querySelector(".end-message");let u="",r=1;O.addEventListener("submit",E);z.addEventListener("click",I);async function E(o){if(o.preventDefault(),u=R.value.trim(),u===""){i.warning({message:"Please enter a search query.",position:"topRight"});return}n(),A(),B(),b(),r=1;try{const t=await h(u,r);if(!t.hits||t.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",backgroundColor:"#ef4040",messageSize:"16px",position:"topRight",icon:"material-icons"});return}L(t.hits),t.hits.length<15||r*15>=t.totalHits?(n(),g(),f()):d()}catch{i.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",backgroundColor:"#ef4040",messageSize:"16px",position:"topRight",icon:"material-icons"})}finally{S()}}async function I(){n(),b(),r+=1;try{const o=await h(u,r);if(!o.hits||o.hits.length===0){n(),g(),f();return}L(o.hits),r*15>=o.totalHits?(n(),g(),f()):d(),k()}catch{i.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",backgroundColor:"#ef4040",messageSize:"16px",position:"topRight",icon:"material-icons"}),d()}finally{S()}}function k(){const o=document.querySelectorAll(".gallery-list");if(o.length<2)return;const{height:t}=o[o.length-1].getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}function g(){w.classList.remove("hide")}function A(){w.classList.add("hide")}function f(){i.info({message:"We're sorry, but you've reached the end of search results.",messageColor:"#fafafb",backgroundColor:"#4e75ff",messageSize:"16px",position:"topRight",icon:"material-icons"})}
//# sourceMappingURL=index.js.map
