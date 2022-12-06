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
    }else if(foodContainerSelected.classList.contains("selectAnimation")){
        foodContainerSelected.classList.add("deselectAnimation");
        foodContainerSelected.classList.remove("selectAnimation");

        dishesSelected--;
        console.log(dishesSelected);
        document.querySelector("#" + containerID + " p").classList.remove("foodTextSelectAnimation");
        document.querySelector("#" + containerID + " p").classList.add("foodTextDeselectAnimation");
    }
}