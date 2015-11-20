//Controllers
countriesApp.controller('CountryController', ['$scope', '$http','$q', '$timeout', '$location','$routeParams', function ($scope, $http, $q, $timeout, $location, $routeParams) {

        var geoURL = 'http://api.geonames.org/countryInfo?';
        var params = {
            username: 'tenkaklet',
            type: 'json'
        };

        $http.get(geoURL, {params:params})
        .then(function(response){
            $scope.countries = response.data.geonames;

            console.log(response);
            console.log($scope.countries);
        });
        $scope.viewCountry = function (location) {
            $location.path('/countries/' + $scope.countries);
            
        };

}]);
countriesApp.controller('CapitalController' , ['$scope', '$http', '$q', '$timeout', '$routeParams', function ($scope, $http, $routeParams){
    // console.log($routeParams.country);
    $scope.message = 'country';
    var searchURL = 'http://api.geonames.org/searchJSON?&username=tenkaklet';
    var searchParams = {
        username: 'tenkaklet',
        type: 'json',
    };

    // $http.get(searchURL, {searchParams: searchParams})
    // .then(function (response) {
    //     $scope.countries = response.data.geonames;
    //     // console.log(dope);
    //     // console.log(response.data.geonames);
    // });
}]);
