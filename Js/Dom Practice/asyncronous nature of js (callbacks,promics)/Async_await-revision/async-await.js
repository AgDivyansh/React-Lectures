console.log(`all is going good`);

console.log(`this lecture is all about callbacks and promices`);


// setTimeout(() => {
//     console.log(`this is present in set time out`);

// }, 1000);
// console.log(`this is present out of set time out`);





console.log(`Now all abotu call back function`);

// const loadacript = () =>
// {

// }

// anfn is used for short hand of arrow funciton 

const callback = (arg) => {
    console.log(`this is an callback function`);
    console.log(`Welcome ${arg} this is your callback funciton. `);
}

const loadacript = (src, callback) => {
    let sc = document.createElement("script");
    //   sc.src = src ;
    sc.onload = callback("Divyansh");
    //   document.head.append(sc) ;
}
let src = `https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js`;
loadacript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)

console.log(`Pyramid of boom or callback hell when nested clalback function are present`);

console.log(`promises is a solution of callback hell. `);


console.log(`Now promises starts:`);
let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        console.log(`this is not displayed`);

        reject("because promisisi rejects this case:\tNo random fucntion is not supporting u");
    }
    console.log(`Yes i am done`);
    resolve("Divyansh");
})
prom1.then((a) => {
    console.log(`This value we get from promisis resolve function : ${a} `);

}).catch((err) => {
    console.log(`this is an error: `);

    console.log(`${err}`);

})
