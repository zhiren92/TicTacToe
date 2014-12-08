angular
	.module('tttApp')
	.factory('GameBoard', GameBoardFunc);

function GameBoardFunc() {
// this.Gamepieces=GamePieces


	var GameBoard= function(){

// Pieces will have a property of X or O after a click depending on which turn it is
		this.GameBoardSquares = [
			{name:"1", XorO:""},
			{name:"2", XorO:""},
			{name:"3", XorO:""},
			{name:"4", XorO:""},
			{name:"5", XorO:""},
			{name:"6", XorO:""},
			{name:"7", XorO:""},
			{name:"8", XorO:""},
			{name:"9", XorO:""}
		]


	var PutOnBoard = function(){
			
	}

	var GamePieces=function(){
		this.PieceX=PieceX;
		this.PieceO=PieceO;

		var PieceX = function(){
			return PieceX

		};

		var PieceO = function(){
			return PieceO
		}
	}
}


return GameBoard;

}












