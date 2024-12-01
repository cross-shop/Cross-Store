import axios from "axios";


const apliClient = axios.create({
    baseURL: "https://66dfd7322fb67ac16f2740dd.mockapi.io/product",
    headers: {
        "Content-Type": "application/json"
    },
}); 


export default apliClient
