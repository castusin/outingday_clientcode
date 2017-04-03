



app.controller('MainCtr',['$scope','$state','$window','$rootScope',function ($scope,$state,$window,$rootScope) {
    debugger;

    $scope.result = '';
    $scope.options = {
        country: 'in'

    };
    $scope.details = '';


    $scope.MainSearch=function(){
        debugger;


        $rootScope.searchInput = $scope.result;



        /*$state.go('Resorts');*/
        $window.location='../journey/Resorts/Resorts.html';

    }

}]);


