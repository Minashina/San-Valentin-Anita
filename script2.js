function aceptar() {
    document.querySelector('.sobre').style.display = 'block'; // Mostrar el sobre al aceptar
}

function abrirSobre() {
    // Abrir el sobre al hacer clic
    document.getElementById('sobre').style.transform = 'scale(0)'; // Esconder el sobre
    document.getElementById('carta').style.display = 'block'; // Mostrar la carta
    setTimeout(() => {
        document.getElementById('carta').classList.add('show'); // Animar la carta
    }, 300);
}

function abrirCarta() {
    alert('¡Feliz San Valentín! ❤️');
}
