import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");
const loadMoreBtn = document.querySelector(".load-more-btn");

const lightbox = new SimpleLightbox(".gallery a");

export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<li class="gallery-list">
  <a class="gallery-link" href="${largeImageURL}">
    <img class="gallery-img" src="${webformatURL}" alt="${tags}" width="360" height="200"/>
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
</li>`
    )
    .join("");

  gallery.insertAdjacentHTML("beforeend", markup);
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = "";
}

export function showLoader() {
  loader.classList.remove("hide");
}

export function hideLoader() {
  loader.classList.add("hide");
}

export function showLoadMoreButton() {
  loadMoreBtn.classList.remove("hide");
}

export function hideLoadMoreButton() {
  loadMoreBtn.classList.add("hide");
}
