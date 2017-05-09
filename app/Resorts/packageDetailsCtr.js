
app.controller('packageDetailCtr',['$scope','$state','GetParkDetailInfo','$rootScope','$localStorage','$window',
    function ($scope,$state,GetParkDetailInfo,$rootScope,$localStorage,$window) {

        debugger;

        $scope.qty = 1;
       /* $scope.increment = function() {
            $scope.qty++;
        };
        $scope.decrement = function() {
            $scope.qty--;
        };*/

        $scope.AddNumbers = function() {
            debugger;
            var a = Number($scope.bookParkcurrentPrice || 0);
            var b = Number($scope.facilityCurrentPrice || 0);
            $scope.sum = a+b;
        }



        var ctrl = this;
        $scope.ctrl.datepicker = $localStorage.bookPark.date;
        $scope.bookParkcurrentPrice = $localStorage.bookPark.currentPrice;
        $scope.bookParkImg = $localStorage.bookPark.facilityImage;
        $scope.bookParkDes = $localStorage.bookPark.description;

        $scope.resList = $localStorage.res;
        $scope.resListPhoto = $localStorage.res.photoUrl;
        $scope.resListDes = $localStorage.res.description;
        $scope.resListName = $localStorage.res.name;
        $scope.bookParkList= $localStorage.parkDetails ;

        $scope.FacilityNameList = [];
        $scope.addBookCall= function(facilityName){
                 debugger;
            $scope.facilityName = facilityName;

            $scope.FacilityNameList.push($scope.facilityName);

           if ($scope.sum == undefined){
            var a = Number($scope.bookParkcurrentPrice || 0);
            var b = Number($scope.facilityName.currentPrice || 0);
            $scope.sum = a+b;
           }
            else{
               var a = Number($scope.sum || 0);
               var b = Number($scope.facilityName.currentPrice || 0);
               $scope.sum = a+b;

           }

        } ;

        $scope.addCall= function(facilityName){
            debugger;
            $scope.facilityName = facilityName;

            var a = Number($scope.sum || 0);
            var b = Number($scope.facilityName.currentPrice || 0);
            $scope.sum = a+b;

        } ;
        $scope.subCall= function(facilityName){
            debugger;
            $scope.facilityName = facilityName;

            var a = Number($scope.sum || 0);
            var b = Number($scope.facilityName.currentPrice || 0);
            $scope.sum = a-b;

        } ;



        $scope.paymentCall= function(){

            debugger;

            $window.location='../Resorts/confirmationDetails.html';
        }



    }]);