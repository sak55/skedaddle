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
            loc_icon: '../../assets/images/island.png',
            num: '0'
            },
        {
            city: 'Denver',
            city_code: 'DEN',
            airport: 'DEN',
            loc_icon: '../../assets/images/mountain13.png',
            num: '1'
            },
        {
            city: 'Charleston',
            city_code: 'CHS',
            airport: 'CHS',
            loc_icon: '../../assets/images/hearts13.png',
            num: '2'
            },
        {
            city: 'Orlando',
            city_code: 'ORL',
            airport: 'MCO',
            loc_icon: '../../assets/images/theme-park.png',
            num: '3'
            },
        {
            city: 'New York City',
            city_code: 'NYC',
            airport: 'JFK',
            loc_icon: '../../assets/images/bag.png',
            num: '4'
            },
        {
            city: 'Las Vegas',
            city_code: 'LAS',
            airport: 'LAS',
            loc_icon: '../../assets/images/poker4.png',
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



    //object PREPOULATED DATA

    //    var data = {
    //        "kind": "qpxExpress#tripsSearch",
    //        "trips": {
    //            "kind": "qpxexpress#tripOptions",
    //            "requestId": "52oYiFNRLzKxZeyjB0LlXK",
    //            "data": {
    //                "kind": "qpxexpress#data",
    //                "airport": [
    //                    {
    //                        "kind": "qpxexpress#airportData",
    //                        "code": "JFK",
    //                        "city": "NYC",
    //                        "name": "New York John F Kennedy International"
    //                },
    //                    {
    //                        "kind": "qpxexpress#airportData",
    //                        "code": "LGA",
    //                        "city": "NYC",
    //                        "name": "New York La Guardia"
    //                },
    //                    {
    //                        "kind": "qpxexpress#airportData",
    //                        "code": "MCO",
    //                        "city": "ORL",
    //                        "name": "Orlando International"
    //                }
    //               ],
    //                "city": [
    //                    {
    //                        "kind": "qpxexpress#cityData",
    //                        "code": "NYC",
    //                        "name": "New York"
    //                },
    //                    {
    //                        "kind": "qpxexpress#cityData",
    //                        "code": "ORL",
    //                        "name": "Orlando"
    //                }
    //               ],
    //                "aircraft": [
    //                    {
    //                        "kind": "qpxexpress#aircraftData",
    //                        "code": "320",
    //                        "name": "Airbus A320"
    //                },
    //                    {
    //                        "kind": "qpxexpress#aircraftData",
    //                        "code": "738",
    //                        "name": "Boeing 737"
    //                }
    //               ],
    //                "tax": [
    //                    {
    //                        "kind": "qpxexpress#taxData",
    //                        "id": "ZP",
    //                        "name": "US Flight Segment Tax"
    //                },
    //                    {
    //                        "kind": "qpxexpress#taxData",
    //                        "id": "XF",
    //                        "name": "US Passenger Facility Charge"
    //                },
    //                    {
    //                        "kind": "qpxexpress#taxData",
    //                        "id": "US_001",
    //                        "name": "US Transportation Tax"
    //                },
    //                    {
    //                        "kind": "qpxexpress#taxData",
    //                        "id": "AY_001",
    //                        "name": "US September 11th Security Fee"
    //                }
    //               ],
    //                "carrier": [
    //                    {
    //                        "kind": "qpxexpress#carrierData",
    //                        "code": "B6",
    //                        "name": "Jetblue Airways Corporation"
    //                },
    //                    {
    //                        "kind": "qpxexpress#carrierData",
    //                        "code": "US",
    //                        "name": "US Airways, Inc."
    //                }
    //               ]
    //            },
    //            "tripOption": [
    //                {
    //                    "kind": "qpxexpress#tripOption",
    //                    "saleTotal": "USD275.20",
    //                    "id": "22B2uraTzK6SMB7h6cuJX6001",
    //                    "slice": [
    //                        {
    //                            "kind": "qpxexpress#sliceInfo",
    //                            "duration": 158,
    //                            "segment": [
    //                                {
    //                                    "kind": "qpxexpress#segmentInfo",
    //                                    "duration": 158,
    //                                    "flight": {
    //                                        "carrier": "US",
    //                                        "number": "2445"
    //                                    },
    //                                    "id": "GkwdOCbqcpOCSxJm",
    //                                    "cabin": "COACH",
    //                                    "bookingCode": "S",
    //                                    "bookingCodeCount": 2,
    //                                    "marriedSegmentGroup": "0",
    //                                    "leg": [
    //                                        {
    //                                            "kind": "qpxexpress#legInfo",
    //                                            "id": "LnjVQPjNYJCws4bN",
    //                                            "aircraft": "738",
    //                                            "arrivalTime": "2015-04-20T13:58-04:00",
    //                                            "departureTime": "2015-04-20T11:20-04:00",
    //                                            "origin": "MCO",
    //                                            "destination": "JFK",
    //                                            "destinationTerminal": "8",
    //                                            "duration": 158,
    //                                            "operatingDisclosure": "OPERATED BY AMERICAN AIRLINES INC.",
    //                                            "onTimePerformance": 68,
    //                                            "mileage": 944,
    //                                            "meal": "Food for Purchase",
    //                                            "secure": true
    //                     }
    //                    ]
    //                   }
    //                  ]
    //                 },
    //                        {
    //                            "kind": "qpxexpress#sliceInfo",
    //                            "duration": 168,
    //                            "segment": [
    //                                {
    //                                    "kind": "qpxexpress#segmentInfo",
    //                                    "duration": 168,
    //                                    "flight": {
    //                                        "carrier": "US",
    //                                        "number": "2285"
    //                                    },
    //                                    "id": "Go8k39Kb-MYepEkG",
    //                                    "cabin": "COACH",
    //                                    "bookingCode": "Q",
    //                                    "bookingCodeCount": 7,
    //                                    "marriedSegmentGroup": "1",
    //                                    "leg": [
    //                                        {
    //                                            "kind": "qpxexpress#legInfo",
    //                                            "id": "L9rdKESpuO8q7-YL",
    //                                            "aircraft": "738",
    //                                            "arrivalTime": "2015-04-23T16:47-04:00",
    //                                            "departureTime": "2015-04-23T13:59-04:00",
    //                                            "origin": "JFK",
    //                                            "destination": "MCO",
    //                                            "originTerminal": "8",
    //                                            "duration": 168,
    //                                            "operatingDisclosure": "OPERATED BY AMERICAN AIRLINES INC.",
    //                                            "mileage": 944,
    //                                            "meal": "Food for Purchase",
    //                                            "secure": true
    //                     }
    //                    ]
    //                   }
    //                  ]
    //                 }
    //                ],
    //                    "pricing": [
    //                        {
    //                            "kind": "qpxexpress#pricingInfo",
    //                            "fare": [
    //                                {
    //                                    "kind": "qpxexpress#fareInfo",
    //                                    "id": "A1HT90QVqgb0n4Ot3I/1afHNvBcgpOH55WTIBkEhbVfA",
    //                                    "carrier": "US",
    //                                    "origin": "ORL",
    //                                    "destination": "NYC",
    //                                    "basisCode": "SA14ZNJ3"
    //                   },
    //                                {
    //                                    "kind": "qpxexpress#fareInfo",
    //                                    "id": "Am4n6laic8oa7p6ypeJILgxC1rionHyecsVqDVC6LzXM",
    //                                    "carrier": "US",
    //                                    "origin": "NYC",
    //                                    "destination": "ORL",
    //                                    "basisCode": "QA21ISH3"
    //                   }
    //                  ],
    //                            "segmentPricing": [
    //                                {
    //                                    "kind": "qpxexpress#segmentPricing",
    //                                    "fareId": "Am4n6laic8oa7p6ypeJILgxC1rionHyecsVqDVC6LzXM",
    //                                    "segmentId": "Go8k39Kb-MYepEkG",
    //                                    "freeBaggageOption": [
    //                                        {
    //                                            "kind": "qpxexpress#freeBaggageAllowance",
    //                                            "bagDescriptor": [
    //                                                {
    //                                                    "kind": "qpxexpress#bagDescriptor",
    //                                                    "commercialName": "ASSISTIVE DEVICES",
    //                                                    "count": 0,
    //                                                    "subcode": "0GM"
    //                       },
    //                                                {
    //                                                    "kind": "qpxexpress#bagDescriptor",
    //                                                    "commercialName": "INFANT CAR SEAT",
    //                                                    "count": 0,
    //                                                    "description": [
    //                         "Infant Car Seat"
    //                        ],
    //                                                    "subcode": "0G5"
    //                       },
    //                                                {
    //                                                    "kind": "qpxexpress#bagDescriptor",
    //                                                    "commercialName": "STROLLER OR PUSHCHAIR",
    //                                                    "count": 0,
    //                                                    "description": [
    //                         "Stroller/Pushchair"
    //                        ],
    //                                                    "subcode": "0F4"
    //                       }
    //                      ],
    //                                            "pieces": 0
    //                     }
    //                    ]
    //                   },
    //                                {
    //                                    "kind": "qpxexpress#segmentPricing",
    //                                    "fareId": "A1HT90QVqgb0n4Ot3I/1afHNvBcgpOH55WTIBkEhbVfA",
    //                                    "segmentId": "GkwdOCbqcpOCSxJm",
    //                                    "freeBaggageOption": [
    //                                        {
    //                                            "kind": "qpxexpress#freeBaggageAllowance",
    //                                            "bagDescriptor": [
    //                                                {
    //                                                    "kind": "qpxexpress#bagDescriptor",
    //                                                    "commercialName": "ASSISTIVE DEVICES",
    //                                                    "count": 0,
    //                                                    "subcode": "0GM"
    //                       },
    //                                                {
    //                                                    "kind": "qpxexpress#bagDescriptor",
    //                                                    "commercialName": "INFANT CAR SEAT",
    //                                                    "count": 0,
    //                                                    "description": [
    //                         "Infant Car Seat"
    //                        ],
    //                                                    "subcode": "0G5"
    //                       },
    //                                                {
    //                                                    "kind": "qpxexpress#bagDescriptor",
    //                                                    "commercialName": "STROLLER OR PUSHCHAIR",
    //                                                    "count": 0,
    //                                                    "description": [
    //                         "Stroller/Pushchair"
    //                        ],
    //                                                    "subcode": "0F4"
    //                       }
    //                      ],
    //                                            "pieces": 0
    //                     }
    //                    ]
    //                   }
    //                  ],
    //                            "baseFareTotal": "USD229.77",
    //                            "saleFareTotal": "USD229.77",
    //                            "saleTaxTotal": "USD45.43",
    //                            "saleTotal": "USD275.20",
    //                            "passengers": {
    //                                "kind": "qpxexpress#passengerCounts",
    //                                "adultCount": 1
    //                            },
    //                            "tax": [
    //                                {
    //                                    "kind": "qpxexpress#taxInfo",
    //                                    "id": "US_001",
    //                                    "chargeType": "GOVERNMENT",
    //                                    "code": "US",
    //                                    "country": "US",
    //                                    "salePrice": "USD17.23"
    //                   },
    //                                {
    //                                    "kind": "qpxexpress#taxInfo",
    //                                    "id": "AY_001",
    //                                    "chargeType": "GOVERNMENT",
    //                                    "code": "AY",
    //                                    "country": "US",
    //                                    "salePrice": "USD11.20"
    //                   },
    //                                {
    //                                    "kind": "qpxexpress#taxInfo",
    //                                    "id": "XF",
    //                                    "chargeType": "GOVERNMENT",
    //                                    "code": "XF",
    //                                    "country": "US",
    //                                    "salePrice": "USD9.00"
    //                   },
    //                                {
    //                                    "kind": "qpxexpress#taxInfo",
    //                                    "id": "ZP",
    //                                    "chargeType": "GOVERNMENT",
    //                                    "code": "ZP",
    //                                    "country": "US",
    //                                    "salePrice": "USD8.00"
    //                   }
    //                  ],
    //                            "fareCalculation": "ORL US JFK 142.33SA14ZNJ3 US ORL 87.44QA21ISH3 USD 229.77 END ZP MCO JFK XT 17.23US 8.00ZP 11.20AY 9.00XF MCO4.50 JFK4.50",
    //                            "latestTicketingTime": "2015-03-17T23:59-04:00",
    //                            "ptc": "ADT"
    //                 }
    //                ]
    //               },
    //                {
    //                    "kind": "qpxexpress#tripOption",
    //                    "saleTotal": "USD275.20",
    //                    "id": "22B2uraTzK6SMB7h6cuJX6002",
    //                    "slice": [
    //                        {
    //                            "kind": "qpxexpress#sliceInfo",
    //                            "duration": 164,
    //                            "segment": [
    //                                {
    //                                    "kind": "qpxexpress#segmentInfo",
    //                                    "duration": 164,
    //                                    "flight": {
    //                                        "carrier": "US",
    //                                        "number": "2285"
    //                                    },
    //                                    "id": "GnVF6YddkA1tXNAx",
    //                                    "cabin": "COACH",
    //                                    "bookingCode": "S",
    //                                    "bookingCodeCount": 7,
    //                                    "marriedSegmentGroup": "0",
    //                                    "leg": [
    //                                        {
    //                                            "kind": "qpxexpress#legInfo",
    //                                            "id": "LobK8+AOxGaKyaLD",
    //                                            "aircraft": "738",
    //                                            "arrivalTime": "2015-04-20T21:04-04:00",
    //                                            "departureTime": "2015-04-20T18:20-04:00",
    //                                            "origin": "MCO",
    //                                            "destination": "JFK",
    //                                            "destinationTerminal": "8",
    //                                            "duration": 164,
    //                                            "operatingDisclosure": "OPERATED BY AMERICAN AIRLINES INC.",
    //                                            "mileage": 944,
    //                                            "meal": "Food for Purchase",
    //                                            "secure": true
    //                     }
    //                    ]
    //                   }
    //                  ]
    //                 },
    //                        {
    //                            "kind": "qpxexpress#sliceInfo",
    //                            "duration": 168,
    //                            "segment": [
    //                                {
    //                                    "kind": "qpxexpress#segmentInfo",
    //                                    "duration": 168,
    //                                    "flight": {
    //                                        "carrier": "US",
    //                                        "number": "2285"
    //                                    },
    //                                    "id": "Go8k39Kb-MYepEkG",
    //                                    "cabin": "COACH",
    //                                    "bookingCode": "Q",
    //                                    "bookingCodeCount": 7,
    //                                    "marriedSegmentGroup": "1",
    //                                    "leg": [
    //                                        {
    //                                            "kind": "qpxexpress#legInfo",
    //                                            "id": "L9rdKESpuO8q7-YL",
    //                                            "aircraft": "738",
    //                                            "arrivalTime": "2015-04-23T16:47-04:00",
    //                                            "departureTime": "2015-04-23T13:59-04:00",
    //                                            "origin": "JFK",
    //                                            "destination": "MCO",
    //                                            "originTerminal": "8",
    //                                            "duration": 168,
    //                                            "operatingDisclosure": "OPERATED BY AMERICAN AIRLINES INC.",
    //                                            "mileage": 944,
    //                                            "meal": "Food for Purchase",
    //                                            "secure": true
    //                     }
    //                    ]
    //                   }
    //                  ]
    //                 }
    //                ],
    //                    "pricing": [
    //                        {
    //                            "kind": "qpxexpress#pricingInfo",
    //                            "fare": [
    //                                {
    //                                    "kind": "qpxexpress#fareInfo",
    //                                    "id": "A1HT90QVqgb0n4Ot3I/1afHNvBcgpOH55WTIBkEhbVfA",
    //                                    "carrier": "US",
    //                                    "origin": "ORL",
    //                                    "destination": "NYC",
    //                                    "basisCode": "SA14ZNJ3"
    //                   },
    //                                {
    //                                    "kind": "qpxexpress#fareInfo",
    //                                    "id": "Am4n6laic8oa7p6ypeJILgxC1rionHyecsVqDVC6LzXM",
    //                                    "carrier": "US",
    //                                    "origin": "NYC",
    //                                    "destination": "ORL",
    //                                    "basisCode": "QA21ISH3"
    //                   }
    //                  ],
    //                            "segmentPricing": [
    //                                {
    //                                    "kind": "qpxexpress#segmentPricing",
    //                                    "fareId": "A1HT90QVqgb0n4Ot3I/1afHNvBcgpOH55WTIBkEhbVfA",
    //                                    "segmentId": "GnVF6YddkA1tXNAx",
    //                                    "freeBaggageOption": [
    //                                        {
    //                                            "kind": "qpxexpress#freeBaggageAllowance",
    //                                            "bagDescriptor": [
    //                                                {
    //                                                    "kind": "qpxexpress#bagDescriptor",
    //                                                    "commercialName": "ASSISTIVE DEVICES",
    //                                                    "count": 0,
    //                                                    "subcode": "0GM"
    //                       },
    //                                                {
    //                                                    "kind": "qpxexpress#bagDescriptor",
    //                                                    "commercialName": "INFANT CAR SEAT",
    //                                                    "count": 0,
    //                                                    "description": [
    //                         "Infant Car Seat"
    //                        ],
    //                                                    "subcode": "0G5"
    //                       },
    //                                                {
    //                                                    "kind": "qpxexpress#bagDescriptor",
    //                                                    "commercialName": "STROLLER OR PUSHCHAIR",
    //                                                    "count": 0,
    //                                                    "description": [
    //                         "Stroller/Pushchair"
    //                        ],
    //                                                    "subcode": "0F4"
    //                       }
    //                      ],
    //                                            "pieces": 0
    //                     }
    //                    ]
    //                   },
    //                                {
    //                                    "kind": "qpxexpress#segmentPricing",
    //                                    "fareId": "Am4n6laic8oa7p6ypeJILgxC1rionHyecsVqDVC6LzXM",
    //                                    "segmentId": "Go8k39Kb-MYepEkG",
    //                                    "freeBaggageOption": [
    //                                        {
    //                                            "kind": "qpxexpress#freeBaggageAllowance",
    //                                            "bagDescriptor": [
    //                                                {
    //                                                    "kind": "qpxexpress#bagDescriptor",
    //                                                    "commercialName": "ASSISTIVE DEVICES",
    //                                                    "count": 0,
    //                                                    "subcode": "0GM"
    //                       },
    //                                                {
    //                                                    "kind": "qpxexpress#bagDescriptor",
    //                                                    "commercialName": "INFANT CAR SEAT",
    //                                                    "count": 0,
    //                                                    "description": [
    //                         "Infant Car Seat"
    //                        ],
    //                                                    "subcode": "0G5"
    //                       },
    //                                                {
    //                                                    "kind": "qpxexpress#bagDescriptor",
    //                                                    "commercialName": "STROLLER OR PUSHCHAIR",
    //                                                    "count": 0,
    //                                                    "description": [
    //                         "Stroller/Pushchair"
    //                        ],
    //                                                    "subcode": "0F4"
    //                       }
    //                      ],
    //                                            "pieces": 0
    //                     }
    //                    ]
    //                   }
    //                  ],
    //                            "baseFareTotal": "USD229.77",
    //                            "saleFareTotal": "USD229.77",
    //                            "saleTaxTotal": "USD45.43",
    //                            "saleTotal": "USD275.20",
    //                            "passengers": {
    //                                "kind": "qpxexpress#passengerCounts",
    //                                "adultCount": 1
    //                            },
    //                            "tax": [
    //                                {
    //                                    "kind": "qpxexpress#taxInfo",
    //                                    "id": "US_001",
    //                                    "chargeType": "GOVERNMENT",
    //                                    "code": "US",
    //                                    "country": "US",
    //                                    "salePrice": "USD17.23"
    //                   },
    //                                {
    //                                    "kind": "qpxexpress#taxInfo",
    //                                    "id": "AY_001",
    //                                    "chargeType": "GOVERNMENT",
    //                                    "code": "AY",
    //                                    "country": "US",
    //                                    "salePrice": "USD11.20"
    //                   },
    //                                {
    //                                    "kind": "qpxexpress#taxInfo",
    //                                    "id": "XF",
    //                                    "chargeType": "GOVERNMENT",
    //                                    "code": "XF",
    //                                    "country": "US",
    //                                    "salePrice": "USD9.00"
    //                   },
    //                                {
    //                                    "kind": "qpxexpress#taxInfo",
    //                                    "id": "ZP",
    //                                    "chargeType": "GOVERNMENT",
    //                                    "code": "ZP",
    //                                    "country": "US",
    //                                    "salePrice": "USD8.00"
    //                   }
    //                  ],
    //                            "fareCalculation": "ORL US JFK 142.33SA14ZNJ3 US ORL 87.44QA21ISH3 USD 229.77 END ZP MCO JFK XT 17.23US 8.00ZP 11.20AY 9.00XF MCO4.50 JFK4.50",
    //                            "latestTicketingTime": "2015-03-17T23:59-04:00",
    //                            "ptc": "ADT"
    //                 }
    //                ]
    //               },
    //                {
    //                    "kind": "qpxexpress#tripOption",
    //                    "saleTotal": "USD300.20",
    //                    "id": "22B2uraTzK6SMB7h6cuJX6003",
    //                    "slice": [
    //                        {
    //                            "kind": "qpxexpress#sliceInfo",
    //                            "duration": 160,
    //                            "segment": [
    //                                {
    //                                    "kind": "qpxexpress#segmentInfo",
    //                                    "duration": 160,
    //                                    "flight": {
    //                                        "carrier": "B6",
    //                                        "number": "698"
    //                                    },
    //                                    "id": "GpEj9OfjRkag2WL7",
    //                                    "cabin": "COACH",
    //                                    "bookingCode": "O",
    //                                    "bookingCodeCount": 1,
    //                                    "marriedSegmentGroup": "0",
    //                                    "leg": [
    //                                        {
    //                                            "kind": "qpxexpress#legInfo",
    //                                            "id": "LvH73fI-HoUtkPX-",
    //                                            "aircraft": "320",
    //                                            "arrivalTime": "2015-04-20T21:55-04:00",
    //                                            "departureTime": "2015-04-20T19:15-04:00",
    //                                            "origin": "MCO",
    //                                            "destination": "LGA",
    //                                            "destinationTerminal": "B",
    //                                            "duration": 160,
    //                                            "onTimePerformance": 40,
    //                                            "mileage": 950,
    //                                            "secure": true
    //                     }
    //                    ]
    //                   }
    //                  ]
    //                 },
    //                        {
    //                            "kind": "qpxexpress#sliceInfo",
    //                            "duration": 166,
    //                            "segment": [
    //                                {
    //                                    "kind": "qpxexpress#segmentInfo",
    //                                    "duration": 166,
    //                                    "flight": {
    //                                        "carrier": "B6",
    //                                        "number": "499"
    //                                    },
    //                                    "id": "GeULzLEAiRy8bqqD",
    //                                    "cabin": "COACH",
    //                                    "bookingCode": "O",
    //                                    "bookingCodeCount": 7,
    //                                    "marriedSegmentGroup": "1",
    //                                    "leg": [
    //                                        {
    //                                            "kind": "qpxexpress#legInfo",
    //                                            "id": "L81h+eotAb6QgRPK",
    //                                            "aircraft": "320",
    //                                            "arrivalTime": "2015-04-23T23:46-04:00",
    //                                            "departureTime": "2015-04-23T21:00-04:00",
    //                                            "origin": "LGA",
    //                                            "destination": "MCO",
    //                                            "originTerminal": "B",
    //                                            "duration": 166,
    //                                            "onTimePerformance": 40,
    //                                            "mileage": 950,
    //                                            "secure": true
    //                     }
    //                    ]
    //                   }
    //                  ]
    //                 }
    //                ],
    //                    "pricing": [
    //                        {
    //                            "kind": "qpxexpress#pricingInfo",
    //                            "fare": [
    //                                {
    //                                    "kind": "qpxexpress#fareInfo",
    //                                    "id": "ALLf4X7JkG5IeNY0nxvyxiZo2uj5y6H5grWhEMv7Lq0w",
    //                                    "carrier": "B6",
    //                                    "origin": "ORL",
    //                                    "destination": "NYC",
    //                                    "basisCode": "OI21AE2U"
    //                   },
    //                                {
    //                                    "kind": "qpxexpress#fareInfo",
    //                                    "id": "ALLf4X7JkG5IeNY0nxvyxiZo2uj5y6H5grWhEMv7Lq0w",
    //                                    "carrier": "B6",
    //                                    "origin": "NYC",
    //                                    "destination": "ORL",
    //                                    "basisCode": "OI21AE2U"
    //                   }
    //                  ],
    //                            "segmentPricing": [
    //                                {
    //                                    "kind": "qpxexpress#segmentPricing",
    //                                    "fareId": "ALLf4X7JkG5IeNY0nxvyxiZo2uj5y6H5grWhEMv7Lq0w",
    //                                    "segmentId": "GeULzLEAiRy8bqqD",
    //                                    "freeBaggageOption": [
    //                                        {
    //                                            "kind": "qpxexpress#freeBaggageAllowance",
    //                                            "bagDescriptor": [
    //                                                {
    //                                                    "kind": "qpxexpress#bagDescriptor",
    //                                                    "commercialName": "UPTO50LB 23KG AND62LI 158LCM",
    //                                                    "count": 1,
    //                                                    "description": [
    //                         "Up to 50 lb/23 kg",
    //                         "Up to 62 li/158 lcm"
    //                        ],
    //                                                    "subcode": "0GO"
    //                       }
    //                      ],
    //                                            "pieces": 1
    //                     }
    //                    ]
    //                   },
    //                                {
    //                                    "kind": "qpxexpress#segmentPricing",
    //                                    "fareId": "ALLf4X7JkG5IeNY0nxvyxiZo2uj5y6H5grWhEMv7Lq0w",
    //                                    "segmentId": "GpEj9OfjRkag2WL7",
    //                                    "freeBaggageOption": [
    //                                        {
    //                                            "kind": "qpxexpress#freeBaggageAllowance",
    //                                            "bagDescriptor": [
    //                                                {
    //                                                    "kind": "qpxexpress#bagDescriptor",
    //                                                    "commercialName": "UPTO50LB 23KG AND62LI 158LCM",
    //                                                    "count": 1,
    //                                                    "description": [
    //                         "Up to 50 lb/23 kg",
    //                         "Up to 62 li/158 lcm"
    //                        ],
    //                                                    "subcode": "0GO"
    //                       }
    //                      ],
    //                                            "pieces": 1
    //                     }
    //                    ]
    //                   }
    //                  ],
    //                            "baseFareTotal": "USD253.02",
    //                            "saleFareTotal": "USD253.02",
    //                            "saleTaxTotal": "USD47.18",
    //                            "saleTotal": "USD300.20",
    //                            "passengers": {
    //                                "kind": "qpxexpress#passengerCounts",
    //                                "adultCount": 1
    //                            },
    //                            "tax": [
    //                                {
    //                                    "kind": "qpxexpress#taxInfo",
    //                                    "id": "US_001",
    //                                    "chargeType": "GOVERNMENT",
    //                                    "code": "US",
    //                                    "country": "US",
    //                                    "salePrice": "USD18.98"
    //                   },
    //                                {
    //                                    "kind": "qpxexpress#taxInfo",
    //                                    "id": "AY_001",
    //                                    "chargeType": "GOVERNMENT",
    //                                    "code": "AY",
    //                                    "country": "US",
    //                                    "salePrice": "USD11.20"
    //                   },
    //                                {
    //                                    "kind": "qpxexpress#taxInfo",
    //                                    "id": "XF",
    //                                    "chargeType": "GOVERNMENT",
    //                                    "code": "XF",
    //                                    "country": "US",
    //                                    "salePrice": "USD9.00"
    //                   },
    //                                {
    //                                    "kind": "qpxexpress#taxInfo",
    //                                    "id": "ZP",
    //                                    "chargeType": "GOVERNMENT",
    //                                    "code": "ZP",
    //                                    "country": "US",
    //                                    "salePrice": "USD8.00"
    //                   }
    //                  ],
    //                            "fareCalculation": "ORL B6 LGA 126.51OI21AE2U B6 ORL 126.51OI21AE2U USD 253.02 END ZP MCO LGA XT 18.98US 8.00ZP 11.20AY 9.00XF MCO4.50 LGA4.50",
    //                            "latestTicketingTime": "2015-03-17T23:59-04:00",
    //                            "ptc": "ADT"
    //                 }
    //                ]
    //               },
    //                {
    //                    "kind": "qpxexpress#tripOption",
    //                    "saleTotal": "USD317.20",
    //                    "id": "22B2uraTzK6SMB7h6cuJX6004",
    //                    "slice": [
    //                        {
    //                            "kind": "qpxexpress#sliceInfo",
    //                            "duration": 145,
    //                            "segment": [
    //                                {
    //                                    "kind": "qpxexpress#segmentInfo",
    //                                    "duration": 145,
    //                                    "flight": {
    //                                        "carrier": "B6",
    //                                        "number": "184"
    //                                    },
    //                                    "id": "GAOfluxjggi6sz0M",
    //                                    "cabin": "COACH",
    //                                    "bookingCode": "Z",
    //                                    "bookingCodeCount": 7,
    //                                    "marriedSegmentGroup": "0",
    //                                    "leg": [
    //                                        {
    //                                            "kind": "qpxexpress#legInfo",
    //                                            "id": "L9IFWt6aM2Y8C2Yu",
    //                                            "aircraft": "320",
    //                                            "arrivalTime": "2015-04-21T00:20-04:00",
    //                                            "departureTime": "2015-04-20T21:55-04:00",
    //                                            "origin": "MCO",
    //                                            "destination": "JFK",
    //                                            "destinationTerminal": "5",
    //                                            "duration": 145,
    //                                            "onTimePerformance": 40,
    //                                            "mileage": 944,
    //                                            "secure": true
    //                     }
    //                    ]
    //                   }
    //                  ]
    //                 },
    //                        {
    //                            "kind": "qpxexpress#sliceInfo",
    //                            "duration": 169,
    //                            "segment": [
    //                                {
    //                                    "kind": "qpxexpress#segmentInfo",
    //                                    "duration": 169,
    //                                    "flight": {
    //                                        "carrier": "B6",
    //                                        "number": "1983"
    //                                    },
    //                                    "id": "Gol85sM+1+qzRv0s",
    //                                    "cabin": "COACH",
    //                                    "bookingCode": "O",
    //                                    "bookingCodeCount": 1,
    //                                    "marriedSegmentGroup": "1",
    //                                    "leg": [
    //                                        {
    //                                            "kind": "qpxexpress#legInfo",
    //                                            "id": "L1iIfBja4ZXM-hnc",
    //                                            "aircraft": "320",
    //                                            "arrivalTime": "2015-04-23T13:18-04:00",
    //                                            "departureTime": "2015-04-23T10:29-04:00",
    //                                            "origin": "JFK",
    //                                            "destination": "MCO",
    //                                            "originTerminal": "5",
    //                                            "duration": 169,
    //                                            "mileage": 944,
    //                                            "secure": true
    //                     }
    //                    ]
    //                   }
    //                  ]
    //                 }
    //                ],
    //                    "pricing": [
    //                        {
    //                            "kind": "qpxexpress#pricingInfo",
    //                            "fare": [
    //                                {
    //                                    "kind": "qpxexpress#fareInfo",
    //                                    "id": "A45XiXlP1OJ2279+Z6mni+YGxgCMYvyV64GwUYawBoDQ",
    //                                    "carrier": "B6",
    //                                    "origin": "ORL",
    //                                    "destination": "NYC",
    //                                    "basisCode": "ZI14AE2M"
    //                   },
    //                                {
    //                                    "kind": "qpxexpress#fareInfo",
    //                                    "id": "Aatm0kqDuDgwlow5R2NGED5M/CqfwHTcWxX5kpw3MIJk",
    //                                    "carrier": "B6",
    //                                    "origin": "NYC",
    //                                    "destination": "ORL",
    //                                    "basisCode": "OI21AE2U"
    //                   }
    //                  ],
    //                            "segmentPricing": [
    //                                {
    //                                    "kind": "qpxexpress#segmentPricing",
    //                                    "fareId": "A45XiXlP1OJ2279+Z6mni+YGxgCMYvyV64GwUYawBoDQ",
    //                                    "segmentId": "GAOfluxjggi6sz0M",
    //                                    "freeBaggageOption": [
    //                                        {
    //                                            "kind": "qpxexpress#freeBaggageAllowance",
    //                                            "bagDescriptor": [
    //                                                {
    //                                                    "kind": "qpxexpress#bagDescriptor",
    //                                                    "commercialName": "UPTO50LB 23KG AND62LI 158LCM",
    //                                                    "count": 1,
    //                                                    "description": [
    //                         "Up to 50 lb/23 kg",
    //                         "Up to 62 li/158 lcm"
    //                        ],
    //                                                    "subcode": "0GO"
    //                       }
    //                      ],
    //                                            "pieces": 1
    //                     }
    //                    ]
    //                   },
    //                                {
    //                                    "kind": "qpxexpress#segmentPricing",
    //                                    "fareId": "Aatm0kqDuDgwlow5R2NGED5M/CqfwHTcWxX5kpw3MIJk",
    //                                    "segmentId": "Gol85sM+1+qzRv0s",
    //                                    "freeBaggageOption": [
    //                                        {
    //                                            "kind": "qpxexpress#freeBaggageAllowance",
    //                                            "bagDescriptor": [
    //                                                {
    //                                                    "kind": "qpxexpress#bagDescriptor",
    //                                                    "commercialName": "UPTO50LB 23KG AND62LI 158LCM",
    //                                                    "count": 1,
    //                                                    "description": [
    //                         "Up to 50 lb/23 kg",
    //                         "Up to 62 li/158 lcm"
    //                        ],
    //                                                    "subcode": "0GO"
    //                       }
    //                      ],
    //                                            "pieces": 1
    //                     }
    //                    ]
    //                   }
    //                  ],
    //                            "baseFareTotal": "USD268.84",
    //                            "saleFareTotal": "USD268.84",
    //                            "saleTaxTotal": "USD48.36",
    //                            "saleTotal": "USD317.20",
    //                            "passengers": {
    //                                "kind": "qpxexpress#passengerCounts",
    //                                "adultCount": 1
    //                            },
    //                            "tax": [
    //                                {
    //                                    "kind": "qpxexpress#taxInfo",
    //                                    "id": "US_001",
    //                                    "chargeType": "GOVERNMENT",
    //                                    "code": "US",
    //                                    "country": "US",
    //                                    "salePrice": "USD20.16"
    //                   },
    //                                {
    //                                    "kind": "qpxexpress#taxInfo",
    //                                    "id": "AY_001",
    //                                    "chargeType": "GOVERNMENT",
    //                                    "code": "AY",
    //                                    "country": "US",
    //                                    "salePrice": "USD11.20"
    //                   },
    //                                {
    //                                    "kind": "qpxexpress#taxInfo",
    //                                    "id": "XF",
    //                                    "chargeType": "GOVERNMENT",
    //                                    "code": "XF",
    //                                    "country": "US",
    //                                    "salePrice": "USD9.00"
    //                   },
    //                                {
    //                                    "kind": "qpxexpress#taxInfo",
    //                                    "id": "ZP",
    //                                    "chargeType": "GOVERNMENT",
    //                                    "code": "ZP",
    //                                    "country": "US",
    //                                    "salePrice": "USD8.00"
    //                   }
    //                  ],
    //                            "fareCalculation": "ORL B6 JFK 142.33ZI14AE2M B6 ORL 126.51OI21AE2U USD 268.84 END ZP MCO JFK XT 20.16US 8.00ZP 11.20AY 9.00XF MCO4.50 JFK4.50",
    //                            "latestTicketingTime": "2015-03-17T23:59-04:00",
    //                            "ptc": "ADT"
    //                 }
    //                ]
    //               },
    //                {
    //                    "kind": "qpxexpress#tripOption",
    //                    "saleTotal": "USD317.20",
    //                    "id": "22B2uraTzK6SMB7h6cuJX6005",
    //                    "slice": [
    //                        {
    //                            "kind": "qpxexpress#sliceInfo",
    //                            "duration": 150,
    //                            "segment": [
    //                                {
    //                                    "kind": "qpxexpress#segmentInfo",
    //                                    "duration": 150,
    //                                    "flight": {
    //                                        "carrier": "B6",
    //                                        "number": "384"
    //                                    },
    //                                    "id": "GOIy73ZZMJJoWFtq",
    //                                    "cabin": "COACH",
    //                                    "bookingCode": "Z",
    //                                    "bookingCodeCount": 4,
    //                                    "marriedSegmentGroup": "0",
    //                                    "leg": [
    //                                        {
    //                                            "kind": "qpxexpress#legInfo",
    //                                            "id": "Lq+kBQc0iiocHDzS",
    //                                            "aircraft": "320",
    //                                            "arrivalTime": "2015-04-20T23:12-04:00",
    //                                            "departureTime": "2015-04-20T20:42-04:00",
    //                                            "origin": "MCO",
    //                                            "destination": "JFK",
    //                                            "destinationTerminal": "5",
    //                                            "duration": 150,
    //                                            "onTimePerformance": 20,
    //                                            "mileage": 944,
    //                                            "secure": true
    //                     }
    //                    ]
    //                   }
    //                  ]
    //                 },
    //                        {
    //                            "kind": "qpxexpress#sliceInfo",
    //                            "duration": 169,
    //                            "segment": [
    //                                {
    //                                    "kind": "qpxexpress#segmentInfo",
    //                                    "duration": 169,
    //                                    "flight": {
    //                                        "carrier": "B6",
    //                                        "number": "1983"
    //                                    },
    //                                    "id": "Gol85sM+1+qzRv0s",
    //                                    "cabin": "COACH",
    //                                    "bookingCode": "O",
    //                                    "bookingCodeCount": 1,
    //                                    "marriedSegmentGroup": "1",
    //                                    "leg": [
    //                                        {
    //                                            "kind": "qpxexpress#legInfo",
    //                                            "id": "L1iIfBja4ZXM-hnc",
    //                                            "aircraft": "320",
    //                                            "arrivalTime": "2015-04-23T13:18-04:00",
    //                                            "departureTime": "2015-04-23T10:29-04:00",
    //                                            "origin": "JFK",
    //                                            "destination": "MCO",
    //                                            "originTerminal": "5",
    //                                            "duration": 169,
    //                                            "mileage": 944,
    //                                            "secure": true
    //                     }
    //                    ]
    //                   }
    //                  ]
    //                 }
    //                ],
    //                    "pricing": [
    //                        {
    //                            "kind": "qpxexpress#pricingInfo",
    //                            "fare": [
    //                                {
    //                                    "kind": "qpxexpress#fareInfo",
    //                                    "id": "A45XiXlP1OJ2279+Z6mni+YGxgCMYvyV64GwUYawBoDQ",
    //                                    "carrier": "B6",
    //                                    "origin": "ORL",
    //                                    "destination": "NYC",
    //                                    "basisCode": "ZI14AE2M"
    //                   },
    //                                {
    //                                    "kind": "qpxexpress#fareInfo",
    //                                    "id": "Aatm0kqDuDgwlow5R2NGED5M/CqfwHTcWxX5kpw3MIJk",
    //                                    "carrier": "B6",
    //                                    "origin": "NYC",
    //                                    "destination": "ORL",
    //                                    "basisCode": "OI21AE2U"
    //                   }
    //                  ],
    //                            "segmentPricing": [
    //                                {
    //                                    "kind": "qpxexpress#segmentPricing",
    //                                    "fareId": "A45XiXlP1OJ2279+Z6mni+YGxgCMYvyV64GwUYawBoDQ",
    //                                    "segmentId": "GOIy73ZZMJJoWFtq",
    //                                    "freeBaggageOption": [
    //                                        {
    //                                            "kind": "qpxexpress#freeBaggageAllowance",
    //                                            "bagDescriptor": [
    //                                                {
    //                                                    "kind": "qpxexpress#bagDescriptor",
    //                                                    "commercialName": "UPTO50LB 23KG AND62LI 158LCM",
    //                                                    "count": 1,
    //                                                    "description": [
    //                         "Up to 50 lb/23 kg",
    //                         "Up to 62 li/158 lcm"
    //                        ],
    //                                                    "subcode": "0GO"
    //                       }
    //                      ],
    //                                            "pieces": 1
    //                     }
    //                    ]
    //                   },
    //                                {
    //                                    "kind": "qpxexpress#segmentPricing",
    //                                    "fareId": "Aatm0kqDuDgwlow5R2NGED5M/CqfwHTcWxX5kpw3MIJk",
    //                                    "segmentId": "Gol85sM+1+qzRv0s",
    //                                    "freeBaggageOption": [
    //                                        {
    //                                            "kind": "qpxexpress#freeBaggageAllowance",
    //                                            "bagDescriptor": [
    //                                                {
    //                                                    "kind": "qpxexpress#bagDescriptor",
    //                                                    "commercialName": "UPTO50LB 23KG AND62LI 158LCM",
    //                                                    "count": 1,
    //                                                    "description": [
    //                         "Up to 50 lb/23 kg",
    //                         "Up to 62 li/158 lcm"
    //                        ],
    //                                                    "subcode": "0GO"
    //                       }
    //                      ],
    //                                            "pieces": 1
    //                     }
    //                    ]
    //                   }
    //                  ],
    //                            "baseFareTotal": "USD268.84",
    //                            "saleFareTotal": "USD268.84",
    //                            "saleTaxTotal": "USD48.36",
    //                            "saleTotal": "USD317.20",
    //                            "passengers": {
    //                                "kind": "qpxexpress#passengerCounts",
    //                                "adultCount": 1
    //                            },
    //                            "tax": [
    //                                {
    //                                    "kind": "qpxexpress#taxInfo",
    //                                    "id": "US_001",
    //                                    "chargeType": "GOVERNMENT",
    //                                    "code": "US",
    //                                    "country": "US",
    //                                    "salePrice": "USD20.16"
    //                   },
    //                                {
    //                                    "kind": "qpxexpress#taxInfo",
    //                                    "id": "AY_001",
    //                                    "chargeType": "GOVERNMENT",
    //                                    "code": "AY",
    //                                    "country": "US",
    //                                    "salePrice": "USD11.20"
    //                   },
    //                                {
    //                                    "kind": "qpxexpress#taxInfo",
    //                                    "id": "XF",
    //                                    "chargeType": "GOVERNMENT",
    //                                    "code": "XF",
    //                                    "country": "US",
    //                                    "salePrice": "USD9.00"
    //                   },
    //                                {
    //                                    "kind": "qpxexpress#taxInfo",
    //                                    "id": "ZP",
    //                                    "chargeType": "GOVERNMENT",
    //                                    "code": "ZP",
    //                                    "country": "US",
    //                                    "salePrice": "USD8.00"
    //                   }
    //                  ],
    //                            "fareCalculation": "ORL B6 JFK 142.33ZI14AE2M B6 ORL 126.51OI21AE2U USD 268.84 END ZP MCO JFK XT 20.16US 8.00ZP 11.20AY 9.00XF MCO4.50 JFK4.50",
    //                            "latestTicketingTime": "2015-03-17T23:59-04:00",
    //                            "ptc": "ADT"
    //                 }
    //                ]
    //               }
    //              ]
    //        }
    //    }
    //
    //    self.trips = data.trips;


});