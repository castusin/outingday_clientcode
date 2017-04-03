
app.controller('ResortCtr',['$scope','$state','GetParksInfo','$rootScope',function ($scope,$state,GetParksInfo,$rootScope) {
    debugger;






    /*   var park =  $rootScope.searchInput;

        if(park == "Madhapur, Hyderabad, Telangana, India"){

            var Metro = "Hyderabad";
            var localArea = "Madhapur";
            var odRating = "5";
        }*/

        GetParksInfo.GetParksService().then(function(ParksInfo){
            debugger;


            if(ParksInfo.responseCode == 0){

                            $scope.DetailsListInfo = ParksInfo.resultObject;
            }

            else{


            }




        });






}]);