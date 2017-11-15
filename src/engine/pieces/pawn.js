import Piece from './piece';
import Player from '../player';


export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let availableMoves = [];
        let factor = this.player === Player.WHITE ? 1 : -1;
        if (this.player === Player.WHITE && this.currentSquare.row === 7) return [];
        if (this.player === Player.BLACK && this.currentSquare.row === 0) return [];
        let pieceForward = board.getPiece(this.currentSquare.shiftedBy(factor, 0));
        let pieceTwoForward = board.getPiece(this.currentSquare.shiftedBy(2 * factor, 0));
        if (!pieceForward) {
            if (this.firstMove) {
                if (!pieceTwoForward) {
                    availableMoves.push(this.currentSquare.shiftedBy(2 * factor, 0));
                }
            }
            availableMoves.push(this.currentSquare.shiftedBy(factor, 0));
        }
        let pieceDiagonalRight = board.getPiece(this.currentSquare.shiftedBy(factor, 1));
        let pieceDiagonalLeft = board.getPiece(this.currentSquare.shiftedBy(factor, -1))
        if (pieceDiagonalRight) {
            if (pieceDiagonalRight.player !== this.player) {
                if (pieceDiagonalRight.constructor.name !== 'King') {
                    availableMoves.push(this.currentSquare.shiftedBy(factor, 1));
                }
            }
        }
        if (pieceDiagonalLeft) {
            if (pieceDiagonalLeft.player !== this.player) {
                if (pieceDiagonalLeft.constructor.name !== 'King') {
                    availableMoves.push(this.currentSquare.shiftedBy(factor, -1));
                }
            }
        }
        return availableMoves;
    }
}
