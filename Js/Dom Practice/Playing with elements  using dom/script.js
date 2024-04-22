console.log(`all is going good`);
let boxes = document.getElementsByClassName("box") ;

console.log(boxes);
function getRandomColor ()
{
    let first = Math.ceil(0 + Math.random()*255) ;
    let second = Math.ceil(0 + Math.random()*255) ;
    let third = Math.ceil(0 + Math.random()*255) ;
    return `rgb(${first}, ${second}, ${third})` ;
}
Array.from(boxes).forEach(e=> {
    // console.log(e);
    // e.innerHTML = "hellow  Divyansh " ;
    e.style.backgroundColor = getRandomColor() ;
    e.style.color = getRandomColor() ;
})
document.querySelector(".box")