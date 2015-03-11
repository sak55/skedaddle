'use strict';

angular.module('skedaddle', ['ngAnimate', 'ngCookies', 'ngSanitize', 'restangular', 'ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .state('order', {
                url: '/',
                templateUrl: 'app/order/order.html',
                contrller: 'OrderCtrl',
                controllerAs: 'order'
            });

        $urlRouterProvider.otherwise('/');
    });