var cartHTMLList = "";
var totalPrice = 0;

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
                totalPrice += 9.49;
            // If the word 'Platter' is found in the current cart item, it will set the price to 10.99
            }else if(/Platter/g.test(localStorage.getItem("cartArray" + i))){
                price = "$10.99";
                totalPrice += 10.99;
            // If the word 'Bowl' is found in the current cart item, it will set the price to 7.99
            }else if(/Bowl/g.test(localStorage.getItem("cartArray" + i))){
                price = "$7.99";
                totalPrice += 7.99;
            }else if(/Large/g.test(localStorage.getItem("cartArray" + i))){
                price = "$2.80";
                totalPrice += 2.80;
            }else if(/Medium/g.test(localStorage.getItem("cartArray" + i))){
                price = "$2.40";
                totalPrice += 2.40;
            }else if(/Small/g.test(localStorage.getItem("cartArray" + i))){
                price = "$2.00";
                totalPrice += 2.00;
            }else if(/Side/g.test(localStorage.getItem("cartArray" + i))){
                price = "$2.40";
                totalPrice += 2.40;
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
    if(/Plate/g.test(document.getElementById(cartItemID).innerHTML)){
        totalPrice -= 9.49;
        deliverClock()
    // If the word 'Platter' is found in the current cart item, it will set the price to 10.99
    }else if(/Platter/g.test(document.getElementById(cartItemID).innerHTML)){
        totalPrice -= 10.99;
        deliverClock()
    // If the word 'Bowl' is found in the current cart item, it will set the price to 7.99
    }else if(/Bowl/g.test(document.getElementById(cartItemID).innerHTML)){
        totalPrice -= 7.99;
        deliverClock()
    }else if(/Large/g.test(document.getElementById(cartItemID).innerHTML)){
        totalPrice -= 2.80;
        deliverClock()
    }else if(/Medium/g.test(document.getElementById(cartItemID).innerHTML)){
        totalPrice -= 2.40;
        deliverClock()
    }else if(/Small/g.test(document.getElementById(cartItemID).innerHTML)){
        totalPrice -= 2.00;
        deliverClock()
    }else if(/Side/g.test(document.getElementById(cartItemID).innerHTML)){
        totalPrice -= 2.40;
        deliverClock()
    }
    
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
        tempStorage.push(localStorage.getItem(keys[i]))
    }
    localStorage.clear();
    // Iterates through the keys
    for(let i = 0; i < tempStorage.length; i++){
        
        localStorage.setItem(('cartArray' + (i + 1)), tempStorage[i])
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
        buttons[i].classList.remove('selected')
    }
    document.getElementById(buttonID).classList.remove('deselected')
    document.getElementById(buttonID).classList.add('selected')
    if(document.getElementById('delivery').classList.contains('selected')){
        document.getElementById('checkoutFillID').innerHTML = '<div class="inputsContainer"><div class="inputContainer" ><label for="firstname">First Name: *</label><input type="text" name="firstname" id="nameInputID" class="nameInput" placeholder="John"></div><div class="inputContainer"><label for="lastname">Last Name: *</label><input type="text" name="lastname" id="nameInputID" class="nameInput" placeholder="Doe"></div><div class="inputContainer"><label for="address" class="deliveryLabel">Deliver To: *</label><input type="text" name="address" id="addressInputID" class="addressInput" placeholder="Street Address"></div></div><div class="timeContainer"><button class="nowButton timeSelected"  id="nowID" onclick="buttonSelected(\'nowID\')">ASAP</button><button class="laterButton" onclick="buttonSelected(\'laterID\')" id="laterID">Specified</button></div><div class="timeDeliveredContainer" id="timeID">Est. Time of Arrival: <span class="redText" id="estTime">0:00</span></div><div class="checkoutBox"><div class="checkTitle">Subtotal</div><div class="checkPrice" id="subPrice">0</div><div class="checkTitle deliveryTitle">Delivery & Fees</div><div class="checkPrice deliveryTitle" id="deliveryPrice">0</div><div class="checkTitle taxTitle">Tax</div><div class="checkPrice taxTitle" id="taxPrice">0</div><div class="checkTitle totalTitle">Total</div><div class="checkPrice totalTitle" id="totalPrice">0</div></div><div class="proceedButtonContainer"><button class="proceedButton">Checkout</button></div>'
    }else if(document.getElementById('takeOut').classList.contains('selected')){
        document.getElementById('checkoutFillID').innerHTML = '<div class="inputsContainer"> <div class="inputContainer"> <label for="firstname">First Name: *</label> <input type="text" name="firstname" id="nameInputID" class="nameInput" placeholder="John"> </div> <div class="inputContainer"> <label for="lastname">Last Name: *</label> <input type="text" name="lastname" id="nameInputID" class="nameInput" placeholder="Doe"> </div> </div> <div class="timeContainer">When Will You Arrive?</div> <input type="text" name="text" placeholder="" class="timeInput timeInputTakeout"></input> <div class="checkoutBox"> <div class="checkTitle">Subtotal</div> <div class="checkPrice" id="subPrice">0</div> <div class="checkTitle deliveryTitle">Delivery & Fees</div> <div class="checkPrice deliveryTitle" id="deliveryPrice">0</div> <div class="checkTitle taxTitle">Tax</div> <div class="checkPrice taxTitle" id="taxPrice">0</div> <div class="checkTitle totalTitle">Total</div> <div class="checkPrice totalTitle" id="totalPrice">0</div> </div> <div class="proceedButtonContainer"><button class="proceedButton">Checkout</button></div>'
    }else if(document.getElementById('dineIn').classList.contains('selected')){
        document.getElementById('checkoutFillID').innerHTML = '<div class="inputsContainer"> <div class="inputContainer"> <label for="firstname">First Name: *</label> <input type="text" name="firstname" id="nameInputID" class="nameInput" placeholder="John"> </div> <div class="inputContainer"> <label for="lastname">Last Name: *</label> <input type="text" name="lastname" id="nameInputID" class="nameInput" placeholder="Doe"> </div> </div> <div class="timeContainer">When Will You Arrive?</div> <input type="text" name="text" placeholder="" class="timeInput timeInputTakeout"></input> <div class="reserveContainer"> <label for="reserve">Reserve a Spot?</label> <input type="radio" name="reserve" class="reserve"> </div> <div class="checkoutBox"> <div class="checkTitle">Subtotal</div> <div class="checkPrice" id="subPrice">0</div> <div class="checkTitle deliveryTitle">Delivery & Fees</div> <div class="checkPrice deliveryTitle" id="deliveryPrice">0</div> <div class="checkTitle taxTitle">Tax</div> <div class="checkPrice taxTitle" id="taxPrice">0</div> <div class="checkTitle totalTitle">Total</div> <div class="checkPrice totalTitle" id="totalPrice">0</div> </div> <div class="proceedButtonContainer"><button class="proceedButton">Checkout</button></div>'
    }



    deliverClock();
}

