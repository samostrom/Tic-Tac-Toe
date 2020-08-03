// Tik Tak Toe Game

// constants 

const WIN_COMBOS = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];



// state variables

let board;

let playerTurn;

let win;

// cached elements 

const boardEl = Array.from(document.querySelectorAll('td'));

const messages = document.getElementById("msg")



// event listeners

document.querySelector('#board').addEventListener('click', handleBoxClick);

document.getElementById('playAgain').addEventListener('click', replay)


// functions


function init() {
    board = 
    ['','','',
     '','','',
     '','',''];
    playerTurn = "X";
    messages.textContent = `It's ${playerTurn}'s turn`;
}

init()


function handleBoxClick(e) {
    
    let box = boardEl.findIndex(function(square) {
        return square === e.target;
    });
    if(board[box] === '') {
        board[box] = playerTurn;
    } else return;
    playerTurn = playerTurn === 'X' ? 'O' : 'X'
    win = getWinner();
    render()
}


function getWinner() {
    let winner = null;
    WIN_COMBOS.forEach((combo, index) => {
        if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) {
            winner = board[combo[0]];
        }
    });
    return winner ? winner : board.includes('') ? null : 'T';
}



function render() {
    board.forEach((element, idx) => {
        boardEl[idx].textContent = element;
    }); 
    messages.textContent = win === 'T' ? `Tie!` : win ? `${win} wins!` : `It's ${playerTurn}'s turn`;
    
}


function replay() {
    let tds = document.querySelectorAll('td');
    for(let i=0; i < tds.length; i++) {
        tds[i].innerText = ''
    }
    init()
}