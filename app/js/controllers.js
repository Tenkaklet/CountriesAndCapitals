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
    var searchURL = 'http://api.geonames.org/searchJSON?&username=tenkaklet';
    var searchParams = {
        username: 'tenkaklet',
        type: 'json',
        q: $scope.country,
        isNameRequired: true,
        name_equals: $scope.country,
        country: $routeParams.countryCode
    };
    // GEt country code.
    console.log($routeParams.country);
    $scope.country = $routeParams.country;
    $scope.countryCode = $routeParams.countryCode;
    $scope.continent = $routeParams.continent;
    $scope.population = $routeParams.population;
    console.log($routeParams.countryCode);
    console.log($routeParams.population);
    // $http.get(searchURL, {searchParams: searchParams})
    // .then(function (response) {
    //     $scope.countries = response.data.geonames;
    //     // console.log(dope);
    //     // console.log(response.data.geonames);
    // });
}]);

//You could say $routeParams is the $scope LINK between controllers.......
