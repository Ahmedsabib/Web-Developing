const square = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');

let result = 0;
let hitPosition;
let timeId = null;
let currentTime = 60;


function randomSquare() {
    square.forEach(className => {
        className.classList.remove('mole');
    })
    let randomPosition = square[Math.floor(Math.random() * 9)];
    randomPosition.classList.add('mole');
    hitPosition = randomPosition.id;
}

square.forEach(id => {
    id.addEventListener('click', () => {
        if (id.id == hitPosition) {
            result++;
            score.textContent = result;
            hitPosition = null;
        }
    })
})


function moveMole() {
    timeId = setInterval(randomSquare, 500);
}

moveMole();


function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;
    if (currentTime === 0) {
        clearInterval(countDownTimer);
        clearInterval(timeId);
        alert('Game over! Your score is ' + result);
    }
}
let countDownTimer = setInterval(countDown, 1000);
