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

    test.only('placed ship can be found as object', () => {
        expect(arrayContainsObject(myBoard.shipCoordinates[0], {"x": 0, "y": 0}))
    })

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
    console.log(JSON.stringify(myBoard));
    const arraySearched = [{x: 1, y: 0}, {x: 1, y:1}]
    const search = {x: 1, y: 1}

    expect(myBoard.findCoordinates(search, arraySearched)).toBe(true)
})

test('hit function executed on appropriate ship', () => {
    expect(myBoard.ships[0].timesHit).toBe(2);
})

test('appropriate ship is sunk', () => {
    expect(myBoard.ships[0].isSunk).toBe(true);
}) 
