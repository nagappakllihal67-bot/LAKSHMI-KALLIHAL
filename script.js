
const menuIcon = document.getElementById("menu-icon");
const navbar = document.getElementById("navbar");

// Mobile navigation menu
menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");

    menuIcon.textContent = navbar.classList.contains("active")
        ? "✕"
        : "☰";
});

// Close menu after clicking a navigation link
const navLinks = document.querySelectorAll("#navbar a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
        menuIcon.textContent = "☰";
    });
});

// Simple welcome message
window.addEventListener("load", () => {
    console.log("Welcome to Preksha R.G's Portfolio!");
});
