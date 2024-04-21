// module that assigns random layouts to players

export default function layoutGenerator (playerObj) {
    //"playerObj" : the player object in which the target board is stored

    //reset the player's board first
    playerObj.board.board = playerObj.board.generateBoard();

    //five ships: lengths of 5, 4, 3, 3, and 2
    let shipLengths = [5, 4, 3, 3, 2]

    for (let i = 0; i < 5; i++) {
        const length = shipLengths[i];

        //decide horizontal or vertical 
        let direction = Number((Math.floor((Math.random()) * 2) + 1)) //1 or 2
        //1: horizontal
        //2: vertical

        

        if (direction === 1) {

            //generate random x and y coordinates accordingly
            let x;
            let y;
            for (let j = 0; j < 10; j++) { //limit to 10 attempts
                x = Math.floor(Math.random() * (10 - length)) //limit to 10-length to avoid going off the board
                y = Math.floor(Math.random() * (10)) 

                //check that all board spaces are empty

                
                const boardSpaces = []
                //getting all board spaces
                for (let k = 0; k < length; k++) {
                    //iterate through spaces the ship will take up
                    boardSpaces.push(playerObj.board.board[x + k][y]) 
                }
                //checking spaces
                if (allAreZero(boardSpaces)) {
                    console.log(boardSpaces)
                    //call placeShip
                    playerObj.board.placeShipHorizontal(x, y, length)
                    break;
                }
            }
        }


        else if (direction === 2) {

            //generate random x and y coordinates accordingly
            let x;
            let y;
            for (let j = 0; j < 10; j++) { //limit to 10 attempts
                x = Math.floor(Math.random() * (10)) //limit to 10-length to avoid going off the board
                y = Math.floor(Math.random() * (10 - length)) 

                //check that all board spaces are empty

                
                const boardSpaces = []
                //getting all board spaces
                for (let k = 0; k < length; k++) {
                    //iterate through spaces the ship will take up
                    boardSpaces.push(playerObj.board.board[x][y + k]) 
                }
                //checking spaces
                if (allAreZero(boardSpaces)) {
                    console.log(boardSpaces)
                    //call placeShip
                    playerObj.board.placeShipVertical(x, y, length)
                    break;
                }
            }
        }
        
        
        

        


    }

    //used to check if spaces are empty
    function allAreZero (arr) {
        console.log("yes")
        for (let item of arr) {
            console.log(item);
            if (item != 0) {
                return false;
            }
            return true;
        }

    }

    console.log(playerObj.board.board)

    //generate random x and y coordinates accordingly

    //ensure all board spaces are empty

    //call placeShip on player's gameboard



}