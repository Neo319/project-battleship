import commandButtons from "./DOM_logic/command_buttons.js";
import gameManager from "./DOM_logic/gameManager.js";
import Player from "./game_logic/player.js";

//player objects that will be passed around
const player = new Player(1); 
const cpu = new Player(2);

//buttons
const start = document.getElementById('start')
const reset = document.getElementById('reset')
const layout = document.getElementById('layout');

//add event listeners for command buttons 
start.addEventListener('click', () => {
    commandButtons("start")
});
reset.addEventListener('click', () => {
    commandButtons("reset")
});
layout.addEventListener('click', () => {
    commandButtons('layout', player)
});

//give player initial layout
commandButtons('layout', player);




