document.addEventListener("DOMContentLoaded", function () {

    displayAuthorBadges(authors);

	let currentImageIndex = 0;
    const carouselImage = document.getElementById("currentImage");
    const carouselImage2 = document.getElementById("lastImage");
    const duration = 7500;

   	const links = Array.from(document.querySelectorAll('.article-grid a')).map(a => a.getAttribute('href'));
    const titles = Array.from(document.querySelectorAll('.article-info .article-title')).map(h3 => h3.textContent);
    const images = Array.from(document.querySelectorAll('.article-grid img')).map(img => img.src);
    const infos = Array.from(document.querySelectorAll('.article-info .article-description')).map(p => p.textContent);

    const article_link = document.getElementById("article_link");
    const article_title = document.getElementById("article_title");
    const article_infos = document.getElementById("article_infos");
    const article_resume = document.getElementById("article_resume");

    article_link.href = links[0];
    article_title.textContent = titles[0];
    article_infos.style.left = '0px';
    article_resume.textContent = infos[0];
    
    carouselImage.src = images[0];
    carouselImage2.src = images[0];

    function changeImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        const newImage = images[currentImageIndex];
        carouselImage.src = newImage;

        // Appliquez le fondu en changeant l'opacité
        carouselImage2.style.opacity = 0;
        article_infos.style.left = `${-article_infos.offsetWidth}px`;


        // Attendez la fin du fondu avant de changer l'image
        setTimeout(function () {
            article_infos.style.left = '0px';
            carouselImage2.src = newImage;
            carouselImage2.style.opacity = 1;
        }, 1000); // Ajustez la durée du fondu ici (en millisecondes)

        setTimeout(function (){
            article_link.href = links[currentImageIndex];
            article_resume.textContent = infos[currentImageIndex];
            article_title.textContent = titles[currentImageIndex];
        }, 300);
}

    // Changez l'image toutes les 3 secondes
    setInterval(changeImage, duration);    
});