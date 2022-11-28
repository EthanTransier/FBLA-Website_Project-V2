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



function startAnimation(buttonID1) {
    var buttonClicked1 = document.getElementById(buttonID1);
    console.log(buttonClicked1.classList);
    buttonClicked1.classList.add("addToCartAnimationClass");
    document.getElementById(buttonID1).disabled = true;
    setTimeout(endAnimation, 750, buttonID1)
}

function endAnimation(buttonID2){
    var buttonClicked2 = document.getElementById(buttonID2);
    buttonClicked2.classList.remove("addToCartAnimationClass");
    document.getElementById(buttonID2).disabled = false;
}