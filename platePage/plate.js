function quantityMinus(event){
    event.stopPropagation();
    event.preventDefault();
}

function quantityPlus(event){
    event.stopPropagation();
    event.preventDefault();
}
const primarySelected = [];
const secondarySelected = [];


var primaryDishesSelected = 0;
function selectPrimaryFoodContainer(containerID) {
    
    var primaryFoodContainerSelected = document.getElementById(containerID);

    
    // If the food container has not played the starting animation, it will play it and then remove the ending animation class. If the food container has played the starting animation, it will remove the starting animation class and play the ending animation class.
    if (primaryFoodContainerSelected.classList.contains("selectAnimation") != true && primaryDishesSelected < 2) {
        // Adds selected class to the container that is selected
        document.querySelector("#" + containerID + " .foodTitle").classList.add('selected');
        // Adds and removes the animation class so the animation palys
        primaryFoodContainerSelected.classList.add("selectAnimation");
        primaryFoodContainerSelected.classList.remove("deselectAnimation");

        // Adds a dish to the primary dishes selected variable, which says how many primary dishes have been selected by the user, and then console logs it
        if(document.querySelector("#" + document.querySelector('#' + containerID + " .foodText").id + " .quantity").innerHTML == 1 && primaryDishesSelected != 2){
            primaryDishesSelected++;
        }else if(document.querySelector("#" + document.querySelector('#' + containerID + " .foodText").id + " .quantity").innerHTML == 2){
            primaryDishesSelected = 2;
        }
        if(document.getElementsByClassName('selected').length == 0){
        primaryDishesSelected = 0;
        }

        // Plays the animation that changes the text in the container to white when it is selected because the red text doesn't contrast enough with the now green container
        document.querySelector("#" + containerID + " div").classList.add("foodTextSelectAnimation");
        document.querySelector("#" + containerID + " div").classList.remove("foodTextDeselectAnimation");

        document.querySelector("#" + containerID + " .fireIcon").classList.add("fireIconWhiteOnAnimation");
        document.querySelector("#" + containerID + " .fireIcon").classList.remove("fireIconWhiteOffAnimation");

        document.querySelector("#" + containerID + " .fireIconCrossout").classList.add("fireCrossWhiteOnAnimation");
        document.querySelector("#" + containerID + " .fireIconCrossout").classList.remove("fireCrossWhiteOffAnimation");

        document.querySelector("#" + containerID + " .quantityCounter").style.display = "flex";
        document.querySelector("#" + containerID + " .fireIcon").style.display = "block";
        document.querySelector("#" + containerID + " .fireIconCrossout").style.display = "block";


        // Changes the title at the top of the primary dish title to whatever the number of dishes selected is, and then turns in green if one primary dish has been selected
        if (primaryDishesSelected == 1) {
            document.getElementById("primarySubTitle").innerHTML = ("You Have Selected 1 Primary Dish")
        } else if (primaryDishesSelected == 2 || primaryDishesSelected == 0) {
            document.querySelector("#" + document.getElementById(containerID).parentElement.id + " .foodContainerSubTitle").innerHTML = ("You Have Selected " + primaryDishesSelected + " Primary Dishes")
        }
        if (primaryDishesSelected == 2) {
            document.getElementById("primarySubTitle").style.color = "#659f38";
        } else {
            document.getElementById("primarySubTitle").style.color = "grey";
        }
    } else if (primaryFoodContainerSelected.classList.contains("selectAnimation")) {
        // Removes selected class to the container that is deselected
        document.querySelector("#" + containerID + " .foodTitle").classList.remove('selected');

        primaryFoodContainerSelected.classList.add("deselectAnimation");
        primaryFoodContainerSelected.classList.remove("selectAnimation");
        
        if(document.querySelector("#" + document.querySelector('#' + containerID + " .foodText").id + " .quantity").innerHTML == 1){
            primaryDishesSelected--;
        }else if(document.querySelector("#" + document.querySelector('#' + containerID + " .foodText").id + " .quantity").innerHTML == 2){
            primaryDishesSelected = 0;
        }

        if(document.getElementsByClassName('selected').length == 0){
        primaryDishesSelected = 0;
        }

        document.querySelector("#" + containerID + " div").classList.remove("foodTextSelectAnimation");
        document.querySelector("#" + containerID + " div").classList.add("foodTextDeselectAnimation");

        document.querySelector("#" + containerID + " .fireIcon").classList.remove("fireIconWhiteOnAnimation");
        document.querySelector("#" + containerID + " .fireIcon").classList.add("fireIconWhiteOffAnimation");

        document.querySelector("#" + containerID + " .fireIconCrossout").classList.remove("fireCrossWhiteOnAnimation");
        document.querySelector("#" + containerID + " .fireIconCrossout").classList.add("fireCrossWhiteOffAnimation");

        document.querySelector("#" + containerID + " .fireIcon").style.backgroundColor = 'rgba(51, 51, 51, 0)'

        document.querySelector("#" + document.querySelector("#" + containerID + " .foodText").id + " .quantityCounter").style.display = "none";
        document.querySelector("#" + containerID + " .fireIcon").style.display = "none";
        document.querySelector("#" + containerID + " .fireIconCrossout").style.display = "none";

        if (primaryDishesSelected == 1) {
            document.querySelector("#" + document.getElementById(containerID).parentElement.id + " .foodContainerSubTitle").innerHTML = ("You Have Selected 1 Primary Dish")
        } else if (primaryDishesSelected == 0) {
            document.querySelector("#" + document.getElementById(containerID).parentElement.id + " .foodContainerSubTitle").innerHTML = ("You Have Selected 0 Primary Dishes")
        }

        if (primaryDishesSelected == 2) {
            document.getElementById("primarySubTitle").style.color = "#659f38";
        } else {
            document.getElementById("primarySubTitle").style.color = "grey";
        }
    }
    if (primaryDishesSelected == 2 && secondaryDishesSelected == 1) {
        document.getElementById('addToCartPlate').classList.remove("buttonDisabled");
        document.getElementById('addToCartPlate').disabled = false;
        document.getElementById('foodQuantityContainerID').classList.add('quantityButtonEnabled');
    } else {
        document.getElementById('addToCartPlate').classList.add("buttonDisabled");
        document.getElementById('addToCartPlate').disabled = true;
        document.getElementById('foodQuantityContainerID').classList.remove('quantityButtonEnabled');
    }
}

