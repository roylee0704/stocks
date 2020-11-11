import fs from 'fs';

const PATH = './datas';

export function getInput(companyName) {
    return fs.readFileSync(`${PATH}/${companyName}.txt`, 'utf-8');
}