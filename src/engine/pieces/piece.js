export default class Piece {
    constructor(player) {
        this.player = player;
        this.firstMove = true;
        this.currentSquare ="who cares lmao";
    }

    getAvailableMoves(board) {
        throw new Error('This method must be implemented, and return a list of available moves');
    }

    moveTo(board, newSquare) {
        board.movePiece(this.currentSquare, newSquare);
    }
}
