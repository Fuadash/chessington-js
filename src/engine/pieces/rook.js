import Piece from './piece';
import Square from '../square';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getCandidateMoves(board) {
        let candidates = [];
        let directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];
        directions.forEach(direction => {
            let change = [direction[0], direction[1]];
            while (true) {
                let checkSquare = this.currentSquare.shiftedBy(change[0], change[1]);
                if (!board.squareIsOnBoard(checkSquare)) break;
                if (board.getPiece(checkSquare)) break;
                candidates.push(checkSquare);
                change[0] += direction[0];
                change[1] += direction[1];
            }
        });
        console.log(candidates);
        return candidates;
        // return [0,1,2,3,4,5,6,7].filter(x => x !== this.currentSquare.col).map(x => new Square(this.currentSquare.row, x)).concat(
        //     [0,1,2,3,4,5,6,7].filter(x => x !== this.currentSquare.row).map(x => new Square(x, this.currentSquare.col))
        // );
    }
}
