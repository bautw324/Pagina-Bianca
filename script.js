document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const menu = document.getElementById('menu');

    hamburgerBtn.addEventListener('click', function() {
        menu.classList.toggle('activo');
    });

    document.addEventListener('click', function(event) {
        if (!hamburgerBtn.contains(event.target) && !menu.contains(event.target)) {
            menu.classList.remove('activo');
        }
    });
});