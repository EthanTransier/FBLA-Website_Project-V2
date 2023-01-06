var cartHTMLList = "";

function cartUpdater() {
    if(localStorage.length == 0){
        document.getElementById("cartItemsID").innerHTML = "Your Cart is Empty";
    }else{
        for(let i = 1; i <= localStorage.length; i++){
            let price;
        if(/Plate/g.test(localStorage.getItem("cartArray" + i))){
            price = "$9.49";
        }else if(/Platter/g.test(localStorage.getItem("cartArray" + i))){
            price = "$10.99";
        }else if(/Bowl/g.test(localStorage.getItem("cartArray" + i))){
            price = "$7.99";
        }
            cartHTMLList = cartHTMLList + localStorage.getItem("cartArray" + i).replace(/\["/g,'<div class="cartItems" id= ' + ('cartArray' + i) + '><div class="cartItemText">').replace(/"\]/g,'<span class="priceText"> - ' + price +'</span></div><div class="removeCartItem" onclick="removeCartItem(\'' + ('cartArray' + i) + '\')"><div class="removeCartItemSign"></div></div></div>'); 
        }
        console.log(/Plate/g.test(cartHTMLList))
        document.getElementById("cartItemsID").innerHTML = cartHTMLList;
    }
}

function removeCartItem(cartItemID){
    document.getElementById(cartItemID).remove();
    localStorage.removeItem(cartItemID);
    reorderCart();
    resetCartList();
    cartUpdater();
    cartNotification();
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

function resetCartList(){
    cartHTMLList = "";
    document.getElementById("cartItemsID").innerHTML = cartHTMLList;
}

function clearLocalStorage() {
    localStorage.clear();
}

function cartNotification() {
    if(localStorage.length > 0){
        document.getElementById("cartRedIconID").style.display = "block";
    }else{
        document.getElementById("cartRedIconID").style.display = "none";
    }
}
