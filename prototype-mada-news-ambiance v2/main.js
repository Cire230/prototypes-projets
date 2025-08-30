document.addEventListener('DOMContentLoaded', function() {

    // =============================================
    // GESTION DE L'EN-TÊTE INTERACTIF
    // =============================================
    const header = document.getElementById('main-header');
    const headerLogo = document.getElementById('header-logo');
    const searchToggle = document.getElementById('search-toggle');
    const searchPanel = document.getElementById('search-panel');
    const filterToggle = document.getElementById('filter-toggle');
    const filterPanel = document.getElementById('filter-panel');

    // --- 1. Changement de style au scroll ---
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
            if (headerLogo) headerLogo.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
            if (headerLogo) headerLogo.classList.remove('scrolled');
        }
    });

    // --- 2. Panneaux de recherche et de filtre ---
    function togglePanel(panel) {
        if (panel.classList.contains('hidden')) {
            // Ferme les autres panneaux avant d'ouvrir celui-ci
            searchPanel.classList.add('hidden');
            filterPanel.classList.add('hidden');
            panel.classList.remove('hidden');
        } else {
            panel.classList.add('hidden');
        }
    }

    searchToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        togglePanel(searchPanel);
        filterPanel.classList.add('hidden'); // Assure que l'autre est fermé
    });

    filterToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        togglePanel(filterPanel);
        searchPanel.classList.add('hidden'); // Assure que l'autre est fermé
    });
    
    // Ferme les panneaux si on clique ailleurs
    document.addEventListener('click', () => {
        searchPanel.classList.add('hidden');
        filterPanel.classList.add('hidden');
    });
    searchPanel.addEventListener('click', e => e.stopPropagation());
    filterPanel.addEventListener('click', e => e.stopPropagation());


    // =============================================
    // GESTION DE LA DATE
    // =============================================
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
        const today = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        dateElement.textContent = today.toLocaleDateString('fr-FR', options);
    }
    

    // =============================================
    // GESTION DU MODE SOMBRE / CLAIR
    // =============================================
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const htmlElement = document.documentElement;

    // Vérifie le thème sauvegardé ou le thème du système au chargement
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        htmlElement.classList.add('dark');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        htmlElement.classList.remove('dark');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }

    themeToggle.addEventListener('click', () => {
        if (htmlElement.classList.contains('dark')) {
            htmlElement.classList.remove('dark');
            localStorage.theme = 'light';
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        } else {
            htmlElement.classList.add('dark');
            localStorage.theme = 'dark';
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
    });

});