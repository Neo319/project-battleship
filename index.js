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

start.classList = "active"
reset.classList = "inactive";
layout.classList = "active"

//add event listeners for command buttons 
start.addEventListener('click', () => {
    commandButtons("start", player, cpu)
    layout.classList = "inactive"
    start.classList = "inactive"
    reset.classList = 'active'
});
reset.addEventListener('click', () => {
    if (!(reset.classList.contains("inactive")))
    commandButtons("reset");
    layout.classList = 'actice';
    start.classList = 'active';
});
layout.addEventListener('click', () => {
    if (!(layout.classList.contains("inactive"))) {
        commandButtons('layout', player, cpu);
    }
    
});

//give player initial layout
commandButtons('layout', player);




