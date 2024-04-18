import Ship from "./ship";


describe ('starting up', () => {
    
    // first steps 
    test('Ship exists', () => {
        expect(Ship).toBeDefined()
    });

    test('Ship can be created', () => {
        expect(new Ship(2)).toBeInstanceOf(Object)
    });

    test('length can be assigned', () => {
        expect(new Ship(2).length).toBe(2) &&
        expect(new Ship(5).length).toBe(5)
    });

});

describe ('functionality', () => {
    const myShip = new Ship(3);
    myShip.hit();
    myShip.hit();
    
    test ('hit ship and get times hit', () => {
        expect(myShip.timesHit).toBe(2);
    })

    test ('ship is not sunk after being hit', () => { 
        expect(myShip.sunk).toBe(false);
    })
    
    //sink Ship & get isSunk
    test ('sink Ship & get isSunk', () => {
        myShip.hit();
        expect (myShip.sunk).toBe(true);
    })
    
})

