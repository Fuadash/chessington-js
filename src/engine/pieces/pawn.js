import Piece from './piece';
import Square from '../square';
import Player from '../player';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let availableMoves;
        if (this.player === Player.WHITE) {
            availableMoves = [this.currentSquare.shiftedBy(1, 0)];
        }
        else{
            availableMoves = [this.currentSquare.shiftedBy(-1, 0)];
        }
        return availableMoves;
    }
}
