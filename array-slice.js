const number = [3, 4, 7, 4, 3, 5, 71, 51, 15, 40]
const numberSlice1 = number.slice(1, 6);
console.log(numberSlice1);
const number2 = [3, 4, 7, 4, 3, 5, 71, 51, 15, 40]
const numberSlice = number.splice(1, 6, 6000);

console.log("number=", number);
console.log(numberSlice);