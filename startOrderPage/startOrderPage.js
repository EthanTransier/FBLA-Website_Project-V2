console.log(localStorage.getItem("cartArray" + (localStorage.length - 1)));
console.log(localStorage);

function cartNotification() {
    if(localStorage.length > 0){
        document.getElementById("cartRedIconID").style.display = "block";
    }else{
        document.getElementById("cartRedIconID").style.display = "none";
    }
}
