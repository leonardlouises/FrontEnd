'use strict';

const backImage = 'https://i.pinimg.com/1200x/ae/8b/9e/ae8b9efd5ae2a621469cbd04537dd861.jpg';
let targets = ['red', 'blue', 'green', 'orange', 'black', 'purple']; // lista de elementos que tendrá el juego
let lives = 3; // numero de vidas
let time = 20; // tiempo restante
let timeRest = null; // timer

const showTime = document.querySelector('.time'); // elemento que muestra el tiempo
const showLives = document.querySelector('.lives'); // elemento que muestra la vista
const board = document.querySelector('.grid-content'); // elemento en el que se dibuja el board

fillBoard(); // dibuja el board

document.querySelector('.start-btn').addEventListener('click', startGame);

function randSort(array) { // mezcla el array
    for (let i = array.length - 1; i > 0; i--) {
        const rand = Math.floor(Math.random() * (i + 1));

        [array[i], array[rand]] = [array[rand], array[i]];
    }

    return array;
}

function fillBoard() { // dibuja el board y reincia el juego
    let content = '';

    for(let target of randSort([...targets, ...targets])) {
        content += `<div class="card flip" color-id="${target}">
            <div class="front">
                <img src="${backImage}" alt="image" width="200" height="200">
            </div>
            <div class="back">
                <div class="card-item" style="background-color: ${target};">
                    <span>${target}</span>
                </div>
            </div>
        </div>`;
    }

    board.innerHTML = content;

    time = 20;

    showTime.innerHTML = time;

    lives = 3;

    showLives.innerHTML = lives;
}

function timer() { // controla el tiempo
    if(!timeRest) {
        timeRest = setInterval(() => {
            showTime.innerHTML = time -= 1;

            if(time <= 0) {
                stopTimer();
                gameOver('Fin del juego, no queda tiempo.', fillBoard);
            }
        }, 1000);
    }  
}

function stopTimer() { // detiene el tiempo
    clearInterval(timeRest);

    timeRest = null;
}

function gameOver(message, fn) { // muestra una modal con un mensaje y ejecuta una función
    if(message) {
        const gameOverModal = document.querySelector('.game-over-modal');

        gameOverModal.firstElementChild.textContent = message;
        gameOverModal.lastElementChild.addEventListener('click', () => {
            gameOverModal.classList.add('closing');

            gameOverModal.addEventListener('animationend', () => {
                gameOverModal.close();
                gameOverModal.classList.remove('closing');
            }, { once: true });

            fn();
        });
        gameOverModal.showModal();
    }
}

function unwindBoard() { // voltea el board completo
    document.querySelectorAll('.card').forEach(element => {
        element.classList.remove('flip');
    });
}

function flipCard(card) { // voltea una carta
    card.classList.toggle('flip');
}

function hideCard(card) { // oculta una carta
    card.classList.add('hide');
}

function startGame() {
    unwindBoard(); // se voltean todas las cartas
    timer(); // inicia el tiempo

    let pair = '';
    let firstCard = null;
    let secondCard = null;
    let lockBoard = false;

    const updatedCards = document.querySelectorAll('.card'); // vuelve a obtener las cartas después de rellenar el board

    updatedCards.forEach(card => {
        card.addEventListener('click', () => {
            if(lockBoard || card.classList.contains('flip') || card.classList.contains('hide'))
                return;

            flipCard(card); // voltea la carta actual

            if(!firstCard) { // selecciona la primera carta
                firstCard = card;
                pair = card.getAttribute('color-id');
            }
            else { // selecciona la segunda carta
                secondCard = card;
                lockBoard = true;

                if(card.getAttribute('color-id') === pair) {
                    setTimeout(() => { // espera a que se vea la segunda carta volteada
                        hideCard(firstCard);
                        hideCard(secondCard);

                        if([...document.querySelectorAll('.card')].every(card => card.classList.contains('hide'))) {// compueba si ganó
                            gameOver('Has ganado, felicidades', fillBoard);

                            stopTimer();
                        }

                        resetTurn();
                    }, 600);
                }
                else {
                    setTimeout(() => { // Si falla espera a que se muestren ambas cartas y luego las voltea
                        flipCard(firstCard);
                        flipCard(secondCard);

                        showLives.innerHTML = lives -= 1; // actualiza las vidas

                        if(lives <= 0) { // comprueba si perdió
                            gameOver('Fin del juego, no quedan intentos.', fillBoard);

                            stopTimer();
                        }

                        resetTurn();
                    }, 1000);
                }
            }
        });
    });

    function resetTurn() { // resetea el turno
        pair = '';
        firstCard = null;
        secondCard = null;
        lockBoard = false;
    }
}
