import Ship from "./ship";

export default class GameBoard {
    constructor () {
        this.board = this.generateBoard(); //2D array 
        this.ships = []; //array containing ship objects
    }

    generateBoard () {
        let board = []
        for (let i = 0; i < 10; i++) {
            board.push([]);
            for (let j = 0; j < 10; j++) {
                board[i].push(0);
            }
        }
        return board;
    }





    //simpler calling 
    placeShipVertical (x, y, length) {
        this.placeShip(x, y, length, true);
    }
    placeShiptHorizontal (x, y, length) {
        this.placeShip(x, y, length, false);
    }


    placeShip(x, y, length, isVertical) {
        const newShip = new Ship (length)
        this.ships.push(newShip)

        //update board coordinates to contain ship
    }
}