function buttonSelected(timeButtonID){
    document.getElementById('nowID').classList.remove('timeSelected')
    document.getElementById('laterID').classList.remove('timeSelected')
    document.getElementById(timeButtonID).classList.add('timeSelected')
    if(document.getElementById('nowID').classList.contains('timeSelected')){
        document.getElementById('timeID').innerHTML = "Est. Time of Arrival: <span class='redText' id='estTime'>0:00</span>"
    }else if(document.getElementById('laterID').classList.contains('timeSelected')){
        document.getElementById('timeID').innerHTML = "<label for='text'>What Time Would You Like It? *</label><input type='text' name='text' placeholder='0:00 AM' class='timeInput'></input>"
    }
}

var finalPrice = 0;

function deliverClock(){
    let currentDate = new Date();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes() + 20;
    let ampm = 'AM'
    if(minutes >= 60){
        minutes -= 60;
        hours ++;
    }
    if(hours > 12){
        hours -= 12;
        ampm = "PM"
    }
    if(minutes < 10){
        minutes = "0" + minutes
    }
    if(document.getElementById('delivery').classList.contains('selected')){
        if(document.getElementById('nowID').classList.contains('timeSelected')){
            document.getElementById('estTime').innerHTML = (hours + ':' + minutes + " " + ampm)
        }

    }
     if(document.getElementsByClassName('selected') > 0){
        document.getElementById('subPrice').innerHTML = "$" + totalPrice.toFixed(2)
        
        document.getElementById('deliveryPrice').innerHTML = "$" + 4.49
        document.getElementById('taxPrice').innerHTML  = "$" + (totalPrice * .083).toFixed(2)

        finalPrice = totalPrice + 4.49 + (totalPrice * .083)
        document.getElementById('totalPrice').innerHTML  = "$" + finalPrice.toFixed(2)
     }   
    
    
    setTimeout(deliverClock, 1000)
}

