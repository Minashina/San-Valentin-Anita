let moveCount = 0;

function accept() {
    window.location.href = "carta.html"; // Cambia "aceptado.html" por la página que desees
}

function moveButton() {
    const btnNo = document.getElementById("btnNo");
    moveCount++;

    if (moveCount < 5) {
        // Obtén el tamaño del botón y la ventana
        const btnRect = btnNo.getBoundingClientRect();
        const btnWidth = btnRect.width;
        const btnHeight = btnRect.height;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        // Define un rango más corto para el movimiento
        const rangeX = windowWidth * 0.5; // Mueve el botón dentro del 50% del ancho de la ventana
        const rangeY = windowHeight * 0.5; // Mueve el botón dentro del 50% del alto de la ventana

        // Calcula los límites del movimiento
        const maxX = windowWidth - btnWidth;
        const maxY = windowHeight - btnHeight;

        // Genera valores aleatorios dentro del rango más corto
        const x = Math.random() * rangeX;
        const y = Math.random() * rangeY;

        // Asegúrate de que el botón no se salga de la pantalla
        const newX = Math.min(Math.max(x, 0), maxX);
        const newY = Math.min(Math.max(y, 0), maxY);

        // Aplica el movimiento con transform
        btnNo.style.transform = `translate(${newX}px, ${newY}px)`;
    } else if (moveCount === 5) {
        const response = confirm("¿Realmente no quieres serlo?");
        if (response) {
            window.location.href = "carta.html"; // Cambia "rechazado.html" por la página que desees
        } else {
            window.close(); // Cierra la ventana del navegador
        }
    }
}

// Manejo para dispositivos táctiles
const btnNo = document.getElementById("btnNo");
btnNo.addEventListener("touchstart", (e) => {
    e.preventDefault(); // Evita el comportamiento por defecto del touch
    moveButton();
});