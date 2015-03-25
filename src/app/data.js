//    //object
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
//    };
//    
//    flightResult = request.trips.tripOption[0]
//
//    price = flightResult.saleTotal;
//    console.log(price);
//
//    tripItinerary = flightResult.slice[0];
//
//    flightLength = tripItinerary.duration;
//    console.log(flightLength)
//
//    details = tripItinerary.segment[0];
//
//    airlineCode = details.flight.carrier;
//    console.log(airlineCode);
//
//    flightNum = details.flight.number;
//    console.log(flightNum);
//
//    PlacesAndTimes = details.leg[0];
//
//    arrivalTime = PlacesAndTimes.arrivalTime;
//    console.log(arrivalTime);
//
//    destination = PlacesAndTimes.destination;
//    console.log(destination);
//
//    departureTime = PlacesAndTimes.departureTime;
//    console.log(departureTime);
//
//    origin = PlacesAndTimes.origin;
//    console.log(origin);
//
