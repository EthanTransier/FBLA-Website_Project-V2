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
        primaryDishesSelected++;
        console.log(primaryDishesSelected);

        // Plays the animation that changes the text in the container to white when it is selected because the red text doesn't contrast enough with the now green container
        document.querySelector("#" + containerID + " p").classList.add("foodTextSelectAnimation");
        document.querySelector("#" + containerID + " p").classList.remove("foodTextDeselectAnimation");

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


        document.querySelector("#" + containerID + " .foodTitle").classList.remove('selected');

        primaryFoodContainerSelected.classList.add("deselectAnimation");
        primaryFoodContainerSelected.classList.remove("selectAnimation");

        primaryDishesSelected--;
        console.log(primaryDishesSelected);

        document.querySelector("#" + containerID + " p").classList.remove("foodTextSelectAnimation");
        document.querySelector("#" + containerID + " p").classList.add("foodTextDeselectAnimation");

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
    } else {
        document.getElementById('addToCartPlate').classList.add("buttonDisabled");
        document.getElementById('addToCartPlate').disabled = true;
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
        console.log(secondaryDishesSelected);

        // Plays the animation that changes the text in the container to white when it is selected because the red text doesn't contrast enough with the now green container
        document.querySelector("#" + containerID + " p").classList.add("foodTextSelectAnimation");
        document.querySelector("#" + containerID + " p").classList.remove("foodTextDeselectAnimation");

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
        console.log(secondaryDishesSelected);

        document.querySelector("#" + containerID + " p").classList.remove("foodTextSelectAnimation");
        document.querySelector("#" + containerID + " p").classList.add("foodTextDeselectAnimation");

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
    } else {
        document.getElementById('addToCartPlate').classList.add("buttonDisabled");
        document.getElementById('addToCartPlate').disabled = true;
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
    // console.log(document.getElementsByClassName("selected")[0].innerHTML)
    const firstCartArray = document.getElementsByClassName("selected");
    for (let i = 0; i < firstCartArray.length; i++){
        secondaryCartArray.push(firstCartArray.item(i).innerHTML)
        
        if(secondaryCartArray.length == 3){
            cartArray.push("Plate with " + secondaryCartArray[0] + ", " + secondaryCartArray[1] + ", and " + secondaryCartArray[2])
            console.log(cartArray)
            secondaryCartArray.length = 0;
        }
    }
    // console.log(Array.prototype.slice.call(document.getElementsByClassName('selected').innerHTML))
    // cartArray.push(document.getElementsByClassName('selected').innerHTML);
    console.log(cartArray[cartArray.length - 1])
    localStorage.setItem(("cartArray" + (localStorage.length + 1)), JSON.stringify(cartArray));
    console.log(localStorage.getItem("cartArray" + localStorage.length));
}
function clearLocalStorage() {
    localStorage.clear();
}