import GameBoard from "./gameboard2";

//first steps
test('gameboard exists', () => {
    expect(GameBoard).toBeDefined() 
});


describe('recieveAttack logic', () => {
    let myBoard;
    beforeEach(() => {
        myBoard = new GameBoard();
        myBoard.board = myBoard.generateBoard()
        myBoard.placeShipVertical(0, 0, 2);
    })
    
    afterEach(() => {
        myBoard.ships = [];
        myBoard.board = [];
        myBoard = null
    })

    //board contains ship
    it('pushes ship to board object', () => {
        expect(myBoard.ships).toHaveLength(1)
    })

    it("uses 0 to represent empty space", () => {
        expect(myBoard.board[2][2]).toEqual(0)
    })
    it("uses 1 to represent ships", () => {
        expect(myBoard.board[0][0]).toEqual(1) 
    }) 
    it("represents ships in their full length", () => {
        expect(myBoard.board[0][1]).toEqual(1)
    })
    it("represents a ship of length 5 horizontally", () => {
        myBoard.placeShipHorizontal(5, 9, 5);
        expect(myBoard.board[5][9]).toEqual(1)
    })
    it('represents both ends of horizontal ship', () => {
        myBoard.placeShipHorizontal(5, 9, 5);
        expect(myBoard.board[9][9]).toEqual(1);
    })
    



    it("records shot coordinates when missed", () => {
        myBoard.recieveAttack(5, 5);
        expect(myBoard.board[5][5]).toEqual(2) //2 represents missed shot
    })
    it("represents hit shot on the board", () => {
        myBoard.recieveAttack(0, 0);
        expect(myBoard.board[0][0]).toEqual(3) //3 represents hit shot
    })
    it("called hit function on the ship object", () => {
        myBoard.recieveAttack(0, 0);
        expect(myBoard.ships[0].timesHit).toEqual(1);
    })
    it("calls hit function on the correect ship object", () => {
        myBoard.placeShipHorizontal(5, 9, 5);
        myBoard.recieveAttack(9, 9);
        expect(myBoard.ships[1].timesHit).toEqual(1);
    })
    it("calls multiple hits on ships", () => {
        myBoard.placeShipHorizontal(5, 9, 5);
        myBoard.recieveAttack(9, 9);
        myBoard.recieveAttack(8, 9);
        expect(myBoard.ships[1].timesHit).toEqual(2);
    })
    it("can sink ships", () => {
        myBoard.placeShipHorizontal(5, 9, 3);
        myBoard.recieveAttack(7, 9);
        myBoard.recieveAttack(6, 9);
        myBoard.recieveAttack(5, 9);
        expect(myBoard.ships[1].sunk).toBe(true);
    })
    it('can sink all ships', () => {
        myBoard.placeShipHorizontal(8, 0, 2);

        myBoard.recieveAttack(0, 0);
        myBoard.recieveAttack(0, 1);

        myBoard.recieveAttack(8, 0);
        myBoard.recieveAttack(9, 0);
        expect(myBoard.allShipsSunk).toBe(true);
    })
}) 