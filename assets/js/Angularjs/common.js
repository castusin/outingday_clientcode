



app.controller('MainCtr',['$scope','$state','$window','$rootScope','$localStorage' ,'$timeout','$q','$log','$mdUtil','ModalService','$modal'
                           ,function ($scope,$state,$window,$rootScope,$localStorage,$timeout,$q,$log,$mdUtil,ModalService,$modal) {
    debugger;

       /* $('#myModal').modal('show');*/

            debugger;

        $scope.offersList =[
            {

                offerimg : "offer_1.jpg",
                offerdes : "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset .",

                offerrating : "1500/-",
				offerprice:   "1300/-",
				save:          "Save-20%",
                offerparkId : "100001"
            },
            {
                offerimg : "offer_2.jpg",
                offerdes : "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset .",
                offerrating : "1800/-",
				offerprice:   "1300/-",
				
				save:          "Save-30%",
                offerparkId : "100002"
            },
            {
                offerimg : "offer_3.jpg",
                offerdes : "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset .",
                offerrating : "2000/-",
				offerprice:   "1300/-",
				save:          "Save-40%",
                offerparkId : "100003"
            },
            {
                offerimg : "offer_4.jpg",
                offerdes : "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset .",
                offerrating : "2500/-" ,
				offerprice:   "1500/-",
				save:          "Save-20%",
				
                offerparkId : "100004"
            }
        ]


        $scope.popularCategoryList =[
            {
                popularname : "Golkonda Resorts & Spa",
                popularimg : "pop_1.jpg",
                populardes : "This property is 9 minutes walk from the beach. Located in Baga, 1.9 km from Britto's, Ticlo Resorts.",

                popularrating : "4.1" ,
                popularparkId : "100001"

            },
            {
                popularname : "Summer Green Resort",
                popularimg : "pop_2.jpg",
                populardes : "This property is 9 minutes walk from the beach. Located in Baga, 1.9 km from Britto's, Ticlo Resorts.",

                popularrating : "4.1" ,
                popularparkId : "100002"
            },
            {
                popularname : "Dream Valley Resort & Spa",
                popularimg : "pop_3.jpg",
                populardes : "This property is 9 minutes walk from the beach. Located in Baga, 1.9 km from Britto's, Ticlo Resorts.",

                popularrating : "4.1" ,
                popularparkId : "100003"
            },
            {
                popularname : "Mrugavani Resort and Spa",
                popularimg : "pop_4.jpg",
                populardes : "This property is 9 minutes walk from the beach. Located in Baga, 1.9 km from Britto's, Ticlo Resorts.",

                popularrating : "4.1",
                popularparkId : "100004"
            }
        ]



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

        if( $localStorage.localAreas == undefined){
            debugger;
            $scope.regionModel = function(){ return  "SELECT A REGION"; }
        }
        else{
            debugger;
            $scope.regionModel = function(){ return  $localStorage.modelsearch.cityName; }
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



        $scope.offerCall= function(parkId){

            debugger;
            $localStorage.parkId = parkId;
            $window.location='../../app/Resorts/Details.html';
        }

        $scope.popularCall= function(parkId){

            debugger;
            $localStorage.parkId = parkId;
            $window.location='../../app/Resorts/Details.html';
        }



}]);


