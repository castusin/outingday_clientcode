



app.controller('MainCtr',['$scope','$state','$window','$rootScope','$localStorage' ,'$timeout','$q','$log','$mdUtil'
                           ,function ($scope,$state,$window,$rootScope,$localStorage,$timeout,$q,$log,$mdUtil) {
    debugger;

       /* $('#myModal').modal('show');*/


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
        $mdUtil.enableScrolling();
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



    $scope.MainSearch=function(){
        debugger;


       // var area=  $scope.details.address_components[0].types[1];
        // var city=  $scope.details.address_components[1].types[0];
        // var dist=   $scope.details.address_components[2].types[0];
        // var state=  $scope.details.address_components[3].types[0] ;
        // var country=  $scope.details.address_components[4].types[0];

        // var lat=  $scope.details.geometry.location.lat() ;
        // var lng=  $scope.details.geometry.location.lng() ;

          var searchArea =   $scope.ctrl.selectedItem;
          /*var searchresult =  $scope.result;*/
        $localStorage.searchInput =   searchArea;



        /*$state.go('ResortsImages');*/
        $window.location='../../app/Resorts/Viewresorts.html';

    }

}]);


