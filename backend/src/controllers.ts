import { Request, Response } from "express";
import { save, load } from "./utils/fileManipulation";

interface UserData {
    username: string;
    nome: string;
    avatar: string;
    url: string;
    star: boolean;
}


const getAll = (file: string) => {
    try {

        const data = load(file);
        if (data === undefined)
            return { status: 200, send: { users: {} } };
        return { status: 200, send: data };

    } catch (error) {

        return { status: 200, send: { users: {} } };

    }

}

const addUser = (body: UserData, file: string) => {
    const { username, nome, avatar, url } = body;

    try {
        const data = load(file);

        if (data === undefined) {
            save(file, { users: [{ username, nome, avatar, url, star: false }] });
            return { status: 200, send: { users: [{ username, nome, avatar, url, star: false }] } }
            // return res.status(200).send({ users: [{ username, nome, avatar, url, star: false }] });
        }

        if (data.users.findIndex((user: UserData) => user.username == username) >= 0)
            return { status: 401, send: { message: "usuario ja cadastrado" } }

        if (data.users.length >= 5)
            return { status: 400, send: { message: "Quantidade maxima de cadastros atingida" } };

        var newData = data.users;

        newData.push({ username, nome, avatar, url, star: false });
        save(file, { users: newData });
        return { status: 200, send: { users: newData } };

    } catch (error) {
        return { status: 400, send: { message: "não foi possivel adicionar usuario" } };

    }
}

const removeOne = (username: string|undefined, file: string) => {


    try {

        let { users } = load(file);
        if (users === undefined || username === undefined)
            return { status: 400, send: { message: "Não foi possivel remover usuário." } };

        const index = users.findIndex((user: UserData) => user.username == username);

        if (index < 0)
            return { status: 404, send: { message: "Usuário não registrado." } };

        users.splice(index, 1);
        save(file, { users });
        return { status: 200, send: { users } };


    } catch (error) {
        console.log(error)
        return { status: 400, send: { message: "Não foi possivel remover usuário." } };

    }




}

const toggle_star = (username: string, file: string) => {

    try {
        let { users } = load(file);

        if (users === undefined || username === undefined)
            return { status: 400, send: { message: "Não foi possivel atualizar usuário." } };

        const index = users.findIndex((user: UserData) => user.username == username);

        if (index < 0)
            return { status: 404, send: { message: "Usuário não encontrado." } };

        if (users[index].star == false)
            users.map((user: UserData) => { user.star = false });

        users[index].star = (!users[index].star);

        save(file, { users });

        return { status: 200, send: { users } };

    } catch (error) {

        return { status: 400, send: { message: "Não foi possivel atualizar usuário." } };
    }

}

export { getAll, addUser, removeOne, toggle_star }