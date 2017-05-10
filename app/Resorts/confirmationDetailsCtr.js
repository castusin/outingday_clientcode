
app.controller('confirmationDetailCtr',['$scope','$state','GetParkDetailInfo','$rootScope','$localStorage','$window',
    function ($scope,$state,GetParkDetailInfo,$rootScope,$localStorage,$window) {

        debugger;

        $scope.mrs= $localStorage.mrs ;
        $scope.FirstName= $localStorage.FirstName ;
        $scope.LastName =$localStorage.LastName  ;
        $scope.Email =$localStorage.Email  ;
        $scope.PhoneNumber =$localStorage.PhoneNumber ;



        $scope.resListPhoto = $localStorage.res.photoUrl;
        $scope.resListDes = $localStorage.res.description;
        $scope.resListName = $localStorage.res.name;

        $scope.datepicker = $localStorage.bookPark.date;

        $scope.bookParkcurrentPrice = $localStorage.bookPark.currentPrice;

        $scope.FacilityNameList = $localStorage.FacilityNameList;

        $scope.sum = $localStorage.TotalPrice ;

        $scope.makePaymentCall= function(){

            debugger;

            $window.location='../Resorts/payment.html';
        }



    }]);