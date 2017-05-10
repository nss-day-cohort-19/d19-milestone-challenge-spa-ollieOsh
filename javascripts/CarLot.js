var CarLot = (function () {
  var inventory = [];

  return {
    loadInventory: function (callback) {
      var inventoryLoader = new XMLHttpRequest();

      inventoryLoader.addEventListener("load", function () {
     		let cars = JSON.parse(this.responseText);
     		inventory = cars.cars;
     		console.log(inventory);
     		callback(CarLot.getInventory());
      });

      inventoryLoader.open('GET', '../inventory.json');
      inventoryLoader.send();
    },
    getInventory: function () {
    	return inventory;
    }
  };

})();