// tuples are a special type exclusive to TS
// Tuples are arrays of fixed lenghts and ordered with specific types - super rigid arrays


// this array requires 3 numbers in the array:
const color: [number, number, number] = [1, 2, 3];

// order matters in the tuple:
type HTTPResponse = [number, string];
// const goodRes: HTTPResponse = ['ok', 200];
const goodRes: HTTPResponse = [200, 'ok'];
// it is possbile to push or pop after the array has been created:
goodRes.push(123);
goodRes.pop();

// we can make an array of TUPLES:
const responses: HTTPResponse[] = [[404, 'Not Found'], [200, 'OK']];




// Enums allow us to define a set of named constants.
enum OrderStatus1 {
    PENDING,
    SHIPPED,
    DELIVERED,
    RETURNED
};
// Numbers have been assigned automatically, but can be changed by adding = and a new value:
enum OrderStatus {
    PENDING = 123,
    SHIPPED = 234,
    DELIVERED = 345,
    RETURNED = 456
};


const myStatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus) {
    return status === OrderStatus.DELIVERED
};

isDelivered(OrderStatus.RETURNED)