// Interfaces serve almost the exactsma epurpose as type aliases 
// We can use them to create reusable, modular types that descrive shapes of objects
;
var pt = { x: 123, y: 321 };
;
var thomas = { id: 123, first: 'Thomas', last: 'Hardy', nickname: 'Tom' };
;
var Mark = {
    id: 321,
    first: 'Mark',
    last: 'Hardy',
    sayHi: function () {
        return 'Hello!';
    }
};
;
var shoes = {
    name: 'Trainers',
    price: 100,
    applyDiscount: function (amount) {
        var newPrice = this.price * (1 - amount);
        this.price = newPrice;
        return this.price;
    }
};
console.log(shoes.applyDiscount(0.4));
