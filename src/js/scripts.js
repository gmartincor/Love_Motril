import AOS from 'aos';
import 'aos/dist/aos.css';

document.addEventListener('DOMContentLoaded', () => {
    // Inicializar AOS
    AOS.init({
        duration: 1000,
        once: true
    });

    // Funcionalidad de Zoom en Imágenes
    const galleryImages = document.querySelectorAll('.detalle img');

    galleryImages.forEach((img) => {
        img.addEventListener('click', () => {
            img.classList.toggle('zoomed');
        });
    });
});
