import axios from "axios";

const instance = axios.create({
    baseURl: 'http://localhost:8001'
})

export default instance;