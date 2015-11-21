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
    $scope.$on('$routeChangeSuccess', function () {
        $scope.population = $routeParams.population;
        console.log($routeParams.population);
    });
    // GEt country code.
   $scope.country = $routeParams.country;
   $scope.countryCode = $routeParams.countryCode;
   $scope.continent = $routeParams.continent;
   $scope.countryId = $routeParams.countryId;
   console.log($scope.countryId);
   var url = 'http://api.geonames.org/search?username=tenkaklet&type=json&q=' + $routeParams.country + '&isNameRequired=true&name_equals=' + $routeParams.country + '&country=' + $routeParams.countryCode;
   console.log(url);
   $http.get(url, {})
       .then(function (response){
           console.log(response);
           var short = response.data.geonames[0];
           $routeParams = {
               country: $scope.country,
               population: short.population,
               fcode: short.fcodeName
           };

           $scope.population = $routeParams.population;
           $scope.continent = $routeParams.continent;
           console.log($routeParams);
       });

    // $http.get(searchURL, {searchParams: searchParams})
    // .then(function (response) {
    //     $scope.countries = response.data.geonames;
    //     // console.log(dope);
    //     // console.log(response.data.geonames);
    // });
}]);

//You could say $routeParams is the $scope LINK between controllers.......
