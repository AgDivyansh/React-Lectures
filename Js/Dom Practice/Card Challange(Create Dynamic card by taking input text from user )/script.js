// let title ;
// title = prompt("Enter the title of the video : ") ;
// // console.log("all good");
// document.querySelector(".title").innerHTML = title ;

// let cname = prompt("Enter the channel name : ") ;
// document.querySelector(".channelname").innerHTML = cname ;

// let vw = prompt("Enter the views of the video") ;
// document.querySelector(".views").innerHTML = vw ;

// let old = prompt("Enter how much old is the video") ;
// document.querySelector(".monthsold").innerHTML = old ;
// let du = prompt(".Enter the duration of the video : ") ;
// document.querySelector(".duration").innerHTML = du ;

// document.querySelector(".duration").style.color = "white" ;




let child = document.querySelector(".details").children ;

// console.log(child);

// let class_name = [] ;

Array.from(child).forEach(e => {
    let tempclass = e.classList ;
    console.log(`${tempclass}`);
    let value = prompt(`Enter the value of${tempclass} : `) ;
    // let varclass = ${tempclass} ;
    document.querySelector(`.${tempclass}`).innerHTML = value ;
    // console.log(tempclass);
    // class_name.push(tempclass) ;
});

// class_name.forEach(e => {
//     console.log(e);
    // let tempclassname = e ;
    // console.log(tempclassname);
    // let value = prompt(`Enter the value of${tempclassname} : `) ;
    // document.querySelector(".tempclassname").innerHTML = value ;
// });