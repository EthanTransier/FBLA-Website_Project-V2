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
var buttonVariable4;
var buttonVariable5;
function startAnimation(buttonID1) {
    // Sets Button Variable 3 to whatever buttonID1
    buttonVariable3 = buttonID1
    
    buttonVariable2 = "#" + buttonID1 + " svg"
    // Makes the buttonVariable set to the svg found inside the specific button being pressed
    buttonVariable = document.querySelector(buttonVariable2);
    // sets the checkmarks display to flex
    buttonVariable.style.display = 'flex';
    // gets the id for the text inside the button
    buttonVariable4 = ("#" + buttonID1 + " .buttonText");
    // Removes the Text Inside the Button
    document.querySelector(buttonVariable4).innerHTML = '';
    
    var buttonClicked1 = document.getElementById(buttonID1);
    buttonClicked1.classList.add("addToCartAnimationClass");
    
    document.getElementById(buttonID1).disabled = true;
    buttonVariable5 = buttonID1;
    console.log(buttonVariable5)
    setTimeout(endAnimation, 750)
}

function endAnimation(){
    console.log(buttonVariable5)
    var buttonClicked2 = document.getElementById(buttonVariable5);
    buttonClicked2.classList.remove("addToCartAnimationClass");
    document.getElementById(buttonVariable5).disabled = false;
    // makes the display of the checkmark none, so it removes it from the button
    buttonVariable.style.display = '';
    // Adds the text back into the button
    buttonVariable4 = ("#" + buttonVariable3 + " .buttonText");
    document.querySelector(buttonVariable4).innerHTML = 'Add to Cart';
}

function closeCheckAnimation() {
    
}