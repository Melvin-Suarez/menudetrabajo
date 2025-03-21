// JavaScript para generar elementos de flujo dinámicamente
const flowContainer = document.getElementById('flowContainer');

function createFlowElement() {
    const flowElement = document.createElement('div');
    flowElement.classList.add('flow-element');
    flowElement.style.top = `${Math.random() * 100}vh`; // Posición vertical aleatoria
    flowElement.style.animationDuration = `${Math.random() * 3 + 2}s`; // Duración aleatoria
    flowContainer.appendChild(flowElement);

    // Eliminar el elemento después de que termine la animación
    setTimeout(() => {
        flowElement.remove();
    }, 5000); // Ajusta el tiempo según la duración de la animación
}

// Crear elementos de flujo cada 300ms
setInterval(createFlowElement, 300);