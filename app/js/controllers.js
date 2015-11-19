
var geoURL = 'http://api.geonames.org/countryInfo?';
var params = {
    username: 'tenkaklet',
    type: 'json'
};

//Controllers
countriesApp.controller('CountryController', ['$scope', '$http','$q', '$timeout', function ($scope, $http, $q, $timeout) {

        $http.get(geoURL, {params:params})
        .then(function(response){
            $scope.countries = response.data.geonames;
            console.log(response);
            console.log($scope.countries);
        });

}]);
countriesApp.controller('CapitalController' , ['$scope', '$http', '$q', '$timeout', function ($scope, $http){
    $http.get(geoURL, {params: params})
    .then(function (response) {
        $scope.countries = response.data.geonames;
    });
}]);
