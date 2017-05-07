
app.controller('packageDetailCtr',['$scope','$state','GetParkDetailInfo','$rootScope','$localStorage','$window',
    function ($scope,$state,GetParkDetailInfo,$rootScope,$localStorage,$window) {

        debugger;

        $scope.qty = 0;
        $scope.increment = function() {
            $scope.qty++;
        };
        $scope.decrement = function() {
            $scope.qty--;
        };


        var ctrl = this;
        $scope.ctrl.datepicker = $localStorage.bookPark.date;
        $scope.bookParkImg = $localStorage.bookPark.facilityImage;
        $scope.bookParkDes = $localStorage.bookPark.description;

        $scope.resList = $localStorage.res;
        $scope.resListPhoto = $localStorage.res.photoUrl;
        $scope.resListDes = $localStorage.res.description;
        $scope.resListName = $localStorage.res.name;
        $scope.bookParkList= $localStorage.parkDetails ;



        $scope.paymentCall= function(){

            debugger;

            $window.location='../Resorts/confirmationDetails.html';
        }



    }]);