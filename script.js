document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const menu = document.getElementById('menu');
    const menuOverlay = document.querySelector('.menu-overlay');
    const botonBusqueda = document.getElementById("botonBusqueda");
    const barraBusqueda = document.getElementById("barraBusqueda-desplegable");

    hamburgerBtn.addEventListener('click', function(event) {
        event.preventDefault();
        if (menu.classList.contains('activo')) {
            menu.classList.remove('activo');
            menuOverlay.classList.remove('activo');
        } else {
            menu.classList.toggle('activo');
            barraBusqueda.classList.remove('activo');
            barraBusqueda.value = '';
            if (!menuOverlay.classList.contains('activo')) {
                menuOverlay.classList.toggle('activo');
            }
        } 
    });

    botonBusqueda.addEventListener('click', function(event) {
        event.preventDefault();
        if (barraBusqueda.classList.contains('activo')) {
            barraBusqueda.classList.remove('activo');
            barraBusqueda.value = '';
            menuOverlay.classList.remove('activo');
        } else {
            barraBusqueda.classList.toggle('activo');
            menu.classList.remove('activo');
            menuOverlay.classList.toggle('activo');
            if (barraBusqueda.classList.contains('activo')) {
                barraBusqueda.focus();
            }
            if (!menuOverlay.classList.contains('activo')) {
                menuOverlay.classList.toggle('activo');
            }
        } 
    });

    menuOverlay.addEventListener('click', function() {
        menu.classList.remove('activo');
        barraBusqueda.classList.remove('activo');
        barraBusqueda.value = '';
        menuOverlay.classList.remove('activo');
    });


});