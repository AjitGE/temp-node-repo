const { readFileSync, writeFileSync } = require('fs') //destructure readfile
const first = readFileSync('./Content/first.txt', 'utf8')
const second = readFileSync('./Content/second.txt', 'utf8')


writeFileSync('./Content/result-sync.txt',
    `Here is the result : ${first}, ${second}`,
    { flag: 'a' })


console.log('done with this task');
console.log('starting with next one');