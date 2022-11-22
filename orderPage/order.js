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

function buttonAnimation(buttonID){
    const buttonAnimationThing = document.getElementById(buttonID);
    buttonAnimationThing.addEventListener("animationstart", listener, false);
    buttonAnimationThing.addEventListener("animationend", listener, false);
    buttonAnimationThing.addEventListener("animationiteration", listener, false);
    
    if(animationEnded == 0){
        buttonAnimationThing.className = "addToCartAnimationClass";
        console.log(1);
    }else if(animationEnded == 1){
        buttonAnimationThing.className = "";
        console.log(0)
    }
    
    
    // document.getElementById(buttonID).className = 'addToCartAnimationClass';
    
}

function listener(event) {
    const l = document.createElement("li");
  switch(event.type) {
    case "animationStart":
        animationEnded = 1;
        break;
    
    case "animationend":
      console.log("animation ended")
      animationEnded = 0;
      break;
  }
}
