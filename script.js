document.addEventListener('DOMContentLoaded', function(){
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const menu = document.getElementById('menu');
    const menuOverlay = document.querySelector('.menu-overlay');
    const botonBusqueda = document.getElementById("botonBusqueda");
    const barraBusqueda = document.getElementById("barraBusqueda-desplegable");
    const boton = document.querySelectorAll('.boton');
    const listaProducto = document.querySelector('.lista-producto');

    function manejarDesbordamiento() {
        const boxProducto = document.querySelectorAll('.producto-box');

        boxProducto.forEach(function(box){
            const nombreProducto = box.querySelector('.nombre-producto');
            if (nombreProducto.scrollWidth > box.clientWidth) {
                nombreProducto.classList.add('carrusel-activo');
            } else {
                nombreProducto.classList.remove('carrusel-activo'); 
            }
        });    
    }
    function cargarYMostrarProductos() {
        // Este se usa al usar mi computadora como servidor. Ejecutar en la carpeta del servidor.py --> python servidor.py
        // fetch('http://127.0.0.1:5000/api/productos')
        fetch('https://bgenovese.pythonanywhere.com/api/productos')
        .then(function(response) {
            return response.json();
        })
        .then(function(productos) {
            listaProducto.innerHTML = '';
            productos.forEach(function(producto) {
                const productoHTML = 
                `<div class="producto-box no-seleccionable">
                    <img src="${producto.imagen}" alt="${producto.alt}" class="producto">
                    <h3 class="nombre-producto">${producto.nombre}</h3>
                    <p>${producto.precio}</p>
                    <p style="color: ${producto.stock > 0 ? 'green' : 'red'};"> ${producto.stock > 0 ? 'Con stock' : 'Sin stock'}</p>
                </div>`;
                listaProducto.innerHTML += productoHTML;
            });
            manejarDesbordamiento();
        })
        .catch(function(error) {
        console.error('¡Error al cargar los productos!:', error);
        });
    }
    cargarYMostrarProductos();
    boton.forEach(function (boton) {
        boton.addEventListener('click',function(){
            let url = boton.dataset.url;
            window.location.href = url;
        });
    });


    hamburgerBtn.addEventListener('click', function(event) {
        if (window.innerWidth >= 1025) {
            return; 
        }
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
        if (window.innerWidth >= 1025) {
            return; 
        }
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
    manejarDesbordamiento();
    window.addEventListener('resize', manejarDesbordamiento);
});