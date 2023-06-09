import axios from "axios";

export const challengeApi = axios.create({
    baseURL: "http://localhost:5000/users/",
    headers: {
        "Content-type": "application/json"
    }
});

