document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const mainContent = document.querySelector('.main-content');
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const mobileMenu = document.querySelector('#menu');

    function ajustarPadding() {
        const alturaHeader = header.offsetHeight;
        mainContent.style.paddingTop = alturaHeader+10+'px';
    }
    ajustarPadding();

    hamburgerBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('activo');
        ajustarPadding();
    });
    document.addEventListener('click', function(event) {
        if (!hamburgerBtn.contains(event.target) && !mobileMenu.contains(event.target)) {
            mobileMenu.classList.remove('activo');
        }
    });
    window.addEventListener('resize', ajustarPadding);

    const agregarBtn = document.getElementById('agregarBtn');
    const lista = document.getElementById('lista');
    const texto = document.getElementById('texto');

    agregarBtn.addEventListener('click', function(){
        if(texto.value.trim() !== ''){
            const inciso = document.createElement("li");
            inciso.innerText = texto.value;
            lista.appendChild(inciso);
            texto.value = '';
        }
    });

    const buscador = document.getElementById('buscador');
    const cajas = document.querySelectorAll('.caja');
    buscador.addEventListener('input', function(){
        const filtro = buscador.value.toLowerCase();
        let encontrado = false;
        cajas.forEach(function(caja){
            const titulo = caja.querySelector('h3').innerText.toLowerCase();
            if(titulo.includes(filtro)){
                caja.style.display = '';
                encontrado = true;
            } else {
                caja.style.display = 'none';
            }  
        });
        if (filtro === '') {
            document.getElementById('resultado').style.display = 'none';
        } else if (!encontrado) {
            document.getElementById('resultado').style.display = 'block';
            document.getElementById('resultado').innerText = `No se encontraron resultados para: "${filtro}"`;
        } else {
            encontrado = true;
            document.getElementById('resultado').style.display = 'block';
            document.getElementById('resultado').innerText = `Resultados para: "${filtro}"`;
        }
    });
});