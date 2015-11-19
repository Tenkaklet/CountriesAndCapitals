// Master file of app initiation and configuration

var countriesApp = angular.module('countriesApp',['ngAnimate', 'ngRoute']);
countriesApp.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        templateUrl: 'pages/home.html',
    })
    .when('/countries/:country/capital', {
        templateUrl: 'pages/capital.html',
        controller: 'CapitalController'
    })
    .when('/countries', {
        templateUrl: 'pages/countries.html',
        controller: 'CountryController'
    })
    .otherwise('/');
});
