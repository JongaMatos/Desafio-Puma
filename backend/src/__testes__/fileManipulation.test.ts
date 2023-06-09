
const { save, load, clear } = require("../utils/fileManipulation");


describe('Test filemanipulation functions', () => {
    let file = "data.test.txt";
    it("Reading empty file", () => {
        clear(file)
        let result = load(file)
        expect(result).toBe(undefined);
    })
    it("Writing and reading from file", () => {
        const data = [
            { nome: "Nome1" },
            { nome: "Nome1" },
            { nome: "Nome1" },
            { nome: "Nome1" },
        ]

        clear(file)
        save(file, data);
        let result = load(file);
        expect(result).toStrictEqual(data);
    })

})
