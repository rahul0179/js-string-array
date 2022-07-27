/* let number = [2, 6, 3, 8, 1, 5, 9, 4, 7];
let sortNum = number.reverse();
console.log(sortNum);

let name = ['abul', 'kabul', 'babul', 'tabul'];
let nameSort = name.reverse();
console.log(nameSort); */

// number sorting fun

const bigNum = [12, 66, 78, 99, 1, 3, 45, 6, 67, 80, 45]
const sortNum = bigNum.sort(function (a, b) {
    return a - b;
});
console.log(sortNum);