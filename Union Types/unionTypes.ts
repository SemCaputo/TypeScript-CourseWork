// Union Types allow us to give a value a few different possibile types
// if the eventual value's type is included , TS wil be HAPPY!
// value could be coming from a user and we don't know what type will be...
let age: number | string = 21;
age: 23;
age: '24'



type Point = {
    x: number,
    y: number;
};

type Loc = {
    lat: number,
    long: number;
};

let coordinates: Point | Loc = { x: 1, y: 35 };
coordinates = { lat: 545543.5345, long: 3453453 };





// Union Type with Functions:
function printAge(age: number | string): void {
    console.log(`you are ${age} years old`);
};
printAge(23);
printAge('Fifty');


// Type Narrowing adding a check:
// function value could be either a number or a string.
function calculateTax1(price: number | string, tax: number) {
    if (typeof price === 'string') {
        price = price.replace('$', '')
        return parseFloat(price) * tax
    } else {
        price * tax
    }
    // return price * tax
}

function calculateTax(price: number | string, tax: number) {
    if (typeof price === 'string') {
        price = parseFloat(price.replace('$', ''));
    } return price * tax
    // return price * tax
}

console.log(calculateTax(45, 0.7));
console.log(calculateTax('$45', 0.7));