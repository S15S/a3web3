// Javascript file for SymbioGIS website
// Last Updated: 12/5/2021 by Carol

// These lines will define the three CSS selectors within the 'navbar' div element with constant references in order to apply JS.
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

// within the mobile site - since the hamburger does not display on larger screens; mobileMenu references the function defined below and will occur on click event
hamburger.addEventListener("click", mobileMenu);
// within the mobile site; closeMenu references the function defined below: clicking a link within will close the navigation menu
navLink.forEach(n => n.addEventListener("click", closeMenu));

// this function (called in Eventlistener for the hamburger constant) will open the navigation menu on the page, as well as trigger the hamburger bars to change (see style.CSS)
function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

// this function (called in EventListener for navLink constant) will close the navigation menu on the page and trigger the hamburger bars to revert to their default settings
function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// end of the script.JS file