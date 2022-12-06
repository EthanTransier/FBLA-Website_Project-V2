var dishesSelected = 0;
function selectFoodContainer(containerID){
    var foodContainerSelected = document.getElementById(containerID);
    // If the food container has not played the starting animation, it will play it and then remove the ending animation class. If the food container has played the starting animation, it will remove the starting animation class and play the ending animation class.
    if(foodContainerSelected.classList.contains("selectAnimation") != true && dishesSelected < 2){
        foodContainerSelected.classList.add("selectAnimation");
        foodContainerSelected.classList.remove("deselectAnimation");

        dishesSelected++;
        console.log(dishesSelected);
        document.querySelector("#" + containerID + " p").classList.add("foodTextSelectAnimation");
        document.querySelector("#" + containerID + " p").classList.remove("foodTextDeselectAnimation");

        if(dishesSelected == 1){
            document.getElementById("primarySubTitle").innerHTML = ("You Have Selected 1 Dish")
        }else if(dishesSelected == 2 || dishesSelected == 0){
            document.getElementById("primarySubTitle").innerHTML = ("You Have Selected " + dishesSelected +" Dishes")
        }
        if(dishesSelected == 2){
            document.getElementById("primarySubTitle").style.color = "#659f38";
        }else{
            document.getElementById("primarySubTitle").style.color = "grey";
        }
    }else if(foodContainerSelected.classList.contains("selectAnimation")){
        foodContainerSelected.classList.add("deselectAnimation");
        foodContainerSelected.classList.remove("selectAnimation");

        dishesSelected--;
        console.log(dishesSelected);
        document.querySelector("#" + containerID + " p").classList.remove("foodTextSelectAnimation");
        document.querySelector("#" + containerID + " p").classList.add("foodTextDeselectAnimation");

        if(dishesSelected == 1){
            document.getElementById("primarySubTitle").innerHTML = ("You Have Selected 1 Dish")
        }else if(dishesSelected == 2 || dishesSelected == 0){
            document.getElementById("primarySubTitle").innerHTML = ("You Have Selected " + dishesSelected +" Dishes")
        }

        if(dishesSelected == 2){
            document.getElementById("primarySubTitle").style.color = "#659f38";
        }else{
            document.getElementById("primarySubTitle").style.color = "grey";
        }
    }
}