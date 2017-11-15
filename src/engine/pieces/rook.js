import Piece from './piece';
import Square from '../square';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getCandidateMoves(board) {
        return [0,1,2,3,4,5,6,7].filter(x => x !== this.currentSquare.col).map(x => new Square(this.currentSquare.row, x)).concat(
            [0,1,2,3,4,5,6,7].filter(x => x !== this.currentSquare.row).map(x => new Square(x, this.currentSquare.col))
        );
    }
}
