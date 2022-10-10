// function printDouble(msg: string) {
//     console.log(msg);
//     console.log(msg);
// }
// printDouble('Hello World!!')
// [!] non-null assertion operator
var btn = document.getElementById('btn');
// console.log(btn);
// [?] optional chaining operator 
btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', function () {
    alert('CLicked!!');
});
