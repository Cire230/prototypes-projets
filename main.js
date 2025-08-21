document.addEventListener('DOMContentLoaded', function() {
    
    // Logique pour le Carrousel "À la Une"
    const slides = document.querySelectorAll('.carousel-slide');
    let currentSlide = 0;
    const slideInterval = 5000; // Défilement toutes les 5 secondes

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Affiche la première slide au chargement
    showSlide(currentSlide);

    // Démarre le défilement automatique
    setInterval(nextSlide, slideInterval);

});

// Logique pour le bouton "Lire la suite"
const toggleButton = document.querySelector('.toggle-button');
const expandableContent = document.querySelector('.expandable-content');

if (toggleButton && expandableContent) {
    toggleButton.addEventListener('click', function() {
        const isExpanded = expandableContent.style.maxHeight;

        if (isExpanded) {
            // Si le contenu est déjà ouvert, on le referme
            expandableContent.style.maxHeight = null;
            toggleButton.textContent = 'Lire la suite';
        } else {
            // Si le contenu est fermé, on l'ouvre
            // On calcule la hauteur nécessaire pour tout afficher
            expandableContent.style.maxHeight = expandableContent.scrollHeight + "px";
            toggleButton.textContent = 'Réduire';
        }
    });
}

// =============================================
// Logique pour la barre de recherche interactive
// =============================================
const searchContainer = document.querySelector('.header-search');
const searchToggleIcon = document.querySelector('.search-toggle-icon');
const searchInput = document.querySelector('.search-input');

if (searchToggleIcon && searchContainer && searchInput) {
    // Événement au clic sur l'icône
    searchToggleIcon.addEventListener('click', function(event) {
        // Empêche le clic de se propager à la fenêtre, ce qui fermerait la barre immédiatement
        event.stopPropagation();
        
        // On bascule la classe 'active'
        searchContainer.classList.toggle('active');

        // Si la barre de recherche est maintenant active, on met le focus sur le champ de saisie
        if (searchContainer.classList.contains('active')) {
            searchInput.focus();
        }
    });

    // Événement pour fermer la barre si on clique n'importe où ailleurs
    document.addEventListener('click', function(event) {
        // On vérifie si le clic a eu lieu EN DEHORS du conteneur de recherche
        const isClickInside = searchContainer.contains(event.target);

        if (!isClickInside) {
            // Si le clic est à l'extérieur, on retire la classe 'active'
            searchContainer.classList.remove('active');
        }
    });
}

// =============================================
// Logique pour le menu de navigation mobile
// =============================================
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const mainNav = document.querySelector('.main-nav');
const body = document.querySelector('body');

if (mobileNavToggle && mainNav) {
    mobileNavToggle.addEventListener('click', function() {
        mainNav.classList.toggle('active');
        mobileNavToggle.classList.toggle('active');
        body.classList.toggle('no-scroll'); // Empêche le défilement de la page derrière le menu
    });
}
