var carousel = document.getElementById("carousel");
let lengthMoved = 0;
let lengthMoved2 = 0;
let slideContainer = document.getElementById('slideContainerID');

function moveToNextSlide() {
    lengthMoved += 600;
    lengthMoved2 -= 600;
    slideContainer.style.transform = "translateX("+ lengthMoved +"px)";
    carousel.style.transform = "translateX("+ lengthMoved2 +"px)";
    
    document.querySelectorAll('.slide')[3].style.transform = "scale(1.25)"
    document.querySelectorAll('.slide')[2].style.transform = "scale(1)"
    
    let firstSlide = document.querySelectorAll('.slide')[0];
    console.log(firstSlide)
    firstSlide.remove();
    let addSlide = document.createElement("div");
    addSlide.classList.add('slide');
    addSlide.innerHTML = firstSlide.innerHTML;
    console.log(addSlide);

    

    slideContainerID.appendChild(addSlide);
    console.log(slideContainer)
    
}

function moveToPreviousSlide() {
    lengthMoved -= 600;
    lengthMoved2 += 600;
    slideContainer.style.transform = "translateX("+ lengthMoved +"px)";
    carousel.style.transform = "translateX("+ lengthMoved2 +"px)";
}


function showSlide() {
  
}


// Show the first slide when the page loads
showSlide();

// Set up automatic slideshow
setInterval(moveToNextSlide, 7500); // 7.5 seconds