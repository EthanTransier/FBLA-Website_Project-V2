let dropdownOpened = false;

function openDropdown() {
    console.log('worked')
    if (dropdownOpened == false){
        document.getElementById("dropdownContentID").classList.remove('dropdownCloseAnimation');
        document.getElementById("dropdownContentID").classList.add('dropdownOpenAnimation');
        
        document.getElementById("arrowID").classList.remove('arrowCloseAnimation');
        document.getElementById("arrowID").classList.add('arrowOpenAnimation');
        dropdownOpened = true;
    } else if(dropdownOpened == true){
        document.getElementById("dropdownContentID").classList.remove('dropdownOpenAnimation');
        document.getElementById("dropdownContentID").classList.add('dropdownCloseAnimation');
        
        document.getElementById("arrowID").classList.remove('arrowOpenAnimation');
        document.getElementById("arrowID").classList.add('arrowCloseAnimation');
        dropdownOpened = false;
    }
}

