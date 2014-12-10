angular
	.module('tttApp')
	.controller('tttController', tttController);

tttController.$inject = ['GameBoard','GameManager','$firebase'];

function tttController(GameBoard,GameManager,$firebase){
	this.newGameBoard = new GameBoard();
	// this.newGameManager = new GameManager;

	
}