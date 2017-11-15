import Piece from './piece';
import Square from '../square';
import Player from '../player';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let availableMoves = [];
        if (this.player === Player.WHITE) {
            if (this.firstMove){availableMoves.push(this.currentSquare.shiftedBy(2, 0))}
            availableMoves.push(this.currentSquare.shiftedBy(1, 0));
        }
        else{
            if (this.firstMove){availableMoves.push(this.currentSquare.shiftedBy(-2, 0))}
            availableMoves.push(this.currentSquare.shiftedBy(-1, 0));
        }
        return availableMoves;
    }
}
