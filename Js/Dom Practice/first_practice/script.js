console.log("all is working good");
// document.body.style.color  = "red" ;
// console.log(document.body);
// document.title = "Frist DOM Practice page" ;
// document.body.childNodes[1].childNodes.backgroundcolor = "red" ;
let cont = document.body.childNodes[1] ;
cont.lastElementChild.style.background = "green" ;
cont.lastElementChild.style.color = "white" ;