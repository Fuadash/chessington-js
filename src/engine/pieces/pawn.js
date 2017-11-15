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
        let pieceDiagonalRight = board.getPiece(this.currentSquare.shiftedBy(factor, 1));
        let pieceDiagonalLeft = board.getPiece(this.currentSquare.shiftedBy(factor, -1));
        let pieceRight = board.getPiece(this.currentSquare.shiftedBy(0, 1));
        let pieceLeft = board.getPiece(this.currentSquare.shiftedBy(0, -1));
        if (!pieceForward) {
            if (this.moves === 0) {
                if (!pieceTwoForward) {
                    availableMoves.push(this.currentSquare.shiftedBy(2 * factor, 0));
                }
            }
            availableMoves.push(this.currentSquare.shiftedBy(factor, 0));
        }
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
        if (pieceRight) {
            if (pieceRight.player !== this.player) {
                if (pieceRight.constructor.name === 'Pawn') {
                    if (pieceRight.pawnLastMoveWasDouble && pieceRight.movedLastTurn) {
                        availableMoves.push(this.currentSquare.shiftedBy(factor, 1));
                    }
                }
            }
        }
        if (pieceLeft) {
            if (pieceLeft.player !== this.player) {
                if (pieceLeft.constructor.name === 'Pawn') {
                    if (pieceLeft.pawnLastMoveWasDouble && pieceLeft.movedLastTurn) {
                        availableMoves.push(this.currentSquare.shiftedBy(factor, -1));
                    }
                }
            }
        }
        return availableMoves;
    }
}
