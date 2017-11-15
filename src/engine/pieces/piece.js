export default class Piece {
    constructor(player) {
        this.player = player;
        this.currentSquare ="who cares lmao";
        this.firstMove = true;
    }

    getAvailableMoves(board) {
        throw new Error('This method must be implemented, and return a list of available moves');
    }

    static getBRQMoves(board, player, originSquare, directions){
        let candidates = [];
        directions.forEach(direction => {
            let change = [direction[0], direction[1]];
            while (true) {
                let checkSquare = originSquare.shiftedBy(change[0], change[1]);
                if (!board.squareIsOnBoard(checkSquare)) break;
                let checkPiece = board.getPiece(checkSquare);
                if (checkPiece) {
                    if (checkPiece.player !== player) {
                        if (checkPiece.constructor.name !== 'King') {
                            candidates.push(checkSquare);
                        }
                    }
                    break;
                };
                candidates.push(checkSquare);
                change[0] += direction[0];
                change[1] += direction[1];
            }
        });
        return candidates;
    }

    static getKMoves(board, player, originSquare, offsets) {
        let candidates = [];
        offsets.forEach(offset => {
            let checkSquare = originSquare.shiftedBy(offset[0], offset[1]);
            if (board.squareIsOnBoard(checkSquare)) {
                let checkPiece = board.getPiece(checkSquare);
                if (checkPiece) {
                    if (checkPiece.player !== player) {
                        if (checkPiece.constructor.name !== 'King') {
                            candidates.push(checkSquare);
                        }
                    }
                }
                else {
                    candidates.push(checkSquare);
                }
            }
        });
        return candidates;
    }

    moveTo(board, newSquare) {
        board.movePiece(this.currentSquare, newSquare);
    }
}
