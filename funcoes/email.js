/* Original Dione
document.getElementsByClassName("lastPass")[0].addEventListener('keyup', (e) => {
    let firstPass =   document.getElementsByClassName("firstPass")[0].value.trim();
    let lastPass  =   document.getElementsByClassName("lastPass")[0].value.trim();
    let size = lastPass.length - 1;
    showAlert(lastPass[size] == firstPass[size]);   
});


function showAlert(bool){
    let alert = document.getElementsByClassName("showAlert")[0];
    if(bool == false && alert.classList.contains("hiddenAlert") ){
        alert.classList.remove("hiddenAlert");    
    }else if(bool == true && !alert.classList.contains("hiddenAlert") ){
        alert.classList.add("hiddenAlert");
    }
}*/



//EDIÇÃO LUCAS

document.getElementsByClassName("lastPass")[0].addEventListener('keyup', (e) => {
    let firstPass =   document.getElementsByClassName("firstPass")[0].value.trim();
    let lastPass  =   document.getElementsByClassName("lastPass")[0].value.trim();    
    let size = lastPass.length - 1;
//    showAlert(lastPass[size] == firstPass[size]);    
    if (firstPass!="" && lastPass!=""){
       showAlert(lastPass[size] == firstPass[size]);    
    }
});


document.getElementsByClassName("firstPass")[0].addEventListener('keyup', (e) => {
    let firstPass =   document.getElementsByClassName("firstPass")[0].value.trim();
    let lastPass  =   document.getElementsByClassName("lastPass")[0].value.trim();
    let size = lastPass.length - 1;
    //    showAlert(lastPass[size] == firstPass[size]);    
    if (firstPass!="" && lastPass!=""){
       showAlert(lastPass[size] == firstPass[size]);    
    }
});


function showAlert(bool){
    let alert = document.getElementsByClassName("showAlert")[0];
    let button = document.getElementsByClassName("showAlert")[1];
    console.log(button)

    if(bool == false && alert.classList.contains("hiddenAlert") ){
        alert.classList.remove("hiddenAlert");
        button.classList.add("hiddenAlert");
    }else if(bool == true && !alert.classList.contains("hiddenAlert") ){
        alert.classList.add("hiddenAlert");
        button.classList.remove("hiddenAlert");
    }

    if(bool == true){
        button.classList.remove("hiddenAlert");   
    }
         
}
