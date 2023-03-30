const header = document.getElementsByTagName('header')[0];

const parallax = document.getElementById("opening");

console.log('running')

window.onload = function() {
    if(localStorage.length > 0){
        document.getElementById("cartRedIconID").style.display = "block";
    }else{
        document.getElementById("cartRedIconID").style.display = "none";
    }

    let clientHeight = header.clientHeight;
    console.log(clientHeight)

    console.log(document.getElementById("opening").style)
    document.getElementById("opening").style.marginTop = (clientHeight + 'px');

    console.log("margin top" + header.clientHeight)
    console.log(document.getElementById("opening").style.marginTop)
}

// Parallax Effect for DIV 1
window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.7 + "px";
  // DIV 1 background will move slower than other elements on scroll.
});


