const burgerBtn = document.getElementById("nav-burger-btn");
const navLinks  = document.getElementById("nav-links");

burgerBtn.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    burgerBtn.setAttribute("aria-expanded", isOpen);
    burgerBtn.classList.toggle("active", isOpen);
});