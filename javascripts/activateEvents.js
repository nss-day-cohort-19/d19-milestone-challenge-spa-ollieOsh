var Carlot = (function(ogLot) {
	ogLot.activateEvents = function(){
		console.log("activateEvents");
		let carCards = document.getElementsByClassName('card');

		console.log(carCards);

		for(var i = 0; i < carCards.length; i++) {
			carCards[i].addEventListener('click', function(event) {
				CarLot.thickReset(carCards);
				CarLot.thickness(event.currentTarget, 'lightgray');
			})
		}
	}
	return ogLot;
})(CarLot)