
 app.controller('ResortCtr',['$scope','$state','GetParksInfo','$rootScope','$window',
                            function ($scope,$state,GetParksInfo,$rootScope,$window) {
    debugger;



     this.myDate = new Date();
     this.isOpen = false;

     this.minDate = new Date(
         this.myDate.getFullYear(),
         this.myDate.getMonth(),
         this.myDate.getDate() - 1
     );

     this.maxDate = new Date(
         this.myDate.getFullYear(),
         this.myDate.getMonth(),
         this.myDate.getDate()
     );




     $scope.result = '';
     $scope.options = {
         country: 'in'

     };
     $scope.details = '';


     $scope.currentPage = 1;
    $scope.numPerPage = 10;
    $scope.maxSize = 5;
    /*   var park =  $rootScope.searchInput;

        if(park == "Madhapur, Hyderabad, Telangana, India"){

            var Metro = "Hyderabad";
            var localArea = "Madhapur";
            var odRating = "5";
        }*/




        GetParksInfo.GetParksService().then(function(ParksInfo){
            debugger;
            if(ParksInfo.responseCode == 0){

                  debugger;
                $scope.makeTodos = function() {
                    $scope.todos = [];
                    debugger;
                        $scope.todos = ParksInfo.resultObject;
                    var data = $.grep($scope.todos,function(td){}).parktype;
                };
                $scope.makeTodos();

                $scope.$watch('currentPage + numPerPage', function() {
                    var begin = (($scope.currentPage - 1) * $scope.numPerPage)
                        , end = begin + $scope.numPerPage;

                    $scope.DetailsListInfo = $scope.todos.slice(begin, end);
                });


                          /*  $scope.DetailsListInfo = ParksInfo.resultObject;*/
            }

            else{


            }




        });



$scope.bookhotel= function(){

    debugger;
    $window.location='../Resorts/Resortdetail.html';
}




}]);