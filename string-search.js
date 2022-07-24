const product = [
    "Dell hardCore 99 200gb laptop",
    "iphone 1 Tb camera flashlight phone",
    "yellow laptop in black camera",
    "Dell lg super nova laptop",
    "opp f12 phone",
    "htc low price phone",
    "hp red Laptop",

];
const search = "dell";


//indexOf()
const output = [];
/* for (const i of product) {
    if (i.toLocaleLowerCase().indexOf(search.toLowerCase()) != -1) {

        output.push(i);


    }
} */



//  includes()


for (const i of product) {
    if (i.toLocaleLowerCase().includes(search.toLowerCase())) {

        output.push(i);


    }
}
// console.log(output);

// startWith()

for (const i of product) {
    if (i.toLowerCase().startsWith(search.toLowerCase())) {
        output.push
    }
}
console.log(output);