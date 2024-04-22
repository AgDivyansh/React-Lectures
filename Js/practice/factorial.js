// const propmt = require("prompt-sync") () ;
console.log("all is working good");
// let a = propmt("Enter the no of which u want the factorial of : ") ;
let a = 10;

function fact(number) {
    if (number <= 0)
    {
        console.log(`You can find the factorial of number which is less then 1 `);
        return 0 ;
    }
    let arr = Array.from(Array(number + 1).keys());
    arr = arr.slice(1,);
    console.log(arr);
    let c = arr.reduce((a, b) => {
        return a * b;
    }
    )
    return c;
    // console.log(`Factorial of ${number} is ${c}`);

}

let ans = fact(a);
console.log(`Factorial of ${a} is : ${ans}`);
// console.log(`End of program`);