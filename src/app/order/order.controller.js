'use strict';

angular.module('skedaddle')

.config(function (RestangularProvider) {

    RestangularProvider.setDefaultHeaders({
        "Content-Type": "application/json"
    })
    RestangularProvider.setBaseUrl('https://www.googleapis.com/qpxExpress/v1/')


    RestangularProvider.setDefaultRequestParams({
        key: 'AIzaSyCR6G5517GCv0MKX5Z8wjetXS4NchVfDHI'
    })
})

.controller('OrderCtrl', function (Restangular, geo) {

    var self = this;
    var data;
    this.APIrequests = {};
    this.location_icons = [
        {
            city: 'Miami',
            city_code: 'MIA',
            airport: 'MIA',
            loc_icon: 'assets/images/island.png',
            num: '0'
            },
        {
            city: 'Denver',
            city_code: 'DEN',
            airport: 'DEN',
            loc_icon: 'assets/images/mountain13.png',
            num: '1'
            },
        {
            city: 'Charleston',
            city_code: 'CHS',
            airport: 'CHS',
            loc_icon: 'assets/images/hearts13.png',
            num: '2'
            },
        {
            city: 'Orlando',
            city_code: 'ORL',
            airport: 'MCO',
            loc_icon: 'assets/images/theme-park.png',
            num: '3'
            },
        {
            city: 'New York City',
            city_code: 'NYC',
            airport: 'JFK',
            loc_icon: 'assets/images/bag.png',
            num: '4'
            },
        {
            city: 'Las Vegas',
            city_code: 'LAS',
            airport: 'LAS',
            loc_icon: 'assets/images/poker4.png',
            num: '5'
            }
        ];
    this.trips = {};

    //array of maxbudget values
    this.singleBudget = ["300", "400", "500", "600", "700", "800"];

    //array of romantic maxbudget values
    this.romanticBudget = ["600", "800", "1000", "1200", "1400", "1600"];

    var theTheme = "";
    var theBudget = '';
    var maxBudget;

    //Object that holds selections entered into search object
    this.selections = {}

    //selection of origin
    this.selections.finalOrigin = 'MCO';

    //selection of adult passengers
    this.selections.adultCount = 1;

    //creates todays date
    var nowMS = Date.now()

    //number of milliseconds(ms) in one day
    var oneDayMS = 1000 * 60 * 60 * 24;

    //adds one day of ms to todays value to get departure value...tommorrow
    var departureDayMS = oneDayMS + nowMS;

    //creates departure date for selection object
    var departureDay = new Date(departureDayMS);
    var monthD = departureDay.getMonth() + 1;
    var dayD = departureDay.getDate();
    var submitFinalDepartureDay = departureDay.getFullYear() + '-' +
        (monthD < 10 ? '0' : '') + monthD + '-' +
        (dayD < 10 ? '0' : '') + dayD;
    this.selections.finalDepartureDate = submitFinalDepartureDay;

    //adds 3 days of ms to todays value to get return value...3 days from now
    var returnDayMS = nowMS + (3 * oneDayMS)

    //creates return date for selection object
    var returnDay = new Date(returnDayMS);
    var monthR = returnDay.getMonth() + 1;
    var dayR = returnDay.getDate();
    var submitFinalReturnDay = returnDay.getFullYear() + '-' +
        (monthR < 10 ? '0' : '') + monthR + '-' +
        (dayR < 10 ? '0' : '') + dayR;
    this.selections.finalReturnDate = submitFinalReturnDay;



    //button Selection and object
    this.getTheme = function () {
        //assigns the choosen theme to the selection object
        this.selections.finalDestination = theTheme.city_code;
        if (theTheme.city_code == 'CHS') {
            //changes number of adults to 2 if the customer chooses a romantic trip
            this.selections.adultCount = 2;
        }
        return theTheme;
    }

    //assigns the selectedTheme this model
    this.selectTheme = function (selectedTheme) {
        theTheme = selectedTheme;
    }

    //recieves the selected maxbudget
    this.getBudget = function () {
        console.log(theBudget + " = this.getBudget");
        //assigns the selected maxbudget to the selection object
        this.selections.finalMaxBudget = "USD" + theBudget;
        return theBudget;
    }

    //assigns the selcted budget to this model
    this.selectBudget = function (selectedBudget) {
        theBudget = selectedBudget;
    }

    //on ngclick this model will assign the my selctions object to the request object body and then make the restangular call to the api
    this.apiCall = function (mySelections) {

        console.log(mySelections);
        //the request object
        this.findSkedaddle = {
            "request": {
                "slice": [
                    {
                        "origin": mySelections.finalOrigin,
                        "destination": mySelections.finalDestination,
                        "date": mySelections.finalDepartureDate,
                        "maxStops": 0
                              },
                    {
                        "origin": mySelections.finalDestination,
                        "destination": mySelections.finalOrigin,
                        "date": mySelections.finalReturnDate,
                        "maxStops": 0
                              }
                            ],
                "passengers": {
                    "adultCount": mySelections.adultCount,
                    "infantInLapCount": 0,
                    "infantInSeatCount": 0,
                    "childCount": 0,
                    "seniorCount": 0
                },
                "solutions": 5,
                "maxPrice": mySelections.finalMaxBudget,
                "refundable": false
            }
        }
        console.log(this.findSkedaddle);

        Restangular.one('trips').post('search', this.findSkedaddle)
            .then(function (data) {
                console.log(data);

                self.trips = data.trips;

                if (self.trips.tripOption === undefined) {
                    console.log("NO DATA RETURNED");
                    return alert("Please try another search there are no flights avalible");
                } else {
                    console.log(self.trips);
                    return self.trips
                };
            });
        console.log(this.findSkedaddle);
    }

    //assigns the starting view in order.html to search
    this.view = 'search';

    //gets the current view in order.html
    this.getView = function () {
        return this.view;
    }

    //sets the view in order.html
    this.setView = function (selectedView) {
        this.view = selectedView;
    }

    //makes burger-bar menu close when clicked on (mobile only)  
    $(function () {
        var navMain = $("#burger-bar");

        navMain.on("click", "a", null, function () {
            navMain.collapse('hide');
        });
    });


});