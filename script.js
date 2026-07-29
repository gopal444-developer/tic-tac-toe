let buttons = document.querySelectorAll('.btn')
let h1 = document.querySelector('.hide')
let span = document.querySelector('.win')
let restratBtn = document.querySelector('.restratBtn')
let turn1 = document.querySelector('.turn1');
let turn2 = document.querySelector('.turn2');
let newGameBtn = document.querySelector('.newGameBtn')

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

let textX = true;
buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        clickAudio.play()

        if (textX) {
            btn.textContent = 'X'
            textX = false;
            btn.style.color = ' #F43F5E'
            btn.disabled = true;
            turn1.classList.remove('b-s')
            turn1.classList.remove('white')
            turn2.classList.add('b-s')
            turn2.classList.add('white')
        } else {
            btn.textContent = 'O'
            textX = true;
            btn.style.color = '#38BDF8'
            btn.disabled = true;
            turn1.classList.add('b-s')
            turn1.classList.add('white')
            turn2.classList.remove('b-s')
            turn2.classList.remove('white')
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
                buttons[pattern[0]].classList.add("winer");
                buttons[pattern[1]].classList.add("winer");
                buttons[pattern[2]].classList.add("winer");

                winAudio.play()
                h1.classList.toggle('hide')

                span.textContent = value1;



                if (value1 === 'X') {
                    span.style.color = '#FB7185'
                } else {
                    span.style.color = '#0EA5E9'
                }



                buttons.forEach((btn) => {
                    btn.disabled = true;

                })

            }

        }

    }

}

restratBtn.addEventListener('click', () => {
    buttons.forEach((btn) => {
        btn.textContent = ''
        btn.disabled = false;
        btn.classList.remove('winer')
    })
})

newGameBtn.addEventListener('click', () => {
    buttons.forEach((btn) => {
        btn.textContent = ''
        btn.disabled = false;
        btn.classList.remove('winer')
    })
})
