import GameBoard from "./gameboard2.js"

export default class Player {
    constructor(type) {
        this.type = type; // 1 = player, 2= CPU
        this.board = new GameBoard()
    }

    
}