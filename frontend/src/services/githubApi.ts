import axios,{AxiosResponse} from "axios";
import { User } from "../interface";

interface GithubResponse {
    
    login: string,
    avatar_url: string,
    name: string,
    html_url: string

}

const githubApi = axios.create({
    baseURL: "https://api.github.com/users/",
    headers: {
        "Content-type": "application/json"
    }
});

export default async function fetchUser(
    username: string
): Promise<User> {
    try {
        const response: AxiosResponse<GithubResponse> = await githubApi.get(username);
        console.log(response.data)
        return {
            "username": response.data.login,
            "nome": response.data.name,
            "avatar": response.data.avatar_url,
            "url": response.data.html_url,
            "star":false
        };
    } catch (error) {
        return {
            "username": '-1',
            "nome":'',
            "avatar":'',
            "url": '',
            "star":false

        };    }
}