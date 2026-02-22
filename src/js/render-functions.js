import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import {loader} from "../main.js";
import { gallery } from "../main.js";

import {inputHandle} from "../main.js";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";



 let lightbox = new SimpleLightbox(".gallery a");

export function createGallery(images){
 return images.map(({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) => 
 `<li class="gallery-list">
 <a class="gallery-link" href="${largeImageURL}">
 <img class="gallery-img" src="${webformatURL}" alt ="${tags}" width="360" height="200"/>
 </a>
 <ul class="info">
 <li class="info-list">
 <h3 class="gallery-item-title">Likes</h3>
 <p class="gallery-item-text">${likes}</p>
 </li>
 <li class="info-list">
 <h3 class="gallery-item-title">Views</h3>
 <p class="gallery-item-text">${views}</p>
 </li>
 <li class="info-list">
 <h3 class="gallery-item-title">Comments</h3>
 <p class="gallery-item-text">${comments}</p>
 </li>
 <li class="info-list">
 <h3 class="gallery-item-title">Downloads</h3>
 <p class="gallery-item-text">${downloads}</p>
 </li>
 </ul>
 </li>`).join("");
}
   
export function markup(arr){
    gallery.innerHTML = createGallery(arr);
    lightbox.refresh();
}

export function clearGallery(){
   gallery.innerHTML = "";
}

export function showLoader(){
    loader.classList.remove("hide");
}

export function hideLoader(){
 loader.classList.add("hide");
}
 
export function showError(){
     iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                messageColor: "#fafafb",
                backgroundColor: "#ef4040",
                messageSize: "16px",
                position: "topRight",
                icon: 'material-icons',
            })
 }