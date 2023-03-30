const header = document.getElementsByTagName('header')[0];

const parallax = document.getElementById("opening");

console.log('running')

// Parallax Effect for DIV 1
window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.7 + "px";
  // DIV 1 background will move slower than other elements on scroll.
});


function cartNotification() {
    console.log('running 2');
    
    if(localStorage.length > 0){
        document.getElementById("cartRedIconID").style.display = "block";
    }else{
        document.getElementById("cartRedIconID").style.display = "none";
    }

    console.log('running 3')

    parallax.style.marginTop = header.clientHeight;

    console.log('worked')
}