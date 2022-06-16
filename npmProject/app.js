const colors = require('colors')
var figlet = require('figlet');
const { getWordsList } = require('most-common-words-by-language');
figlet('butthole', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data.rainbow)
});
const words = getWordsList('english', 1000)
let string = '';
words.forEach(word => {
    string += `${word} `
});
console.log(string)

