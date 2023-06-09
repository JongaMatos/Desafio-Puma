
import {  addUser, removeOne } from "../../controllers";
import { clear } from "../../utils/fileManipulation";

const file = "data.test.txt";

describe('Test removeOne', () => {
    it("Empty file", () => {
        clear(file);
        const result = removeOne("id", file);

        expect(result).toStrictEqual({ send: { "message": "Não foi possivel remover usuário." }, status: 400 });

    })
    it("Undefined username", () => {
        clear(file);
        const result = removeOne(undefined, file);

        expect(result).toStrictEqual({ send: { "message": "Não foi possivel remover usuário." }, status: 400 });

    })

    it("Username not in list", () => {
        clear(file);
        let data = { username: "JongaMatos", nome: "João Gabriel", avatar: "", url: "", star: false };
        addUser(data, file);

        const result = removeOne("JongaMatos1", file);

        expect(result).toStrictEqual({ send: { "message": "Usuário não registrado." }, status: 404 });

    })

    it("Username in list", () => {
        clear(file);
        let data = { username: "JongaMatos", nome: "João Gabriel", avatar: "", url: "", star: false };
        addUser(data, file);

        const result = removeOne("JongaMatos", file);

        expect(result).toStrictEqual({ send: {users:[] }, status: 200 });

    })
})
