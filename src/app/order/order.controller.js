'use strict';

angular.module('skedaddle')

.config(function (RestangularProvider) {

    RestangularProvider.setDefaultHeaders({
        "Content-Type": "application/json"
    });
    RestangularProvider.setBaseUrl('https://www.googleapis.com/qpxExpress/v1/');


    RestangularProvider.setDefaultRequestParams({
        key: 'AIzaSyCR6G5517GCv0MKX5Z8wjetXS4NchVfDHI'
    });
})

.controller('OrderCtrl', function (Restangular, geo) {

    var self = this;
    var data, flightResults;
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
    this.tripOption = this.trips.tripOption;




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

    var nowMS = Date.now()

    //number of milliseconds(ms) in one day
    var oneDayMS = 1000 * 60 * 60 * 24;

    var departureDayMS = oneDayMS + nowMS;

    //creates departure date for selection object
    var departureDay = new Date(departureDayMS);
    var monthD = departureDay.getMonth() + 1;
    var dayD = departureDay.getDate();
    var submitFinalDepartureDay = departureDay.getFullYear() + '-' +
        (monthD < 10 ? '0' : '') + monthD + '-' +
        (dayD < 10 ? '0' : '') + dayD;
    this.selections.finalDepartureDate = submitFinalDepartureDay;

    var returnDayMS = nowMS + (3 * oneDayMS)
    var returnDay = new Date(returnDayMS);
    var monthR = returnDay.getMonth() + 1;
    var dayR = returnDay.getDate();
    var submitFinalReturnDay = returnDay.getFullYear() + '-' +
        (monthR < 10 ? '0' : '') + monthR + '-' +
        (dayR < 10 ? '0' : '') + dayR;
    this.selections.finalReturnDate = submitFinalReturnDay;


    //button Selection and object
    this.getTheme = function () {
        this.selections.finalDestination = theTheme.city_code;
        if (theTheme.city_code == 'CHS') {
            this.selections.adultCount = 2;
        }
        return theTheme;
    }

    this.selectTheme = function (selectedTheme) {
        theTheme = selectedTheme;
    }

    this.getBudget = function () {
        console.log(theBudget + " = this.getBudget");
        this.selections.finalMaxBudget = "USD" + theBudget;
        return theBudget;
    }

    this.selectBudget = function (selectedBudget) {
            theBudget = selectedBudget;
        }
        //button Selection and object

    this.apiCall = function (mySelections) {

        console.log(mySelections);

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
        //            console.log(this.view + ' getView');
        return this.view;
    }

    //sets the view in order.html
    this.setView = function (selectedView) {
        this.view = selectedView;
    }

    //makes burger-bar menu close when clicked on    
    $(function () {
        var navMain = $("#burger-bar");

        navMain.on("click", "a", null, function () {
            navMain.collapse('hide');
        });
    });

//    var data = {
//        "kind": "qpxExpress#tripsSearch",
//        "trips": {
//            "kind": "qpxexpress#tripOptions",
//            "requestId": "PEcLsVJjCrHNlkPnW0Lkny",
//            "data": {
//                "kind": "qpxexpress#data",
//                "airport": [
//                    {
//                        "kind": "qpxexpress#airportData",
//                        "code": "ATL",
//                        "city": "ATL",
//                        "name": "Atlanta Hartsfield-Jackson ATL"
//            },
//                    {
//                        "kind": "qpxexpress#airportData",
//                        "code": "CLT",
//                        "city": "CLT",
//                        "name": "Charlotte Douglas"
//            },
//                    {
//                        "kind": "qpxexpress#airportData",
//                        "code": "MCO",
//                        "city": "ORL",
//                        "name": "Orlando International"
//            },
//                    {
//                        "kind": "qpxexpress#airportData",
//                        "code": "MIA",
//                        "city": "MIA",
//                        "name": "Miami International"
//            }
//           ],
//                "city": [
//                    {
//                        "kind": "qpxexpress#cityData",
//                        "code": "ATL",
//                        "name": "Atlanta"
//            },
//                    {
//                        "kind": "qpxexpress#cityData",
//                        "code": "CLT",
//                        "name": "Charlotte"
//            },
//                    {
//                        "kind": "qpxexpress#cityData",
//                        "code": "MIA",
//                        "name": "Miami"
//            },
//                    {
//                        "kind": "qpxexpress#cityData",
//                        "code": "ORL",
//                        "name": "Orlando"
//            }
//           ],
//                "aircraft": [
//                    {
//                        "kind": "qpxexpress#aircraftData",
//                        "code": "319",
//                        "name": "Airbus A319"
//            },
//                    {
//                        "kind": "qpxexpress#aircraftData",
//                        "code": "320",
//                        "name": "Airbus A320"
//            },
//                    {
//                        "kind": "qpxexpress#aircraftData",
//                        "code": "321",
//                        "name": "Airbus A321"
//            },
//                    {
//                        "kind": "qpxexpress#aircraftData",
//                        "code": "752",
//                        "name": "Boeing 757"
//            },
//                    {
//                        "kind": "qpxexpress#aircraftData",
//                        "code": "763",
//                        "name": "Boeing 767"
//            }
//           ],
//                "tax": [
//                    {
//                        "kind": "qpxexpress#taxData",
//                        "id": "ZP",
//                        "name": "US Flight Segment Tax"
//            },
//                    {
//                        "kind": "qpxexpress#taxData",
//                        "id": "XF",
//                        "name": "US Passenger Facility Charge"
//            },
//                    {
//                        "kind": "qpxexpress#taxData",
//                        "id": "US_001",
//                        "name": "US Transportation Tax"
//            },
//                    {
//                        "kind": "qpxexpress#taxData",
//                        "id": "AY_001",
//                        "name": "US September 11th Security Fee"
//            }
//           ],
//                "carrier": [
//                    {
//                        "kind": "qpxexpress#carrierData",
//                        "code": "F9",
//                        "name": "Frontier Airlines, Inc."
//            },
//                    {
//                        "kind": "qpxexpress#carrierData",
//                        "code": "US",
//                        "name": "US Airways, Inc."
//            }
//           ]
//            },
//            "tripOption": [
//                {
//                    "kind": "qpxexpress#tripOption",
//                    "saleTotal": "USD99.00",
//                    "id": "G9uL2qExtE0MXrKDLkJXYB001",
//                    "slice": [
//                        {
//                            "kind": "qpxexpress#sliceInfo",
//                            "duration": 85,
//                            "segment": [
//                                {
//                                    "kind": "qpxexpress#segmentInfo",
//                                    "duration": 85,
//                                    "flight": {
//                                        "carrier": "F9",
//                                        "number": "1147"
//                                    },
//                                    "id": "G-FzWpuA+vdXcoqq",
//                                    "cabin": "COACH",
//                                    "bookingCode": "Q",
//                                    "bookingCodeCount": 3,
//                                    "marriedSegmentGroup": "0",
//                                    "leg": [
//                                        {
//                                            "kind": "qpxexpress#legInfo",
//                                            "id": "L6Y1UcAbxSviYeTp",
//                                            "aircraft": "319",
//                                            "arrivalTime": "2015-03-16T15:00-04:00",
//                                            "departureTime": "2015-03-16T13:35-04:00",
//                                            "origin": "MCO",
//                                            "destination": "ATL",
//                                            "destinationTerminal": "N",
//                                            "duration": 85,
//                                            "onTimePerformance": 76,
//                                            "mileage": 404,
//                                            "meal": "Food and Beverages for Purchase",
//                                            "secure": true
//                 }
//                ]
//               }
//              ]
//             }
//            ],
//                    "pricing": [
//                        {
//                            "kind": "qpxexpress#pricingInfo",
//                            "fare": [
//                                {
//                                    "kind": "qpxexpress#fareInfo",
//                                    "id": "AHn16ENobNtYZjWbhHqSVbY5HIbqfmKbTvZIztW6UUdU",
//                                    "carrier": "F9",
//                                    "origin": "ORL",
//                                    "destination": "ATL",
//                                    "basisCode": "Q00PXS5"
//               }
//              ],
//                            "segmentPricing": [
//                                {
//                                    "kind": "qpxexpress#segmentPricing",
//                                    "fareId": "AHn16ENobNtYZjWbhHqSVbY5HIbqfmKbTvZIztW6UUdU",
//                                    "segmentId": "G-FzWpuA+vdXcoqq",
//                                    "freeBaggageOption": [
//                                        {
//                                            "kind": "qpxexpress#freeBaggageAllowance",
//                                            "pieces": 0
//                 }
//                ]
//               }
//              ],
//                            "baseFareTotal": "USD78.98",
//                            "saleFareTotal": "USD78.98",
//                            "saleTaxTotal": "USD20.02",
//                            "saleTotal": "USD99.00",
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
//                                    "salePrice": "USD5.92"
//               },
//                                {
//                                    "kind": "qpxexpress#taxInfo",
//                                    "id": "AY_001",
//                                    "chargeType": "GOVERNMENT",
//                                    "code": "AY",
//                                    "country": "US",
//                                    "salePrice": "USD5.60"
//               },
//                                {
//                                    "kind": "qpxexpress#taxInfo",
//                                    "id": "XF",
//                                    "chargeType": "GOVERNMENT",
//                                    "code": "XF",
//                                    "country": "US",
//                                    "salePrice": "USD4.50"
//               },
//                                {
//                                    "kind": "qpxexpress#taxInfo",
//                                    "id": "ZP",
//                                    "chargeType": "GOVERNMENT",
//                                    "code": "ZP",
//                                    "country": "US",
//                                    "salePrice": "USD4.00"
//               }
//              ],
//                            "fareCalculation": "MCO F9 ATL 78.98Q00PXS5 USD 78.98 END ZP MCO XT 5.92US 4.00ZP 5.60AY 4.50XF MCO4.50",
//                            "latestTicketingTime": "2015-03-14T17:30-04:00",
//                            "ptc": "ADT"
//             }
//            ]
//           },
//                {
//                    "kind": "qpxexpress#tripOption",
//                    "saleTotal": "USD245.10",
//                    "id": "G9uL2qExtE0MXrKDLkJXYB003",
//                    "slice": [
//                        {
//                            "kind": "qpxexpress#sliceInfo",
//                            "duration": 230,
//                            "segment": [
//                                {
//                                    "kind": "qpxexpress#segmentInfo",
//                                    "duration": 97,
//                                    "flight": {
//                                        "carrier": "US",
//                                        "number": "2062"
//                                    },
//                                    "id": "G4JM0xjuWJqhRvoU",
//                                    "cabin": "COACH",
//                                    "bookingCode": "G",
//                                    "bookingCodeCount": 2,
//                                    "marriedSegmentGroup": "0",
//                                    "leg": [
//                                        {
//                                            "kind": "qpxexpress#legInfo",
//                                            "id": "LcomHOxFBsZ-3VGK",
//                                            "aircraft": "321",
//                                            "arrivalTime": "2015-03-16T06:57-04:00",
//                                            "departureTime": "2015-03-16T05:20-04:00",
//                                            "origin": "MCO",
//                                            "destination": "CLT",
//                                            "duration": 97,
//                                            "onTimePerformance": 100,
//                                            "mileage": 469,
//                                            "secure": true
//                 }
//                ],
//                                    "connectionDuration": 53
//               },
//                                {
//                                    "kind": "qpxexpress#segmentInfo",
//                                    "duration": 80,
//                                    "flight": {
//                                        "carrier": "US",
//                                        "number": "469"
//                                    },
//                                    "id": "GY7g8IkymPX6VuLI",
//                                    "cabin": "COACH",
//                                    "bookingCode": "G",
//                                    "bookingCodeCount": 2,
//                                    "marriedSegmentGroup": "0",
//                                    "leg": [
//                                        {
//                                            "kind": "qpxexpress#legInfo",
//                                            "id": "LCXC2QNh8Kv4-Tjp",
//                                            "aircraft": "320",
//                                            "arrivalTime": "2015-03-16T09:10-04:00",
//                                            "departureTime": "2015-03-16T07:50-04:00",
//                                            "origin": "CLT",
//                                            "destination": "ATL",
//                                            "destinationTerminal": "N",
//                                            "duration": 80,
//                                            "onTimePerformance": 81,
//                                            "mileage": 226,
//                                            "secure": true
//                 }
//                ]
//               }
//              ]
//             }
//            ],
//                    "pricing": [
//                        {
//                            "kind": "qpxexpress#pricingInfo",
//                            "fare": [
//                                {
//                                    "kind": "qpxexpress#fareInfo",
//                                    "id": "AD595E3sgAQ8qIgPMnEERU8LY0UQAx+blHarKryGs6Jo",
//                                    "carrier": "US",
//                                    "origin": "ORL",
//                                    "destination": "ATL",
//                                    "basisCode": "GA00XNH1"
//               }
//              ],
//                            "segmentPricing": [
//                                {
//                                    "kind": "qpxexpress#segmentPricing",
//                                    "fareId": "AD595E3sgAQ8qIgPMnEERU8LY0UQAx+blHarKryGs6Jo",
//                                    "segmentId": "G4JM0xjuWJqhRvoU",
//                                    "freeBaggageOption": [
//                                        {
//                                            "kind": "qpxexpress#freeBaggageAllowance",
//                                            "bagDescriptor": [
//                                                {
//                                                    "kind": "qpxexpress#bagDescriptor",
//                                                    "commercialName": "ASSISTIVE DEVICES",
//                                                    "count": 0,
//                                                    "subcode": "0GM"
//                   },
//                                                {
//                                                    "kind": "qpxexpress#bagDescriptor",
//                                                    "commercialName": "INFANT CAR SEAT",
//                                                    "count": 0,
//                                                    "description": [
//                     "Infant Car Seat"
//                    ],
//                                                    "subcode": "0G5"
//                   },
//                                                {
//                                                    "kind": "qpxexpress#bagDescriptor",
//                                                    "commercialName": "STROLLER OR PUSHCHAIR",
//                                                    "count": 0,
//                                                    "description": [
//                     "Stroller/Pushchair"
//                    ],
//                                                    "subcode": "0F4"
//                   }
//                  ],
//                                            "pieces": 0
//                 }
//                ]
//               },
//                                {
//                                    "kind": "qpxexpress#segmentPricing",
//                                    "fareId": "AD595E3sgAQ8qIgPMnEERU8LY0UQAx+blHarKryGs6Jo",
//                                    "segmentId": "GY7g8IkymPX6VuLI",
//                                    "freeBaggageOption": [
//                                        {
//                                            "kind": "qpxexpress#freeBaggageAllowance",
//                                            "bagDescriptor": [
//                                                {
//                                                    "kind": "qpxexpress#bagDescriptor",
//                                                    "commercialName": "ASSISTIVE DEVICES",
//                                                    "count": 0,
//                                                    "subcode": "0GM"
//                   },
//                                                {
//                                                    "kind": "qpxexpress#bagDescriptor",
//                                                    "commercialName": "INFANT CAR SEAT",
//                                                    "count": 0,
//                                                    "description": [
//                     "Infant Car Seat"
//                    ],
//                                                    "subcode": "0G5"
//                   },
//                                                {
//                                                    "kind": "qpxexpress#bagDescriptor",
//                                                    "commercialName": "STROLLER OR PUSHCHAIR",
//                                                    "count": 0,
//                                                    "description": [
//                     "Stroller/Pushchair"
//                    ],
//                                                    "subcode": "0F4"
//                   }
//                  ],
//                                            "pieces": 0
//                 }
//                ]
//               }
//              ],
//                            "baseFareTotal": "USD208.37",
//                            "saleFareTotal": "USD208.37",
//                            "saleTaxTotal": "USD36.73",
//                            "saleTotal": "USD245.10",
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
//                                    "salePrice": "USD15.63"
//               },
//                                {
//                                    "kind": "qpxexpress#taxInfo",
//                                    "id": "AY_001",
//                                    "chargeType": "GOVERNMENT",
//                                    "code": "AY",
//                                    "country": "US",
//                                    "salePrice": "USD5.60"
//               },
//                                {
//                                    "kind": "qpxexpress#taxInfo",
//                                    "id": "XF",
//                                    "chargeType": "GOVERNMENT",
//                                    "code": "XF",
//                                    "country": "US",
//                                    "salePrice": "USD7.50"
//               },
//                                {
//                                    "kind": "qpxexpress#taxInfo",
//                                    "id": "ZP",
//                                    "chargeType": "GOVERNMENT",
//                                    "code": "ZP",
//                                    "country": "US",
//                                    "salePrice": "USD8.00"
//               }
//              ],
//                            "fareCalculation": "ORL US X/CLT US ATL Q ORLATL18.60 189.77GA00XNH1 USD 208.37 END ZP MCO CLT XT 15.63US 8.00ZP 5.60AY 7.50XF MCO4.50 CLT3.00",
//                            "latestTicketingTime": "2015-03-15T23:59-04:00",
//                            "ptc": "ADT"
//             }
//            ]
//           },
//                {
//                    "kind": "qpxexpress#tripOption",
//                    "saleTotal": "USD245.10",
//                    "id": "G9uL2qExtE0MXrKDLkJXYB004",
//                    "slice": [
//                        {
//                            "kind": "qpxexpress#sliceInfo",
//                            "duration": 246,
//                            "segment": [
//                                {
//                                    "kind": "qpxexpress#segmentInfo",
//                                    "duration": 101,
//                                    "flight": {
//                                        "carrier": "US",
//                                        "number": "833"
//                                    },
//                                    "id": "G1KPEPJWWPKi8Q6c",
//                                    "cabin": "COACH",
//                                    "bookingCode": "G",
//                                    "bookingCodeCount": 9,
//                                    "marriedSegmentGroup": "0",
//                                    "leg": [
//                                        {
//                                            "kind": "qpxexpress#legInfo",
//                                            "id": "Lm-wQvkcb6rQ1NvM",
//                                            "aircraft": "752",
//                                            "arrivalTime": "2015-03-16T10:26-04:00",
//                                            "departureTime": "2015-03-16T08:45-04:00",
//                                            "origin": "MCO",
//                                            "destination": "CLT",
//                                            "duration": 101,
//                                            "onTimePerformance": 94,
//                                            "mileage": 469,
//                                            "secure": true
//                 }
//                ],
//                                    "connectionDuration": 69
//               },
//                                {
//                                    "kind": "qpxexpress#segmentInfo",
//                                    "duration": 76,
//                                    "flight": {
//                                        "carrier": "US",
//                                        "number": "1814"
//                                    },
//                                    "id": "GqI5JFaq+rBNTMZ7",
//                                    "cabin": "COACH",
//                                    "bookingCode": "G",
//                                    "bookingCodeCount": 9,
//                                    "marriedSegmentGroup": "0",
//                                    "leg": [
//                                        {
//                                            "kind": "qpxexpress#legInfo",
//                                            "id": "LARgZRun3QJ2LIAL",
//                                            "aircraft": "321",
//                                            "arrivalTime": "2015-03-16T12:51-04:00",
//                                            "departureTime": "2015-03-16T11:35-04:00",
//                                            "origin": "CLT",
//                                            "destination": "ATL",
//                                            "destinationTerminal": "N",
//                                            "duration": 76,
//                                            "onTimePerformance": 84,
//                                            "mileage": 226,
//                                            "secure": true
//                 }
//                ]
//               }
//              ]
//             }
//            ],
//                    "pricing": [
//                        {
//                            "kind": "qpxexpress#pricingInfo",
//                            "fare": [
//                                {
//                                    "kind": "qpxexpress#fareInfo",
//                                    "id": "AD595E3sgAQ8qIgPMnEERU8LY0UQAx+blHarKryGs6Jo",
//                                    "carrier": "US",
//                                    "origin": "ORL",
//                                    "destination": "ATL",
//                                    "basisCode": "GA00XNH1"
//               }
//              ],
//                            "segmentPricing": [
//                                {
//                                    "kind": "qpxexpress#segmentPricing",
//                                    "fareId": "AD595E3sgAQ8qIgPMnEERU8LY0UQAx+blHarKryGs6Jo",
//                                    "segmentId": "G1KPEPJWWPKi8Q6c",
//                                    "freeBaggageOption": [
//                                        {
//                                            "kind": "qpxexpress#freeBaggageAllowance",
//                                            "bagDescriptor": [
//                                                {
//                                                    "kind": "qpxexpress#bagDescriptor",
//                                                    "commercialName": "ASSISTIVE DEVICES",
//                                                    "count": 0,
//                                                    "subcode": "0GM"
//                   },
//                                                {
//                                                    "kind": "qpxexpress#bagDescriptor",
//                                                    "commercialName": "INFANT CAR SEAT",
//                                                    "count": 0,
//                                                    "description": [
//                     "Infant Car Seat"
//                    ],
//                                                    "subcode": "0G5"
//                   },
//                                                {
//                                                    "kind": "qpxexpress#bagDescriptor",
//                                                    "commercialName": "STROLLER OR PUSHCHAIR",
//                                                    "count": 0,
//                                                    "description": [
//                     "Stroller/Pushchair"
//                    ],
//                                                    "subcode": "0F4"
//                   }
//                  ],
//                                            "pieces": 0
//                 }
//                ]
//               },
//                                {
//                                    "kind": "qpxexpress#segmentPricing",
//                                    "fareId": "AD595E3sgAQ8qIgPMnEERU8LY0UQAx+blHarKryGs6Jo",
//                                    "segmentId": "GqI5JFaq+rBNTMZ7",
//                                    "freeBaggageOption": [
//                                        {
//                                            "kind": "qpxexpress#freeBaggageAllowance",
//                                            "bagDescriptor": [
//                                                {
//                                                    "kind": "qpxexpress#bagDescriptor",
//                                                    "commercialName": "ASSISTIVE DEVICES",
//                                                    "count": 0,
//                                                    "subcode": "0GM"
//                   },
//                                                {
//                                                    "kind": "qpxexpress#bagDescriptor",
//                                                    "commercialName": "INFANT CAR SEAT",
//                                                    "count": 0,
//                                                    "description": [
//                     "Infant Car Seat"
//                    ],
//                                                    "subcode": "0G5"
//                   },
//                                                {
//                                                    "kind": "qpxexpress#bagDescriptor",
//                                                    "commercialName": "STROLLER OR PUSHCHAIR",
//                                                    "count": 0,
//                                                    "description": [
//                     "Stroller/Pushchair"
//                    ],
//                                                    "subcode": "0F4"
//                   }
//                  ],
//                                            "pieces": 0
//                 }
//                ]
//               }
//              ],
//                            "baseFareTotal": "USD208.37",
//                            "saleFareTotal": "USD208.37",
//                            "saleTaxTotal": "USD36.73",
//                            "saleTotal": "USD245.10",
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
//                                    "salePrice": "USD15.63"
//               },
//                                {
//                                    "kind": "qpxexpress#taxInfo",
//                                    "id": "AY_001",
//                                    "chargeType": "GOVERNMENT",
//                                    "code": "AY",
//                                    "country": "US",
//                                    "salePrice": "USD5.60"
//               },
//                                {
//                                    "kind": "qpxexpress#taxInfo",
//                                    "id": "XF",
//                                    "chargeType": "GOVERNMENT",
//                                    "code": "XF",
//                                    "country": "US",
//                                    "salePrice": "USD7.50"
//               },
//                                {
//                                    "kind": "qpxexpress#taxInfo",
//                                    "id": "ZP",
//                                    "chargeType": "GOVERNMENT",
//                                    "code": "ZP",
//                                    "country": "US",
//                                    "salePrice": "USD8.00"
//               }
//              ],
//                            "fareCalculation": "ORL US X/CLT US ATL Q ORLATL18.60 189.77GA00XNH1 USD 208.37 END ZP MCO CLT XT 15.63US 8.00ZP 5.60AY 7.50XF MCO4.50 CLT3.00",
//                            "latestTicketingTime": "2015-03-15T23:59-04:00",
//                            "ptc": "ADT"
//             }
//            ]
//           },
//                {
//                    "kind": "qpxexpress#tripOption",
//                    "saleTotal": "USD245.10",
//                    "id": "G9uL2qExtE0MXrKDLkJXYB002",
//                    "slice": [
//                        {
//                            "kind": "qpxexpress#sliceInfo",
//                            "duration": 225,
//                            "segment": [
//                                {
//                                    "kind": "qpxexpress#segmentInfo",
//                                    "duration": 100,
//                                    "flight": {
//                                        "carrier": "US",
//                                        "number": "724"
//                                    },
//                                    "id": "GraLibNLopLnaLCa",
//                                    "cabin": "COACH",
//                                    "bookingCode": "G",
//                                    "bookingCodeCount": 9,
//                                    "marriedSegmentGroup": "0",
//                                    "leg": [
//                                        {
//                                            "kind": "qpxexpress#legInfo",
//                                            "id": "LhSX2yTt+vah8nSn",
//                                            "aircraft": "321",
//                                            "arrivalTime": "2015-03-16T17:10-04:00",
//                                            "departureTime": "2015-03-16T15:30-04:00",
//                                            "origin": "MCO",
//                                            "destination": "CLT",
//                                            "duration": 100,
//                                            "onTimePerformance": 84,
//                                            "mileage": 469,
//                                            "secure": true
//                 }
//                ],
//                                    "connectionDuration": 49
//               },
//                                {
//                                    "kind": "qpxexpress#segmentInfo",
//                                    "duration": 76,
//                                    "flight": {
//                                        "carrier": "US",
//                                        "number": "2041"
//                                    },
//                                    "id": "G3XEDv1lfZJjm-fU",
//                                    "cabin": "COACH",
//                                    "bookingCode": "G",
//                                    "bookingCodeCount": 9,
//                                    "marriedSegmentGroup": "0",
//                                    "leg": [
//                                        {
//                                            "kind": "qpxexpress#legInfo",
//                                            "id": "LVAXkWB9Z6-RJoq-",
//                                            "aircraft": "319",
//                                            "arrivalTime": "2015-03-16T19:15-04:00",
//                                            "departureTime": "2015-03-16T17:59-04:00",
//                                            "origin": "CLT",
//                                            "destination": "ATL",
//                                            "destinationTerminal": "N",
//                                            "duration": 76,
//                                            "onTimePerformance": 81,
//                                            "mileage": 226,
//                                            "secure": true
//                 }
//                ]
//               }
//              ]
//             }
//            ],
//                    "pricing": [
//                        {
//                            "kind": "qpxexpress#pricingInfo",
//                            "fare": [
//                                {
//                                    "kind": "qpxexpress#fareInfo",
//                                    "id": "AD595E3sgAQ8qIgPMnEERU8LY0UQAx+blHarKryGs6Jo",
//                                    "carrier": "US",
//                                    "origin": "ORL",
//                                    "destination": "ATL",
//                                    "basisCode": "GA00XNH1"
//               }
//              ],
//                            "segmentPricing": [
//                                {
//                                    "kind": "qpxexpress#segmentPricing",
//                                    "fareId": "AD595E3sgAQ8qIgPMnEERU8LY0UQAx+blHarKryGs6Jo",
//                                    "segmentId": "G3XEDv1lfZJjm-fU",
//                                    "freeBaggageOption": [
//                                        {
//                                            "kind": "qpxexpress#freeBaggageAllowance",
//                                            "bagDescriptor": [
//                                                {
//                                                    "kind": "qpxexpress#bagDescriptor",
//                                                    "commercialName": "ASSISTIVE DEVICES",
//                                                    "count": 0,
//                                                    "subcode": "0GM"
//                   },
//                                                {
//                                                    "kind": "qpxexpress#bagDescriptor",
//                                                    "commercialName": "INFANT CAR SEAT",
//                                                    "count": 0,
//                                                    "description": [
//                     "Infant Car Seat"
//                    ],
//                                                    "subcode": "0G5"
//                   },
//                                                {
//                                                    "kind": "qpxexpress#bagDescriptor",
//                                                    "commercialName": "STROLLER OR PUSHCHAIR",
//                                                    "count": 0,
//                                                    "description": [
//                     "Stroller/Pushchair"
//                    ],
//                                                    "subcode": "0F4"
//                   }
//                  ],
//                                            "pieces": 0
//                 }
//                ]
//               },
//                                {
//                                    "kind": "qpxexpress#segmentPricing",
//                                    "fareId": "AD595E3sgAQ8qIgPMnEERU8LY0UQAx+blHarKryGs6Jo",
//                                    "segmentId": "GraLibNLopLnaLCa",
//                                    "freeBaggageOption": [
//                                        {
//                                            "kind": "qpxexpress#freeBaggageAllowance",
//                                            "bagDescriptor": [
//                                                {
//                                                    "kind": "qpxexpress#bagDescriptor",
//                                                    "commercialName": "ASSISTIVE DEVICES",
//                                                    "count": 0,
//                                                    "subcode": "0GM"
//                   },
//                                                {
//                                                    "kind": "qpxexpress#bagDescriptor",
//                                                    "commercialName": "INFANT CAR SEAT",
//                                                    "count": 0,
//                                                    "description": [
//                     "Infant Car Seat"
//                    ],
//                                                    "subcode": "0G5"
//                   },
//                                                {
//                                                    "kind": "qpxexpress#bagDescriptor",
//                                                    "commercialName": "STROLLER OR PUSHCHAIR",
//                                                    "count": 0,
//                                                    "description": [
//                     "Stroller/Pushchair"
//                    ],
//                                                    "subcode": "0F4"
//                   }
//                  ],
//                                            "pieces": 0
//                 }
//                ]
//               }
//              ],
//                            "baseFareTotal": "USD208.37",
//                            "saleFareTotal": "USD208.37",
//                            "saleTaxTotal": "USD36.73",
//                            "saleTotal": "USD245.10",
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
//                                    "salePrice": "USD15.63"
//               },
//                                {
//                                    "kind": "qpxexpress#taxInfo",
//                                    "id": "AY_001",
//                                    "chargeType": "GOVERNMENT",
//                                    "code": "AY",
//                                    "country": "US",
//                                    "salePrice": "USD5.60"
//               },
//                                {
//                                    "kind": "qpxexpress#taxInfo",
//                                    "id": "XF",
//                                    "chargeType": "GOVERNMENT",
//                                    "code": "XF",
//                                    "country": "US",
//                                    "salePrice": "USD7.50"
//               },
//                                {
//                                    "kind": "qpxexpress#taxInfo",
//                                    "id": "ZP",
//                                    "chargeType": "GOVERNMENT",
//                                    "code": "ZP",
//                                    "country": "US",
//                                    "salePrice": "USD8.00"
//               }
//              ],
//                            "fareCalculation": "ORL US X/CLT US ATL Q ORLATL18.60 189.77GA00XNH1 USD 208.37 END ZP MCO CLT XT 15.63US 8.00ZP 5.60AY 7.50XF MCO4.50 CLT3.00",
//                            "latestTicketingTime": "2015-03-15T23:59-04:00",
//                            "ptc": "ADT"
//             }
//            ]
//           },
//                {
//                    "kind": "qpxexpress#tripOption",
//                    "saleTotal": "USD246.60",
//                    "id": "G9uL2qExtE0MXrKDLkJXYB005",
//                    "slice": [
//                        {
//                            "kind": "qpxexpress#sliceInfo",
//                            "duration": 243,
//                            "segment": [
//                                {
//                                    "kind": "qpxexpress#segmentInfo",
//                                    "duration": 74,
//                                    "flight": {
//                                        "carrier": "US",
//                                        "number": "1515"
//                                    },
//                                    "id": "GvyHz2d3BqI15pkk",
//                                    "cabin": "COACH",
//                                    "bookingCode": "G",
//                                    "bookingCodeCount": 2,
//                                    "marriedSegmentGroup": "0",
//                                    "leg": [
//                                        {
//                                            "kind": "qpxexpress#legInfo",
//                                            "id": "LQU2oONFVIZGo5t3",
//                                            "aircraft": "763",
//                                            "arrivalTime": "2015-03-16T17:30-04:00",
//                                            "departureTime": "2015-03-16T16:16-04:00",
//                                            "origin": "MCO",
//                                            "destination": "MIA",
//                                            "duration": 74,
//                                            "operatingDisclosure": "OPERATED BY AMERICAN AIRLINES INC.",
//                                            "onTimePerformance": 65,
//                                            "mileage": 192,
//                                            "secure": true
//                 }
//                ],
//                                    "connectionDuration": 45
//               },
//                                {
//                                    "kind": "qpxexpress#segmentInfo",
//                                    "duration": 124,
//                                    "flight": {
//                                        "carrier": "US",
//                                        "number": "349"
//                                    },
//                                    "id": "GAd0PIZpSUvg-Qjf",
//                                    "cabin": "COACH",
//                                    "bookingCode": "G",
//                                    "bookingCodeCount": 2,
//                                    "marriedSegmentGroup": "0",
//                                    "leg": [
//                                        {
//                                            "kind": "qpxexpress#legInfo",
//                                            "id": "LSARnEFv-EjmnKIh",
//                                            "aircraft": "319",
//                                            "arrivalTime": "2015-03-16T20:19-04:00",
//                                            "departureTime": "2015-03-16T18:15-04:00",
//                                            "origin": "MIA",
//                                            "destination": "ATL",
//                                            "destinationTerminal": "N",
//                                            "duration": 124,
//                                            "operatingDisclosure": "OPERATED BY AMERICAN AIRLINES INC.",
//                                            "onTimePerformance": 74,
//                                            "mileage": 595,
//                                            "secure": true
//                 }
//                ]
//               }
//              ]
//             }
//            ],
//                    "pricing": [
//                        {
//                            "kind": "qpxexpress#pricingInfo",
//                            "fare": [
//                                {
//                                    "kind": "qpxexpress#fareInfo",
//                                    "id": "AD595E3sgAQ8qIgPMnEERU8LY0UQAx+blHarKryGs6Jo",
//                                    "carrier": "US",
//                                    "origin": "ORL",
//                                    "destination": "ATL",
//                                    "basisCode": "GA00XNH1"
//               }
//              ],
//                            "segmentPricing": [
//                                {
//                                    "kind": "qpxexpress#segmentPricing",
//                                    "fareId": "AD595E3sgAQ8qIgPMnEERU8LY0UQAx+blHarKryGs6Jo",
//                                    "segmentId": "GvyHz2d3BqI15pkk",
//                                    "freeBaggageOption": [
//                                        {
//                                            "kind": "qpxexpress#freeBaggageAllowance",
//                                            "bagDescriptor": [
//                                                {
//                                                    "kind": "qpxexpress#bagDescriptor",
//                                                    "commercialName": "ASSISTIVE DEVICES",
//                                                    "count": 0,
//                                                    "subcode": "0GM"
//                   },
//                                                {
//                                                    "kind": "qpxexpress#bagDescriptor",
//                                                    "commercialName": "INFANT CAR SEAT",
//                                                    "count": 0,
//                                                    "description": [
//                     "Infant Car Seat"
//                    ],
//                                                    "subcode": "0G5"
//                   },
//                                                {
//                                                    "kind": "qpxexpress#bagDescriptor",
//                                                    "commercialName": "STROLLER OR PUSHCHAIR",
//                                                    "count": 0,
//                                                    "description": [
//                     "Stroller/Pushchair"
//                    ],
//                                                    "subcode": "0F4"
//                   }
//                  ],
//                                            "pieces": 0
//                 }
//                ]
//               },
//                                {
//                                    "kind": "qpxexpress#segmentPricing",
//                                    "fareId": "AD595E3sgAQ8qIgPMnEERU8LY0UQAx+blHarKryGs6Jo",
//                                    "segmentId": "GAd0PIZpSUvg-Qjf",
//                                    "freeBaggageOption": [
//                                        {
//                                            "kind": "qpxexpress#freeBaggageAllowance",
//                                            "bagDescriptor": [
//                                                {
//                                                    "kind": "qpxexpress#bagDescriptor",
//                                                    "commercialName": "ASSISTIVE DEVICES",
//                                                    "count": 0,
//                                                    "subcode": "0GM"
//                   },
//                                                {
//                                                    "kind": "qpxexpress#bagDescriptor",
//                                                    "commercialName": "INFANT CAR SEAT",
//                                                    "count": 0,
//                                                    "description": [
//                     "Infant Car Seat"
//                    ],
//                                                    "subcode": "0G5"
//                   },
//                                                {
//                                                    "kind": "qpxexpress#bagDescriptor",
//                                                    "commercialName": "STROLLER OR PUSHCHAIR",
//                                                    "count": 0,
//                                                    "description": [
//                     "Stroller/Pushchair"
//                    ],
//                                                    "subcode": "0F4"
//                   }
//                  ],
//                                            "pieces": 0
//                 }
//                ]
//               }
//              ],
//                            "baseFareTotal": "USD208.37",
//                            "saleFareTotal": "USD208.37",
//                            "saleTaxTotal": "USD38.23",
//                            "saleTotal": "USD246.60",
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
//                                    "salePrice": "USD15.63"
//               },
//                                {
//                                    "kind": "qpxexpress#taxInfo",
//                                    "id": "AY_001",
//                                    "chargeType": "GOVERNMENT",
//                                    "code": "AY",
//                                    "country": "US",
//                                    "salePrice": "USD5.60"
//               },
//                                {
//                                    "kind": "qpxexpress#taxInfo",
//                                    "id": "XF",
//                                    "chargeType": "GOVERNMENT",
//                                    "code": "XF",
//                                    "country": "US",
//                                    "salePrice": "USD9.00"
//               },
//                                {
//                                    "kind": "qpxexpress#taxInfo",
//                                    "id": "ZP",
//                                    "chargeType": "GOVERNMENT",
//                                    "code": "ZP",
//                                    "country": "US",
//                                    "salePrice": "USD8.00"
//               }
//              ],
//                            "fareCalculation": "ORL US X/MIA US ATL Q ORLATL18.60 189.77GA00XNH1 USD 208.37 END ZP MCO MIA XT 15.63US 8.00ZP 5.60AY 9.00XF MCO4.50 MIA4.50",
//                            "latestTicketingTime": "2015-03-15T23:59-04:00",
//                            "ptc": "ADT"
//             }
//            ]
//           }
//          ]
//        }
//    };
//
//
//    self.trips = data.trips;


});