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
countriesApp.controller('CapitalController' , ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams ){
    $scope.country = $routeParams.country;
    $scope.countryCode = $routeParams.countryCode;
    $scope.continent = $routeParams.continent;
    $scope.countryId = $routeParams.countryId;
    $scope.population = $routeParams.population;
    $scope.area = $routeParams.area;
    $scope.capital = $routeParams.capital;
    $scope.capPop = $routeParams.capPop;
    var url = 'http://api.geonames.org/search?username=tenkaklet&type=json&q=' + $routeParams.country + '&isNameRequired=true&name_equals=' + $routeParams.country + '&country=' + $routeParams.countryCode;
    $http.get(url, {})
        .then(function (response){
            $scope.population = response.data.geonames[0].population;
            var geoNameID = response.data.geonames[0].geonameId;
            var neighbourUrl = 'http://api.geonames.org/neighbours?username=tenkaklet&type=json&geonameId=' + geoNameID;
            $http.get(neighbourUrl, {})
            .then(function (response) {
                console.log(response);
                $scope.neighbours = response.data.geonames;
                $scope.neighbours.area = $routeParams.area;
                $scope.neighbours.capital = $routeParams.capital;
                $scope.numOfNeighbors = response.data.totalResultsCount;
                console.log($routeParams.capital);
            });

        });
        var capURL = 'http://api.geonames.org/searchJSON?formatted=true&username=tenkaklet&q=capital&country=' + $routeParams.countryCode;
        $http.get(capURL, {})
         .then(function (response) {

             $scope.capPop = response.data.geonames[0].population;
         });

}]);
