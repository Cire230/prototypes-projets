// =============================================
// Logique pour le Carrousel "A la une" (Version Tailwind)
// =============================================
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('#hero-carousel');
    if (!carousel) return; // Ne rien faire si le carrousel n'est pas sur la page

    const slides = carousel.querySelectorAll('.carousel-slide');
    const prevBtn = carousel.querySelector('#prevBtn');
    const nextBtn = carousel.querySelector('#nextBtn');
    let currentSlide = 0;
    const slideInterval = 4000; // 4 secondes
    let autoSlide;

    function showSlide(index) {
        // Cacher toutes les diapositives
        slides.forEach(slide => {
            slide.classList.remove('opacity-100');
            slide.classList.add('opacity-0');
        });

        // Afficher la diapositive correcte
        slides[index].classList.remove('opacity-0');
        slides[index].classList.add('opacity-100');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }
    
    function startAutoSlide() {
        autoSlide = setInterval(nextSlide, slideInterval);
    }
    
    function stopAutoSlide() {
        clearInterval(autoSlide);
    }

    // Événements des boutons
    nextBtn.addEventListener('click', () => {
        nextSlide();
        stopAutoSlide(); // Arrêter le défilement auto si l'utilisateur interagit
    });

    prevBtn.addEventListener('click', () => {
        prevSlide();
        stopAutoSlide(); // Arrêter le défilement auto si l'utilisateur interagit
    });

    // Lancer le défilement automatique
    startAutoSlide();
});