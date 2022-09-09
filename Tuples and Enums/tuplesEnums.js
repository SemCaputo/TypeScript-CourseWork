// tuples are a special type exclusive to TS
// Tuples are arrays of fixed lenghts and ordered with specific types - super rigid arrays
// this array requires 3 numbers in the array:
var color = [1, 2, 3];
// const goodRes: HTTPResponse = ['ok', 200];
var goodRes = [200, 'ok'];
// it is possbile to push or pop after the array has been created:
goodRes.push(123);
goodRes.pop();
// we can make an array of TUPLES:
var responses = [[404, 'Not Found'], [200, 'OK']];
// Enums allow us to define a set of named constants.
var OrderStatus1;
(function (OrderStatus1) {
    OrderStatus1[OrderStatus1["PENDING"] = 0] = "PENDING";
    OrderStatus1[OrderStatus1["SHIPPED"] = 1] = "SHIPPED";
    OrderStatus1[OrderStatus1["DELIVERED"] = 2] = "DELIVERED";
    OrderStatus1[OrderStatus1["RETURNED"] = 3] = "RETURNED";
})(OrderStatus1 || (OrderStatus1 = {}));
;
// Numbers have been assigned automatically, but can be changed by adding = and a new value:
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["PENDING"] = 123] = "PENDING";
    OrderStatus[OrderStatus["SHIPPED"] = 234] = "SHIPPED";
    OrderStatus[OrderStatus["DELIVERED"] = 345] = "DELIVERED";
    OrderStatus[OrderStatus["RETURNED"] = 456] = "RETURNED";
})(OrderStatus || (OrderStatus = {}));
;
var myStatus = OrderStatus.DELIVERED;
function isDelivered(status) {
    return status === OrderStatus.DELIVERED;
}
;
isDelivered(OrderStatus.RETURNED);
// Numbers have been assigned automatically, but can be changed by adding = and a new value:
var ArrowKeys;
(function (ArrowKeys) {
    ArrowKeys["UP"] = "up";
    ArrowKeys["DOWN"] = "down";
    ArrowKeys["LEFT"] = "left";
    ArrowKeys["RIGHT"] = "right";
})(ArrowKeys || (ArrowKeys = {}));
;
ArrowKeys.LEFT;
;
// compile code in JS:
// "use strict";
// var OrderStatus2;
// (function (OrderStatus2) {
//     OrderStatus2[OrderStatus2["PENDING"] = 0] = "PENDING";
//     OrderStatus2[OrderStatus2["SHIPPED"] = 1] = "SHIPPED";
//     OrderStatus2[OrderStatus2["DELIVERED"] = 2] = "DELIVERED";
//     OrderStatus2[OrderStatus2["RETURNED"] = 3] = "RETURNED";
// })(OrderStatus2 || (OrderStatus2 = {}));
// ;
