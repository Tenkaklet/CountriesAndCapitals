//Controllers
countriesApp.controller('CountryController', ['$scope', '$http','$q', '$timeout', '$location', function ($scope, $http, $q, $timeout, $location) {

        var geoURL = 'http://api.geonames.org/countryInfo?';
        var params = {
            username: 'tenkaklet',
            type: 'json'
        };

        $http.get(geoURL, {params:params})
        .then(function(response){
            $scope.countries = response.data.geonames;
        });

}]);
countriesApp.controller('CapitalController' , ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams){
    // GEt country code.
    $scope.country = $routeParams.country;
    $scope.countryCode = $routeParams.countryCode;
    $scope.continent = $routeParams.continent;
    $routeParams = {
        country: $scope.country,
        population: $scope.population,
    };
    console.log($routeParams);
    // $http.get(searchURL, {searchParams: searchParams})
    // .then(function (response) {
    //     $scope.countries = response.data.geonames;
    //     // console.log(dope);
    //     // console.log(response.data.geonames);
    // });
}]);

//You could say $routeParams is the $scope LINK between controllers.......
