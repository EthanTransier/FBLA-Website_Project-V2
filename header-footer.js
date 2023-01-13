function openDropdown() {
    document.getElementById("dropdownID").classList.add('dropdownOpenAnimation')
}

// const windowWidth = window.matchMedia("(max-width: 780px)")

// const windowWidth2 = window.matchMedia("(max-width: 500px)")

// windowWidth.onchange = (x) => {
//     if (x.matches) {
//         document.getElementById("titleID").remove();
//         document.getElementById("dropdownID").innerHTML = "<div class='homeLinkContainer'><a onclick='openDropdown()' class='underlineText'>Home</a></div><div class='dropdownContent' id='dropdownID'><a href='./startOrderPage/startOrderPage.html' class='headerOrderLink'>Order</a><a href='./SubscritionPage/subscription.html'>Jī lóng+</a><a href='./jobsPage/jobs.html'>Join Us</a></div> ";
//     }
//     else {
//         document.getElementById("titleID").innerHTML = "<h1 class='headerTitle'><span class='dragonSpanTitle'>Jī lóng</span> Grill</h1>";
//         document.getElementById("dropdownID").remove();
//     }
// }

// windowWidth2.onchange = (y) => {
//     if (y.matches) {
//         document.getElementById("dropdownID").innerHTML = "<div class='homeLinkContainer'><a onclick='openDropdown()' class='underlineText'>Home</a></div><div class='dropdownContent' id='dropdownID'><a href='./startOrderPage/startOrderPage.html' class='headerOrderLink'>Order</a><a href='./SubscritionPage/subscription.html'>Jī lóng+</a><a href='./jobsPage/jobs.html'>Join Us</a></div> ";
//         document.getElementById("headerLinksID").remove();
//     }
//     else {
//         document.getElementById("headerLinksID").innerHTML = "<!-- Container for the link that goes to the home page --><div class='homeLinkContainer'><a href='./index.html' class='underlineText'>Home</a></div><!-- Container for the button / link that takes you to the Ordering page --><div class='orderLinkContainer'><a href='./startOrderPage/startOrderPage.html' class='headerOrderLink'>Order</a></div><!-- Container for the link that goes to the menu page --><div class='menuLinkContainer'><a href='./SubscritionPage/subscription.html'>Jī lóng+</a></div><!-- Container for the link that goes to the Hiring page --><div class='jobs.html'><a href='./jobsPage/jobs.html'>Join Us</a></div>";
//         document.getElementById("dropdownID").remove();
//     }
// }