import Player from './player';
import GameSettings from './gameSettings';
import Square from './square';

export default class Board {
    constructor(currentPlayer) {
        this.currentPlayer = currentPlayer ? currentPlayer : Player.WHITE;
        this.board = this.createBoard();
    }

    createBoard() {
        const board = new Array(GameSettings.BOARD_SIZE);
        for (let i = 0; i < board.length; i++) {
            board[i] = new Array(GameSettings.BOARD_SIZE);
        }
        this.boardSize = GameSettings.BOARD_SIZE;
        return board;
    }

    squareIsOnBoard(square) {
        return square.row > -1 && square.row < this.boardSize && square.col > -1 && square.col < this.boardSize;
    }

    setPiece(square, piece) {
        piece.currentSquare = square;
        this.board[square.row][square.col] = piece;
    }

    deletePiece(square) {
        this.board[square.row][square.col] = undefined;
    }

    getPiece(square) {
        return this.board[square.row][square.col];
    }

    findPiece(pieceToFind) {
        for (let row = 0; row < this.board.length; row++) {
            for (let col = 0; col < this.board[row].length; col++) {
                if (this.board[row][col] === pieceToFind) {
                    return Square.at(row, col);
                }
            }
        }
        throw new Error('The supplied piece is not on the board');
    }

    movePiece(fromSquare, toSquare) {
        const movingPiece = this.getPiece(fromSquare);
        if (!!movingPiece && movingPiece.player === this.currentPlayer) {
            for (let row = 0; row < this.boardSize; ++row) {
                for (let col = 0; col < this.boardSize; ++col) {
                    let checkPiece = this.getPiece(Square.at(row, col));
                    if (checkPiece) {
                        checkPiece.movedLastTurn = false;
                    }
                }
            }
            if (movingPiece.constructor.name === 'Pawn') {
                if (Math.abs(toSquare.row - fromSquare.row) === 2) {
                    movingPiece.pawnLastMoveWasDouble = true;
                }
                else {
                    movingPiece.pawnLastMoveWasDouble = false;
                }
            }
            movingPiece.movedLastTurn = true;
            movingPiece.moves++;
            this.setPiece(toSquare, movingPiece);
            this.deletePiece(fromSquare);
            movingPiece.firstMove = false;
            this.currentPlayer = (this.currentPlayer === Player.WHITE ? Player.BLACK : Player.WHITE);
        }
    }
}
