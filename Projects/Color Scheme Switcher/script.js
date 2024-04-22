const box = document.querySelectorAll(".box") ;
const body = document.querySelector("body")
// console.log(box);


box.forEach(box => {
    // console.log(`this is a loop`);
    // console.log(`${box}`);
    box.addEventListener("click",(e) => {
    //   console.log(e);
    //   console.log(`${e.target}`);
    // console.log(ele);

    // to get the id of the clicked element 
    let idname = e.target.id ;

    // console.log(`${idname}`);

    // to get the element of that to apply changes 
    const ele = document.getElementById(idname)
    // console.log(ele);
    // to get the styels applied or css applied on that elemtn 
    const styles = window.getComputedStyle(ele,null) ;

    // finally changing the bg color of the clicked elemtn 
    body.style.backgroundColor = styles.backgroundColor ;
    
    
    })
});

console.log(`sab theek`) ;