var secondaryDishesSelected = 0;
function selectSecondaryFoodContainer(containerID) {
    var secondaryFoodContainerSelected = document.getElementById(containerID);
    // If the food container has not played the starting animation, it will play it and then remove the ending animation class. If the food container has played the starting animation, it will remove the starting animation class and play the ending animation class.
    if (secondaryFoodContainerSelected.classList.contains("selectAnimation") != true && secondaryDishesSelected < 1) {
        // Adds selected class to the container that is selected
        
        document.querySelector("#" + containerID + " .foodTitle").classList.add('selected');


        // Adds and removes the animation class so the animation palys
        secondaryFoodContainerSelected.classList.add("selectAnimation");
        secondaryFoodContainerSelected.classList.remove("deselectAnimation");

        // Adds a dish to the secondary dishes selected variable, which says how many secondary dishes have been selected by the user, and then console logs it
        secondaryDishesSelected++;
        

        // Plays the animation that changes the text in the container to white when it is selected because the red text doesn't contrast enough with the now green container
        document.querySelector("#" + containerID + " div").classList.add("foodTextSelectAnimation");
        document.querySelector("#" + containerID + " div").classList.remove("foodTextDeselectAnimation");

        // Changes the title at the top of the secondary dish title to whatever the number of dishes selected is, and then turns in green if one secondary dish has been selected
        if (secondaryDishesSelected == 1) {
            document.getElementById("secondarySubTitle").innerHTML = ("You Have Selected 1 Secondary Dish")
        } else if (secondaryDishesSelected == 2 || secondaryDishesSelected == 0) {
            document.querySelector("#" + document.getElementById(containerID).parentElement.id + " .foodContainerSubTitle").innerHTML = ("You Have Selected " + secondaryDishesSelected + " Secondary Dishes")
        }
        if (secondaryDishesSelected == 1) {
            document.getElementById("secondarySubTitle").style.color = "#659f38";
        } else {
            document.getElementById("secondarySubTitle").style.color = "grey";
        }
    } else if (secondaryFoodContainerSelected.classList.contains("selectAnimation")) {
         // Removes selected class to the container that is deselected
        document.querySelector("#" + containerID + " .foodTitle").classList.remove('selected');
        
        secondaryFoodContainerSelected.classList.add("deselectAnimation");
        secondaryFoodContainerSelected.classList.remove("selectAnimation");

        secondaryDishesSelected--;
        

        document.querySelector("#" + containerID + " div").classList.remove("foodTextSelectAnimation");
        document.querySelector("#" + containerID + " div").classList.add("foodTextDeselectAnimation");

        if (secondaryDishesSelected == 1) {
            document.querySelector("#" + document.getElementById(containerID).parentElement.id + " .foodContainerSubTitle").innerHTML = ("You Have Selected 1 Secondary Dish")
        } else if (secondaryDishesSelected == 0) {
            document.querySelector("#" + document.getElementById(containerID).parentElement.id + " .foodContainerSubTitle").innerHTML = ("You Have Selected 0 Secondary Dishes")
        }

        if (secondaryDishesSelected == 1) {
            document.getElementById("secondarySubTitle").style.color = "#659f38";
        } else {
            document.getElementById("secondarySubTitle").style.color = "grey";
        }
    }
    // If both of the primary and secondary items have the adequate number of dishes selected, the submit button at the bottom will activate
    if (primaryDishesSelected == 2 && secondaryDishesSelected == 1) {
        document.getElementById('addToCartPlate').classList.remove("buttonDisabled");
        document.getElementById('addToCartPlate').disabled = false;
        document.getElementById('foodQuantityContainerID').classList.add('quantityButtonEnabled');
    } else {
        document.getElementById('addToCartPlate').classList.add("buttonDisabled");
        document.getElementById('addToCartPlate').disabled = true;
        document.getElementById('foodQuantityContainerID').classList.remove('quantityButtonEnabled');
    }
}

