import Piece from './piece';
import Square from '../square';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        return Piece.getBRQMoves(board, this.player, this.currentSquare, [[1, 1], [1, -1], [-1, 1], [-1, -1]]);
        // return [0,1,2,3,4,5,6,7].map(row => [0,1,2,3,4,5,6,7].map(col => new Square(row, col))).reduce((acc, x) => acc.concat(x))
        //     .filter(square => Math.abs(square.row - this.currentSquare.row) === Math.abs(square.col - this.currentSquare.col)).filter(square => square.row !== this.currentSquare.row);
    }
}
