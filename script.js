const openMenuBtn = document.getElementById("mobile-menu-icon");
const closeMenuBtn = document.getElementById("menu-close-icon");

const mobileNav = document.getElementById("mobile-nav");

function openMenu() {
    mobileNav.style.width = "100%";
}

function closeMenu() {
    mobileNav.style.width = "0%";
}

openMenuBtn.addEventListener('click', openMenu);
closeMenuBtn.addEventListener('click', closeMenu);