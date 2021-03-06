//Lunch Roulette

//TODO, enter locations for restaurants, work on displaying locations,

document.addEventListener("DOMContentLoaded", function(event) {

	var healthyRestaurantsData = [
		{
			"restaurantName":"Chop't",
			"restaurantLocation":"1 New York Plaza New York, NY 10004",
			"phoneNumber":"646-741-9968"
		},
		{
			"restaurantName":"Chipotle",
			"restaurantLocation": "1 New York Plaza New York, NY 10004",
			"phoneNumber": "646-882-3252"
		},		
		{
			"restaurantName":"Water Street Deli",
			"restaurantLocation": "130 Water St New York, NY 10005",
			"phoneNumber": "212-785-1320"
		},	
		{
			"restaurantName":"Open Kitchen",
			"restaurantLocation": "15 William St, New York, NY 10005",
			"phoneNumber": "212-785-5555"
		},
		{
			"restaurantName":"Nu Sushi",
			"restaurantLocation": "76 Pearl St New York, NY 10004",
			"phoneNumber":"212-363-1668"
		},		
		{
			"restaurantName":"GuacStar",
			"restaurantLocation": "66 Pearl St, New York, NY 10004",
			"phoneNumber": "212-425-7171"
		},		
		{
			"restaurantName":"Niko Niko",
			"restaurantLocation": "133 John St, New York, NY 10005",
			"phoneNumber": "212-232-0152"
		}

	]

	var unhealthyRestaurantsData = [
		{
			"restaurantName":"Thai OBAO",
			"restaurantLocation": "38 Water St New York, NY 10004",
			"phoneNumber": "212-361-6311"
		},		
		{
			"restaurantName":"Golden Chopsticks",
			"restaurantLocation": "77 Pearl St #3, New York, NY 10004",
			"phoneNumber": "212-825-0314"
		},				
		{
			"restaurantName":"Schnippers",
			"restaurantLocation": "1 New York Plaza New York, NY 10004",
			"phoneNumber": "646-964-5409"
		},		
		{
			"restaurantName":"Veronica's Kitchen",
			"restaurantLocation": "Front St & Pine St New York, NY 10005",
			"phoneNumber": "917-848-2465"
		},		
		{
			"restaurantName":"Lenny's",
			"restaurantLocation": "32 Water St New York, NY 10004",
			"phoneNumber": "212-785-7500"
		},		
		{
			"restaurantName":"BonChon Chicken",
			"restaurantLocation": "104 John St, New York, NY 10038",
			"phoneNumber": "646-692-4660"
		}

	]

	var wednesdayRestaurants = [
		{
			"restaurantName":"Diso Truck",
			"restaurantLocation": "Old Slip Park",
			"phoneNumber": "917-756-4145"
		}
	]


	var choice;
	var shuffledChoices;

	//CONTROLLER
	Array.prototype.pushArray = function() {
	    this.push.apply(this, this.concat.apply([], arguments));
	};

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
			removeListItems();
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

	function removeListItems() {
		var parentNode = document.getElementById("display-list");
		while (parentNode.firstChild) {
	    parentNode.removeChild(parentNode.firstChild);
		};
	}

	function acquireDay() {
		var day = new Date();
		//getDay() 0 to 6 => Sunday to Saturday
		var newDay = day.getDay();
		return newDay;
	}

	function healthyConditionalRestaurants () {
		var mergedArray = healthyRestaurantsData;
		return mergedArray;
	}

	function unhealthyConditionalRestaurants() {
		if (acquireDay() == 3) {
			var mergedArray = [];
			mergedArray.pushArray(unhealthyRestaurantsData, wednesdayRestaurants);
		}
		else {
			var mergedArray = unhealthyRestaurantsData;
		}
		return mergedArray;
	};

	function chooseRestaurantList() {
		choice = document.getElementById("selection-box").value;
		if (choice == 1) {
			choice = healthyConditionalRestaurants();
			displayRestaurantList(choice);
		}
		else if (choice == 2) {
			choice = unhealthyConditionalRestaurants();
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

	//VIEW

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

	function createHeadline (elementTag, description, dataObj) {
		var headline = document.createElement(elementTag);
		headline.style.fontSize="20px";
		headline.style.textAlign="center";
		headline.innerHTML = description + dataObj;
		document.getElementById("result").appendChild(headline);
	}

	function displayResult(shuffledChoices) {
		var lunchResult = shuffledChoices.pop();
		createHeadline("h2","Your result is: ", lunchResult.restaurantName);
		createHeadline("p","Restaurant location: ", lunchResult.restaurantLocation);
		createHeadline("p","Phone Number: ", lunchResult.phoneNumber);
	};

	onClickHandler();

});
