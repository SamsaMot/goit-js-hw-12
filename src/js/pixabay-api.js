import axios from "axios";

const keyAPI = "54675250-921b736f026c47058d05b606e";
const urlAPI = "https://pixabay.com/api/";

export async function getImagesByQuery(query, page) {
  const response = await axios.get(urlAPI, {
    params: {
      key: keyAPI,
      q: query,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true,
      page: page,
      per_page: 15,
    },
  });
  return response.data;
}
