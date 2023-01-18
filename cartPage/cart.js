var cartHTMLList = "";

function cartUpdater() {
    // If their are no things in the local storage, it displays that the cart is empty
    if(localStorage.length == 0){
        document.getElementById("cartItemsID").innerHTML = "Your Cart is Empty";
    }else{
        // Iterates through each item of local storage
        for(let i = 1; i <= localStorage.length; i++){
            // Gets a price variable
            let price;
            // If the word 'Plate' is found in the current cart item, it will set the price to 9.49
            if(/Plate/g.test(localStorage.getItem("cartArray" + i))){
                price = "$9.49";
            // If the word 'Platter' is found in the current cart item, it will set the price to 10.99
            }else if(/Platter/g.test(localStorage.getItem("cartArray" + i))){
                price = "$10.99";
            // If the word 'Bowl' is found in the current cart item, it will set the price to 7.99
            }else if(/Bowl/g.test(localStorage.getItem("cartArray" + i))){
                price = "$7.99";
            }else if(/Large/g.test(localStorage.getItem("cartArray" + i))){
                price = "$2.80";
            }else if(/Medium/g.test(localStorage.getItem("cartArray" + i))){
                price = "2.40";
            }else if(/Small/g.test(localStorage.getItem("cartArray" + i))){
                price = "$2.00";
            }
            // Sets the cart html list and adds whatever local storage item needs to be added, and removes the extra stuff around it and repalces it with html code, so that it displays correctly on the page.
            cartHTMLList = cartHTMLList + localStorage.getItem("cartArray" + i).replace(/\["/g,'<div class="cartItems" id= ' + ('cartArray' + i) + '><div class="cartItemText">').replace(/"\]/g,'<span class="priceText"> - ' + price +'</span></div><div class="removeCartItem" onclick="removeCartItem(\'' + ('cartArray' + i) + '\')"><div class="removeCartItemSign"></div></div></div>'); 
            
        }
        // At the end, sets the cart box on the page to whatever is in the cartHTMLList, which contains all of the cart stuff in html
        document.getElementById("cartItemsID").innerHTML = cartHTMLList;
    }
}

// Called whenever someone removes an item from their cart
function removeCartItem(cartItemID){
    // Removes the entire element of the removed item from the html
    document.getElementById(cartItemID).remove();
    // removes whatever item was removed from local storage
    localStorage.removeItem(cartItemID);
    // Reorders the cart
    reorderCart();
    // Resets the cart List
    resetCartList();
    // Updates the cart again
    cartUpdater();
    // Cart Notification in the header
    cartNotification();
}
function reorderCart(){
    // Gets all of the keys from local storage
    keys = Object.keys(localStorage);
    // Sorts the keys so they are in the correct order when comparing them to the cart array items
    const tempStorage = [];
    for(let i = 0; i < keys.length; i++){
        console.log(localStorage.getItem(keys[i]))
        tempStorage.push(localStorage.getItem(keys[i]))
        console.log(tempStorage)
    }
    localStorage.clear();
    // Iterates through the keys
    for(let i = 0; i < tempStorage.length; i++){
        
        console.log(tempStorage[i])
        localStorage.setItem(('cartArray' + (i + 1)), tempStorage[i])
        console.log(localStorage)
        // If the keys item does not match up with the cart array designated item, it will reorder it
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

function diningSelected(buttonID) {
    let buttons = document.getElementsByClassName('cartDinerButton')
    for(let i = 0; i < buttons.length; i++){
        buttons[i].classList.add('deselected')
    }
    document.getElementById(buttonID).classList.remove('deselected')
    document.getElementById(buttonID).classList.add('selected') 
}


// Javascript for the Interactable Map for users to choose where they can get their stuff delivered to

