// TS will read the argument put through the funstion as ANY
function square1(num) {
    num.toUppercase();
    return num * num;
}
square1(3);
square1('HELLO');
square1(true);

// Specify the parameter
function square(num: number) {
    num.toUppercase();
    return num * num;
}
square(3);
square('HELLO');
square(true);



function greet1(person: string) {
    return `Hi there, ${person}`;
}
greet1('Sem');


// Multiple values:
const doSomething = (person: string, age: number, isFunny: boolean) => {
}
doSomething('Sem', 42, true);


// Default Values: AFTER ANNOTATION!!!
function greet(person: string = 'stranger') {
    return `Hi there, ${person}`;
}
greet();


// Creating a function with a return TYPE:
// not necessary but makes function clearer
// TS can infer the return type!
// add AFTER PARAMETER LIST!!!
function greet2(person: string = 'stranger'): string {
    return `Hi there, ${person}`;
}
greet();

// Below TS infers function can return STRING OR NUMBER
function rando(num: number) {
    if (Math.random() < 0.5) {
        return num.toString();
    }
    return num;
}


// TS infers that the parameter is a STRING based on the method used .map
const colors = ['red', 'orange', 'yellow'];
colors.map(color => {
    return color.toLocaleUpperCase();
});

// VOID used with functions not usually with variables
// VOID returns undefined or null which is technically still a type of value
// function returns nothing
function printTwice(msg: string): void {
    console.log(msg);
    // return ''
};

// if no parameter is given TS infers that is VOID
// if return TS can infer the parameter, in this care NUMBER
function doNothing() {
    2 + 2
    // return 2 + 2
};

// TS infers parameter is NUMBER
function multiply() {
    return 24 * 5
};



// NEVER type represents a value that NEVER occurs.
// With NEVER a function never finish executing
// a function that alwasy throws an exception or a function that never finishes executing.

function makeError(msg: string): never {
    throw new Error(msg);
};

function gameLoop(): never {
    while (true) {
        console.log('GAME LOOP RUNNING');
    }
    // return true;
}