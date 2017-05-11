var Carlot = (function(ogLot) {
	ogLot.activateEvents = function(){
		console.log("activateEvents");
		let carCards = document.getElementsByClassName('card');

		console.log(carCards);
	}
	return ogLot;
})(CarLot)