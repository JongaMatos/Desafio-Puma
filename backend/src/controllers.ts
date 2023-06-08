import { save, load } from "./fileManipulation";
import { Request, Response } from "express-serve-static-core";


interface UserData {
    username: string,
    nome: string,
    avatar: string,
    url: string
}




const getAll = (req: Request, res: Response) => {
    try {

        const data = load("data.txt");
        if (data === undefined)
            return res.status(200).send({ users: {} });
        return res.status(200).send({ data });

    } catch (error) {

        return res.status(200).send({ users: {} });

    }
}

const addUser = (req: Request, res: Response) => {
    const { username, nome, avatar, url } = req.body;

    try {
        // save("data.txt",{users:[{username,nome,avatar,url}]})
        const data = load("data.txt")

        if (data === undefined) {
            save("data.txt", { users: [{ username, nome, avatar, url }] });
            return res.status(200).send({ users: [{ username, nome, avatar, url }] });
        }
        // console.log(data.users.findIndex((user: UserData) => user.username == username))
        if (data.users.findIndex((user: UserData) => user.username == username) >= 0)
            return res.status(401).send({ message: "usuario ja cadastrado" });

        var newData = data.users;

        newData.push({ username, nome, avatar, url });
        save("data.txt", { users: newData });
        return res.status(200).send({ users: newData });


    } catch (error) {

        // console.log({ error });
        return res.status(400).send({ message: "não foi possivel adicionar usuario" });

    }

}

export { getAll, addUser }