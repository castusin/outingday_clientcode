
app.controller('packageDetailCtr',['$scope','$state','GetParkDetailInfo','$rootScope','$localStorage','$window',
    function ($scope,$state,GetParkDetailInfo,$rootScope,$localStorage,$window) {

        debugger;

        var ctrl = this;
        $scope.ctrl.datepicker = $localStorage.bookPark.date;
        $scope.bookParkImg = $localStorage.bookPark.facilityImage;
        $scope.bookParkDes = $localStorage.bookPark.description;

        $scope.bookParkList= $localStorage.parkDetails ;



        $scope.paymentCall= function(){

            debugger;

            $window.location='../Resorts/confirmationDetails.html';
        }



    }]);