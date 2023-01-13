function openDropdown() {
    document.getElementById("dropdownID").classList.add('dropdownOpenAnimation')
}

function deleteTitle(windowWidth) {
    if(windowWidth.matches){
        document.getElementById("titleID").remove();
    } else {
        document.getElementById("titleID").innerHTML = "<h1 class='headerTitle'><span class='dragonSpanTitle'>Jī lóng</span> Grill</h1>";
    }
}

var windowWidth = window.matchMedia("(max-width: 780px)")
deleteTitle(windowWidth);
windowWidth.addEventListener(deleteTitle)