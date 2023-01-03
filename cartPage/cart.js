var cartHTMLList = "";

function cartUpdater() {
    if(localStorage.length == 0){
        document.getElementById("cartItemsID").innerHTML = "Your Cart is Empty";
    }else{
        for(let i = 1; i <= localStorage.length; i++){
            cartHTMLList = cartHTMLList + localStorage.getItem("cartArray" + i).replace(/\["/g,'<div class="cartItems" id= ' + ('cartArray' + i) + '><div class="cartItemText">').replace(/"\]/g,'</div><div class="removeCartItem" onclick="removeCartItem(\'' + ('cartArray' + i) + '\')"><div class="removeCartItemSign"></div></div></div>');;  
        }
        document.getElementById("cartItemsID").innerHTML = cartHTMLList;
    }
}

function removeCartItem(cartItemID){
    document.getElementById(cartItemID).remove();
    localStorage.removeItem(cartItemID);
    reorderCart();
    cartUpdater();
}
function reorderCart(){
    keys = Object.keys(localStorage);
    for(let i = 0; i < keys.length; i++){
        if(keys[i] != ('cartArray' + (i + 1))){
            let currentItem = localStorage.getItem(keys[i]);
            localStorage.removeItem(keys[i])
            localStorage.setItem(('cartArray' + (i + 1)), currentItem)
        }
    }
}

function clearLocalStorage() {
    localStorage.clear();
}
