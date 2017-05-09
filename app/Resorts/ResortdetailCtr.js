
app.controller('ResortDetailCtr',['$scope','$state','GetParkDetailInfo','$rootScope','$localStorage','$window',
                       function ($scope,$state,GetParkDetailInfo,$rootScope,$localStorage,$window) {
    debugger;


      $scope.AminitiesMaster=[
          {id:1,AminitiName:'Free WiFi Internet',AminitiLogo:'../../assets/images/AminitieLogos/WiFi.png'},
          {id:2,AminitiName:'Gymnasium/Health Club',AminitiLogo:'../../assets/images/AminitieLogos/Gymnasium_Health-Club.png'},
          {id:3,AminitiName:'Conference Facilities',AminitiLogo:'../../assets/images/AminitieLogos/ConferenceFacilities.png'},
          {id:4,AminitiName:'Business Center',AminitiLogo:'../../assets/images/AminitieLogos/BusinessCenter.png'},
          {id:5,AminitiName:'Cafe',AminitiLogo:'../../assets/images/AminitieLogos/Cafe.png'},
          {id:6,AminitiName:'Restaurant',AminitiLogo:'../../assets/images/AminitieLogos/Restaurant.png'},
          {id:7,AminitiName:'Doctor on call',AminitiLogo:'../../assets/images/AminitieLogos/DoctorOnCall.png'},
          {id:8,AminitiName:'Jacuzzi',AminitiLogo:'../../assets/images/AminitieLogos/Jacuzzi.png'},
          {id:9,AminitiName:'Sauna',AminitiLogo:'../../assets/images/AminitieLogos/Sauna.png'},
          {id:10,AminitiName:'Meeting facilities',AminitiLogo:'../../assets/images/AminitieLogos/MeetingFacilities.png'},
          {id:11,AminitiName:'Swimming pool',AminitiLogo:'../../assets/images/AminitieLogos/SwimmingPool.png'},
          {id:12,AminitiName:'Lounge',AminitiLogo:'../../assets/images/AminitieLogos/Lounge.png'},
          {id:13,AminitiName:'Spa',AminitiLogo:'../../assets/images/AminitieLogos/Spa.png'},
          {id:14,AminitiName:'Laundry service',AminitiLogo:'../../assets/images/AminitieLogos/LaundryService.png'},
          {id:15,AminitiName:'Babysitting or childcare',AminitiLogo:'../../assets/images/AminitieLogos/Babysitting.png'},
          {id:16,AminitiName:'Coffee shop',AminitiLogo:'../../assets/images/AminitieLogos/CoffeeShop.png'},
          {id:17,AminitiName:'Parking',AminitiLogo:'../../assets/images/AminitieLogos/Parking.png'},
          {id:18,AminitiName:'Massage',AminitiLogo:'../../assets/images/AminitieLogos/Massage.png'},
          {id:19,AminitiName:'Wi-Fi',AminitiLogo:'../../assets/images/AminitieLogos/WiFi.png'},
          {id:20,AminitiName:'Car rental',AminitiLogo:'../../assets/images/AminitieLogos/CarRental.png'},
          {id:21,AminitiName:'Library',AminitiLogo:'../../assets/images/AminitieLogos/Library.png'}
          ]



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
            $scope.AminitArray = parkDetailRes.resultObject[0].amenitiesString.split(',');
            $scope.GetAminitiList=[];
            for(i=0;i<$scope.AminitArray.length;i++){
                $scope.GetInfo = $.grep($scope.AminitiesMaster,function(ami){
                    return ami.id==$scope.AminitArray[i];
                })
                debugger;
                $scope.GetAminitiList.push($scope.GetInfo[0]);
            }

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