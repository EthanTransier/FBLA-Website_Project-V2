

const parallax = document.getElementById("opening");

console.log('running')

window.onload = function() {
    if(localStorage.length > 0){
        document.getElementById("cartRedIconID").style.display = "block";
    }else{
        document.getElementById("cartRedIconID").style.display = "none";
    }

    let clientHeight = header.clientHeight;
    document.getElementById("opening").style.marginTop = (clientHeight + 'px');
}

// Parallax Effect for DIV 1
window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  parallax.style.backgroundPosition = " 0px 0px, " + "0px " + offset * 0.7 + "px";
  console.log('parrlax style position y: ' + parallax.style.backgroundPositionY)
  // DIV 1 background will move slower than other elements on scroll.
});


