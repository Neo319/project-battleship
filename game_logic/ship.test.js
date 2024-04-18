import ship from "./ship";


describe ('starting up', () => {
    
    // first steps 
    test('ship exists', () => {
        expect(ship).toBeDefined()
    });

    test('ship can be created', () => {
        expect(new ship(2)).toBeInstanceOf(Object)
    });

    test('length can be assigned', () => {
        expect(new ship(2).length).toBe(2) &&
        expect(new ship(5).length).toBe(5)
    });

});

// describe ('functionality', () => {
    
//     //hit ship & get times hit
//     test ('hit ship one time', () => {

//         expect()
//     })
    
//     //sink ship & get isSunk
    
// })

