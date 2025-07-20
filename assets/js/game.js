let currentPlayer = "X";

let board = ["", "", "", "", "", "", "", "", ""];

const loseSound = new Audio("sounds/bazinga.mp3");

const combinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];


const cells = document.querySelectorAll(".thesis");
const winner = document.getElementById("winner");
const btnReset = document.getElementById('reset')



cells.forEach((cell, index) => {
    cell.addEventListener("click", () => {
        if (board[index] === "") {
            board[index] = currentPlayer;
            cell.textContent = currentPlayer;
            cell.classList.add("taken");

            if (checkWinner(currentPlayer)) {
                winner.textContent = `Player ${currentPlayer} Wins!`;
                loseSound.play(); // play sound
                endGame();
            } else if (board.every(cell => cell !== "")) {
                winner.textContent = "Its a TIE";
                btnReset.style.display = "flex"

            } else {
                currentPlayer = currentPlayer === "X" ? "O" : "X";
            }
        }
    });
});



function checkWinner(player) {
    return combinations.some(combo =>
        combo.every(index => board[index] === player)
    );
}

function endGame() {
    cells.forEach(cell => cell.classList.add("taken"));
    btnReset.style.display = "flex"

}

function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    winner.textContent = "";
    cells.forEach(cell => {
        cell.textContent = "";
        cell.classList.remove("taken");
    });


    btnReset.style.display = "none"

}