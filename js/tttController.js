angular
	.module('tttApp')
	.controller('tttController', tttController);

tttController.$inject = ['GameBoard','$firebase'];

function tttController(GameBoard,$firebase){
	var self = this;


	this.players = players();

	this.newGameBoard = new GameBoard(this.players);
	this.whoseturnInc=whoseturnInc;




	self.playerNum = 0;
	self.players.numPlayers=0;
	self.players.whoseturn=0;
	console.log(self.players.whoseturn)


	this.players.$loaded(function(){
		self.playerNum = self.players.numPlayers;
		self.players.numPlayers=self.players.numPlayers+1;
		self.players.$save();

		console.log(self.players.whoseturn);

		self.players.$save;



	
	});


	function whoseturnInc(){
		self.players.whoseturn++;
		console.log(self.whoseturn)
		self.players.$save();
	};


	
	function players(){
		var ref = new Firebase("https://tttproject.firebaseIO.com/Players");
		var players = $firebase(ref).$asObject();

		return players;
	}

	
}