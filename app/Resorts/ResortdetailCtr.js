
app.controller('ResortDetailCtr',['$scope','$state','GetParkDetailInfo','$rootScope',function ($scope,$state,GetParkDetailInfo,$rootScope) {
    debugger;


    GetParkDetailInfo.GetParkDetail().then(function(parkDetailRes){
        debugger;
        if(parkDetailRes.responseCode == 200){

            debugger;
            $scope.ParkDetail = parkDetailRes.parkDetails;


        }

        else{


        }




    });


}]);