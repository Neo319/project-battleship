import Gameboard from "./gameboard";
import Ship from "./ship";

//first steps
test('gameboard exists', () => {
    expect(Gameboard).toBeDefined() 
});

describe('gameboard functionality', () => {
    const myBoard = new Gameboard;

    //place ship at a coordinate
    test('can place ships', () => {
        myBoard.placeShip(0, 0, 2, true);
        console.log(myBoard.shipCoordinates)
        expect(myBoard.shipCoordinates).toHaveLength(2); // 2 spaces are covered
    });

    test('can recieve missing attacks', () => {
        expect(myBoard.recieveAttack(5, 5)).toBe('miss') && //returns 'miss'  to indicate
        expect(myBoard.shots).toHaveLength(1);
    });

    test('can recieve hit attacks', () => {
        expect(myBoard.recieveAttack(0, 1)).toBe('hit');
    });
        

})