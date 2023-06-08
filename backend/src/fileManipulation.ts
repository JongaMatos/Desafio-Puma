const { writeFileSync, readFileSync } = require('fs');


function save(file: string, data: object) {

    return writeFileSync("src/data/" + file, JSON.stringify(data));
}

function load(file: string) {
    try {

        const storedData = readFileSync("src/data/" + file, 'utf8');
        if(storedData==='')
            return undefined;
        return JSON.parse(storedData);

    } catch (error) {
        return undefined;
    }

}

export { save, load };