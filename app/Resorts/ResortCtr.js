
app.controller('ResortCtr',['$scope','$state','GetParksInfo','$rootScope','$window', '$localStorage','$timeout','$q','$log','ngProgressFactory',
    function ($scope,$state,GetParksInfo,$rootScope,$window,$localStorage,$timeout,$q,$log,ngProgressFactory) {
        debugger;

        $scope.ctrl.selectedItem = $localStorage.searchInput;
        $scope.cityName =  $localStorage.modelsearch.cityName;
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
            /*[
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


        /*-----Latest Filter Code bk start------*/




        /*$scope.GetRattingMastersList=[
         {Id:5,ratting:'5'},
         {Id:4,ratting:'4'},
         {Id:3,ratting:'3'},
         {Id:2,ratting:'2'},
         {Id:1,ratting:'1'}
         ];*/

        $scope.GetNoOfPeopleMastersList=[
            {Id:1,NoofPeopleDesc:'1-5'},
            {Id:2,NoofPeopleDesc:'6-10'},
            {Id:3,NoofPeopleDesc:'11-20'},
            {Id:4,NoofPeopleDesc:'20+'}
        ];

        $scope.GetTypesMastersList=[
            {Id:1,typename:'Friends (30)'},
            {Id:2,typename:'Family&Kids (32)'},
            {Id:3,typename:'Corpotare Team (23)'},
            {Id:4,typename:'Couples (28)'},
            {Id:5,typename:'Join a group (3)'},
            {Id:6,typename:'Solo(1)'}
        ];

        $scope.GetNatureMastersList=[
            {Id:1,NatureName:'Day Outs (28)'},
            {Id:2,NatureName:'Family fun (13)'},
            {Id:3,NatureName:'Perfect for Monsoon (12)'},
            {Id:4,NatureName:'Sports & Games (4)'},
            {Id:5,NatureName:'Adventure Special (4)'},
            {Id:6,NatureName:'Team Experiances (2)'},
            {Id:7,NatureName:'Food & Drinks (2)'},
            {Id:8,NatureName:'Spa & Rejuvanation (1)'},
            {Id:9,NatureName:'Night life (1)'}
        ];

        $scope.GetDurationMasterList=[
            {Id:1,durationName:'0-2 Hours'},
            {Id:2,durationName:'2-5 Hours'},
            {Id:3,durationName:'Full'},
            {Id:4,durationName:'Multi Day'}
        ];




        /*-------------------------------------*/





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
        /*---------------------------------------*/

        $scope.todos = [];
        $scope.OrgDataList='';
        $scope.GetOurSearchInfoList='';
        $scope.GetPreviousInfoList='';
        $scope.GoToDisplayData='';

        /*---------------------------------------*/

        $scope.progressbar = ngProgressFactory.createInstance();
        $scope.progressbar.start();
        $scope.progressbar.setColor('#EC971F');
        $scope.progressbar.setHeight('4px');

        var parks =  $localStorage.searchInput;
		$('#img-load').show();
        GetParksInfo.GetParksService(parks).then(function(ParksInfo){
            debugger;
            if(ParksInfo.responseCode == 200){
                $timeout($scope.progressbar.complete(), 1000);
				$('#img-load').hide();
                debugger;

                $scope.makeTodos = function() {
                    $scope.todos = [];
                    debugger;
                    $scope.OrgDataList=ParksInfo.resultObject;
                    $scope.GetOurSearchInfoList=ParksInfo.resultObject;
                    $scope.todos = ParksInfo.resultObject;
                    var data = $.grep($scope.todos,function(td){}).parktype;
                };
                $scope.makeTodos();

                $scope.$watch('currentPage + numPerPage', function() {
                    $timeout(function() {
                        var begin = (($scope.currentPage - 1) * $scope.numPerPage)
                        , end = begin + $scope.numPerPage;

                    $scope.DetailsListInfo = $scope.todos.slice(begin, end);
                }, 10);
                });


                /*  $scope.DetailsListInfo = ParksInfo.resultObject;*/
            }

            else{
                $timeout($scope.progressbar.complete(), 1000);
				$('#img-load').hide();

            }

        });

       /* $(document).ready(function () {
            $('div img').hide();
        });

        $(window).load(function () {
            $('div img').show();
        });
*/
        $scope.viewResortsCall=function(){
                 debugger;
          /*  $scope.progressbar = ngProgressFactory.createInstance();
            $scope.progressbar.start();
            $scope.progressbar.setColor('#EC971F');
            $scope.progressbar.setHeight('4px');*/

            var parks =  $scope.ctrl.selectedItem;

            GetParksInfo.GetParksService(parks).then(function(ParksInfo){
                debugger;
                if(ParksInfo.responseCode == 200){

                  /*  $timeout($scope.progressbar.complete(), 1000);*/

                    debugger;

                    $scope.makeTodos = function() {
                        $scope.todos = [];
                        debugger;
                        $scope.GetOurSearchInfoList=ParksInfo.resultObject;
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

                   /* $timeout($scope.progressbar.complete(), 1000);*/


                }

            });

        }

        /*//-------------Popularity Filter Start----------------//*/
        $scope.popHL=function () {
            debugger;
            $scope.GetOurSearchInfoList.sort();
        }
        /*//-------------Popularity Filter End----------------//*/

        /*//-------------Ratting Filter Start----------------//*/

        /*//-------------Ratting Filter End----------------//*/

        /*//-------------Cost high to Low Start----------------//*/

        /*//-------------Cost high to Low End----------------//*/

        /*//-------------Cost low to high Start----------------//*/

        /*//-------------Cost low to high End----------------//*/

        /*--------------1 Peoples Filter Start----------------------*/
        $scope.NmbOfPleTempData={};
        $scope.GetPeoplesFilter=function(pplVal){
            debugger;
            $scope.GetpplVal=pplVal;

            if($scope.NmbOfPleTempData.length==undefined) {
                $scope.NmbOfPleTempData = $scope.GetOurSearchInfoList;
            }

            $scope.PeoplesFilter = [];
            $scope.SelectedPeoples = $.grep($scope.NmbOfPleTempData, function (ppl) {
                return ppl.maxPeople == $scope.GetpplVal
            });
            for (j = 0; j < $scope.SelectedPeoples.length; j++) {
                $scope.PeoplesFilter.push($scope.SelectedPeoples[j]);
            }
            debugger;
            $scope.GoToDisplayData = $scope.PeoplesFilter;
            GetOutPutDataInfo();
        };

        /*--------------1 Peoples Filter End-----------------------*/

        /*---------------2 Type Filter start-----------------*/
        $scope.TypSelection=[];
        $scope.TypTempData={};

        $scope.GetTypesFilter=function(TypeVal) {
            debugger;
            $scope.TypeFiltter = [];
            var GetVal = $scope.TypSelection.indexOf(TypeVal);
            if (GetVal > -1) {
                $scope.TypSelection.splice(GetVal, 1);
                $scope.RemoveTypeTempData={};
                if($scope.RemoveTypeTempData.length==undefined){
                    $scope.RemoveTypeTempData=$scope.GetOurSearchInfoList;
                }
                for (i = 0; i < $scope.TypSelection.length; i++) {
                    $scope.SelectedTypes = $.grep($scope.RemoveTypeTempData, function (typs) {
                        return typs.typeString.match($scope.TypSelection[i]);
                    });
                    debugger;
                    for (j = 0; j < $scope.SelectedTypes.length; j++) {
                        $scope.TypeFiltter.push($scope.SelectedTypes[j]);
                    }
                    $scope.SelectedTypes='';
                }
            }
            else {
                $scope.TypSelection.push(TypeVal);
                if($scope.TypTempData.length==undefined){
                    $scope.TypTempData = $scope.GetOurSearchInfoList;
                }

                for (i = 0; i < $scope.TypSelection.length; i++) {
                    $scope.SelectedTypes = $.grep($scope.TypTempData, function (typs) {
                        return typs.typeString.match($scope.TypSelection[i]);
                    });
                    debugger;
                    for (j = 0; j < $scope.SelectedTypes.length; j++) {
                        $scope.TypeFiltter.push($scope.SelectedTypes[j]);
                    }
                    $scope.SelectedTypes='';
                }
            }



            $scope.GoToDisplayData=$scope.TypeFiltter;

            GetOutPutDataInfo();
        };

        /*----------------2 Type Filter End-----------------*/

        /*--------------3 Nature Filter Start----------------------*/
        $scope.NatureSelection=[];
        $scope.NatureTempData={};
        $scope.GetNatureFilter=function(NatVal){
            debugger;
            $scope.NatureFiltter = [];
            var GetVal = $scope.NatureSelection.indexOf(NatVal);
            if (GetVal > -1) {
                $scope.NatureSelection.splice(GetVal, 1);
                $scope.RemoveNatureTempData={};
                if($scope.RemoveNatureTempData.length==undefined){
                    $scope.RemoveNatureTempData=$scope.GetOurSearchInfoList;
                }
                for (i = 0; i < $scope.NatureSelection.length; i++) {
                    debugger;
                    $scope.SelectedNatures = $.grep($scope.RemoveNatureTempData, function (ntr) {
                        return ntr.natureString.match($scope.NatureSelection[i]);
                    });
                    debugger;
                    for (j = 0; j < $scope.SelectedNatures.length; j++) {
                        $scope.NatureFiltter.push($scope.SelectedNatures[j]);
                    }
                }
            }
            else {
                $scope.NatureSelection.push(NatVal);
                if($scope.NatureTempData.length==undefined){
                    $scope.NatureTempData = $scope.GetOurSearchInfoList;
                }
                for (i = 0; i < $scope.NatureSelection.length; i++) {
                    debugger;
                    $scope.SelectedNatures = $.grep($scope.NatureTempData, function (ntr) {
                        return ntr.natureString.match($scope.NatureSelection[i]);
                    });
                    debugger;
                    for (j = 0; j < $scope.SelectedNatures.length; j++) {
                        $scope.NatureFiltter.push($scope.SelectedNatures[j]);
                    }
                }
            }



            $scope.GoToDisplayData=$scope.NatureFiltter;
            GetOutPutDataInfo();
        };
        /*--------------3 Nature Filter End----------------------*/

        /*--------------4 Duration Filter Start------------------*/
        $scope.HoursTempData={};
        $scope.GetHoursFilter=function (hrVal) {
            debugger;
            $scope.GetHrVal=hrVal;

            if($scope.HoursTempData.length==undefined){
                $scope.HoursTempData=$scope.GetOurSearchInfoList;
            }
            $scope.HoursFilter=[];
            $scope.SelectedRattings = $.grep($scope.HoursTempData, function (srList) {
                return srList.durationString == $scope.GetHrVal;
            });
            for (j = 0; j < $scope.SelectedRattings.length; j++) {
                $scope.HoursFilter.push($scope.SelectedRattings[j]);
            }
            $scope.GoToDisplayData=$scope.HoursFilter;
            GetOutPutDataInfo();
        };
        /*--------------4 Duration Filter End------------------*/




//---------------Main Functionalty starts-------------------//
        function GetOutPutDataInfo(){
            $scope.$watch('currentPage + numPerPage', function () {
                var begin = (($scope.currentPage - 1) * $scope.numPerPage)
                    , end = begin + $scope.numPerPage;
                debugger;
                $scope.DetailsListInfo = $scope.GoToDisplayData.slice(begin, end);
                $scope.GetOurSearchInfoList=$scope.GoToDisplayData;
            });
        };
//---------------Main Functionalty Ends-------------------//




        $scope.bookResort= function(parkId){

            debugger;
            $localStorage.parkId = parkId;
            $window.location='../Resorts/Details.html';
        }




    }]);