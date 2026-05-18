document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav_menu');
    const navbar = document.querySelector('.nav');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navbar.classList.toggle('menu-open');
            
            // Valinnainen: animoi viivat ristiin
            hamburger.classList.toggle('toggle');
        });
    }
});