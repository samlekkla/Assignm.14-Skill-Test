document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav__list');

    menuToggle.addEventListener('click', function() {
        navList.classList.toggle('active');
    });

    const scrollDownIcon = document.querySelector('.fa-angle-double-down');

    scrollDownIcon.addEventListener('click', function() {
        const page2Container = document.querySelector('.page2__container');
        if (page2Container) {
            page2Container.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
