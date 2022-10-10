// function printDouble(msg: string) {
//     console.log(msg);
//     console.log(msg);
// }
// printDouble('Hello World!!')

// [!] non-null assertion operator
const btn = document.getElementById('btn')!;
// console.log(btn);

// [?] optional chaining operator 
btn?.addEventListener('click', function () {
    alert('CLicked!!');
});
