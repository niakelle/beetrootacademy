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
    let projectCoords = document.querySelector('.main').getBoundingClientRect().top - 135;
    scrollToSmth(projectCoords);
});
aboutUsLink.addEventListener('click', function(event) {
    event.preventDefault();
    let projectCoords = document.querySelector('.header').getBoundingClientRect().top;
    scrollToSmth(projectCoords);
});
projectsLink.addEventListener('click', function(event) {
    event.preventDefault();
    let projectCoords = document.querySelector('.main').getBoundingClientRect().top - 135;
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

const regEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
const regName = /^[a-z]([-']?[a-z]+)*( [a-z]([-']?[a-z]+)*)+$/;
const inpName = document.getElementById('input-name');
const inpEmail = document.getElementById('input-email');

document.querySelector('.contacts__submit').onclick = function (e) {
    e.preventDefault();
    if (!validate(regName, inpName.value)) {
        invalid(inpName);
    }
    else {
        valid(inpName);
    }
    if (!validate(regEmail, inpEmail.value)) {
        invalid(inpEmail);
    }
    else {
        valid(inpEmail);
    }

    function validate (regex, input) {
        return regex.test(input);
    }

    function valid (input) {
        input.classList.remove('invalid-input');
        input.classList.add('valid-input');
    }

    function invalid (input) {
        alert(`Input ${input.value} is invalid.`);
        input.classList.add('invalid-input');
        input.classList.remove('valid-input');
    }
}