import Square from '../square';

export default class Piece {
    constructor(player) {
        this.player = player;
        this.currentSquare ="who cares lmao";
        this.firstMove = true;
    }

    getAvailableMoves(board) {
        return this.getCandidateMoves(board).filter(square => !board.getPiece(square));
    }

    getCandidateMoves(board) {
        throw new Error('This method must be implemented, and return a list of available moves');
    }

    static getBRQMoves(board, originSquare, directions){
        let candidates = [];
        directions.forEach(direction => {
            let change = [direction[0], direction[1]];
            while (true) {
                let checkSquare = originSquare.shiftedBy(change[0], change[1]);
                if (!board.squareIsOnBoard(checkSquare)) break;
                if (board.getPiece(checkSquare)) break;
                candidates.push(checkSquare);
                change[0] += direction[0];
                change[1] += direction[1];
            }
        });
        return candidates;
    }

    moveTo(board, newSquare) {
        board.movePiece(this.currentSquare, newSquare);
    }
}
