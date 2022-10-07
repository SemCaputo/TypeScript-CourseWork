// Interfaces serve almost the exactsma epurpose as type aliases 
// We can use them to create reusable, modular types that descrive shapes of objects

// type Point = {
//     x: number;
//     y: number;
// };
// const pt: Point = { x: 123, y: 321 };

// Can be used only for objects(no equal sign!!)
interface Point {
    x: number;
    y: number;
};
const pt: Point = { x: 123, y: 321 };

// adding optional properties(with ?):
interface Person {
    readonly id: number;
    first: string;
    last: string;
    nickname?: string
};
const thomas: Person = { id: 123, first: 'Thomas', last: 'Hardy', nickname: 'Tom' };
// thomas.id = 1213231

// Addding methods to interfaces:
interface Person2 {
    readonly id: number;
    first: string;
    last: string;
    nickname?: string;
    // sayHi: () => string;
    // Either way it works just different syntax
    sayHi(): string;
};
const Mark: Person2 = {
    id: 321,
    first: 'Mark',
    last: 'Hardy',
    sayHi: () => {
        return 'Hello!';
    },
};

interface Product {
    name: string;
    price: number;
    applyDiscount(discount: number): number;
};
const shoes: Product = {
    name: 'Trainers',
    price: 100,
    applyDiscount(amount: number) {
        const newPrice = this.price * (1 - amount);
        this.price = newPrice
        return this.price;
    },
};
console.log(shoes.applyDiscount(0.4));

