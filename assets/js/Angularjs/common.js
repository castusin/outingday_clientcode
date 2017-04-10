



app.controller('MainCtr',['$scope','$state','$window','$rootScope',function ($scope,$state,$window,$rootScope) {
    debugger;

    this.myDate = new Date();
    this.isOpen = false;

    this.minDate = new Date(
        this.myDate.getFullYear(),
        this.myDate.getMonth(),
        this.myDate.getDate() - 1
    );

    this.maxDate = new Date(
        this.myDate.getFullYear(),
        this.myDate.getMonth(),
        this.myDate.getDate()
    );




    $scope.result = '';
    $scope.options = {
        country: 'in'

    };
    $scope.details = '';


    $scope.MainSearch=function(){
        debugger;


        $rootScope.searchInput = $scope.result;



        /*$state.go('ResortsImages');*/
        $window.location='../../app/Resorts/Resorts.html';

    }

}]);


