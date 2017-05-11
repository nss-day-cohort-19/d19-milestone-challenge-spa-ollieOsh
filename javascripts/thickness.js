var Carlot = (function(ogLot) {
	ogLot.thickReset = function(carCards) {
		console.log('thickReset');

		for(var i = 0; i < carCards.length; i++) {
			carCards[i].classList.remove('selected');
		}
	}

	ogLot.thickness = function() {
		console.log('thickness');

		let car = event.currentTarget;

		car.classList.add('selected');

		let input = document.getElementById('input');

		input.value = '';
		input.focus();
		input.addEventListener('keyup', function() {
			if(car.classList.contains('selected')) {
				car.childNodes[1].childNodes[3].innerHTML = input.value;
			}

		})
	}
	return ogLot;
})(CarLot)