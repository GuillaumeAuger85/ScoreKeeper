const buttonTree = document.querySelector(".button3");
const buttons = document.querySelectorAll(".button");
const players = document.querySelectorAll('.player');
const btn = document.querySelector('.btn');
const point = document.querySelector('#maxPoint');

for (let i = 0; i < 2; i++) {
    buttons[i].addEventListener('click', function () {
        const x = parseInt(players[i].innerText);
        const newScore = addOne(x);
        players[i].innerText = newScore;
        if (players[0].innerText === point.value) {
            EndMatch();
            color1();
        } else if (players[1].innerText === point.value) {
            EndMatch();
            color2();
        }
    })
}

buttonTree.addEventListener('click', function () {
    players[0].innerText = '0';
    players[1].innerText = '0';
    if (buttons[0].classList.contains('endMatch') && buttons[1].classList.contains('endMatch') && players[0].classList.contains('green') && players[1].classList.contains('red')) {
        EndMatch();
        color1();
    } else if (buttons[0].classList.contains('endMatch') && buttons[1].classList.contains('endMatch') && players[0].classList.contains('red') && players[1].classList.contains('green')) {
        EndMatch();
        color2();
     }
})


function addOne(num) {
    return num + 1;
}

function EndMatch() {
    buttons[0].classList.toggle('endMatch');
    buttons[1].classList.toggle('endMatch');
    btn.classList.toggle('cursor');
    buttons[0].classList.toggle('pointer');
    buttons[1].classList.toggle('pointer');
}
function color1() {
    players[0].classList.toggle('green');
    players[1].classList.toggle('red');
}

function color2(){
    players[0].classList.toggle('red');
    players[1].classList.toggle('green');
}



