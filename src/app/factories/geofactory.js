'use strict';
angular.module('skedaddle')
    .factory('geo', function () {

        return {

            geoFindMe: function () {
                if (!navigator.geolocation) {
                    var geo_results = {
                        "lat": null,
                        "long": null,
                        "used_geo": false
                    };
                };

                function success(position) {
                    var latitude = position.coords.latitude;
                    var longitude = position.coords.longitude;
                    var did_geo = true;

                    var geo_results = {
                        "lat": latitude,
                        "long": longitude,
                        "did_geo": true
                    };
                };

                function error() {
                    var geo_results = {
                        "lat": null,
                        "long": null,
                        "used_geo": false
                    };
                };


                navigator.geolocation.getCurrentPosition(success, error);
            }

        }

    });