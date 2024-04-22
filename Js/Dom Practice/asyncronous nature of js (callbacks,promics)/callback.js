const callback = (params) => {
  console.log("hello divyansh agarwal");
}

const loadscript= (src , callback) => {
  let sc = document.createElement("script") ;
//   sc.src = src ;
  sc.onload = callback("Hello Divyansh") ;
  document.head.append(sc) ;

}
loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js" , callback)

// console.log(``);



