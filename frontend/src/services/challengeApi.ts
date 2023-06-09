import axios,{AxiosResponse} from "axios";

export const challengeApi = axios.create({
    baseURL: "http://localhost:5000/users/",
    headers: {
        "Content-type": "application/json"
    }
});

interface User {
    "username": string,
    "nome": string,
    "avatar": string,
    "url": string

}

