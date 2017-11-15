export default class Piece {
    constructor(player) {
        this.player = player;
        this.currentSquare ="who cares lmao";
        this.firstMove = true;
    }

    getAvailableMoves(board) {
        return this.getCandidateMoves(board).filter(square => !board.getPiece(square));
    }

    getCandidateMoves(board) {
        throw new Error('This method must be implemented, and return a list of available moves');
    }

    moveTo(board, newSquare) {
        board.movePiece(this.currentSquare, newSquare);
    }
}
