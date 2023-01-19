function addToCart(drinkContainerID){
    // Adds the food item to the cart
    let drink = document.querySelector("#" + drinkContainerID + " .drinkTitle").innerHTML
    console.log(document.querySelector("#" + document.querySelector("#" + document.querySelector("#" + drinkContainerID + " .quantitySizeContainer").id + " .sizeContainer").id  + " select").value)
    let size =  document.querySelector("#" + document.querySelector("#" + document.querySelector("#" + drinkContainerID + " .quantitySizeContainer").id + " .sizeContainer").id  + " select").value
    
    for(let i = 0; i < document.querySelector("#" + document.querySelector("#" + document.querySelector("#" + drinkContainerID + " .quantitySizeContainer").id + " .quantityContainer").id  + " .quantity").innerHTML; i++){
        localStorage.setItem(("cartArray" + (localStorage.length + 1)), "[\"" + size + " " + drink + "\"]");
    }
    
    console.log(localStorage)
    // resetDrinkContainer();
}

function startAnimation(buttonID1) {
    // sets the checkmarks display to flex
    console.log(document.getElementById(buttonID1))
    console.log(document.querySelector("#" + buttonID1 + " svg"))
    document.querySelector("#" + buttonID1 + " svg").style.display = 'flex';
    // Removes the Text Inside the Button
    document.querySelector("#" + buttonID1 + " .buttonText").innerHTML = '';
    // adds the animation class to the button so the animation will start playing
    document.getElementById(buttonID1).classList.add("addToCartAnimationClass");
    // disables the button so it can't be clicked anymore during the animation so the animation won't start over if clicked again while the animation is playing
    document.getElementById(buttonID1).disabled = true;
}

function endAnimation(buttonID2, sizeID, containerID, quantityContainerID){
    // Removes the animation class from the button
    document.getElementById(buttonID2).classList.remove("addToCartAnimationClass");
    // Re-enables the button so it works again after the animation is finished
    document.getElementById(buttonID2).disabled = false;
    // Adds the text back into the button
    document.querySelector("#" + buttonID2 + " .buttonText").innerHTML = 'Add to Cart';

    setPrice(sizeID, containerID, quantityContainerID)
}

function closeCheckAnimation(buttonID3) {
    // Makes the display of the checkmark none so it dissapears from the button when the animation is 75% done
    document.querySelector("#" + buttonID3 + " svg").style.display = '';
}


function lessQuantity(sizeID, containerID, quantityContainerID){
    if(document.querySelector("#" + quantityContainerID + " .quantity").innerHTML > 1){
        document.querySelector("#" + quantityContainerID + " .quantity").innerHTML--;
        document.querySelector("#" + quantityContainerID + " .lessQuantityButton").style.color = 'white';
    }else{
        document.querySelector("#" + quantityContainerID + " .lessQuantityButton").style.color = 'grey';
    }
    setPrice(sizeID, containerID, quantityContainerID)
}

function moreQuantity(sizeID, containerID, quantityContainerID){
    document.querySelector("#" + quantityContainerID + " .quantity").innerHTML++;
    if(document.querySelector("#" + quantityContainerID + " .quantity").innerHTML > 1){
        document.querySelector("#" + quantityContainerID + " .lessQuantityButton").style.color = 'white';
    }else{
        document.querySelector("#" + quantityContainerID + " .lessQuantityButton").style.color = 'grey';
    }
    setPrice(sizeID, containerID, quantityContainerID)
}


function setPrice(sizeID, containerID, quantityContainerID){
    let price = 0;
    
    if(document.getElementById(sizeID).value == "Small"){
        for(let i = 0; i < document.querySelector("#" + quantityContainerID + " .quantity").innerHTML; i++){
            price += 2.00
        }
        
    }else if(document.getElementById(sizeID).value == "Medium"){
        for(let i = 0; i < document.querySelector("#" + quantityContainerID + " .quantity").innerHTML; i++){
            price += 2.40
        }
    }else if(document.getElementById(sizeID).value == "Large"){
        for(let i = 0; i < document.querySelector("#" + quantityContainerID + " .quantity").innerHTML; i++){
            price += 2.80
        }
    }
    document.querySelector("#" + document.querySelector("#" + containerID + " .addToCartButton").id + " .buttonText").innerHTML =  "Add To Cart - $" + (Math.round(price * 100) / 100).toFixed(2); 
}

