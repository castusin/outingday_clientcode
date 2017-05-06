
app.controller('packageDetailCtr',['$scope','$state','GetParkDetailInfo','$rootScope','$localStorage','$window',
    function ($scope,$state,GetParkDetailInfo,$rootScope,$localStorage,$window) {

        debugger;


        $scope.paymentCall= function(){

            debugger;

            $window.location='../Resorts/confirmationDetails.html';
        }



    }]);