import axios from "axios";

const BASE_URL = "https://api.nekatel.com";
// const BASE_URL = "http://localhost:3001/nekatel/api";

export const httpService = axios.create({
    baseURL: BASE_URL
});
