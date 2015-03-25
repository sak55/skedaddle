'use strict';

angular.module('skedaddle', ['restangular', 'ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/main/main.html'
            })
            .state('order', {
                url: '/order',
                templateUrl: 'app/order/order.html',
                controller: 'OrderCtrl',
                controllerAs: 'order'
            })
            .state('team', {
                url: '/team',
                templateUrl: 'app/team/team.html'
            })

        $urlRouterProvider.otherwise('/');
    });