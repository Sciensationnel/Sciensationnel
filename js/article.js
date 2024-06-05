document.addEventListener("DOMContentLoaded", function () {


    var authors_text = document.querySelector('.authors');

    // Récupérer les noms des auteurs de l'article
    const authorMeta = document.querySelector('.meta .authors');
    const authorNames = authorMeta.getAttribute('data-names').split(',').map(name => name.trim());

    //displayAuthorBadges(authorNames, authors)

    console.log(authorNames.length)
    if (authorNames.length > 1){
        authors_text.textContent+='Auteurs: '
    }
    else if (authorNames[0].length != 0 ){
        authors_text.textContent+='Auteur: '
    }
    
    var authors2 = [];
    authorNames.forEach(authorName => {
        const author = authors.find(author => author.name === authorName);
        if (author) {
                authors2.push(author);
            }
     });
    displayAuthorBadges(authors2);

    for (var i = 0; i < authorNames.length; i++) {
            console.log(authorNames[i])
            if (i == 0) {
                authors_text.textContent += authorNames[i];
            }
            else {
                authors_text.textContent += ', ' + authorNames[i];
            }
    }
    if (authors2.length == 0){
        var section = document.getElementById('auteurs-section');
        section.style.display = 'none';
    }
    else if (authors2.length > 1) {
        var about_title = document.getElementById('about_title');
        about_title.textContent = "À propos des auteurs";
    }
});