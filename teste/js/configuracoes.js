import { header } from "../_components/header.js";
import { createWidget} from "../_components/compCreateWidget.js";


console.log("ls")


var components = document.querySelectorAll("[class$='Component']");


components.forEach(el=>{
    //alguma coisa ...
})


var headerC = document.querySelector(".headerComponent")
headerC.innerHTML = header();
var compC = document.querySelector(".contentComponent") 
compC.innerHTML = createWidget();
