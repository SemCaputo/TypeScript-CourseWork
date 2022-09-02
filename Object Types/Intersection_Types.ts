
type Circle = {
    radius: number;
};

type Colorful = {
    color: string;
};
// Combine properties with an intesection using  &
type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
    radius: 4,
    color: "yellow",
};



// Properties can be added to the intesection:
type Cat = {
    numLives: number;
};
type Dog = {
    breed: string;
};

type CatDog = Cat &
    Dog & {
        age: number;
    };

const christy: CatDog = {
    numLives: 7,
    breed: "Husky",
    age: 9,
};
