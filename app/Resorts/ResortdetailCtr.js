
app.controller('ResortDetailCtr',['$scope','$state','GetParkDetailInfo','$rootScope','$localStorage','$window',
                       function ($scope,$state,GetParkDetailInfo,$rootScope,$localStorage,$window) {
    debugger;

                          /* $scope.string = "002.jpg,003.jpg,004.jpg,005.jpg,006.jpg,007.jpg,008.jpg,009.jpg,010.jpg,011.jpg";

                           $scope.arrString = new Array();
                           $scope.arrString = $scope.string.split(',');
                           $scope.myInterval = 2000;
                           $scope.slides = [];
                           for (var i = 0; i < $scope.arrString.length; i++) {
                               $scope.slides.push({"image":$scope.arrString[i]});
                           }*/

                        /*   $scope.photos = [
                               {src: 'http://farm9.staticflickr.com/8042/7918423710_e6dd168d7c_b.jpg'},
                               {src: 'http://farm9.staticflickr.com/8449/7918424278_4835c85e7a_b.jpg'},
                               {src: 'http://farm9.staticflickr.com/8457/7918424412_bb641455c7_b.jpg'},
                               {src: 'http://farm9.staticflickr.com/8179/7918424842_c79f7e345c_b.jpg'},
                               {src: 'http://farm9.staticflickr.com/8315/7918425138_b739f0df53_b.jpg'},
                               {src: 'http://farm9.staticflickr.com/8461/7918425364_fe6753aa75_b.jpg'}
                           ];*/
// initial image index
                           $scope._Index = 0;
// if a current image is the same as requested image
                           $scope.isActive = function (index) {
                               return $scope._Index === index;
                           };
// show prev image
                           $scope.showPrev = function () {
                               $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.photos.length - 1;
                           };
// show next image
                           $scope.showNext = function () {
                               $scope._Index = ($scope._Index < $scope.photos.length - 1) ? ++$scope._Index : 0;
                           };
// show a certain image
                           $scope.showPhoto = function (index) {
                               $scope._Index = index;
                           };



                           var  parkId =$localStorage.parkId;

    GetParkDetailInfo.GetParkDetail(parkId).then(function(parkDetailRes){
        debugger;
        if(parkDetailRes.responseCode == 200){

            debugger;
            $scope.resultParkDetail = parkDetailRes.resultObject;

            $scope.resultParkDetailSubImg = parkDetailRes.resultObject[0].parkSubImages;

            $scope.arrString = new Array();
            $scope.arrString = $scope.resultParkDetailSubImg.split(',');

            $scope.photos = [];
            for (var i = 0; i < $scope.arrString.length; i++) {
                $scope.photos.push({"src":$scope.arrString[i]});
            }

            $scope.ParkDetail = parkDetailRes.parkDetails;

            $localStorage.parkDetails = parkDetailRes.parkDetails;

        }

        else{


        }




    });






                           $scope.BookPkgCall= function(park){

                               debugger;
                               $localStorage.bookPark = park;
                               $window.location='../Resorts/packageDetails.html';
                           }



}]);