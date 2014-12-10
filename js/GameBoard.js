angular
	.module('tttApp')
	.factory('GameBoard', GameBoardFunc);

GameBoardFunc.$inject=['$firebase']



function GameBoardFunc($firebase) {


	var GameBoard= function(){


// Pieces will have a property of X or O after a click depending on which turn it is
		
	
		var InitialValues = [
			{name:"1", XorO:""},
			{name:"2", XorO:""},
			{name:"3", XorO:""},
			{name:"4", XorO:""},
			{name:"5", XorO:""},
			{name:"6", XorO:""},
			{name:"7", XorO:""},
			{name:"8", XorO:""},
			{name:"9", XorO:""}
		];

	var ref = new Firebase("https://tttproject.firebaseIO.com/GameBoard");
	this.GameBoardSquares = $firebase(ref).$asArray();

	// for (var i = 0; i < InitialValues.length; i++) {
	// 	this.GameBoardSquares.$add(InitialValues[i]);
	// };






	this.PutOnBoard = function($index){
		this.GameBoardSquares[$index].XorO="X";
		this.GameBoardSquares.$save($index);
	}


	this.ClearBoard = function($index){

		alert("work")
		// this.GameBoardSquares[$index].XorO="";
		
		this.GameBoardSquares[$index].XorO="O";
		this.GameBoardSquares.$save();

	}

}

return GameBoard;

}












