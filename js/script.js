function replaceAll(originalString, search, replacement) {
    return originalString.split(search).join(replacement);
}

const email = "gael.maignan.pro[at]gmail.com"

const root = 'https://sciensationnel.github.io/Sciensationnel/'

const authors = [
    {
        name: "Gaël Maignan",
        status: "Étudiant en Licence d'Information-Communication",
        photo: root + "img/photo1.jpg",
        bio: "Actuellement étudiant, je m'efforce d'écrire sur mon temps libre.",
        linkedin: "https://www.linkedin.com/in/gael-maignan",
        mail: "mailto:" + email
    },
    {
        name: "Marie Dubois",
        status: "Journaliste",
        photo: root + "img/photo2.jpg",
        bio: "Marie Dubois est une journaliste passionnée par la politique et les questions sociales. Elle a une expérience de 15 ans dans le journalisme d'investigation.",
        linkedin: "https://www.linkedin.com/in/gael-maignan",
        mail: "mailto:marie.dubois[at]gmail.com"
    },
    {
        name: "Paul Martin",
        status: "Web Développeur",
        photo: root + "img/photo3.jpg",
        bio: "Paul Martin est web Développeur dans les nouvelles technologies et l'innovation. Il écrit des articles depuis 10 ans et est reconnu pour ses analyses perspicaces.",
        linkedin: "https://www.linkedin.com/in/gael-maignan",
        mail: "mailto:paul.martin[at]gmail.com"
    }
];


function displayAuthorBadges(authors) {
    const badgesContainer = document.getElementById('auteurs-container');
    for (var i = 0; i < authors.length; i++) {
        const author = authors[i];
            badgesContainer.innerHTML += `
            <div class="auteur-badge">
                <img src="${author.photo}" alt="Photo de ${author.name}">
                <h3>${author.name}</h3>
                <p><strong>${author.status}</strong></p>
                <p>${author.bio}</p>
                <div class="contact-info-wrapper">
                    <div class="contact-info">
                        <a href="${replaceAll(author.mail, "[at]", "@")}"><i class="fas fa-envelope"></i> Email</a>
                        <a href="${author.linkedin}" target="_blank"><i class="fab fa-linkedin"></i> LinkedIn</a>
                    </div>
                </div>
            </div>
        `;
        }
}



document.addEventListener("DOMContentLoaded", function () {

    const emailLink = document.getElementById('email-link');
        if (emailLink) {
        const true_email = replaceAll(email, "[at]", "@")
        emailLink.textContent = 'Email : ' + true_email;
        emailLink.href = 'mailto:' + true_email;
    }

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