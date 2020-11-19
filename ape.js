import { getInput } from './lib.js';


const COMPANY = process.env.COMPANY || 'google';
const data = getInput(COMPANY);


const lines = data.split('\n');

const totalPe = lines.reduce((sum, line) => sum + +line.split('\t')[3], 0);
const averagePe = totalPe / lines.length;

console.log(`Average price/earning ratio for ${COMPANY}: ${averagePe}`);