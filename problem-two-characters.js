'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const entrs = parseInt(readLine());
    const some = readLine();
    const newObj = {};
    for (let i = 0, entrs = some.length; i < entrs; i++) {
        newObj[some[i]] ? newObj[some[i]]++ : newObj[some[i]] = 1;
    }
    const random = Object.keys(newObj).sort((a, b) => newObj[a] > newObj[b]);
    let pairs = [];
    for (let i = 0, entrs = random.length; i < entrs; i++) {
        for (let j = i + 1; j < entrs; j++) {
            Math.abs(newObj[random[i]] - newObj[random[j]]) <= 1 ? pairs.push([random[i], random[j]]) : null;
        }
    }
    let maxCount = 0;
    pairs.some(pair => {
        let isFirst = null;
        let count = 0;
        for (let i = 0, entrs = some.length; i < entrs; i++) {
            if (some[i] === pair[0]) {
                if (isFirst == null || !isFirst) {
                    isFirst = true;
                    count++;
                } else {
                    break;
                }
            }
            else if (some[i] === pair[1]) {
                if (isFirst == null || isFirst) {
                    isFirst = false;
                    count++;
                } else {
                    break;
                }
            }
            if (i === some.length - 1 && count > maxCount) {
                maxCount = count;
            }
        }
    });
    console.log(maxCount);
}