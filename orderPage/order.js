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
    // sets the checkmarks display to flex
    document.querySelector("#" + buttonID1 + " svg").style.display = 'flex';
    // Removes the Text Inside the Button
    document.querySelector("#" + buttonID1 + " .buttonText").innerHTML = '';
    // adds the animation class to the button so the animation will start playing
    document.getElementById(buttonID1).classList.add("addToCartAnimationClass");
    // disables the button so it can't be clicked anymore during the animation so the animation won't start over if clicked again while the animation is playing
    document.getElementById(buttonID1).disabled = true;
}

function endAnimation(buttonID2){
    document.getElementById(buttonID2).classList.remove("addToCartAnimationClass");
    document.getElementById(buttonID2).disabled = false;
    // Adds the text back into the button
    document.querySelector("#" + buttonID2 + " .buttonText").innerHTML = 'Add to Cart';
}

function closeCheckAnimation(buttonID3) {
    // Makes the display of the checkmark none so it dissapears from the button
    document.querySelector("#" + buttonID3 + " svg").style.display = '';
}