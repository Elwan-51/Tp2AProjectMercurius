document.querySelector('#toggle-menu').addEventListener('click', () => {
    let nav = document.querySelector('#mobile-menu');
    nav.style.display = nav.style.display === "none" ? "flex" : "none";
});
document.querySelector('#scale-top').addEventListener('click', () => window.scrollTo({
    top: 0,
    behavior: 'smooth',
}));