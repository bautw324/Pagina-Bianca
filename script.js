document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const menu = document.getElementById('menu');
    const menuOverlay = document.querySelector('.menu-overlay');
    const botonBusqueda = document.getElementById("botonBusqueda");
    const barraBusqueda = document.getElementById("barraBusqueda-desplegable");
    const header = document.getElementById("header");

    hamburgerBtn.addEventListener('click', function(event) {
        event.preventDefault();
        menu.classList.toggle('activo');
        menuOverlay.classList.toggle('activo');
    });

    botonBusqueda.addEventListener('click', function(event) {
        event.preventDefault();

        const headerHeight = header.offsetHeight;
        barraBusqueda.style.top = headerHeight + 'px';
        barraBusqueda.classList.toggle('activo');
        menuOverlay.classList.toggle('activo');

        if (barraBusqueda.classList.contains('activo')) {
            barraBusqueda.focus();
        }
    });

    menuOverlay.addEventListener('click', function() {
        menu.classList.remove('activo');
        barraBusqueda.classList.remove('activo');
        menuOverlay.classList.remove('activo');
        barraBusqueda.value = '';
    });
});