import GameBoard from "./gameboard2";

//first steps
test('gameboard exists', () => {
    expect(GameBoard).toBeDefined() 
});

const myBoard = new GameBoard;
myBoard.placeShipVertical(0, 0, 2);


//board contains ship
test('board contains ship', () => {
    expect(myBoard.ships).toHaveLength(1)
})


describe('recieveAttack logic', () => {

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
        expect(myBoard.board[9][9]).toEqual(1);
    })
    



    it("records shot coordinates when missed", () => {
        myBoard.recieveAttack(5, 5);
        expect(myBoard.board[5][5]).toEqual(2) //2 represents missed shot
        console.log(JSON.stringify(myBoard.ships))
        console.log(JSON.stringify(myBoard.board))
    })
    it("represents hit shot on the board", () => {
        myBoard.recieveAttack(0, 0);
        expect(myBoard.board[0][0]).toEqual(3) //3 represents hit shot
    })
    it("called hit function on the ship object", () => {
        expect(myBoard.ships[0].timesHit).toEqual(1);
    })
}) 