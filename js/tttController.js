angular
	.module('tttApp')
	.controller('tttController', tttController);

tttController.$inject = ['GameBoard','$firebase'];

function tttController(GameBoard,$firebase){
	this.newGameBoard = new GameBoard();
	
	
}