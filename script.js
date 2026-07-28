let buttons = document.querySelectorAll('.btn')
let h1 = document.querySelector('.hide')
let span = document.querySelector('.win')
let restratBtn = document.querySelector('.restratBtn')
let turn1 = document.querySelector('.turn1');
let turn2 = document.querySelector('.turn2');

let clickAudio = new Audio('click.mp3')
let winAudio = new Audio('winaudio.mp3')


let winners = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [8, 4, 0],
    [2, 4, 6]
]

// console.log(winners)

let textX = true;
buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        clickAudio.play()

        if (textX) {
            btn.textContent = 'X'
            textX = false;
            btn.style.color = 'red'
            btn.disabled = true;
            turn1.classList.remove('b-s')
            turn2.classList.add('b-s')
        } else {
            btn.textContent = 'O'
            textX = true;
            btn.style.color = 'cyan'
            btn.disabled = true;
            turn1.classList.add('b-s')
            turn2.classList.remove('b-s')
        }

        checkWinner()

    })
})

function checkWinner() {

    for (let pattern of winners) {

        let value1 = buttons[pattern[0]].innerText;
        let value2 = buttons[pattern[1]].innerText;
        let value3 = buttons[pattern[2]].innerText;

        if (value1 !== "" && value2 !== "" && value3 !== "") {

            if (value1 === value2 && value2 === value3) {
                winAudio.play()
                h1.classList.toggle('hide')
                span.textContent = value1;
                span.style.color = 'red'


                buttons.forEach((btn) => {
                    btn.disabled = true;
                })

            }

        }

    }

}

restratBtn.addEventListener('click', () => {
    window.location.reload();
})