document.addEventListener("DOMContentLoaded", function () {


    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu');

    menuIcon.addEventListener('click', function () {
        menu.classList.toggle('show');
    });

    document.addEventListener('click', function (event) {
        event.stopPropagation(); // Empêcher la propagation du clic à partir du menu

        // Fermer le menu lorsque l'utilisateur clique sur un lien du menu
        const clickedElement = event.target;
        if (clickedElement.tagName === 'A') {
            menu.classList.remove('show');
            //console.log(`Lien du menu cliqué : ${clickedElement.textContent}`); // Afficher un message dans la console lorsqu'un lien du menu est cliqué
        }


        // Ferme le menu lorsque l'utilisateur clique sur l'icone du menu ou ailleurs sur la page
        const isMenuClicked = menu.contains(event.target);
        const isMenuIconClicked = menuIcon.contains(event.target);

        if (!isMenuClicked && !isMenuIconClicked) {
            menu.classList.remove('show');
        }
    });




    


    // Récupérer la hauteur du header
    const headerHeight = document.getElementById('main-header').offsetHeight;

    // Appliquer la hauteur à d'autres éléments
    const summary = document.getElementById('summary');
    summary.style.marginTop = `${headerHeight}px`;







    const sections = document.querySelectorAll('header, .content h1, .content h2, footer');

    function updateActiveSection() {
        const scrollPosition = window.scrollY;

        sections.forEach((section, index) => {            
            const windowHeight = window.innerHeight;
            const footerPosition = footer.offsetTop;

            if (scrollPosition + windowHeight >= footerPosition) {
                //summary.style.marginTop = `${headerHeight - (scrollPosition + windowHeight - footerPosition)}px`;
            
            } else {
                //summary.style.marginTop = `${headerHeight}px`;

                const nextSection = sections[index + 1];
            const sectionId = section.getAttribute('id');
            const nextSectionId = nextSection ? nextSection.getAttribute('id') : '';

            if (scrollPosition + 1 >= section.offsetTop && scrollPosition + 1 < nextSection.offsetTop) {
                document.querySelectorAll('.summary a').forEach(link => {
                    link.classList.remove('active');
                });

                const activeLink = document.querySelector(`.summary a[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
            }


        });  
    }
    window.addEventListener('scroll', updateActiveSection);
});