const dog = {
    name: 'Elton',
    breed: 'Australian Shepherd',
    age: 9
};
// Parameters for a function can be an Object Type
function printName(person: { first: string; last: string }): void {
    console.log(`${person.first} ${person.last}`);
};
printName({ first: 'Tom', last: 'Tomason' });

// Variable with Object Type
let coordinate: { x: number, y: number } = { x: 34, y: 2 };

// Between curly braces {} the Object Type
function randomCoordinate(): { x: number, y: number } {
    return { x: Math.random(), y: Math.random() }
};


// if we add another parameter it won't work
// printName({ first: 'Tom', last: 'Tomason', age: 74 });
// if we save it to a variable first TS only check whether the parameters are present
const singer = { first: 'Tom', last: 'Tomason', age: 74 };
printName(singer);