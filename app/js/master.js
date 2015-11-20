// Master file of app initiation and configuration

var countriesApp = angular.module('countriesApp',['ngAnimate', 'ngRoute']);
countriesApp.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        templateUrl: './pages/home.html',
    })
    .when('/countries', {
        templateUrl: './pages/countries.html',
        controller: 'CountryController'
    })
    .when('/countries/:country/', {
        templateUrl: './pages/capital.html',
        controller: 'CapitalController'
    })
    .otherwise('/');
    $locationProvider.html5Mode({
        enabled: false,
        requireBase: true
    });
});
