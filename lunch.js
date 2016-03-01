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
		decideLunch(shuffledChoices);
	}

	function clickHandler() {
		var initializeButton = document.getElementById("initialize");
		initializeButton.addEventListener("click", function(event) {
			console.log("hello")
			// event.preventDefault();
			initialize();
		})
	}

	function displayData(data) {

		var headline = document.getElementById("headline");
		headline.innerHTML = "This is your restaurant list:";
		for (var i = 0; i < data.length; i++) {
      if ( data[i].hasOwnProperty("restaurantName") ) {
	      var display = document.getElementsByClassName("display")[0];
				var p = document.createElement('p');
				display.appendChild(p);
				document.getElementsByTagName("p")[i].innerHTML = i + 1 + ". " + data[i].restaurantName;
       }
    }

	};

	function chooseRestaurantList() {
		choice = document.getElementById("selection-box").value;
		if (choice == 1) {
			choice = healthyRestaurantsData;
			displayData(choice);
		}
		else if( choice == 2) {
			choice = unhealthyRestaurantsData;
			displayData(choice);
		}
		else {
			alert("That is an incorrect choice, please try again");
		}

		return choice;
	}

	function removeRestaurants() {

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

	function decideLunch(shuffledChoices) {
		var lunchResult = shuffledChoices.pop();
		var p = document.createElement("p");
		p.style.fontSize="30px";
		p.style.textAlign="center";
		p.innerHTML = "Your result is: " + lunchResult.restaurantName;
		document.getElementById("result").appendChild(p);
	}

	clickHandler();
	
});