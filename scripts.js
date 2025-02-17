document.getElementById('menuButton').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('hidden'); // Muestra u oculta el menú móvil
});

const audio = document.getElementById('carnavalMusic');
    const rotatingImage = document.getElementById('rotatingImage');

    // Escucha el evento de reproducción
    audio.addEventListener('play', () => {
        rotatingImage.classList.add('rotating'); // Añade la clase para girar
    });

    // Escucha el evento de pausa
    audio.addEventListener('pause', () => {
        rotatingImage.classList.remove('rotating'); // Detiene la animación
    });

    // Escucha el evento de finalización
    audio.addEventListener('ended', () => {
        rotatingImage.classList.remove('rotating'); // Detiene la animación
    });