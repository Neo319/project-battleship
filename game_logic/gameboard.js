import Ship from "./ship";

export default class Gameboard {
    constructor() {
        this.allShipsSunk = false;
        this.ships = [];            //ship objects 
        this.shipCoordinates = [];  //coordinates objects
        this.shots = [];            //coordinates objects
    }

    //using inputted coordinates as the top/ leftmost space; isVertical is boolean, else horizontal
    placeShip (x, y, length, isVertical = false) {
        const newShip = new Ship(length);

        //add ship object to array
        this.ships.push(newShip);


        //initializing array representing ship coordinates
        this.shipCoordinates.push([]); 

        //track ship coordinates
        for (let i = 0; i < length; i++) {
            
            //iterate through coordinates taken up by the ship, adding all to array
            //each ship has an array containing objects representing its coordinates
            //array is indexed to the ships through index of shipCoordinates array
            const newShipIndex = this.shipCoordinates.length -1;
            if (isVertical) {
                this.shipCoordinates[newShipIndex].push({x: x, y: (y + i)});
            } else {
                this.shipCoordinates[newShipIndex].push({x: (x + i), y: y});
            }
        }
    }

    recieveAttack (x, y) {
        
        // //check whether ship is found in attacked square
        // if (this.findCoordinates({x: x, y: y}, this.shipCoordinates)) {
        //     this.shots.push({x: x, y: y, isHit: true});
        //     return "hit";
        // } 
        // else {
        //     this.shots.push({x: x, y: y, isHit: false});
        //     return "miss";
        // }

        //check whether ship is found in attacked square
        for (const shipCoords of this.shipCoordinates) {
            if (this.findCoordinates({x: x, y: y}, shipCoords)) {
                //ship coordinates are found
            }
        }
    }

    //helper function: how coordinates are found
    //search: coordinates being searched for
    //source: array being searched through
    findCoordinates (search, source) {
        for (let i = 0; i < source.length; i++) {
            if (
                source[i].x == search.x && //x coordinate
                source[i].y == search.y //y coordinate
            ) {
                return true; //found
            } 
        }
        return false; //not found
    }
}