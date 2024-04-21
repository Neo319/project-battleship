import boardDisplayer from "./board_displayer.js";
import layoutGenerator from "./layout_generation.js";

const gameManager = function (player, cpu) {

    //initial game setup

    

    const playerBoardAddress = document.getElementById("playerBoard");
    const cpuBoardAddress = document.getElementById("cpuBoard");

    //generate CPU's layout
    layoutGenerator(cpu);


    boardDisplayer(1, playerBoardAddress, player);
    boardDisplayer(2, cpuBoardAddress, cpu);

    // ----------- PRIMARY GAME DRIVER FUNCTION -----------
    async function doPlayerTurn () {
        //add event listeners to cpu board +
        //await player input (promise)
        const playerInput = await _playerInput();
        console.log(Number(playerInput.x), Number(playerInput.y));

        //play cell on cpu board
        cpu.board.recieveAttack(Number(playerInput.x), Number(playerInput.y));


        //update board
        boardDisplayer(2, cpuBoardAddress, cpu);

        //check if game is over
        if (cpu.board.allShipsSunk) {
            console.log("cpu all ships sunk");
            return "Player" //player wins
        }


        //time out -> generate cpu move (promise)
        console.log("cpu generating...")
        
        
        
        const response = await _generateCPUMove ();
        console.log("cpu plays:")
        console.log(response);

        //play cell on player board
        player.board.recieveAttack(response.x, response.y);

        //update board
        boardDisplayer(1, playerBoardAddress, player);

        //check if game is over
        if (player.board.allShipsSunk) {
            console.log("player all ships sunk");
            return "CPU" //CPU wins
        }

        console.log("turn over")
        doPlayerTurn()

    }

    async function _playerInput() {

        //retrieve cpu board 
        const cpuBoard = document.getElementById("cpuBoard");
        

        return new Promise((resolve, reject) => {
            
            let playerHasMoved = false;

            //add event listeners 
            cpuBoard.addEventListener("click", handleClick);

            function handleClick(event) {
                
                if (!playerHasMoved) {
                    const x = event.target.id.charAt(7);
                    const y = event.target.id.charAt(10);
    
                    //check that the move is legal (not already played)
                    if (!(cpu.board.board[x][y] === 2) &&
                        !(cpu.board.board[x][y] === 3) ) {
                            resolve({x: x, y: y}) //resolve promise
                            playerHasMoved = true;
                            cpuBoard.removeEventListener("click", handleClick)
                        }
                }
                    
            }
            
        });
    }




    async function _generateCPUMove () {
        return new Promise ((resolve, reject) => {
            //wait for cpu "to decide"
            setTimeout(() => {
                for (let i = 0; i < 100; i++) { //100 attempts

                    let x = (Math.floor(Math.random() * 10)); //0 - 9
                    let y = (Math.floor(Math.random() * 10)); //0 - 9
    
                    //check that move is legal
                    if (!(player.board.board[x][y] === 2) &&
                        !(player.board.board[x][y] === 3)) {
                            resolve ({x: x, y: y});
                            break; //end the loop if move can be made
                    }
                }
            }, 1000); // 1 second wait 
        });
    }
        
    //where the game is finally initiated
    doPlayerTurn();



    //testing
    

}

export default gameManager;