document.addEventListener("DOMContentLoaded", function () {

    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu');


    const menu2 = document.querySelector('.menu');
    let menuT = menu2.offsetTop;

    // Récupérer la hauteur du header
    const header = document.getElementById('main-header');
    const windowHeight = window.innerHeight;

    let lastScrollPosition = window.scrollY;

    function updateActiveSection() {
        const scrollPosition =window.scrollY;
        
        if (scrollPosition > windowHeight/2) {
            if (lastScrollPosition - scrollPosition > 10) {
                header.style.top = `0px`;
                //menu.classList.remove('show');
            }
            else if (lastScrollPosition - scrollPosition < -1){
                header.style.top = `${-header.offsetHeight - menu2.offsetHeight}px`;
                //menu.classList.remove('show');
            }
        }
        else {
            header.style.top = `0px`;
        }
        lastScrollPosition = scrollPosition;
    }
    window.addEventListener('scroll', updateActiveSection);





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
});