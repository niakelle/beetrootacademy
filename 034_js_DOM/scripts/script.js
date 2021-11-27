/* Task 001
Створити сторінку, що показує нумерований список пісень:
*/
var playList = [
    {
        author: "LED ZEPPELIN",
        song:"STAIRWAY TO HEAVEN"
    },
    {
        author: "QUEEN",
        song:"BOHEMIAN RHAPSODY"
    },
    {
        author: "LYNYRD SKYNYRD",
        song:"FREE BIRD"
    },
    {
        author: "DEEP PURPLE",
        song:"SMOKE ON THE WATER"
    },
    {
        author: "JIMI HENDRIX",
        song:"ALL ALONG THE WATCHTOWER"
    },
    {
        author: "AC/DC",
        song:"BACK IN BLACK"
    },
    {
        author: "QUEEN",
        song:"WE WILL ROCK YOU"
    },
    {
        author: "METALLICA",
        song:"ENTER SANDMAN"
    }
];

let buildHtml = function (massiv) {
    let result = '';
    result += '<h3>Your playlist: </h3>';
    result += '<ol>';
    for (let i = 0; i < massiv.length; i++) {
        result += `<li><b>${massiv[i].author}</b> - ${massiv[i].song}</li>`;
    }
    result += '</ol>';
    return result;
}

document.querySelector('.first-task__button').onclick = function () {
    let resultOutput = buildHtml(playList);
    document.querySelector('.first-task').innerHTML += resultOutput;
    console.log(resultOutput);
};


/* Task 002
Створити HTML-сторінку з кнопкою "Відкрити" і модальним вікном. На модальному 
вікні повинен бути текст і кнопка "Закрити". Спочатку модальне вікно не 
відображається. При кліку на кнопку "Відкрити" з'являється модальне вікно, 
на кнопку "Закрити" — зникає.
*/
let popup = document.querySelector('.popup');
document.querySelector('.second-task__button').onclick = function () {
    popup.classList.remove('hidden');
}
document.querySelector('.popup__close').onclick = function () {
    popup.classList.add('hidden');
}

/* Task 003
Створити HTML-сторінку зі світлофором і кнопкою, яка перемикає світлофор на наступний колір.
*/
document.querySelector('.third-task__button').onclick = function () {
    let lampochki = document.querySelectorAll('.svetofor__item');
    let tempI = -1;
    for (let i = 0; i < lampochki.length; i++) {
        if (lampochki[i].classList.contains('active')) {
            tempI = i;
            lampochki[i].classList.remove('active');
        }
    }
    tempI += 1;
    if (tempI >= (lampochki.length) || tempI === -1) {
        tempI = 0;
    }
    lampochki[tempI].classList.add('active');
}
