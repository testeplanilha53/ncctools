document.getElementsByClassName("lastPass")[0].addEventListener('keyup', (e) => {
    let firstPass =   document.getElementsByClassName("firstPass")[0].value.trim();
    let lastPass  =   document.getElementsByClassName("lastPass")[0].value.trim();
    let size = lastPass.length - 1;
    showAlert(lastPass[size] == firstPass[size]);   
});


document.getElementsByClassName("firstPass")[0].addEventListener('keyup', (e) => {
    let firstPass =   document.getElementsByClassName("firstPass")[0].value.trim();
    let lastPass  =   document.getElementsByClassName("lastPass")[0].value.trim();
    let size = firstPass.length - 1;
    if(lastPass.length > 0){
        showAlert(lastPass[size] == firstPass[size]);   
    }
    
});



function showAlert(bool){
    let alert = document.getElementsByClassName("showAlert")[0];
    if(bool == false && alert.classList.contains("hiddenAlert") ){
        alert.classList.remove("hiddenAlert");    
    }else if(bool == true && !alert.classList.contains("hiddenAlert") ){
        alert.classList.add("hiddenAlert");
    }
}



