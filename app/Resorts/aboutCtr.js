



app.controller('aboutCtr',['$scope','$state','$window','$rootScope','$localStorage' ,'$timeout','$q','$log','$mdUtil','ModalService','$modal'
    ,function ($scope,$state,$window,$rootScope,$localStorage,$timeout,$q,$log,$mdUtil,ModalService,$modal) {



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
            var repos =      $localStorage.localAreas;
          /*  [
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
             'localArea'      : ' Adibatla ',

             'metro'  : 'Hyderabad',
             'forks'     : 'India'
             },
             {
             'localArea'      : ' Hitech City ',

             'metro'  : 'Hyderabad',
             'forks'     : 'India'
             },
             {
             'localArea'      : 'Banjara Hills ',

             'metro'  : 'Hyderabad',
             'forks'     : 'India'
             }
             ];*/
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




            var searchArea =   $scope.ctrl.selectedItem;

            $localStorage.searchInput =   searchArea;




            $window.location='../../app/Resorts/Viewresorts.html';

        }



        $scope.loadEditForm = function () {
            $scope.checkItem = "yes";
            $modal.open({
                templateUrl: '../../app/Resorts/modal.html',
                controller: 'modalController as ctrl',
                scope: $scope ,
                backdrop: 'static',
                keyboard: false
            })
                .result.then(function() {
                    debugger ;


                    /* alert('closed');*/
                }, function() {
                    debugger ;

                    $window.location='../../app/Resorts/Viewresorts.html';

                });
        };

        if( $localStorage.localAreas == undefined){
            debugger;
            $scope.loadEditForm();
        }
        else{
            debugger;
        }

        if( $localStorage.localAreas == undefined){
            debugger;
            $scope.regionModel = function(){ return  "SELECT A REGION"; }
        }
        else{
            debugger;
            $scope.regionModel = function(){ return  $localStorage.modelsearch.cityName; }
        }




    }]);


