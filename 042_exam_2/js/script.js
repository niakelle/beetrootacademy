const arrowDown = document.querySelector('.text-content__arrow-down');
const aboutUsLink = document.getElementById('link__about-us');
const projectsLink = document.getElementById('link__projects');
const newsLink = document.getElementById('link__news');
const contactLink = document.getElementById('link__contacts');


function scrollToSmth (a) {
    window.scrollTo({
        top: a,
        left: 0,
        behavior: "smooth",
    });
}


// Плавная прокрутка к секциям страницы
arrowDown.addEventListener('click', function(event) {
    event.preventDefault();
    let projectCoords = document.querySelector('.main').getBoundingClientRect().top;
    scrollToSmth(projectCoords);
});
aboutUsLink.addEventListener('click', function(event) {
    event.preventDefault();
    let projectCoords = document.querySelector('.header').getBoundingClientRect().top;
    scrollToSmth(projectCoords);
});
projectsLink.addEventListener('click', function(event) {
    event.preventDefault();
    let projectCoords = document.querySelector('.main').getBoundingClientRect().top;
    scrollToSmth(projectCoords);
});
newsLink.addEventListener('click', function(event) {
    event.preventDefault();
    let projectCoords = document.querySelector('.news').getBoundingClientRect().top;
    scrollToSmth(projectCoords);
});
contactLink.addEventListener('click', function(event) {
    event.preventDefault();
    let projectCoords = document.querySelector('.contacts').getBoundingClientRect().top;
    scrollToSmth(projectCoords);
});