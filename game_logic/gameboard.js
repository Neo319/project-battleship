import Ship from "./ship";

export default class Gameboard {
    constructor() {
        this.allShipsSunk = false;
        this.ships = []; //objects
        this.shipCoordinates = []; //coordinates
        this.shots = []; //coordinates
    }

    //using inputted coordinates as the top/ leftmost space; isVertical is boolean, else horizontal
    placeShip (x, y, length, isVertical = false) {
        const newShip = new Ship(length);

        //add ship object to array
        this.ships += (newShip);

        //track ship coordinates
        for (let i = 0; i < length; i++) {
            
            // iterate through coordinates taken up by the ship, adding all to array
            if (isVertical) {
                this.shipCoordinates.push([x, (y + i)]);
            } else {
                this.shipCoordinates.push([(x + i), y]);
            }
        }
    }

    recieveAttack (x, y) {
        this.shots.push([x, y]);

        if (!this.shipCoordinates.includes([x, y])) {
            return 'miss';
        } else return 'hit';
    }
}