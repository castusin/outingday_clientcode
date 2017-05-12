app.controller('modalController', ['$scope','$state','$window','$rootScope','$localStorage' ,'$timeout','$q','$log','$mdUtil','getParksLocalArea','$mdDialog','ngProgressFactory',
    function($scope,$state,$window,$rootScope,$localStorage,$timeout,$q,$log,$mdUtil,getParksLocalArea,$mdDialog,ngProgressFactory) {


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

                } ,
                {stateId:10000002,
                    stateName:"Telangana",
                    cityId:"10000005",
                    cityName : "Vizag"

                } ,
                {stateId:10000002,
                    stateName:"Telangana",
                    cityId:"10000006",
                    cityName : "Kolkata"

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

            /*-------------  loader starts --------------*/

            debugger;
            $scope.progressbar = ngProgressFactory.createInstance();
            $scope.progressbar.start();
            $scope.progressbar.setColor('#EC971F');
            $scope.progressbar.setHeight('4px');

            getParksLocalArea.ParksLocalAreaDataService(localArea).then(function(localAreaInfo){
                debugger;
                if(localAreaInfo.responseCode == 200){
                    debugger;

                    $localStorage.localAreas =   localAreaInfo.resultObject;
                    $timeout($scope.progressbar.complete(), 1000);
                    $scope.$dismiss();
                }

                else{
                    $timeout($scope.progressbar.complete(), 1000);

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