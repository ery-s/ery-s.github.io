const burgerBtn = document.getElementById("nav-burger-btn");
const navLinks  = document.getElementById("nav-links");

burgerBtn.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    burgerBtn.setAttribute("aria-expanded", isOpen);
    burgerBtn.classList.toggle("active", isOpen);
});

navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        burgerBtn.classList.remove("active");
        burgerBtn.setAttribute("aria-expanded", false);
    });
});