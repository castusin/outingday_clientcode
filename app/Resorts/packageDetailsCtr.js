
app.controller('packageDetailCtr',['$scope','$state','GetParkDetailInfo','$rootScope','$localStorage','$window',
    function ($scope,$state,GetParkDetailInfo,$rootScope,$localStorage,$window) {

        debugger;

        $scope.qty = 0;
       /* $scope.increment = function() {
            $scope.qty++;
        };
        $scope.decrement = function() {
            $scope.qty--;
        };*/




        var ctrl = this;
        $scope.ctrl.datepicker = $localStorage.bookPark.date;
        $scope.bookParkcurrentPrice = $localStorage.bookPark.currentPrice;

        $scope.sum = $localStorage.bookPark.currentPrice;
        $localStorage.TotalPrice = $scope.sum;

        $scope.bookParkImg = $localStorage.bookPark.facilityImage;
        $scope.bookParkDes = $localStorage.bookPark.description;

        $scope.resList = $localStorage.res;
        $scope.resListPhoto = $localStorage.res.photoUrl;
        $scope.resListDes = $localStorage.res.description;
        $scope.resListName = $localStorage.res.name;
        $scope.bookParkList= $localStorage.parkDetails ;




        //--------------------------Add Aditionals Start-----------------------//

        $scope.FacilityItems={
            itemName:'',
            noOfItems:0,
            orgPrice:'',
            totalPrice:0
        }
        $scope.FacilityNameList=[];
        $localStorage.FacilityNameList =  $scope.FacilityNameList;
        $scope.addBookCall= function(facilityName){
            debugger;
            $scope.facilityName = facilityName;


            $scope.FacilityItems.itemName=facilityName.facilityTypeTitle;
            $scope.FacilityItems.noOfItems=1;
            $scope.FacilityItems.orgPrice=facilityName.currentPrice;
            $scope.FacilityItems.totalPrice=1*facilityName.currentPrice;

            $scope.FacilityNameList.push($scope.FacilityItems);
            $localStorage.FacilityNameList =  $scope.FacilityNameList;
            $scope.FacilityItems={};
debugger;
            if ($scope.sum == undefined){
                var a = Number($scope.bookParkcurrentPrice || 0);
                var b = Number($scope.facilityName.currentPrice || 0);
                $scope.sum = a+b;
                $localStorage.TotalPrice = $scope.sum;
            }
            else{
                var a = Number($scope.sum || 0);
                var b = Number($scope.facilityName.currentPrice || 0);
                $scope.sum = a+b;
                $localStorage.TotalPrice = $scope.sum;
            }

        } ;

        $scope.addCall= function(facilityName){
            debugger;

            /*for(i=0;i<$scope.FacilityNameList.length;i++){*/
                $scope.FindList = $.grep($scope.FacilityNameList,function (fl) {
                    return fl.itemName==facilityName.facilityTypeTitle;
                })[0];
                debugger;
                var SelIndexOf=$scope.FacilityNameList.map(function(x){return x.itemName}).indexOf($scope.FindList.itemName);
                $scope.FacilityNameList[SelIndexOf].noOfItems=$scope.FacilityNameList[SelIndexOf].noOfItems+1;
                $scope.FacilityNameList[SelIndexOf].totalPrice=$scope.FacilityNameList[SelIndexOf].noOfItems*$scope.FacilityNameList[SelIndexOf].orgPrice;

            $scope.facilityName = facilityName;

            var a = Number($scope.sum || 0);
            var b = Number($scope.facilityName.currentPrice || 0);
            $scope.sum = a+b;
            $localStorage.TotalPrice = $scope.sum;
        } ;

        $scope.subCall= function(facilityName,qty){
            debugger;


            $scope.FindList = $.grep($scope.FacilityNameList,function (fl) {
                return fl.itemName==facilityName.facilityTypeTitle;
            })[0];
            debugger;
            var SelIndexOf=$scope.FacilityNameList.map(function(x){return x.itemName}).indexOf($scope.FindList.itemName);
            $scope.FacilityNameList[SelIndexOf].noOfItems=$scope.FacilityNameList[SelIndexOf].noOfItems-1;
            $scope.FacilityNameList[SelIndexOf].totalPrice=$scope.FacilityNameList[SelIndexOf].noOfItems*$scope.FacilityNameList[SelIndexOf].orgPrice;

            if($scope.FacilityNameList[SelIndexOf].noOfItems==0)
            {
                $scope.FacilityNameList.splice(SelIndexOf, 1);
            }

            $scope.facilityName = facilityName;

            var a = Number($scope.sum || 0);
            var b = Number($scope.facilityName.currentPrice || 0);
            $scope.sum = a-b;
            $localStorage.TotalPrice = $scope.sum;

        } ;

        //--------------------------Add Aditionals End------------------------//

        /*$scope.deleteItem= function(){
            var SelIndexOf=$scope.FacilityNameList.map(function(x){return x.itemName}).indexOf($scope.FindList.itemName);
            $scope.FacilityNameList.splice(SelIndexOf, 1);
        }
*/



        /*$scope.addBookCall= function(facilityName){
         debugger;
         $scope.facilityName = facilityName;

         $scope.FacilityNameList.push($scope.facilityName);
         $localStorage.FacilityNameList =  $scope.FacilityNameList;

         if ($scope.sum == undefined){
         var a = Number($scope.bookParkcurrentPrice || 0);
         var b = Number($scope.facilityName.currentPrice || 0);
         $scope.sum = a+b;
         $localStorage.TotalPrice = $scope.sum;
         }
         else{
         var a = Number($scope.sum || 0);
         var b = Number($scope.facilityName.currentPrice || 0);
         $scope.sum = a+b;
         $localStorage.TotalPrice = $scope.sum;
         }

         } ;*/

        /*$scope.addCall= function(facilityName){
            debugger;
            $scope.facilityName = facilityName;

            var a = Number($scope.sum || 0);
            var b = Number($scope.facilityName.currentPrice || 0);
            $scope.sum = a+b;
            $localStorage.TotalPrice = $scope.sum;
        } ;*/
        /*$scope.subCall= function(facilityName,qty){
            debugger;

            $scope.facilityName = facilityName;

            var a = Number($scope.sum || 0);
            var b = Number($scope.facilityName.currentPrice || 0);
            $scope.sum = a-b;
            $localStorage.TotalPrice = $scope.sum;

        } ;*/






        $scope.submit= function(){

            debugger;
        console.log($scope.mrs);
            console.log( $scope.FirstName);
            console.log($scope.LastName);
            console.log($scope.Email);
            console.log( $scope.PhoneNumber);

            $localStorage.mrs = $scope.mrs;
            $localStorage.FirstName = $scope.FirstName;
            $localStorage.LastName = $scope.LastName;
            $localStorage.Email = $scope.Email;
            $localStorage.PhoneNumber = $scope.PhoneNumber;


            $window.location='../Resorts/confirmationDetails.html';
        }



    }]);