let sum = numbs.reduce(addNumbs);
console.log(sum);

function addNumb(total,value) {
    return total + value;
}

///check every value in array =>ture/fales
let over10 = numbs.every(over10fn);
console.log(over10);

function over10fn(value) {
    return value > 10;
}

let someOver10 = numbs.some(over10fn);
console.log(someOver10);

let fiest = numbs.find(over10fn);
console.log(first);

let firstIndex = numbs.findIndex(over10fn);
console.log(firstIndex);

const alphabet = "ABCDEF";
let arrAlph = Array.from(alphabet);
console.log(arrAlph);