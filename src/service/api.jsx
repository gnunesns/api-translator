import axios from 'axios'

export default api = axios.create({
    baseURL: "https://libretranslate.de/translate"
})
