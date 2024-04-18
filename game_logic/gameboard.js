import Ship from "./ship";

export default class Gameboard {
    constructor() {
        this.allShipsSunk = false;
        this.ships = []; //array of objects
        this.shipCoordinates = []; //array of coordinates
        this.shots = []; //array of coordinates
    }

    //using inputted coordinates as the top/ leftmost space; isVertical is boolean, else horizontal
    placeShip (x, y, length, isVertical = false) {
        const newShip = new Ship(length);

        //add ship object to array
        this.ships += (newShip);

        //track ship coordinates
        
    }
}