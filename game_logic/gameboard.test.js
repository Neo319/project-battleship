import Gameboard from "./gameboard";
import Ship from "./ship";

//first steps
test('gameboard exists', () => {
    expect(Gameboard).toBeDefined() 
});
const myBoard = new Gameboard;

describe('gameboard functionality', () => {

    //place ship at a coordinate
    test('can place ships', () => {
        myBoard.placeShip(0, 0, 2, true);
        expect(myBoard.shipCoordinates).toEqual([[0, 0], [0, 1]])
    });

    test('can recieve missing attacks', () => {
        expect(myBoard.recieveAttack(5, 5)).toBe('miss') && //returns 'miss' to indicate
        expect(myBoard.shots).toEqual([[5, 5]]);
    });

    myBoard.recieveAttack(0, 0);

    test('hit attacks recieved in array', () =>{
        expect(myBoard.shots).toContainEqual([0, 0]);
    });

    test('hit attacks return true', () => {
        expect(myBoard.recieveAttack(0, 1)).toBe('hit');
    })

});

test('coordinate searching logic works', () => {
    expect(myBoard.findCoordinates([1, 1], [[1, 1], [1, 2]])).toBe(true)
})