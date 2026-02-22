import{a as x,S as M,i as n}from"./assets/vendor-B5nsgUv9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const P="54675250-921b736f026c47058d05b606e",v="https://pixabay.com/api/";async function g(o,t){return(await x.get(v,{params:{key:P,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}})).data}const h=document.querySelector(".gallery"),m=document.querySelector(".loader"),f=document.querySelector(".load-more-btn"),C=new M(".gallery a");function y(o){const t=o.map(({webformatURL:i,largeImageURL:l,tags:e,likes:s,views:a,comments:w,downloads:q})=>`<li class="gallery-list">
  <a class="gallery-link" href="${l}">
    <img class="gallery-img" src="${i}" alt="${e}" width="360" height="200"/>
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
      <p class="gallery-item-text">${w}</p>
    </li>
    <li class="info-list">
      <h3 class="gallery-item-title">Downloads</h3>
      <p class="gallery-item-text">${q}</p>
    </li>
  </ul>
</li>`).join("");h.insertAdjacentHTML("beforeend",t),C.refresh()}function $(){h.innerHTML=""}function p(){m.classList.remove("hide")}function L(){m.classList.add("hide")}function d(){f.classList.remove("hide")}function u(){f.classList.add("hide")}const B=document.querySelector(".form"),I=document.querySelector("input"),O=document.querySelector(".load-more-btn"),b=document.querySelector(".end-message");let c="",r=1;B.addEventListener("submit",z);O.addEventListener("click",A);async function z(o){if(o.preventDefault(),c=I.value.trim(),c===""){n.warning({message:"Please enter a search query.",position:"topRight"});return}u(),H(),$(),p(),r=1;try{const t=await g(c,r);if(!t.hits||t.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",backgroundColor:"#ef4040",messageSize:"16px",position:"topRight",icon:"material-icons"});return}y(t.hits),t.hits.length<15||r*15>=t.totalHits?(u(),S()):d()}catch{n.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",backgroundColor:"#ef4040",messageSize:"16px",position:"topRight",icon:"material-icons"})}finally{L()}}async function A(){u(),p(),r+=1;try{const o=await g(c,r);if(!o.hits||o.hits.length===0)return;y(o.hits),r*15>=o.totalHits?(u(),S()):d(),E()}catch{n.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",backgroundColor:"#ef4040",messageSize:"16px",position:"topRight",icon:"material-icons"}),d()}finally{L()}}function E(){const o=document.querySelectorAll(".gallery-list");if(o.length<2)return;const{height:t}=o[o.length-1].getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}function S(){b.classList.remove("hide")}function H(){b.classList.add("hide")}
//# sourceMappingURL=index.js.map
