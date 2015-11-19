//Controllers
countriesApp.controller('CountryController', ['$scope', '$http','$q', '$timeout', function ($scope, $http, $q, $timeout) {

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

}]);
countriesApp.controller('CapitalController' , ['$scope', '$http', '$q', '$timeout', function ($scope, $http){

    var searchURL = 'http://api.geonames.org/searchJSON?&username=tenkaklet';
    var searchParams = {
        username: 'tenkaklet',
        type: 'json',
    };

    $http.get(searchURL, {searchParams: searchParams})
    .then(function (response) {
        $scope.countries = response.data.geonames;
        var dope = $scope.countries;
        console.log(dope);
        console.log(response.data.geonames);
    });
}]);
