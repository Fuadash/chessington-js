import Piece from './piece';


export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        return Piece.getKMoves(board, this.player, this.currentSquare, [[2, 1], [1, 2], [-1, 2], [-2, 1], [-2, -1], [-1, -2], [1, -2], [2, -1]]);
        // return [0,1,2,3,4,5,6,7].map(row => [0,1,2,3,4,5,6,7].map(col => new Square(row, col))).reduce((acc, x) => acc.concat(x))
        //     .filter(square => (square.row - this.currentSquare.row) ** 2 + (square.col - this.currentSquare.col) ** 2 === 5)
        //     .filter(square => pleaseRefactorMe(board, square, this.player));
    }
}
