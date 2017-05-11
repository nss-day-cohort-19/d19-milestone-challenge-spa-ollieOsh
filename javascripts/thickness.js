var Carlot = (function(ogLot) {
	ogLot.thickReset = function(carCards) {
		console.log('thickReset');

		for(var i = 0; i < carCards.length; i++) {
			carCards[i].classList.remove('selected');
		}
	}

	ogLot.thickness = function() {
		console.log('thickness');
		event.currentTarget.classList.add('selected');
	}
	return ogLot;
})(CarLot)