const anthem = "amar sonar bangla ami tomay valo bashi"
const words = anthem.slice(0, 4);
// console.log(words);
const anothePart = anthem.substr(11, 5);
// console.log(anothePart);
const another = anthem.substring(11, 17);
// console.log(another);
// concat 
const first = 'amader ';
const secound = 'city';
const fullString = first.concat(secound).concat(' rangpur');
console.log(fullString.length);

let words1 = ['a', 'b', 'c'];
let allJoin = words1.join(",");
console.log(allJoin);
