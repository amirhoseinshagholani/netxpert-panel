import axios from "axios";

// const BASE_URL = "https://api.nekatel.com/nekatel/api";
const BASE_URL = "http://localhost:3000/nekatel/api";

export const httpService = axios.create({
    baseURL: BASE_URL
});
