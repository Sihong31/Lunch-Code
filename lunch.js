//Lunch Roulette

document.addEventListener("DOMContentLoaded", function(event) {

console.log("hello");
	var healthyRestaurantsArray = [
		"Chop't",
		"Chipotle",
		"Water Street Deli",
		"Open Kitchen",
		"GuacStar", 
	]

	var unhealthyRestaurantsArray = [
		"Thai (Bao Restaurant)",
		"Chinese Buffet",
		"Sushi",
		"Schnippers", 
		"Jamaican", 
		"Lenny's", 
		"Burger King",
	]

	var choice;
	var shuffledChoices;

	function initialize() {
		chooseRestaurantList();
		shuffleRestaurants(choice);
		decideLunch(shuffledChoices);
	}

	function displayArray(array) {
		for (var i = 0; i < array.length; i++) {
			var display = document.getElementsByClassName("display")[0];
			var p = document.createElement('p');
			display.appendChild(p);
			document.getElementsByTagName("p")[i].innerHTML = i + 1 + ". " + array[i];
		};
	};

	function chooseRestaurantList() {
		choice = prompt("Enter 1 for healthy choices, 2 for unhealthy choices");
		if (choice == 1) {
			choice = healthyRestaurantsArray;
			console.log("This is your restaurant list:");
			displayArray(choice);
		}
		else if( choice == 2) {
			choice = unhealthyRestaurantsArray;
			console.log("This is your restaurant list:");
			displayArray(choice);
		}
		else {
			alert("That is an incorrect choice, please try again");
		}

		return choice;
	}

	function removeRestaurants() {

	};

	function shuffleRestaurants(array) {
	  var currentIndex = array.length, temporaryValue, randomIndex;

	  while (0 !== currentIndex) {

	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;

	    temporaryValue = array[currentIndex];
	    array[currentIndex] = array[randomIndex];
	    array[randomIndex] = temporaryValue;
	  };

	  shuffledChoices = array;
	  return shuffledChoices;
	};

	function decideLunch(shuffledChoices) {
		var lunchResult = shuffledChoices.pop();
		var p = document.createElement("p");
		p.style.fontSize="30px";
		p.style.textAlign="center";
		p.innerHTML = "Your result is: " + lunchResult;
		document.getElementById("result").appendChild(p);
	}

	initialize();

});