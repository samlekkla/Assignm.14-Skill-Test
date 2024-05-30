document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById('menuToggle');
    const navList = document.querySelector('.nav__list');
    const scrollDownIcon = document.querySelector('.fa-angle-double-down');

    menuToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
    });
    
    scrollDownIcon.addEventListener('click', function() {
        const page2Container = document.querySelector('.page2__container');
        if (page2Container) {
            page2Container.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
