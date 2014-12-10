angular
	.module('tttApp')
	.factory('GameBoard', GameBoardFunc);

GameBoardFunc.$inject=['$firebase']



function GameBoardFunc($firebase) {

	var GameBoard= function(){


// Pieces will have a property of X or O after a click depending on which turn it is
		
	
		var InitialValues = [
			{value:"", XorO:""},
			{value:"", XorO:""},
			{value:"", XorO:""},
			{value:"", XorO:""},
			{value:"", XorO:""},
			{value:"", XorO:""},
			{value:"", XorO:""},
			{value:"", XorO:""},
			{value:"", XorO:""}
		];

	var ref = new Firebase("https://tttproject.firebaseIO.com/GameBoard");
	this.GameBoardSquares = $firebase(ref).$asArray();

	for (var i = 0; i < InitialValues.length; i++) {
		this.GameBoardSquares.$add(InitialValues[i]);
	};


	var counter = 0;



	this.PutOnBoard = function($index){

		if(this.GameBoardSquares[$index].XorO !== ""){
			return false;	
		}
		

		counter++
		if(counter%2!==0){
			this.GameBoardSquares[$index].XorO="X";
			this.GameBoardSquares.$save($index);
		} else {
			this.GameBoardSquares[$index].XorO="O";
			this.GameBoardSquares.$save($index);
	}


	}


	this.ClearBoard = function(){

		
	for (var i = 0; i < this.GameBoardSquares.length; i++) {
	this.GameBoardSquares.$remove(this.GameBoardSquares[i]);
	};

	for (var i = 0; i < InitialValues.length; i++) {
	this.GameBoardSquares.$add(InitialValues[i]);
	};

	}

}

return GameBoard;

}












