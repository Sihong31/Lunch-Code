//Lunch Roulette

document.addEventListener("DOMContentLoaded", function(event) {

	var healthyRestaurantsData = [
		{
			"restaurantName":"Chop't"
		},
		{
			"restaurantName":"Chipotle"
		},		
		{
			"restaurantName":"Water Street Deli"
		},		
		{
			"restaurantName":"Open Kitchen"
		},		
		{
			"restaurantName":"GuacStar"
		}
	]

	var unhealthyRestaurantsData = [
		{
			"restaurantName":"Thai (Bao Restaurant)"
		},		
		{
			"restaurantName":"Chinese Buffet"
		},		
		{
			"restaurantName":"Sushi"
		},		
		{
			"restaurantName":"Schnippers"
		},		
		{
			"restaurantName":"Jamaican"
		},		
		{
			"restaurantName":"Lenny's"
		},		
		{
			"restaurantName":"Burger King"
		}
	]

	var choice;
	var shuffledChoices;

	function initialize() {
		chooseRestaurantList();
		shuffleRestaurants(choice);
		displayResult(shuffledChoices);
	};

	function onClickHandler() {

		var initializeButton = document.getElementById("initialize");
		initializeButton.addEventListener("click", function(event) {
			var existingResult = document.getElementById("result");
			existingResult.innerHTML = "";
			removeListItem();
			initialize();
		});

		var resetButton = document.getElementById("reset");
		resetButton.addEventListener("click", function(event){
			pageReload();
		});

	};

	function pageReload() {
		document.location.reload(true);
	}

	function removeListItem() {
		var parentNode = document.getElementById("display-list");
		while (parentNode.firstChild) {
	    parentNode.removeChild(parentNode.firstChild);
		};
	}

	function displayRestaurantList(data) {

		var headline = document.getElementById("headline");
		headline.innerHTML = "This is your restaurant list:";

		for (var i = 0; i < data.length; i++) {
      if ( data[i].hasOwnProperty("restaurantName") ) {
	      var displayList = document.getElementById("display-list");
				var listItem = document.createElement('li');
				displayList.appendChild(listItem);
				document.getElementsByTagName("li")[i].innerHTML = data[i].restaurantName;
       }
    }

	};

	function chooseRestaurantList() {
		choice = document.getElementById("selection-box").value;
		if (choice == 1) {
			choice = healthyRestaurantsData;
			displayRestaurantList(choice);
		}
		else if( choice == 2) {
			choice = unhealthyRestaurantsData;
			displayRestaurantList(choice);
		}
		else {
			alert("That is an incorrect choice, please try again");
		}
		return choice;
	};

	function shuffleRestaurants(data) {
	  var currentIndex = data.length, temporaryValue, randomIndex;

	  while (0 !== currentIndex) {

	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;

	    temporaryValue = data[currentIndex];
	    data[currentIndex] = data[randomIndex];
	    data[randomIndex] = temporaryValue;
	  };

	  shuffledChoices = data;
	  return shuffledChoices;
	};

	function displayResult(shuffledChoices) {
		var lunchResult = shuffledChoices.pop();
		var p = document.createElement("p");
		p.style.fontSize="30px";
		p.style.textAlign="center";
		p.innerHTML = "Your result is: " + lunchResult.restaurantName;
		document.getElementById("result").appendChild(p);
	};

	onClickHandler();

});