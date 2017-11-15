import Piece from './piece';
import Square from '../square';
import Player from '../player';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getCandidateMoves(board) {
        let availableMoves = [];
        let factor = this.player === Player.WHITE ? 1 : -1;
        if (!board.getPiece(this.currentSquare.shiftedBy(factor, 0))) {
            if (this.firstMove) {
                availableMoves.push(this.currentSquare.shiftedBy(2 * factor, 0));
            }
            availableMoves.push(this.currentSquare.shiftedBy(factor, 0));
        }
        return availableMoves;
    }
}
