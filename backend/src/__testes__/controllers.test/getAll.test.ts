import { getAll } from "../../controllers";
import { clear, save } from "../../utils/fileManipulation";

const file = "data.test.txt";


describe('Test getAll', () => {
    it("Getting empty file", () => {
        clear(file);
        const result = getAll(file)
        expect(result).toStrictEqual({ "send": { "users": {} }, "status": 200 });
    })
    it("Getting populated file", () => {
        clear(file);
        save(file, [{ nome: "nome1" }, { nome: "nome2" }])
        const result = getAll(file);


        expect(result).toStrictEqual({ "send": [{ "nome": "nome1" }, { "nome": "nome2" }], "status": 200 });
    })

})

