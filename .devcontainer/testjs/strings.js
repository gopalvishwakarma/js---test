const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + "Value");
// console.log(``); < back ticks uses benefits string  interpolation 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('hitesh-hc')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString)

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne= "   hitesh   "
console.log(newStringOne);
console.log(newStringOne.trim()) //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim


const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'))

console.log(url.includes('%20'))

const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);

console.log(str.split('-'));