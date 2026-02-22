import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getImagesByQuery } from "./js/pixabay-api.js";
import * as render from "./js/render-functions.js";

const form = document.querySelector(".form");
const input = document.querySelector("input");
const loadMoreBtn = document.querySelector(".load-more-btn");
const endMessage = document.querySelector(".end-message");

let searchQuery = "";
let currentPage = 1;

form.addEventListener("submit", handleSubmit);
loadMoreBtn.addEventListener("click", handleLoadMore);

async function handleSubmit(event) {
  event.preventDefault();
  searchQuery = input.value.trim();

  if (searchQuery === "") {
    iziToast.warning({
      message: "Please enter a search query.",
      position: "topRight",
    });
    return;
  }

  render.hideLoadMoreButton();
  hideEndMessage();
  render.clearGallery();
  render.showLoader();

  currentPage = 1;

  try {
    const data = await getImagesByQuery(searchQuery, currentPage);

    if (!data.hits || data.hits.length === 0) {
      iziToast.error({
        message:
          "Sorry, there are no images matching your search query. Please try again!",
        messageColor: "#fafafb",
        backgroundColor: "#ef4040",
        messageSize: "16px",
        position: "topRight",
        icon: "material-icons",
      });
      return;
    }

    render.createGallery(data.hits);

    if (data.hits.length < 15 || currentPage * 15 >= data.totalHits) {
      render.hideLoadMoreButton();
      showEndMessage();
    } else {
      render.showLoadMoreButton();
    }
  } catch {
    iziToast.error({
      message:
        "Sorry, there are no images matching your search query. Please try again!",
      messageColor: "#fafafb",
      backgroundColor: "#ef4040",
      messageSize: "16px",
      position: "topRight",
      icon: "material-icons",
    });
  } finally {
    render.hideLoader();
  }
}

async function handleLoadMore() {
  render.hideLoadMoreButton();
  render.showLoader();

  currentPage += 1;

  try {
    const data = await getImagesByQuery(searchQuery, currentPage);

    if (!data.hits || data.hits.length === 0) {
      return;
    }

    render.createGallery(data.hits);

    const totalLoaded = currentPage * 15;
    if (totalLoaded >= data.totalHits) {
      render.hideLoadMoreButton();
      showEndMessage();
    } else {
      render.showLoadMoreButton();
    }

    scrollToNewImages();
  } catch {
    iziToast.error({
      message:
        "Sorry, there are no images matching your search query. Please try again!",
      messageColor: "#fafafb",
      backgroundColor: "#ef4040",
      messageSize: "16px",
      position: "topRight",
      icon: "material-icons",
    });
    render.showLoadMoreButton();
  } finally {
    render.hideLoader();
  }
}

function scrollToNewImages() {
  const galleryItems = document.querySelectorAll(".gallery-list");
  if (galleryItems.length < 2) return;

  const { height: cardHeight } =
    galleryItems[galleryItems.length - 1].getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 2,
    behavior: "smooth",
  });
}

function showEndMessage() {
  endMessage.classList.remove("hide");
}

function hideEndMessage() {
  endMessage.classList.add("hide");
}
