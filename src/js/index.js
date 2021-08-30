function currentYear() {
    let year = document.querySelector('footer ul li');
    year.innerHTML = String('&copy; ' + new Date().getFullYear());
}

function randomBGColor() {
    let colors = [{
        'r' : '91',
        'g' : '192',
        'b' : '235'
    }, {
        'r': '253',
        'g': '231',
        'b': '76'
    }, {
        'r': '155',
        'g': '197',
        'b': '61'
    }, {
        'r': '195',
        'g': '66',
        'b': '63'
    }, {
        'r': '92',
        'g': '65',
        'b': '93'
    }]

    let color = colors[Math.floor(Math.random() * colors.length)]
    document.body.style.background = 'linear-gradient(0deg, rgba(' + color.r + ', ' + color.g
        + ', ' + color.b + ', 0.3), rgba(' + color.r + ', ' + color.g + ', ' + color.b
        + ', 0.3)), url("../img/cute_puppy.jpg") no-repeat fixed center'
}

window.onload = function() {
    randomBGColor();
    currentYear();
}