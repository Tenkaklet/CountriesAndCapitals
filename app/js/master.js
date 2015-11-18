// Master file of app initiation and configuration

var countriesApp = angular.module('countriesApp',['ngAnimate', 'ngRoute']);
countriesApp.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        templateUrl: 'pages/home.html',
        controller: 'HomeController'
    })
    .when('/countDetails', {
        templateUrl: 'pages/countDetails.html',
        controller: 'DetailsController'
    })
    .when('/countList', {
        templateUrl: 'pages/countList.html',
        controller: 'ListController'
    })
    .otherwise('/');
});
