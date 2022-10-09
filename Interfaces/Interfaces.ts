// Interfaces serve almost the exact same purpose as type aliases 
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

// Re-opening an interface:
interface Dog {
    name: string;
    age: number;
}

interface Dog {
    breed: string;
    bark(): string;
}

const elton: Dog = {
    name: "Elton",
    age: 0.5,
    breed: "Australian Shepherd",
    bark() {
        return "WOOF WOOF!";
    },
};

// Extending an interface:
interface ServiceDog extends Dog {
    job: "drug sniffer" | "bomb" | "guide dog";
}

const chewy: ServiceDog = {
    name: "Chewy",
    age: 4.5,
    breed: "Lab",
    bark() {
        return "Bark!";
    },
    job: "guide dog",
};

interface Human {
    name: string;
}

interface Employee {
    readonly id: number;
    email: string;
}

// Extending multiple interfaces
interface Engineer extends Human, Employee {
    level: string;
    languages: string[];
}

const pierre: Engineer = {
    name: "Pierre",
    id: 123897,
    email: "pierre@gmail.com",
    level: "senior",
    languages: ["JS", "Python"],
};
