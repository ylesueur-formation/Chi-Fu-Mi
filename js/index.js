let playerScore = 0;
let computerScore = 0;

const figure = ["paper", "rock", "scissors"];

function getWinner(playerFigure, computerFigure) {
    if (playerFigure == computerFigure) {
        return null;
    }
    loseTable = ["rock", "scissors", "paper"];

    indexPlayer = figure.indexOf(playerFigure);
    indexComputer = loseTable.indexOf(computerFigure);

    if (indexPlayer == indexComputer) {
        playerScore++
        return "player";
    } else {
        computerScore++;
        return "computer";
    }
}
function computerPlay() {
    random_index = Math.round(Math.random() * 2);
    return figure[random_index];
}

function play() {
    let element = $("button") 
    let figurePlayed = element.attr('id') // Rock
    computerFigure = computerPlay()
    winner = getWinner(figurePlayed, computerFigure)

    let playerOneName = $('#name-player-one');
    let playerTwoName = $('#name-player-two');

    console.log("computerScore:", computerScore);
    console.log("playerScore: ", playerScore);
    $("#score-player-two").text(computerScore);
    $("#score-player-one").text(playerScore);

    let $msg = null;
    let $logs = $("#logs")
    if(winner == null) {
        $msg = $(`<p class="null">Match Nul</p>`)
    } else if (winner == "player") {
        $msg = $(`<p><span class="player-win">${playerOneName.text()}</span> Gagne</p>`)
    } else {
        $msg = $(`<p><span class="computer-win">${playerTwoName.text()}</span> Gagne</p>`)
    }

    $(logs).append($msg)
    $(logs).scrollTop($logs.prop('scrollHeight'))

}

function reset() {
    playerScore = 0;
    computerScore = 0;
    $("#score-player-two").text('0');
    $("#score-player-one").text('0');
    $("#logs").empty();
}

$("#rock").click(play);
$("#paper").click(play);
$("#scissors").click(play);
$("#reset").click(reset);