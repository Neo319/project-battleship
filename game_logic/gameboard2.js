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
    placeShipHorizontal (x, y, length) {
        this.placeShip(x, y, length, false);
    }


    placeShip(x, y, length, isVertical) {
        const newShip = new Ship (length);
        this.ships.push(newShip);

        //update board array to contain ship
        if (isVertical) { // iterate vertically to represent ship's spaces
            for (let i = 0; i < length; i++) {
                this.board[x][y+i] = 1;
            } 
        } else { // iterate horizontally
            for (let i = 0; i < length; i++) {
                this.board[x+i][y] = 1;
            } 
        }
    }


    recieveAttack(x, y) {
        
    }
}