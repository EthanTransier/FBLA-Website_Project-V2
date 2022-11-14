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
        document.getElementById("cartMenuArea").style.marginLeft = "100%";
    }else if(cartOpenDecider == 1){
        cartOpenDecider--
        document.getElementById("cartMenuArea").style.marginLeft = 100% - cartMenuAreaWidth;
    }
}