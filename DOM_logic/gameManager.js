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

    async function doPlayerTurn () {
        //add event listeners to cpu board
        _manageClickListeners(1);

        //await player input (promise)

        //play cell on cpu board

        //update board
        boardDisplayer(2, cpuBoardAddress, cpu);

        //remove event listeners



        //time out -> generate cpu move (promise)

        //play cell on player board
        
        //see if game is over


        //update board
        boardDisplayer(1, playerBoardAddress, player);
        
    }

    function _manageClickListeners(mode) {
        //mode = 1 : enable listeners
        //mode = 2 : disable listeners

        //retrieve cpu board cells
        const cpuBoardCells = Array.from(document.getElementsByClassName ("cpu"));

        for (let cell of cpuBoardCells) {
            console.log(cell)
        }
    }

    doPlayerTurn();

}

export default gameManager;