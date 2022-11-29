let animationEnded = 0;

let orderFood
const cartArray = [];
function addToCart(orderFood){
    cartArray.push(orderFood)
    console.log(cartArray)
    document.getElementById("cartRedIconNumber").innerHTML = cartArray.length;
    document.getElementById("cartRedIcon").style.width = "10px";
    document.getElementById("cartRedIcon").style.height = "10px";
}

let cartOpenDecider = 0;

let cartMenuAreaWidth;
function openCartMenu(){
    cartMenuAreaWidth = document.getElementById("cartMenuArea").style.width;
    console.log(document.getElementById("cartMenuArea").style.width)
    if(cartOpenDecider == 0){
        cartOpenDecider++
        document.getElementById("cartMenuArea").style.marginRight = "-100%";
    }else if(cartOpenDecider == 1){
        cartOpenDecider--
        document.getElementById("cartMenuArea").style.marginRight = "100%";
    }
}

var buttonVariable;
var buttonVariable2;
var buttonVariable3;
var buttonVariabl4;
function startAnimation(buttonID1) {
    buttonVariable = document.querySelector('#addToCart-ChickenKatsu svg');
    // sets the checkmarks display to flex
    buttonVariable.style.display = 'flex';
    console.log(buttonVariable.style.display)
    // gets the id for the text inside the button
    buttonVariable4 = ("#" + buttonID1 + " .buttonText");
    // Removes the Text Inside the Button
    document.querySelector(buttonVariable4).innerHTML = '';
    
    var buttonClicked1 = document.getElementById(buttonID1);
    buttonClicked1.classList.add("addToCartAnimationClass");
    
    buttonVariable3 = "button#" + buttonID1 + "svg.checkmark";
    console.log(buttonVariable3);
    
   
    console.log(buttonVariable)
    
    document.getElementById(buttonID1).disabled = true;
    setTimeout(endAnimation, 750, buttonID1)
}

function endAnimation(buttonID2){
    // var buttonClicked2 = document.getElementById(buttonID2);
    // buttonClicked2.classList.remove("addToCartAnimationClass");
    // document.getElementById(buttonID2).disabled = false;
}

function closeCheckAnimation() {
    
}