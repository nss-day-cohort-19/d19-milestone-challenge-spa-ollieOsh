function populatePage (inventory) {
  // Loop over the inventory and populate the page
	console.log("populating", inventory);

	let main = document.getElementById('main'),
		counter = 1,
		carStr = `<div class="row">`;

	inventory.forEach(function(car, index) {
		let price = Number(car.price).toLocaleString('en-IN', { style: 'currency', currency: 'USD'});

  		carStr +=
	  	`
	  	<div class="card col-sm-4">
		  	<div class="wrapper">
		  		<h2>${car.year} ${car.make} ${car.model}</h2>
		  		<p>${car.description}</>
		  		<h3 class="price">${price}</h3>
	  		</div>
	  	</div>`;

	if (counter % 3 === 0) {
		console.log("third is turd");

		carStr += `
	</div>
	<div class="row">`
	}
	counter++;
	});

  carStr += `
  </div>`;

  main.innerHTML = carStr;
  console.log("populate car", carStr);
  // Now that the DOM is loaded, establish all the event listeners needed
  CarLot.activateEvents();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(populatePage);
console.log(CarLot);
//populatePage(CarLot.getInventory());