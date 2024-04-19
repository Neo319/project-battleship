import Gameboard from "./gameboard";

const arrayContainsObject = function (state, argument) {
    expect(state).toEqual(          // 1
        expect.arrayContaining([      // 2
            expect.objectContaining(argument)
        ])
    )
}


//first steps
test('gameboard exists', () => {
    expect(Gameboard).toBeDefined() 
});

// how coordinates are found: coordinates represented as objects
test('arrayContainsObject test', () => {
    const testArrObj = [{one: 1}]
    expect(arrayContainsObject(testArrObj, {one: 1}))
})

const myBoard = new Gameboard;

describe('gameboard functionality', () => {

    //ship of length 2 placed vertically at top-left corner of the board
    myBoard.placeShip(0, 0, 2, true);

    test('placed ship can be found as array item with coordinate objects', () => {
        expect(arrayContainsObject(myBoard.shipCoordinates[0], {"x": 0, "y": 0})).toBe(true)
    })

    test.only ('placed ship found at 0, 1', () => {
        console.log(JSON.stringify(myBoard.shipCoordinates));
        expect(arrayContainsObject(myBoard.shipCoordinates[0], {"x": 0, "y": 1}))
    })

    test('can recieve missing attacks', () => {
        expect(myBoard.recieveAttack(5, 5)).toBe('miss') && //returns 'miss' to indicate
        expect(myBoard.shots).toEqual([{x: 5, y: 5, isHit: false}]);
    });

    myBoard.recieveAttack(0, 0);

    test('hit attacks recieved in array', () =>{
        expect(arrayContainsObject(myBoard.shots, {x: 0, y: 0, isHit: true})).toBe(true);
    });

    test('hit attacks return true', () => {
        expect(myBoard.recieveAttack(0, 1)).toBe('hit');
    })

});

test('coordinate searching logic works', () => {
    const arraySearched = [{x: 1, y: 0}, {x: 1, y:1}];
    const search = {x: 1, y: 1};

    expect(myBoard.findCoordinates(search, arraySearched)).toBe(true)
})

test('hit function executed on appropriate ship', () => {
    expect(myBoard.ships[0].timesHit).toBe(2);
})

test('appropriate ship is sunk', () => {
    expect(myBoard.ships[0].isSunk).toBe(true);
}) 
