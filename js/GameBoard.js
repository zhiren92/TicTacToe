angular
	.module('tttApp')
	.factory('GameBoard', GameBoardFunc);

GameBoardFunc.$inject=['$firebase']



function GameBoardFunc($firebase) {


	var GameBoard = function(){

		var self = this;

// Pieces will have a property of X or O after a click depending on which turn it is
		
	
		 InitialValues = [
			{XorO:"."},
			{XorO:"."},
			{XorO:"."},
			{XorO:"."},
			{XorO:"."},
			{XorO:"."},
			{XorO:"."},
			{XorO:"."},
			{XorO:"."}
		];

	var ref = new Firebase("https://tttproject.firebaseIO.com/GameBoard");
	self.GameBoardSquares = $firebase(ref).$asArray();
	// for (var i = 0; i < InitialValues.length; i++) {
	// 	this.GameBoardSquares.$add(InitialValues[i]);
	// };



	this.counter = getCounter();
	
	function getCounter(){

		var ref = new Firebase("https://tttproject.firebaseIO.com/Counter");
		var counter = $firebase(ref).$asObject();
		counter.$loaded().then(function(){
			counter.turn=0;
		})
		return counter;
	}


	this.PutOnBoard = function($index){

		if(self.GameBoardSquares[$index].XorO !== "."){
			return false;	
		}
		

		this.counter.turn++;
		this.counter.$save();

		if(this.counter.turn%2!==0){
			self.GameBoardSquares[$index].XorO="X";
			self.GameBoardSquares.$save($index);
		} else {
			self.GameBoardSquares[$index].XorO="O";
			self.GameBoardSquares.$save($index);
	
	}

			WinGame();
	}


	var XorOArray = [] ;


	function WinGame(){
		// console.log(self.GameBoardSquares);
		self.GameBoardSquares.$loaded(function() {

			XorOArray=[];
		for (var i = 0; i < self.GameBoardSquares.length; i++) {
			XorOArray.push(self.GameBoardSquares[i].XorO)

			console.log(XorOArray);


			function ArrToStr(i1, i2, i3, arr) {
			return arr[i1]+arr[i2]+arr[i3];
		}

			
			};
		if (ArrToStr(0,1,2, XorOArray)==="XXX") {
				alert("X WIN")
		};
		if (ArrToStr(3,4,5, XorOArray)==="XXX") {
				alert("X WIN")
		};
		if (ArrToStr(6,7,8, XorOArray)==="XXX") {
				alert("X WIN")
		};
		if (ArrToStr(0,3,6, XorOArray)==="XXX") {
				alert("X WIN")
		};
		if (ArrToStr(1,4,7, XorOArray)==="XXX") {
				alert("X WIN")
		};
		if (ArrToStr(3,5,8, XorOArray)==="XXX") {
				alert("X WIN")
		};
		if (ArrToStr(0,4,8, XorOArray)==="XXX") {
				alert("X WIN")
		};
		if (ArrToStr(2,4,6, XorOArray)==="XXX") {
				alert("X WIN")
		};
		if (ArrToStr(0,1,2, XorOArray)==="OOO") {
				alert("O WIN")
		};
		if (ArrToStr(3,4,5, XorOArray)==="OOO") {
				alert("O WIN")
		};
		if (ArrToStr(6,7,8, XorOArray)==="OOO") {
				alert("O WIN")
		};
		if (ArrToStr(0,3,6, XorOArray)==="OOO") {
				alert("O WIN")
		};
		if (ArrToStr(1,4,7, XorOArray)==="OOO") {
				alert("O WIN")
		};
		if (ArrToStr(3,5,8, XorOArray)==="OOO") {
				alert("O WIN")
		};
		if (ArrToStr(0,4,8, XorOArray)==="OOO") {
				alert("O WIN")
		};
		if (ArrToStr(2,4,6, XorOArray)==="OOO") {
				alert("O WIN")
		};

	})
}		



	


	// 	};
	// // takes all the XorO property of the array and makes a new array of that property.

	// 	

	// 
	// 	};
	
		
	

	
	WinGame();




	this.ClearBoard = function(){

		
	for (var i = 0; i < self.GameBoardSquares.length; i++) {
	  self.GameBoardSquares.$remove(self.GameBoardSquares[i]);
	};

	for (var i = 0; i < InitialValues.length; i++) {
	  self.GameBoardSquares.$add(InitialValues[i]);
	};

	self.counter=0;

	}

}

return GameBoard;

}












