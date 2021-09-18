let all_buttons = document.getElementsByTagName('button');

let copyColor = [];
for (let i = 0; i < all_buttons.length; ++i) {
    copyColor.push(all_buttons[i].classList[1]);
}

function buttonColorChange(elem) {
    if (elem.value === 'red') {
        buttonsRed();
    }
    else if (elem.value === 'green') {
        buttonsGreen();
    }
    else if (elem.value === 'reset') {
        buttonsColorReset();
    }
    else if (elem.value === 'random') {
        randomColors();
    }
}

function buttonsRed() {
    for (let i = 0; i < all_buttons.length; ++i) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}
function buttonsGreen() {
    for (let i = 0; i < all_buttons.length; ++i) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonsColorReset() {
    for (let i = 0; i < all_buttons.length; ++i) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyColor[i]);
    }
}

function randomColors() {
    let choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning'];

    for (let i = 0; i < all_buttons.length; ++i) {
        let randomNumber = Math.floor(Math.random()*4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNumber]);
    }
}