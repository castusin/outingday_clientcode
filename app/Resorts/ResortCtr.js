
 app.controller('ResortCtr',['$scope','$state','GetParksInfo','$rootScope','$window', '$localStorage','$timeout','$q','$log',
                            function ($scope,$state,GetParksInfo,$rootScope,$window,$localStorage,$timeout,$q,$log) {
    debugger;


                                var self = this;

                                self.simulateQuery = false;
                                self.isDisabled    = false;

                                self.repos         = loadAll();
                                self.querySearch   = querySearch;
                                self.selectedItemChange = selectedItemChange;
                                self.searchTextChange   = searchTextChange;

                                // ******************************
                                // Internal methods
                                // ******************************

                                /**
                                 * Search for repos... use $timeout to simulate
                                 * remote dataservice call.
                                 */
                                function querySearch (query) {
                                    var results = query ? self.repos.filter( createFilterFor(query) ) : self.repos,
                                        deferred;
                                    if (self.simulateQuery) {
                                        deferred = $q.defer();
                                        $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
                                        return deferred.promise;
                                    } else {
                                        return results;
                                    }
                                }

                                function searchTextChange(text) {
                                    $log.info('Text changed to ' + text);
                                }

                                function selectedItemChange(item) {
                                    $log.info('Item changed to ' + JSON.stringify(item));
                                }

                                /**
                                 * Build `components` list of key/value pairs
                                 */
                                function loadAll() {
                                    var repos = [
                                        {
                                            'localArea'      : 'Madhapur',

                                            'metro'  : 'Hyderabad',
                                            'forks'     : 'India'
                                        },
                                        {
                                            'localArea'      : 'Miyapur',

                                            'metro'  : 'Hyderabad',
                                            'forks'     : 'India'
                                        },
                                        {
                                            'localArea'      : 'Kondapur ',

                                            'metro'  : 'Hyderabad',
                                            'forks'     : 'India'
                                        },
                                        {
                                            'localArea'      : 'Ameerpet',

                                            'metro'  : 'Hyderabad',
                                            'forks'     : 'India'
                                        },
                                        {
                                            'localArea'      : 'Banjara Hills ',

                                            'metro'  : 'Hyderabad',
                                            'forks'     : 'India'
                                        }
                                    ];
                                    return repos.map( function (repo) {
                                        repo.value = repo.localArea.toLowerCase();
                                        return repo;
                                    });
                                }

                                /**
                                 * Create filter function for a query string
                                 */
                                function createFilterFor(query) {
                                    var lowercaseQuery = angular.lowercase(query);

                                    return function filterFn(item) {
                                        return (item.value.indexOf(lowercaseQuery) === 0);
                                    };

                                }


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
    $scope.numPerPage = 7;
    $scope.maxSize = 5;
    /*   var park =  $rootScope.searchInput;

        if(park == "Madhapur, Hyderabad, Telangana, India"){

            var Metro = "Hyderabad";
            var localArea = "Madhapur";
            var odRating = "5";
        }*/


                var parks =  $localStorage.searchInput;

        GetParksInfo.GetParksService(parks).then(function(ParksInfo){
            debugger;
            if(ParksInfo.responseCode == 200){

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