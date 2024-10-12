import fs from 'fs'
import {parseEther} from 'viem'
import { parse } from 'csv-parse';


const addressArray = []

fs.createReadStream('./aaa.csv')
    .pipe(parse({delimiter: ','}))
    .on("data", row => {
        let parseRow = [row[0], parseEther(row[1]).toString()]
        addressArray.push(parseRow)
    })
    .on("end", () => {
        fs.writeFileSync('./addresses.js', JSON.stringify(addressArray, null, 2))
    })

