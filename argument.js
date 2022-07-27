function addNum(num1, num2) {
    let result = 0;
    for (const num of arguments) {
        result = result + num;
    }
    return result;


}
const sum = addNum(12, 12, 100);
console.log(sum);