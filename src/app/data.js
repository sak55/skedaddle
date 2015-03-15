$(document).ready(function () {



/////
//var API = {
//        'protocol': 'https',
//        'host': 'googleapis.com/qpxExpress',
//        'base': 'v1',
//        'path': 'trips/search',
//        'query': {
//            "request": {
//                "slice": [
//                    {
//                        "origin": "MCO",
//                        "destination": "ATL",
//                        "date": "2015-03-16",
//                        "maxStops": 0
//      },
//                    {
//                        "origin": "ATL",
//                        "destination": "MCO",
//                        "date": "2015-03-18"
//      }
//    ],
//                "passengers": {
//                    "adultCount": 1,
//                    "infantInLapCount": 0,
//                    "infantInSeatCount": 0,
//                    "childCount": 0,
//                    "seniorCount": 0
//                },
//                "solutions": 10,
//                "maxPrice": "400",
//                "refundable": false
//            }
//        }
//        'api_key': 'AIzaSyCR6G5517GCv0MKX5Z8wjetXS4NchVfDHI'
//    },
//};
//
//function urlForAPI() {
//
//return url.format(_.extend({}, API, {
//    'pathname': API.base + '/' + API.path
//}));
//}
//console.log(urlForAPI);
///**
// * @param Object data from the Etsy API (raw)
// * @returns Object
// */
//function transform(data) {
//return _.map(data.results, function (object) {
//    return {
//        title: object.title,
//        description: object.description,
//        price: object.price,
//        images: {
//            full: object.MainImage.url_fullxfull,
//            small: object.MainImage.url_170x135
//        }
//    }
//})
//}
//
//it.skip('should produce the correct URL', function () {
//expect(urlForAPI()).to.equal(
//    'https://openapi.etsy.com/v2/listings/some-category.json' +
//    '?limit=50&offset=0&api_key=q4ubii6kukovuc0hl2e8myxx' +
//    '&fields=title%2Cdescription%2Cprice%2Ccurrency_code' +
//    '&includes=MainImage'
//);
//});
//
//
//describe('transform', function () {
//describe('given `trending.json` from the API', function () {
//    var trending;
//
//    beforeEach(function () {
//        // Feed the raw Etsy data to `transform` to get nicer data...
//        trending = transform(require('./trending/trending.json'));
//    });
//
//    it('should have 50 results', function () {
//        assert.equal(trending.length, 50,
//            'Because we asked for `limit=50`, right?'
//        );
//    });
//    describe('the fields I expect to have for each listing', function () {
//        it('should have a `title` field', function () {
//            expect(_.pluck(trending, 'title').length).to.equal(trending.length);
//        });
//
//        it('should have a `description` field', function () {
//            expect(_.pluck(trending, 'description').length).to.equal(trending.length);
//        });
//
//        it.skip('should NOT have a `foo` field', function () {
//            expect(_.pluck(trending, 'foo').length).to.equal(0);
//        });
//
//        it('should have a `MainImage` field', function () {
//            expect(trending[0].images).to.be.a('object');
//            expect(trending[0].images.full).to.be.a('string');
//            expect(trending[0].images.small).to.be.a('string');
//        })
//    });
//}); // END describe `trending.json`
//
//describe('given `some-category.json` from the API', function () {
//    var products;
//
//    beforeEach(function () {
//        products = transform(require('./art/art.json'));
//    });
//
//    describe('everything that `trending.json` has, right?', function () {
//        it('should have 50 results', function () {
//            expect(products).to.be.length(50)
//        })
//        it('should have a `has_variations` field for each item so we can check variations', function () {
//            expect(_.pluck(products, 'has_variations')).to.be.length(50)
//        })
//    }); // END describe `some-category.json`
//});
//
//describe('given a specified `subCategory`, describe the results', function () {
//    it('should show that we forgot to include listing_id', function () {
//        var weddingClothingSub = require('./wedding/weddingSubCategories/category=wedding-clothing.json');
//        expect(weddingClothingSub[0]).to.equal(undefined)
//    })
//})
//});
/////

var request, flightResult, price, tripItinerary, flightLength, details, airlineCode, flightNum, PlacesAndTimes, arrivalTime, destination, departureTime, destination;

var data = $.getJSON("data.json", function (populatedFlights) {
    console.log("success");
})
.done(function () {
    console.log("second success");
})
.fail(function () {
    console.log("error");
})
.always(function () {
    console.log("complete");
});

// Perform other work here ...

// Set another completion function for the request above
data.complete(function () {
console.log("second complete");
});

//object
request = {
"kind": "qpxExpress#tripsSearch",
"trips": {
    "kind": "qpxexpress#tripOptions",
    "requestId": "PEcLsVJjCrHNlkPnW0Lkny",
    "data": {
        "kind": "qpxexpress#data",
        "airport": [
            {
                "kind": "qpxexpress#airportData",
                "code": "ATL",
                "city": "ATL",
                "name": "Atlanta Hartsfield-Jackson ATL"
    },
            {
                "kind": "qpxexpress#airportData",
                "code": "CLT",
                "city": "CLT",
                "name": "Charlotte Douglas"
    },
            {
                "kind": "qpxexpress#airportData",
                "code": "MCO",
                "city": "ORL",
                "name": "Orlando International"
    },
            {
                "kind": "qpxexpress#airportData",
                "code": "MIA",
                "city": "MIA",
                "name": "Miami International"
    }
   ],
        "city": [
            {
                "kind": "qpxexpress#cityData",
                "code": "ATL",
                "name": "Atlanta"
    },
            {
                "kind": "qpxexpress#cityData",
                "code": "CLT",
                "name": "Charlotte"
    },
            {
                "kind": "qpxexpress#cityData",
                "code": "MIA",
                "name": "Miami"
    },
            {
                "kind": "qpxexpress#cityData",
                "code": "ORL",
                "name": "Orlando"
    }
   ],
        "aircraft": [
            {
                "kind": "qpxexpress#aircraftData",
                "code": "319",
                "name": "Airbus A319"
    },
            {
                "kind": "qpxexpress#aircraftData",
                "code": "320",
                "name": "Airbus A320"
    },
            {
                "kind": "qpxexpress#aircraftData",
                "code": "321",
                "name": "Airbus A321"
    },
            {
                "kind": "qpxexpress#aircraftData",
                "code": "752",
                "name": "Boeing 757"
    },
            {
                "kind": "qpxexpress#aircraftData",
                "code": "763",
                "name": "Boeing 767"
    }
   ],
        "tax": [
            {
                "kind": "qpxexpress#taxData",
                "id": "ZP",
                "name": "US Flight Segment Tax"
    },
            {
                "kind": "qpxexpress#taxData",
                "id": "XF",
                "name": "US Passenger Facility Charge"
    },
            {
                "kind": "qpxexpress#taxData",
                "id": "US_001",
                "name": "US Transportation Tax"
    },
            {
                "kind": "qpxexpress#taxData",
                "id": "AY_001",
                "name": "US September 11th Security Fee"
    }
   ],
        "carrier": [
            {
                "kind": "qpxexpress#carrierData",
                "code": "F9",
                "name": "Frontier Airlines, Inc."
    },
            {
                "kind": "qpxexpress#carrierData",
                "code": "US",
                "name": "US Airways, Inc."
    }
   ]
    },
    "tripOption": [
        {
            "kind": "qpxexpress#tripOption",
            "saleTotal": "USD99.00",
            "id": "G9uL2qExtE0MXrKDLkJXYB001",
            "slice": [
                {
                    "kind": "qpxexpress#sliceInfo",
                    "duration": 85,
                    "segment": [
                        {
                            "kind": "qpxexpress#segmentInfo",
                            "duration": 85,
                            "flight": {
                                "carrier": "F9",
                                "number": "1147"
                            },
                            "id": "G-FzWpuA+vdXcoqq",
                            "cabin": "COACH",
                            "bookingCode": "Q",
                            "bookingCodeCount": 3,
                            "marriedSegmentGroup": "0",
                            "leg": [
                                {
                                    "kind": "qpxexpress#legInfo",
                                    "id": "L6Y1UcAbxSviYeTp",
                                    "aircraft": "319",
                                    "arrivalTime": "2015-03-16T15:00-04:00",
                                    "departureTime": "2015-03-16T13:35-04:00",
                                    "origin": "MCO",
                                    "destination": "ATL",
                                    "destinationTerminal": "N",
                                    "duration": 85,
                                    "onTimePerformance": 76,
                                    "mileage": 404,
                                    "meal": "Food and Beverages for Purchase",
                                    "secure": true
         }
        ]
       }
      ]
     }
    ],
            "pricing": [
                {
                    "kind": "qpxexpress#pricingInfo",
                    "fare": [
                        {
                            "kind": "qpxexpress#fareInfo",
                            "id": "AHn16ENobNtYZjWbhHqSVbY5HIbqfmKbTvZIztW6UUdU",
                            "carrier": "F9",
                            "origin": "ORL",
                            "destination": "ATL",
                            "basisCode": "Q00PXS5"
       }
      ],
                    "segmentPricing": [
                        {
                            "kind": "qpxexpress#segmentPricing",
                            "fareId": "AHn16ENobNtYZjWbhHqSVbY5HIbqfmKbTvZIztW6UUdU",
                            "segmentId": "G-FzWpuA+vdXcoqq",
                            "freeBaggageOption": [
                                {
                                    "kind": "qpxexpress#freeBaggageAllowance",
                                    "pieces": 0
         }
        ]
       }
      ],
                    "baseFareTotal": "USD78.98",
                    "saleFareTotal": "USD78.98",
                    "saleTaxTotal": "USD20.02",
                    "saleTotal": "USD99.00",
                    "passengers": {
                        "kind": "qpxexpress#passengerCounts",
                        "adultCount": 1
                    },
                    "tax": [
                        {
                            "kind": "qpxexpress#taxInfo",
                            "id": "US_001",
                            "chargeType": "GOVERNMENT",
                            "code": "US",
                            "country": "US",
                            "salePrice": "USD5.92"
       },
                        {
                            "kind": "qpxexpress#taxInfo",
                            "id": "AY_001",
                            "chargeType": "GOVERNMENT",
                            "code": "AY",
                            "country": "US",
                            "salePrice": "USD5.60"
       },
                        {
                            "kind": "qpxexpress#taxInfo",
                            "id": "XF",
                            "chargeType": "GOVERNMENT",
                            "code": "XF",
                            "country": "US",
                            "salePrice": "USD4.50"
       },
                        {
                            "kind": "qpxexpress#taxInfo",
                            "id": "ZP",
                            "chargeType": "GOVERNMENT",
                            "code": "ZP",
                            "country": "US",
                            "salePrice": "USD4.00"
       }
      ],
                    "fareCalculation": "MCO F9 ATL 78.98Q00PXS5 USD 78.98 END ZP MCO XT 5.92US 4.00ZP 5.60AY 4.50XF MCO4.50",
                    "latestTicketingTime": "2015-03-14T17:30-04:00",
                    "ptc": "ADT"
     }
    ]
   },
        {
            "kind": "qpxexpress#tripOption",
            "saleTotal": "USD245.10",
            "id": "G9uL2qExtE0MXrKDLkJXYB003",
            "slice": [
                {
                    "kind": "qpxexpress#sliceInfo",
                    "duration": 230,
                    "segment": [
                        {
                            "kind": "qpxexpress#segmentInfo",
                            "duration": 97,
                            "flight": {
                                "carrier": "US",
                                "number": "2062"
                            },
                            "id": "G4JM0xjuWJqhRvoU",
                            "cabin": "COACH",
                            "bookingCode": "G",
                            "bookingCodeCount": 2,
                            "marriedSegmentGroup": "0",
                            "leg": [
                                {
                                    "kind": "qpxexpress#legInfo",
                                    "id": "LcomHOxFBsZ-3VGK",
                                    "aircraft": "321",
                                    "arrivalTime": "2015-03-16T06:57-04:00",
                                    "departureTime": "2015-03-16T05:20-04:00",
                                    "origin": "MCO",
                                    "destination": "CLT",
                                    "duration": 97,
                                    "onTimePerformance": 100,
                                    "mileage": 469,
                                    "secure": true
         }
        ],
                            "connectionDuration": 53
       },
                        {
                            "kind": "qpxexpress#segmentInfo",
                            "duration": 80,
                            "flight": {
                                "carrier": "US",
                                "number": "469"
                            },
                            "id": "GY7g8IkymPX6VuLI",
                            "cabin": "COACH",
                            "bookingCode": "G",
                            "bookingCodeCount": 2,
                            "marriedSegmentGroup": "0",
                            "leg": [
                                {
                                    "kind": "qpxexpress#legInfo",
                                    "id": "LCXC2QNh8Kv4-Tjp",
                                    "aircraft": "320",
                                    "arrivalTime": "2015-03-16T09:10-04:00",
                                    "departureTime": "2015-03-16T07:50-04:00",
                                    "origin": "CLT",
                                    "destination": "ATL",
                                    "destinationTerminal": "N",
                                    "duration": 80,
                                    "onTimePerformance": 81,
                                    "mileage": 226,
                                    "secure": true
         }
        ]
       }
      ]
     }
    ],
            "pricing": [
                {
                    "kind": "qpxexpress#pricingInfo",
                    "fare": [
                        {
                            "kind": "qpxexpress#fareInfo",
                            "id": "AD595E3sgAQ8qIgPMnEERU8LY0UQAx+blHarKryGs6Jo",
                            "carrier": "US",
                            "origin": "ORL",
                            "destination": "ATL",
                            "basisCode": "GA00XNH1"
       }
      ],
                    "segmentPricing": [
                        {
                            "kind": "qpxexpress#segmentPricing",
                            "fareId": "AD595E3sgAQ8qIgPMnEERU8LY0UQAx+blHarKryGs6Jo",
                            "segmentId": "G4JM0xjuWJqhRvoU",
                            "freeBaggageOption": [
                                {
                                    "kind": "qpxexpress#freeBaggageAllowance",
                                    "bagDescriptor": [
                                        {
                                            "kind": "qpxexpress#bagDescriptor",
                                            "commercialName": "ASSISTIVE DEVICES",
                                            "count": 0,
                                            "subcode": "0GM"
           },
                                        {
                                            "kind": "qpxexpress#bagDescriptor",
                                            "commercialName": "INFANT CAR SEAT",
                                            "count": 0,
                                            "description": [
             "Infant Car Seat"
            ],
                                            "subcode": "0G5"
           },
                                        {
                                            "kind": "qpxexpress#bagDescriptor",
                                            "commercialName": "STROLLER OR PUSHCHAIR",
                                            "count": 0,
                                            "description": [
             "Stroller/Pushchair"
            ],
                                            "subcode": "0F4"
           }
          ],
                                    "pieces": 0
         }
        ]
       },
                        {
                            "kind": "qpxexpress#segmentPricing",
                            "fareId": "AD595E3sgAQ8qIgPMnEERU8LY0UQAx+blHarKryGs6Jo",
                            "segmentId": "GY7g8IkymPX6VuLI",
                            "freeBaggageOption": [
                                {
                                    "kind": "qpxexpress#freeBaggageAllowance",
                                    "bagDescriptor": [
                                        {
                                            "kind": "qpxexpress#bagDescriptor",
                                            "commercialName": "ASSISTIVE DEVICES",
                                            "count": 0,
                                            "subcode": "0GM"
           },
                                        {
                                            "kind": "qpxexpress#bagDescriptor",
                                            "commercialName": "INFANT CAR SEAT",
                                            "count": 0,
                                            "description": [
             "Infant Car Seat"
            ],
                                            "subcode": "0G5"
           },
                                        {
                                            "kind": "qpxexpress#bagDescriptor",
                                            "commercialName": "STROLLER OR PUSHCHAIR",
                                            "count": 0,
                                            "description": [
             "Stroller/Pushchair"
            ],
                                            "subcode": "0F4"
           }
          ],
                                    "pieces": 0
         }
        ]
       }
      ],
                    "baseFareTotal": "USD208.37",
                    "saleFareTotal": "USD208.37",
                    "saleTaxTotal": "USD36.73",
                    "saleTotal": "USD245.10",
                    "passengers": {
                        "kind": "qpxexpress#passengerCounts",
                        "adultCount": 1
                    },
                    "tax": [
                        {
                            "kind": "qpxexpress#taxInfo",
                            "id": "US_001",
                            "chargeType": "GOVERNMENT",
                            "code": "US",
                            "country": "US",
                            "salePrice": "USD15.63"
       },
                        {
                            "kind": "qpxexpress#taxInfo",
                            "id": "AY_001",
                            "chargeType": "GOVERNMENT",
                            "code": "AY",
                            "country": "US",
                            "salePrice": "USD5.60"
       },
                        {
                            "kind": "qpxexpress#taxInfo",
                            "id": "XF",
                            "chargeType": "GOVERNMENT",
                            "code": "XF",
                            "country": "US",
                            "salePrice": "USD7.50"
       },
                        {
                            "kind": "qpxexpress#taxInfo",
                            "id": "ZP",
                            "chargeType": "GOVERNMENT",
                            "code": "ZP",
                            "country": "US",
                            "salePrice": "USD8.00"
       }
      ],
                    "fareCalculation": "ORL US X/CLT US ATL Q ORLATL18.60 189.77GA00XNH1 USD 208.37 END ZP MCO CLT XT 15.63US 8.00ZP 5.60AY 7.50XF MCO4.50 CLT3.00",
                    "latestTicketingTime": "2015-03-15T23:59-04:00",
                    "ptc": "ADT"
     }
    ]
   },
        {
            "kind": "qpxexpress#tripOption",
            "saleTotal": "USD245.10",
            "id": "G9uL2qExtE0MXrKDLkJXYB004",
            "slice": [
                {
                    "kind": "qpxexpress#sliceInfo",
                    "duration": 246,
                    "segment": [
                        {
                            "kind": "qpxexpress#segmentInfo",
                            "duration": 101,
                            "flight": {
                                "carrier": "US",
                                "number": "833"
                            },
                            "id": "G1KPEPJWWPKi8Q6c",
                            "cabin": "COACH",
                            "bookingCode": "G",
                            "bookingCodeCount": 9,
                            "marriedSegmentGroup": "0",
                            "leg": [
                                {
                                    "kind": "qpxexpress#legInfo",
                                    "id": "Lm-wQvkcb6rQ1NvM",
                                    "aircraft": "752",
                                    "arrivalTime": "2015-03-16T10:26-04:00",
                                    "departureTime": "2015-03-16T08:45-04:00",
                                    "origin": "MCO",
                                    "destination": "CLT",
                                    "duration": 101,
                                    "onTimePerformance": 94,
                                    "mileage": 469,
                                    "secure": true
         }
        ],
                            "connectionDuration": 69
       },
                        {
                            "kind": "qpxexpress#segmentInfo",
                            "duration": 76,
                            "flight": {
                                "carrier": "US",
                                "number": "1814"
                            },
                            "id": "GqI5JFaq+rBNTMZ7",
                            "cabin": "COACH",
                            "bookingCode": "G",
                            "bookingCodeCount": 9,
                            "marriedSegmentGroup": "0",
                            "leg": [
                                {
                                    "kind": "qpxexpress#legInfo",
                                    "id": "LARgZRun3QJ2LIAL",
                                    "aircraft": "321",
                                    "arrivalTime": "2015-03-16T12:51-04:00",
                                    "departureTime": "2015-03-16T11:35-04:00",
                                    "origin": "CLT",
                                    "destination": "ATL",
                                    "destinationTerminal": "N",
                                    "duration": 76,
                                    "onTimePerformance": 84,
                                    "mileage": 226,
                                    "secure": true
         }
        ]
       }
      ]
     }
    ],
            "pricing": [
                {
                    "kind": "qpxexpress#pricingInfo",
                    "fare": [
                        {
                            "kind": "qpxexpress#fareInfo",
                            "id": "AD595E3sgAQ8qIgPMnEERU8LY0UQAx+blHarKryGs6Jo",
                            "carrier": "US",
                            "origin": "ORL",
                            "destination": "ATL",
                            "basisCode": "GA00XNH1"
       }
      ],
                    "segmentPricing": [
                        {
                            "kind": "qpxexpress#segmentPricing",
                            "fareId": "AD595E3sgAQ8qIgPMnEERU8LY0UQAx+blHarKryGs6Jo",
                            "segmentId": "G1KPEPJWWPKi8Q6c",
                            "freeBaggageOption": [
                                {
                                    "kind": "qpxexpress#freeBaggageAllowance",
                                    "bagDescriptor": [
                                        {
                                            "kind": "qpxexpress#bagDescriptor",
                                            "commercialName": "ASSISTIVE DEVICES",
                                            "count": 0,
                                            "subcode": "0GM"
           },
                                        {
                                            "kind": "qpxexpress#bagDescriptor",
                                            "commercialName": "INFANT CAR SEAT",
                                            "count": 0,
                                            "description": [
             "Infant Car Seat"
            ],
                                            "subcode": "0G5"
           },
                                        {
                                            "kind": "qpxexpress#bagDescriptor",
                                            "commercialName": "STROLLER OR PUSHCHAIR",
                                            "count": 0,
                                            "description": [
             "Stroller/Pushchair"
            ],
                                            "subcode": "0F4"
           }
          ],
                                    "pieces": 0
         }
        ]
       },
                        {
                            "kind": "qpxexpress#segmentPricing",
                            "fareId": "AD595E3sgAQ8qIgPMnEERU8LY0UQAx+blHarKryGs6Jo",
                            "segmentId": "GqI5JFaq+rBNTMZ7",
                            "freeBaggageOption": [
                                {
                                    "kind": "qpxexpress#freeBaggageAllowance",
                                    "bagDescriptor": [
                                        {
                                            "kind": "qpxexpress#bagDescriptor",
                                            "commercialName": "ASSISTIVE DEVICES",
                                            "count": 0,
                                            "subcode": "0GM"
           },
                                        {
                                            "kind": "qpxexpress#bagDescriptor",
                                            "commercialName": "INFANT CAR SEAT",
                                            "count": 0,
                                            "description": [
             "Infant Car Seat"
            ],
                                            "subcode": "0G5"
           },
                                        {
                                            "kind": "qpxexpress#bagDescriptor",
                                            "commercialName": "STROLLER OR PUSHCHAIR",
                                            "count": 0,
                                            "description": [
             "Stroller/Pushchair"
            ],
                                            "subcode": "0F4"
           }
          ],
                                    "pieces": 0
         }
        ]
       }
      ],
                    "baseFareTotal": "USD208.37",
                    "saleFareTotal": "USD208.37",
                    "saleTaxTotal": "USD36.73",
                    "saleTotal": "USD245.10",
                    "passengers": {
                        "kind": "qpxexpress#passengerCounts",
                        "adultCount": 1
                    },
                    "tax": [
                        {
                            "kind": "qpxexpress#taxInfo",
                            "id": "US_001",
                            "chargeType": "GOVERNMENT",
                            "code": "US",
                            "country": "US",
                            "salePrice": "USD15.63"
       },
                        {
                            "kind": "qpxexpress#taxInfo",
                            "id": "AY_001",
                            "chargeType": "GOVERNMENT",
                            "code": "AY",
                            "country": "US",
                            "salePrice": "USD5.60"
       },
                        {
                            "kind": "qpxexpress#taxInfo",
                            "id": "XF",
                            "chargeType": "GOVERNMENT",
                            "code": "XF",
                            "country": "US",
                            "salePrice": "USD7.50"
       },
                        {
                            "kind": "qpxexpress#taxInfo",
                            "id": "ZP",
                            "chargeType": "GOVERNMENT",
                            "code": "ZP",
                            "country": "US",
                            "salePrice": "USD8.00"
       }
      ],
                    "fareCalculation": "ORL US X/CLT US ATL Q ORLATL18.60 189.77GA00XNH1 USD 208.37 END ZP MCO CLT XT 15.63US 8.00ZP 5.60AY 7.50XF MCO4.50 CLT3.00",
                    "latestTicketingTime": "2015-03-15T23:59-04:00",
                    "ptc": "ADT"
     }
    ]
   },
        {
            "kind": "qpxexpress#tripOption",
            "saleTotal": "USD245.10",
            "id": "G9uL2qExtE0MXrKDLkJXYB002",
            "slice": [
                {
                    "kind": "qpxexpress#sliceInfo",
                    "duration": 225,
                    "segment": [
                        {
                            "kind": "qpxexpress#segmentInfo",
                            "duration": 100,
                            "flight": {
                                "carrier": "US",
                                "number": "724"
                            },
                            "id": "GraLibNLopLnaLCa",
                            "cabin": "COACH",
                            "bookingCode": "G",
                            "bookingCodeCount": 9,
                            "marriedSegmentGroup": "0",
                            "leg": [
                                {
                                    "kind": "qpxexpress#legInfo",
                                    "id": "LhSX2yTt+vah8nSn",
                                    "aircraft": "321",
                                    "arrivalTime": "2015-03-16T17:10-04:00",
                                    "departureTime": "2015-03-16T15:30-04:00",
                                    "origin": "MCO",
                                    "destination": "CLT",
                                    "duration": 100,
                                    "onTimePerformance": 84,
                                    "mileage": 469,
                                    "secure": true
         }
        ],
                            "connectionDuration": 49
       },
                        {
                            "kind": "qpxexpress#segmentInfo",
                            "duration": 76,
                            "flight": {
                                "carrier": "US",
                                "number": "2041"
                            },
                            "id": "G3XEDv1lfZJjm-fU",
                            "cabin": "COACH",
                            "bookingCode": "G",
                            "bookingCodeCount": 9,
                            "marriedSegmentGroup": "0",
                            "leg": [
                                {
                                    "kind": "qpxexpress#legInfo",
                                    "id": "LVAXkWB9Z6-RJoq-",
                                    "aircraft": "319",
                                    "arrivalTime": "2015-03-16T19:15-04:00",
                                    "departureTime": "2015-03-16T17:59-04:00",
                                    "origin": "CLT",
                                    "destination": "ATL",
                                    "destinationTerminal": "N",
                                    "duration": 76,
                                    "onTimePerformance": 81,
                                    "mileage": 226,
                                    "secure": true
         }
        ]
       }
      ]
     }
    ],
            "pricing": [
                {
                    "kind": "qpxexpress#pricingInfo",
                    "fare": [
                        {
                            "kind": "qpxexpress#fareInfo",
                            "id": "AD595E3sgAQ8qIgPMnEERU8LY0UQAx+blHarKryGs6Jo",
                            "carrier": "US",
                            "origin": "ORL",
                            "destination": "ATL",
                            "basisCode": "GA00XNH1"
       }
      ],
                    "segmentPricing": [
                        {
                            "kind": "qpxexpress#segmentPricing",
                            "fareId": "AD595E3sgAQ8qIgPMnEERU8LY0UQAx+blHarKryGs6Jo",
                            "segmentId": "G3XEDv1lfZJjm-fU",
                            "freeBaggageOption": [
                                {
                                    "kind": "qpxexpress#freeBaggageAllowance",
                                    "bagDescriptor": [
                                        {
                                            "kind": "qpxexpress#bagDescriptor",
                                            "commercialName": "ASSISTIVE DEVICES",
                                            "count": 0,
                                            "subcode": "0GM"
           },
                                        {
                                            "kind": "qpxexpress#bagDescriptor",
                                            "commercialName": "INFANT CAR SEAT",
                                            "count": 0,
                                            "description": [
             "Infant Car Seat"
            ],
                                            "subcode": "0G5"
           },
                                        {
                                            "kind": "qpxexpress#bagDescriptor",
                                            "commercialName": "STROLLER OR PUSHCHAIR",
                                            "count": 0,
                                            "description": [
             "Stroller/Pushchair"
            ],
                                            "subcode": "0F4"
           }
          ],
                                    "pieces": 0
         }
        ]
       },
                        {
                            "kind": "qpxexpress#segmentPricing",
                            "fareId": "AD595E3sgAQ8qIgPMnEERU8LY0UQAx+blHarKryGs6Jo",
                            "segmentId": "GraLibNLopLnaLCa",
                            "freeBaggageOption": [
                                {
                                    "kind": "qpxexpress#freeBaggageAllowance",
                                    "bagDescriptor": [
                                        {
                                            "kind": "qpxexpress#bagDescriptor",
                                            "commercialName": "ASSISTIVE DEVICES",
                                            "count": 0,
                                            "subcode": "0GM"
           },
                                        {
                                            "kind": "qpxexpress#bagDescriptor",
                                            "commercialName": "INFANT CAR SEAT",
                                            "count": 0,
                                            "description": [
             "Infant Car Seat"
            ],
                                            "subcode": "0G5"
           },
                                        {
                                            "kind": "qpxexpress#bagDescriptor",
                                            "commercialName": "STROLLER OR PUSHCHAIR",
                                            "count": 0,
                                            "description": [
             "Stroller/Pushchair"
            ],
                                            "subcode": "0F4"
           }
          ],
                                    "pieces": 0
         }
        ]
       }
      ],
                    "baseFareTotal": "USD208.37",
                    "saleFareTotal": "USD208.37",
                    "saleTaxTotal": "USD36.73",
                    "saleTotal": "USD245.10",
                    "passengers": {
                        "kind": "qpxexpress#passengerCounts",
                        "adultCount": 1
                    },
                    "tax": [
                        {
                            "kind": "qpxexpress#taxInfo",
                            "id": "US_001",
                            "chargeType": "GOVERNMENT",
                            "code": "US",
                            "country": "US",
                            "salePrice": "USD15.63"
       },
                        {
                            "kind": "qpxexpress#taxInfo",
                            "id": "AY_001",
                            "chargeType": "GOVERNMENT",
                            "code": "AY",
                            "country": "US",
                            "salePrice": "USD5.60"
       },
                        {
                            "kind": "qpxexpress#taxInfo",
                            "id": "XF",
                            "chargeType": "GOVERNMENT",
                            "code": "XF",
                            "country": "US",
                            "salePrice": "USD7.50"
       },
                        {
                            "kind": "qpxexpress#taxInfo",
                            "id": "ZP",
                            "chargeType": "GOVERNMENT",
                            "code": "ZP",
                            "country": "US",
                            "salePrice": "USD8.00"
       }
      ],
                    "fareCalculation": "ORL US X/CLT US ATL Q ORLATL18.60 189.77GA00XNH1 USD 208.37 END ZP MCO CLT XT 15.63US 8.00ZP 5.60AY 7.50XF MCO4.50 CLT3.00",
                    "latestTicketingTime": "2015-03-15T23:59-04:00",
                    "ptc": "ADT"
     }
    ]
   },
        {
            "kind": "qpxexpress#tripOption",
            "saleTotal": "USD246.60",
            "id": "G9uL2qExtE0MXrKDLkJXYB005",
            "slice": [
                {
                    "kind": "qpxexpress#sliceInfo",
                    "duration": 243,
                    "segment": [
                        {
                            "kind": "qpxexpress#segmentInfo",
                            "duration": 74,
                            "flight": {
                                "carrier": "US",
                                "number": "1515"
                            },
                            "id": "GvyHz2d3BqI15pkk",
                            "cabin": "COACH",
                            "bookingCode": "G",
                            "bookingCodeCount": 2,
                            "marriedSegmentGroup": "0",
                            "leg": [
                                {
                                    "kind": "qpxexpress#legInfo",
                                    "id": "LQU2oONFVIZGo5t3",
                                    "aircraft": "763",
                                    "arrivalTime": "2015-03-16T17:30-04:00",
                                    "departureTime": "2015-03-16T16:16-04:00",
                                    "origin": "MCO",
                                    "destination": "MIA",
                                    "duration": 74,
                                    "operatingDisclosure": "OPERATED BY AMERICAN AIRLINES INC.",
                                    "onTimePerformance": 65,
                                    "mileage": 192,
                                    "secure": true
         }
        ],
                            "connectionDuration": 45
       },
                        {
                            "kind": "qpxexpress#segmentInfo",
                            "duration": 124,
                            "flight": {
                                "carrier": "US",
                                "number": "349"
                            },
                            "id": "GAd0PIZpSUvg-Qjf",
                            "cabin": "COACH",
                            "bookingCode": "G",
                            "bookingCodeCount": 2,
                            "marriedSegmentGroup": "0",
                            "leg": [
                                {
                                    "kind": "qpxexpress#legInfo",
                                    "id": "LSARnEFv-EjmnKIh",
                                    "aircraft": "319",
                                    "arrivalTime": "2015-03-16T20:19-04:00",
                                    "departureTime": "2015-03-16T18:15-04:00",
                                    "origin": "MIA",
                                    "destination": "ATL",
                                    "destinationTerminal": "N",
                                    "duration": 124,
                                    "operatingDisclosure": "OPERATED BY AMERICAN AIRLINES INC.",
                                    "onTimePerformance": 74,
                                    "mileage": 595,
                                    "secure": true
         }
        ]
       }
      ]
     }
    ],
            "pricing": [
                {
                    "kind": "qpxexpress#pricingInfo",
                    "fare": [
                        {
                            "kind": "qpxexpress#fareInfo",
                            "id": "AD595E3sgAQ8qIgPMnEERU8LY0UQAx+blHarKryGs6Jo",
                            "carrier": "US",
                            "origin": "ORL",
                            "destination": "ATL",
                            "basisCode": "GA00XNH1"
       }
      ],
                    "segmentPricing": [
                        {
                            "kind": "qpxexpress#segmentPricing",
                            "fareId": "AD595E3sgAQ8qIgPMnEERU8LY0UQAx+blHarKryGs6Jo",
                            "segmentId": "GvyHz2d3BqI15pkk",
                            "freeBaggageOption": [
                                {
                                    "kind": "qpxexpress#freeBaggageAllowance",
                                    "bagDescriptor": [
                                        {
                                            "kind": "qpxexpress#bagDescriptor",
                                            "commercialName": "ASSISTIVE DEVICES",
                                            "count": 0,
                                            "subcode": "0GM"
           },
                                        {
                                            "kind": "qpxexpress#bagDescriptor",
                                            "commercialName": "INFANT CAR SEAT",
                                            "count": 0,
                                            "description": [
             "Infant Car Seat"
            ],
                                            "subcode": "0G5"
           },
                                        {
                                            "kind": "qpxexpress#bagDescriptor",
                                            "commercialName": "STROLLER OR PUSHCHAIR",
                                            "count": 0,
                                            "description": [
             "Stroller/Pushchair"
            ],
                                            "subcode": "0F4"
           }
          ],
                                    "pieces": 0
         }
        ]
       },
                        {
                            "kind": "qpxexpress#segmentPricing",
                            "fareId": "AD595E3sgAQ8qIgPMnEERU8LY0UQAx+blHarKryGs6Jo",
                            "segmentId": "GAd0PIZpSUvg-Qjf",
                            "freeBaggageOption": [
                                {
                                    "kind": "qpxexpress#freeBaggageAllowance",
                                    "bagDescriptor": [
                                        {
                                            "kind": "qpxexpress#bagDescriptor",
                                            "commercialName": "ASSISTIVE DEVICES",
                                            "count": 0,
                                            "subcode": "0GM"
           },
                                        {
                                            "kind": "qpxexpress#bagDescriptor",
                                            "commercialName": "INFANT CAR SEAT",
                                            "count": 0,
                                            "description": [
             "Infant Car Seat"
            ],
                                            "subcode": "0G5"
           },
                                        {
                                            "kind": "qpxexpress#bagDescriptor",
                                            "commercialName": "STROLLER OR PUSHCHAIR",
                                            "count": 0,
                                            "description": [
             "Stroller/Pushchair"
            ],
                                            "subcode": "0F4"
           }
          ],
                                    "pieces": 0
         }
        ]
       }
      ],
                    "baseFareTotal": "USD208.37",
                    "saleFareTotal": "USD208.37",
                    "saleTaxTotal": "USD38.23",
                    "saleTotal": "USD246.60",
                    "passengers": {
                        "kind": "qpxexpress#passengerCounts",
                        "adultCount": 1
                    },
                    "tax": [
                        {
                            "kind": "qpxexpress#taxInfo",
                            "id": "US_001",
                            "chargeType": "GOVERNMENT",
                            "code": "US",
                            "country": "US",
                            "salePrice": "USD15.63"
       },
                        {
                            "kind": "qpxexpress#taxInfo",
                            "id": "AY_001",
                            "chargeType": "GOVERNMENT",
                            "code": "AY",
                            "country": "US",
                            "salePrice": "USD5.60"
       },
                        {
                            "kind": "qpxexpress#taxInfo",
                            "id": "XF",
                            "chargeType": "GOVERNMENT",
                            "code": "XF",
                            "country": "US",
                            "salePrice": "USD9.00"
       },
                        {
                            "kind": "qpxexpress#taxInfo",
                            "id": "ZP",
                            "chargeType": "GOVERNMENT",
                            "code": "ZP",
                            "country": "US",
                            "salePrice": "USD8.00"
       }
      ],
                    "fareCalculation": "ORL US X/MIA US ATL Q ORLATL18.60 189.77GA00XNH1 USD 208.37 END ZP MCO MIA XT 15.63US 8.00ZP 5.60AY 9.00XF MCO4.50 MIA4.50",
                    "latestTicketingTime": "2015-03-15T23:59-04:00",
                    "ptc": "ADT"
     }
    ]
   }
  ]
}
};

flightResult = request.trips.tripOption[0]

price = flightResult.saleTotal; console.log(price);

tripItinerary = flightResult.slice[0];

flightLength = tripItinerary.duration; console.log(flightLength)

details = tripItinerary.segment[0];

airlineCode = details.flight.carrier; console.log(airlineCode);

flightNum = details.flight.number; console.log(flightNum);

PlacesAndTimes = details.leg[0];

arrivalTime = PlacesAndTimes.arrivalTime; console.log(arrivalTime);

destination = PlacesAndTimes.destination; console.log(destination);

departureTime = PlacesAndTimes.departureTime; console.log(departureTime);

origin = PlacesAndTimes.origin; console.log(origin);





//var PonceInlet = $.getJSON( 'https://api.worldweatheronline.com/free/v2/marine.ashx?key=a145c87bd8200185ba6a90fd593e2&format=json&tide=yes&q=29.0947,-80.9425', function(conditions) { 
//    
//    var PIallData = conditions.data.weather[0];
//    var PIHourlyData = PIallData.hourly[0];
//    var PIiconOBJ = PIHourlyData.weatherIconUrl[0];
//    var PIicon = PIiconOBJ.value;
//    var PIcloud = PIHourlyData.cloudcover;
//    var PItemp = PIHourlyData.tempF;
//    var PIswell = PIHourlyData.swellHeight_m * 3;
//    var PIwater = PIHourlyData.waterTemp_F; 
//    
//    $("#PItemp").html("Temp: " + PItemp + "F");
//    $("#PIswell").html("Swell: " + PIswell  + "ft");
//    $("#PIwater").html("Water Temp: " + PIwater);
//    $("#PIcloud").html("Cloud cover: " + PIcloud + "%");
//     

//}); console.log(PonceInlet);  
//function geoFindMe() {
//  var output = document.getElementById("out");
//
//  if (!navigator.geolocation){
//    output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
//    return;
//  }
//
//  function success(position) {
//      output.innerHTML = '<p>Latitude is ' + myLatitude + '° <br>Longitude is ' + myLongitude + '°</p>';
//  };
//
//  function error() {
//      output.innerHTML = "Unable to retrieve your location";
//  };
//
//  output.innerHTML = "<p>Locating…</p>";
//
//  navigator.geolocation.getCurrentPosition(success, error);
//}

}); //close of jQuery
