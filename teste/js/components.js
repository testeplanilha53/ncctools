
// import { widget } from "../_components/widget.js"; 
// import { modal } from "../_components/modal.js";
import { header } from "../_components/header.js";
import { compArea } from "../_components/compArea.js";


console.log("ls")


var components = document.querySelectorAll("[class$='Component']");


components.forEach(el=>{
    //alguma coisa ...
})


var headerC = document.querySelector(".headerComponent")
headerC.innerHTML = header();
var windowC = document.querySelector(".windowComponent") 
windowC.innerHTML = compArea();


