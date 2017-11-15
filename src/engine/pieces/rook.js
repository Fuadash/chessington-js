import Piece from './piece';
import Square from '../square';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        return Piece.getBRQMoves(board, this.player, this.currentSquare, [[1, 0], [0, 1], [-1, 0], [0, -1]]);
    }

    getLongFunction(board, directions) {
        // return [0,1,2,3,4,5,6,7].filter(x => x !== this.currentSquare.col).map(x => new Square(this.currentSquare.row, x)).concat(
        //     [0,1,2,3,4,5,6,7].filter(x => x !== this.currentSquare.row).map(x => new Square(x, this.currentSquare.col))
        // );
    }
}
