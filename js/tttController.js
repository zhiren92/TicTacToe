angular
	.module('tttApp')
	.controller('tttController', tttController);

tttController.$inject = ['GameBoard','GameManager'];

function tttController(GameBoard,GameManager){
	this.newGameBoard = new GameBoard;
	this.newGameManager = new GameManager;
}