function addToCart(drinkContainerID){
    // Adds the food item to the cart
    let drink = document.querySelector("#" + drinkContainerID + " .drinkTitle").innerHTML
    let size =  document.querySelector("#" + document.querySelector("#" + document.querySelector("#" + drinkContainerID + " .quantitySizeContainer").id + " .sizeContainer").id  + " .selected").innerHTML
    
    for(let i = 0; i < document.querySelector("#" + document.querySelector("#" + document.querySelector("#" + drinkContainerID + " .quantitySizeContainer").id + " .quantityContainer").id  + " .quantity").innerHTML; i++){
        localStorage.setItem(("cartArray" + (localStorage.length + 1)), "[\"" + size + " " + drink + "\"]");
    }
    
    console.log(localStorage)
    // resetDrinkContainer();
}

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
    // Removes the animation class from the button
    document.getElementById(buttonID2).classList.remove("addToCartAnimationClass");
    // Re-enables the button so it works again after the animation is finished
    document.getElementById(buttonID2).disabled = false;
    // Adds the text back into the button
    document.querySelector("#" + buttonID2 + " .buttonText").innerHTML = 'Add to Cart';
}

function closeCheckAnimation(buttonID3) {
    // Makes the display of the checkmark none so it dissapears from the button when the animation is 75% done
    document.querySelector("#" + buttonID3 + " svg").style.display = '';
}


function selectedSize(sizeID){
    const buttons = document.querySelectorAll("#" + document.getElementById(sizeID).parentElement.id + " button")
    for(let i = 0; i < buttons.length; i++){
        document.getElementById(buttons[i].id).classList.remove('selected');
    }
    document.getElementById(sizeID).classList.add('selected')
}

function lessQuantity(sizeContainerID){
    if(document.querySelector("#" + sizeContainerID + " .quantity").innerHTML > 1){
        document.querySelector("#" + sizeContainerID + " .quantity").innerHTML--;
    }
}

function moreQuantity(sizeContainerID){
    document.querySelector("#" + sizeContainerID + " .quantity").innerHTML++;
}