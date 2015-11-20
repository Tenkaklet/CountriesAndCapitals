// Master file of app initiation and configuration

var countriesApp = angular.module('countriesApp',['ngAnimate', 'ngRoute']);
countriesApp.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: './pages/home.html',
    })
    .when('/countries', {
        templateUrl: './pages/countries.html',
        controller: 'CountryController'
    })
    .when('/countries/:country/:countryCode', {
        templateUrl: './pages/capital.html',
        controller: 'CapitalController'
    })
    .otherwise({redirectTo: '/'});
});
