let currentPlayer = "X";

let board = ["", "", "", "", "", "", "", "", ""];


const combinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];


const cells = document.querySelectorAll(".thesis");
const winner = document.getElementById("winner");
const btnReset = document.getElementById('reset')

