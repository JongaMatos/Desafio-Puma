
import {addUser } from "../../controllers";
import { clear } from "../../utils/fileManipulation";

const file = "data.test.txt";
describe('Test addUser', () => {

    it("Adding to empty file", () => {
        let data = { username: "JongaMatos", nome: "João Gabriel", avatar: "", url: "", star: true };

        clear(file);
        const result = addUser(data, file);
        expect(result).toStrictEqual({ "send": { "users": [{ "avatar": "", "nome": "João Gabriel", "star": false, "url": "", "username": "JongaMatos" }] }, "status": 200 });
    })

    it("Adding to populated file", () => {
        let data1 = { username: "JongaMatos", nome: "João Gabriel", avatar: "", url: "", star: true };
        let data2 = { username: "JongaMatos2", nome: "João Gabriel2", avatar: "", url: "", star: true };

        clear(file);
        addUser(data1, file);
        const result = addUser(data2, file);
        expect(result).toStrictEqual({ "send": { "users": [{ "avatar": "", "nome": "João Gabriel", "star": false, "url": "", "username": "JongaMatos" }, { username: "JongaMatos2", nome: "João Gabriel2", avatar: "", url: "", star: false }] }, "status": 200 });
    })

    it("Adding existing user", () => {
        let data = { username: "JongaMatos", nome: "João Gabriel", avatar: "", url: "", star: true };

        clear(file);
        addUser(data, file);
        const result = addUser(data, file);
        expect(result).toStrictEqual({ "send": {"message": "usuario ja cadastrado" }, "status": 401 });
    })
    it("Adding more than 5 users", () => {
        let data1 = { username: "JongaMatos1", nome: "João Gabriel", avatar: "", url: "", star: true };
        let data2 = { username: "JongaMatos2", nome: "João Gabriel", avatar: "", url: "", star: true };
        let data3 = { username: "JongaMatos3", nome: "João Gabriel", avatar: "", url: "", star: true };
        let data4 = { username: "JongaMatos4", nome: "João Gabriel", avatar: "", url: "", star: true };
        let data5 = { username: "JongaMatos5", nome: "João Gabriel", avatar: "", url: "", star: true };
        let data6 = { username: "JongaMatos6", nome: "João Gabriel", avatar: "", url: "", star: true };

        clear(file);
        addUser(data1, file);
        addUser(data2, file);
        addUser(data3, file);
        addUser(data4, file);
        addUser(data5, file);

        const result = addUser(data6, file);
        expect(result).toStrictEqual({ "send": {"message": "Quantidade maxima de cadastros atingida" }, "status": 400 });
    })

})