function openCartMenu() {

    if (cartOpenDecider == 0) {
        cartOpenDecider++
        document.getElementById("cartMenuArea").style.marginRight = "-100%";
    } else if (cartOpenDecider == 1) {
        cartOpenDecider--
        document.getElementById("cartMenuArea").style.marginRight = "100%";
    }
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

function endAnimation(buttonID2) {
    // Removes the animation class from the button
    document.getElementById(buttonID2).classList.remove("addToCartAnimationClass");
    // Re-enables the button so it works again after the animation is finished
    document.getElementById(buttonID2).disabled = false;
    // Adds the text back into the button
    document.querySelector("#" + buttonID2 + " .buttonText").innerHTML = 'Add to Cart';

    window.location.href = "../startOrderPage/startOrderPage.html"
}

function closeCheckAnimation(buttonID3) {
    // Makes the display of the checkmark none so it dissapears from the button when the animation is 75% done
    document.querySelector("#" + buttonID3 + " svg").style.display = '';
}
// Adds the food item to the cart
const cartArray = [];
const secondaryCartArray = [];
function addToCart() {
    const firstCartArray = document.getElementsByClassName("selected");
    for (let i = 0; i < firstCartArray.length; i++){
        if(document.querySelector("#" + firstCartArray[i].parentElement.id + " .fireIcon")){
            if(document.querySelector("#" + firstCartArray[i].parentElement.id + " .fireIcon").style.backgroundColor == "rgb(58, 255, 255)"){
                secondaryCartArray.push("Spicy " + firstCartArray.item(i).innerHTML)
            }else{
                secondaryCartArray.push(firstCartArray.item(i).innerHTML)
            }
        }else{
            secondaryCartArray.push(firstCartArray.item(i).innerHTML)
        }

        if(secondaryCartArray.length == 3){
            cartArray.push("Plate with " + secondaryCartArray[0] + ", " + secondaryCartArray[1] + ", and " + secondaryCartArray[2])
            secondaryCartArray.length = 0;
        }else if(secondaryCartArray.length == 2 && firstCartArray.length == 2){
            cartArray.push("Plate With Two Servings of " + secondaryCartArray[0] + " and One Serving of " + secondaryCartArray[1] )
        }
        
    }
    for(let i = 0; i < document.getElementById('quantityButtonID').innerHTML; i++){
        localStorage.setItem(("cartArray" + (localStorage.length + 1)), JSON.stringify(cartArray));
    }
    
    
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

function makeSpicy(event){
    event.stopPropagation();
}

function spicyAnimation(fireID){
    if(document.getElementById(fireID).parentElement.parentElement.classList.contains('selectAnimation')){
        if(document.getElementById(fireID).style.backgroundColor == 'rgb(58, 255, 255)'){
        // document.getElementById(fireID).classList.remove('fireSelectAnimation');
        // document.getElementById(fireID).classList.add('fireDeselectAnimation');
        document.getElementById(fireID).style.backgroundColor = 'rgba(51, 51, 51, 0)';
        
        }else {
        // document.getElementById(fireID).classList.remove('fireDeselectAnimation');
        // document.getElementById(fireID).classList.add('fireSelectAnimation');
        
        document.getElementById(fireID).style.backgroundColor = 'rgb(58, 255, 255)';
        }
    }
    
}

function minusQuantity(quantityID){
    if(document.getElementById(quantityID).innerHTML == 2){
        document.getElementById(quantityID).innerHTML--;
        selectPrimaryFoodContainer(document.getElementById(quantityID).parentElement.parentElement.parentElement.id);
        selectPrimaryFoodContainer(document.getElementById(quantityID).parentElement.parentElement.parentElement.id);
    }
}
function addQuantity(quantityID){
    if(document.getElementById(quantityID).innerHTML == 1 && primaryDishesSelected == 1){
        document.getElementById(quantityID).innerHTML++;
        selectPrimaryFoodContainer(document.getElementById(quantityID).parentElement.parentElement.parentElement.id);
        selectPrimaryFoodContainer(document.getElementById(quantityID).parentElement.parentElement.parentElement.id);
    }
}

function addAmount(){
    if(!(document.getElementById('addToCartPlate').classList.contains('buttonDisabled'))){
        document.getElementById('quantityButtonID').innerHTML++;
        if(document.getElementById('quantityButtonID').innerHTML > 1){
            document.getElementById('lessFoodID').style.borderColor = "white"
        }
    }
}

function removeAmount(){
    if(!(document.getElementById('addToCartPlate').classList.contains('buttonDisabled'))){
        if(document.getElementById('quantityButtonID').innerHTML > 1){
            document.getElementById('quantityButtonID').innerHTML--;
        }
        if(document.getElementById('quantityButtonID').innerHTML > 1){
            document.getElementById('lessFoodID').style.borderColor = "white"
        }else{
            document.getElementById('lessFoodID').style.borderColor = "rgb(83, 83, 83)"
        }
    }
}

