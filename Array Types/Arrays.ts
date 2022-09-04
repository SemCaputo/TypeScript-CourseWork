
// if an empty Array is created will always be empty and won't aacept any values
const activeUsers1: [] = [];


// specify the type of array
// TS won't infer the type of array
const activeUsers: string[] = [];
activeUsers.push('Tony');
// activeUsers.push(12)

const ageList: number[] = [45, 75, 23];
ageList[0] = 99;
// ageList[0] = 'asdas'


// Alternative syntax:
const bools1: Array<boolean> = [];
// same as:
const bools: boolean[] = [];

// Arrays work with custom types too:
type Point = {
    x: number,
    y: number
};
const coords: Point[] = [];
coords.push({ x: 23, y: 45 });


// multidimensional Arrays:
// add square brackets[] dependign on how mani levels of nesting
const board: string[][] = [
    ["X", "O", "X"],
    ["X", "O", "X"],
    ["X", "O", "X"],
];

