import Piece from './piece';
import Square from '../square';

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        return Piece.getKMoves(board, this.player, this.currentSquare, [[1, 0], [0, 1], [-1, 0], [0, -1], [1, 1], [1, -1], [-1, -1], [-1, 1]]);
        // return [0,1,2,3,4,5,6,7].map(row => [0,1,2,3,4,5,6,7].map(col => new Square(row, col))).reduce((acc, x) => acc.concat(x))
        //     .filter(square => (square.row - this.currentSquare.row) ** 2 + (square.col - this.currentSquare.col) ** 2 < 3)
        //     .filter(square => !(square.row === this.currentSquare.row && square.col === this.currentSquare.col));
    }
}
