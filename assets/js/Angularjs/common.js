



app.controller('MainCtr',['$scope','$state','$window','$rootScope','$localStorage' ,'$timeout','$q','$log','$mdUtil','ModalService','$modal'
                           ,function ($scope,$state,$window,$rootScope,$localStorage,$timeout,$q,$log,$mdUtil,ModalService,$modal) {
    debugger;

       /* $('#myModal').modal('show');*/

            debugger;


            this.myDate = new Date();
            this.isOpen = false;




        var self = this;

        self.simulateQuery = false;
        self.isDisabled    = false;


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
        if( $localStorage.localAreas == undefined){
        self.repos         = loadAll();
        function loadAll() {

                var repos =    [
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
                        'localArea'      : 'Adibatla',

                        'metro'  : 'Hyderabad',
                        'forks'     : 'India'
                    },
                    {
                        'localArea'      : 'Hitech City',

                        'metro'  : 'Hyderabad',
                        'forks'     : 'India'
                    },
                    {
                        'localArea'      : 'Banjara Hills ',

                        'metro'  : 'Hyderabad',
                        'forks'     : 'India'
                    }
                ];






            /*    var repos =    $localStorage.localAreas123;*/




            return repos.map( function (repo) {
                repo.value = repo.localArea.toLowerCase();
                return repo;
            });
        }
        }

         else{
            self.repos         = loadAll();
            function loadAll()

            {


                var repos = $localStorage.localAreas;

                debugger;

                return repos.map( function (repo) {
                    repo.value = repo.localArea.toLowerCase();
                    return repo;
                });
            }

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




        $scope.loadEditForm = function () {
            $scope.checkItem = "yes";
            $modal.open({
                templateUrl: 'app/Resorts/modal.html',
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

                    $window.location='index.html';

                });
        };

        if( $localStorage.localAreas == undefined){
            debugger;
            $scope.loadEditForm();
        }
        else{
            debugger;
        }


        $scope.regionModel = function(){ return  $localStorage.modelsearch.cityName; }

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


app.controller('modalController', ['$scope','$state','$window','$rootScope','$localStorage' ,'$timeout','$q','$log','$mdUtil','getParksLocalArea','$mdDialog',
                            function($scope,$state,$window,$rootScope,$localStorage,$timeout,$q,$log,$mdUtil,getParksLocalArea,$mdDialog) {


        debugger;

    var self = this;

    self.simulateQuery = false;
    self.isDisabled    = false;

    self.repos         = loadAll();
    self.querySearch   = querySearch;
    self.selectedItemChange = selectedItemChange;
    self.searchTextChange   = searchTextChange;


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
        {stateId:10000002,
            stateName:"Telangana",
            cityId:"10000001",
            cityName : "Hyderabad"
        },
        {stateId:10000002,
            stateName:"Telangana",
            cityId:"10000002",
            cityName : "Delhi"
        },
        {stateId:10000002,
            stateName:"Telangana",
            cityId:"10000003",
            cityName : "Mumbai"
        },
        {stateId:10000002,
            stateName:"Telangana",
            cityId:"10000004",
            cityName : "Bangalore"

        }

    ];
    return repos.map( function (repo) {
        repo.value = repo.cityName.toLowerCase();
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

      $scope.citySearchCall = function () {

       debugger;
          $localStorage.modelsearch =   $scope.ctrl.selectedItem;

          var localArea =   $scope.ctrl.selectedItem.cityId;

          getParksLocalArea.ParksLocalAreaDataService(localArea).then(function(localAreaInfo){
              debugger;
              if(localAreaInfo.responseCode == 200){
                  debugger;
                  $localStorage.localAreas =   localAreaInfo.resultObject;
                  $scope.$dismiss();
              }

              else{

                  $scope.$dismiss();
              }

          });

       };

                                $scope.status = '  ';
                                $scope.customFullscreen = false;

                                $scope.showAdvanced = function(ev) {
                                    debugger;
                                    $scope.$close();
                                    $mdDialog.show({

                                        templateUrl: 'app/Resorts/AllCities.html',
                                        controller: 'modalController as ctrl',
                                        parent: angular.element(document.body),
                                        targetEvent: ev,
                                        clickOutsideToClose:true,
                                        fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
                                    })
                                        .then(function(answer) {
                                            $scope.status = 'You said the information was "' + answer + '".';
                                        }, function() {
                                            debugger;
                                            $scope.status = 'You cancelled the dialog.';
                                        });
                                };

                                $scope.hidecitymodal = function () {

                                    debugger;

                                    $mdDialog.hide();
                                };

}]);