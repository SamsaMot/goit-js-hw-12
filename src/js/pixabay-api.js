import axios from "axios";


const keyAPI = "54675250-921b736f026c47058d05b606e";
const urlAPI = "https://pixabay.com/api/";


export const  getImagesByQuery = query => {
      return axios.get(urlAPI, {params:{
        "key": keyAPI,
        "q": `${query}`,
        "image_type": "photo",
        "orientation": "horizontal",
        "safesearch": true
    }}).then(response => response.data.hits);
}


