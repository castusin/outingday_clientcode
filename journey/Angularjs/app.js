
var app = angular.module('MyApp', ['ui.router','ngAutocomplete','ui.bootstrap']);
debugger;
app.config(function($stateProvider, $urlRouterProvider) {

    /*$urlRouterProvider.otherwise('/home');*/

    $stateProvider


        .state('Resorts', {
            url: '/Resorts',
            /*templateUrl:'../journey/Resorts/Resorts.html',*/
            templateUrl:'../journey/Resorts/Resorts.html',
            controller:'ResortCtr'
        })


});




