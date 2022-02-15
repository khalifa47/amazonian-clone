import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/ian-clone-673b6/us-central1/api'
});

export default instance;