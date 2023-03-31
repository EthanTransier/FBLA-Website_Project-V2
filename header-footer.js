console.log('check')

let dropdownOpened = false;

function openDropdown() {
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

const header = document.getElementsByTagName('header')[0];

window.addEventListener('load', (event) =>  {
    if(localStorage.length > 0){
        document.getElementById("cartRedIconID").style.display = "block";
    }else{
        document.getElementById("cartRedIconID").style.display = "none";
    }

    let clientHeight = header.clientHeight;
    if(document.getElementById("opening") == null){
        document.getElementsByClassName("mainContentContainer")[0].style.marginTop = (clientHeight + 'px');
    }else {
        document.getElementById("opening").style.marginTop = (clientHeight + 'px');
    }
})
