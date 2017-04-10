
var app = angular.module('MyApp', ['ngRoute','ui.router','ngAutocomplete','ui.bootstrap','ngMaterial']);
debugger;
app.config(function($stateProvider, $urlRouterProvider) {

    /*$urlRouterProvider.otherwise('/home');*/

    $stateProvider


        .state('Resorts', {
            url: '/Resorts',
            /*templateUrl:'../journey/ResortsImages/ResortsImages.html',*/
            templateUrl:'../app/Resorts/Resorts.html',
            controller:'ResortCtr'
        })


});
