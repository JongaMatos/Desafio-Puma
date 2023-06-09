import {  addUser,  toggle_star } from "../../controllers";
import { clear } from "../../utils/fileManipulation";

const file = "data.test.txt";
describe('Test toggle_star', () => {

    it("Toggle check", () => {
        let data1 = { username: "JongaMatos1", nome: "João Gabriel", avatar: "", url: "", star: false };
        let data2 = { username: "JongaMatos2", nome: "João Gabriel", avatar: "", url: "", star: false };
        let data3 = { username: "JongaMatos3", nome: "João Gabriel", avatar: "", url: "", star: false };
        let data4 = { username: "JongaMatos4", nome: "João Gabriel", avatar: "", url: "", star: false };
        let data5 = { username: "JongaMatos5", nome: "João Gabriel", avatar: "", url: "", star: false };

        clear(file);
        addUser(data1, file);
        addUser(data2, file);
        addUser(data3, file);
        addUser(data4, file);
        addUser(data5, file);

        let result = toggle_star(data5.username, file);
        expect(result).toStrictEqual({ "send": { users: [data1, data2, data3, data4, { username: "JongaMatos5", nome: "João Gabriel", avatar: "", url: "", star: true }] }, "status": 200 });
        result=toggle_star(data4.username,file);
        expect(result).toStrictEqual({ "send": { users: [data1, data2, data3, { username: "JongaMatos4", nome: "João Gabriel", avatar: "", url: "", star: true }, data5] }, "status": 200 });
        result=toggle_star(data4.username,file);
        expect(result).toStrictEqual({ "send": { users: [data1, data2, data3, data4, data5] }, "status": 200 });
    
    })

})