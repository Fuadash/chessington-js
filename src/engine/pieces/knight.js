import Piece from './piece';
import Square from '../square';

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getCandidateMoves(board) {
        return [0,1,2,3,4,5,6,7].map(row => [0,1,2,3,4,5,6,7].map(col => new Square(row, col))).reduce((acc, x) => acc.concat(x))
            .filter(square => (square.row - this.currentSquare.row) ** 2 + (square.col - this.currentSquare.col) ** 2 === 5);
    }
}
