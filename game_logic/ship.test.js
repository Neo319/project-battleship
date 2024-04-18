import ships from "./ship";


describe ('starting up', () => {
    
    // first steps 
    test('ship exists', () => {
        expect(ship).toBeDefined()
    });

    test('ship returns an object', () => {
        expect(ship(2)).toBeInstanceOf(Object)
    });

    test('length can be assigned', () => {
        expect(ship(2).length).toBe(2)
    });

})

