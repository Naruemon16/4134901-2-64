let person = {
    firstName : "Noey",
    lastName : "Kaew",
    age: 22,
    sex: "female",

    fullName : function () {
        return this.firstName + " " + this.lastName;
    },
};
console.log(person);

const p = person;
p.age = 10;
console.log(p);

person.age = 20;
console.log(person.age); //value
console.log(person.fullName);  //property
console.log(person.fullName());  //return

//destructuring
const {firstName, lastName, age: a, sex: s } = person;
console.log(firstName);
console.log(s);

//string
const S1 = "Hello World !!";
const S2 = "My Name is";
const Aname = "Noey";
let conCat = S1 + S2 + Aname;
console.log(conCat);
conCat = `
            I
            Love
            it. ${S2} ${Aname}

        `;
console.log(conCat);

//Spread Op (...)
const A1 = [2, 3, 4];
const A2 = [5, 6, 7];
let comArr = [A1, A2];
console.log(comArr);

comArr = [...A1, ...A2];
console.log(comArr);

sum = (...numbers) => {
    let total = 0;
    for ( value of numbers) total += value;
    return total;
};

console.log(sum(comArr));