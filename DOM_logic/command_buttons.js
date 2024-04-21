import gameManager from "./gameManager.js";
import boardDisplayer from "./board_displayer.js";
import layoutGenerator from "./layout_generation.js";

//module in charge of command buttons

export default function commandButtons (button, player) {
    //"button" shows which button was clicked
    //"player" is used to pass the player object here

    const playerBoardAddress = document.getElementById("playerBoard");

    if (button === "start") {
        // button used to initiate the game with layout
        gameManager(player, cpu);
    }

    else if (button === "layout") {
        // generate random layout for ships
        layoutGenerator(player);
        boardDisplayer(1, playerBoardAddress, player);

    }

    else if (button === "reset") { 
        
        //reset the game state
    }

}