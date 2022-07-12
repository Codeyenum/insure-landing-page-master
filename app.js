let menuButton = document.querySelector(".menu_icon");
let closeButton = document.querySelector(".close_icon");
let navCard = document.querySelector(".mobile-nav_card");

menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("hide");
    closeButton.classList.toggle("hide");
    navCard.classList.toggle("hide");
})

closeButton.addEventListener("click", () => {    
    closeButton.classList.toggle("hide");
    menuButton.classList.toggle("hide");
    navCard.classList.toggle("hide");
})