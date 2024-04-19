import Ship from "./ship";

export default class GameBoard {
    constructor () {
        this.board = this.generateBoard(); //2D array 
        this.ships = []; //array containing ship objects
        this.allShipsSunk = false
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
        this._placeShip(x, y, length, true);
    }
    placeShipHorizontal (x, y, length) {
        this._placeShip(x, y, length, false);
    }


    _placeShip(x, y, length, isVertical) {
        const newShip = new Ship (length);
        this.ships.push(newShip);

        //update board array to contain ship
        if (isVertical) { // iterate vertically to represent ship's spaces
            for (let i = 0; i < length; i++) {
                //update board data
                this.board[x][y+i] = 1;

                //update ship data
                const newShipCoords = {};
                newShipCoords.x = x;
                newShipCoords.y = y + i;       
                newShip.coordinates.push(newShipCoords);       
            } 
        } else { // iterate horizontally
            for (let i = 0; i < length; i++) {
                //update board data
                this.board[x+i][y] = 1;

                //update ship data
                const newShipCoords = {};
                newShipCoords.x = x + i;
                newShipCoords.y = y
                newShip.coordinates.push(newShipCoords);
            } 
        }
    }


    recieveAttack(x, y) {
        if (this.board[x][y] == 1) { 
            this.board[x][y] = 3; //shot is hit
            this._hitShip(x,y);
        } else 
        this.board[x][y] = 2; //shot misses
    }

    _hitShip (x, y) { // finds and hits the ship at the specified coordinates
        //iterate through all ships, seeking matching x and y coordinates
        for (const ship of this.ships) {
            //iterate through coordinates of current ship
            for (const coord of ship.coordinates) {
                if (coord.x === x && coord.y === y) {
                    ship.hit();
                    return ship;
                }
            }
        }
        throw new Error ("trying to hit ship in wrong location");
    }

}