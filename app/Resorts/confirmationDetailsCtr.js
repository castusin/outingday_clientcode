
app.controller('confirmationDetailCtr',['$scope','$state','GetParkDetailInfo','$rootScope','$localStorage','$window',
    function ($scope,$state,GetParkDetailInfo,$rootScope,$localStorage,$window) {

        debugger;


        $scope.makePaymentCall= function(){

            debugger;

            $window.location='../Resorts/payment.html';
        }



    }]);