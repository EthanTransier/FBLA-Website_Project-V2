let dropdownOpened = false;

function openDropdown() {
    console.log('worked')
    if (dropdownOpened == false){
        document.getElementById("dropdownID").classList.remove('dropdownCloseAnimation');
        document.getElementById("dropdownID").classList.add('dropdownOpenAnimation');
        dropdownOpened = true;
        console.log(dropdownOpened)
    } else if(dropdownOpened == true){
        document.getElementById("dropdownID").classList.remove('dropdownOpenAnimation');
        document.getElementById("dropdownID").classList.add('dropdownCloseAnimation');
        dropdownOpened = false;
        console.log(dropdownOpened)
    }
}

