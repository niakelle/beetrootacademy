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