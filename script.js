document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const menu = document.getElementById('menu');
    const botonBusqueda = document.getElementById("botonBusqueda");
    const barraBusqueda = document.getElementById("barraBusqueda-desplegable");
    const header = document.getElementById("header");

    hamburgerBtn.addEventListener('click', function(event) {
        event.preventDefault();
        menu.classList.toggle('activo');
    });

    document.addEventListener('click', function(event) {
        if (!hamburgerBtn.contains(event.target) && !menu.contains(event.target)) {
            menu.classList.remove('activo');
        }
    });

    botonBusqueda.addEventListener('click', function(event) {
        event.preventDefault();

        const headerHeight = header.offsetHeight;
        barraBusqueda.style.top = headerHeight + 'px';
        barraBusqueda.classList.toggle('activo');

        if (barraBusqueda.classList.contains('activo')) {
            barraBusqueda.focus();
        }
    });

    document.addEventListener('click', function(event) {
        if (!botonBusqueda.contains(event.target) && !barraBusqueda.contains(event.target)) {
            barraBusqueda.classList.remove('activo');
            barraBusqueda.value = '';
        }
    });
});