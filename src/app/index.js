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
                url: '/order',
                templateUrl: 'app/order/order.html',
                controller: 'OrderCtrl',
                controllerAs: 'order'
            });

        $urlRouterProvider.otherwise('/');
    });