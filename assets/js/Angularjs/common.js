



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


       var area=  $scope.details.address_components[0].types[1];
        var city=  $scope.details.address_components[1].types[0];
        var dist=   $scope.details.address_components[2].types[0];
        var state=  $scope.details.address_components[3].types[0] ;
        var country=  $scope.details.address_components[4].types[0];

        var lat=  $scope.details.geometry.location.lat() ;
        var lng=  $scope.details.geometry.location.lng() ;



        $rootScope.searchInput = $scope.result;



        /*$state.go('ResortsImages');*/
        $window.location='../../app/Resorts/resort1.html';

    }

}]);


