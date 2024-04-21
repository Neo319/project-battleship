import Player from "../game_logic/player.js";
import boardDisplayer from "./board_displayer.js";

const gameManager = function () {
    console.log("foo");

    //initial game setup

    const player = new Player(1); 
    const cpu = new Player(2);

    const playerBoardAddress = document.getElementById("playerBoard");
    const cpuBoardAddress = document.getElementById("cpuBoard");

    //to begin with, use predetermined coordinates
    function _initialLayout(player) {

        player.board.placeShipVertical(2, 4, 2);

        player.board.placeShipHorizontal(1, 0, 3);
        player.board.placeShipVertical(8, 3, 3);

        player.board.placeShipVertical(4, 5, 4);

        player.board.placeShipHorizontal(1, 2, 5);

    }

    _initialLayout(player);
    _initialLayout(cpu);

    boardDisplayer(1, playerBoardAddress, player);
    boardDisplayer(2, cpuBoardAddress, cpu);


}

export default gameManager;