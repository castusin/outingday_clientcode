
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



app.directive('starRating', function() {

    return {
        restrict: 'A',
        template: '<ul class="rating">' +
            '<li class="star" ng-repeat="star in stars" ng-class="{ filled: star.filled }" ng-click="toggle($index)" ng-mouseenter="onMouseEnter($event, $index + 1)" ng-mouseleave="onMouseLeave($event)">' +
            '\u2605' +
            '</li>' +
            '</ul>',
        scope: {
            ratingValue: '=',
            max: '='
        },
        link: function(scope, elem, attrs) {

            // Initialise the stars array.
            scope.stars = [];

            var updateStars = function(rating) {

                for (var i = 0; i < scope.max; i++) {
                    var filled = i < Math.round(rating);
                    // Check if the item in the stars array exists and
                    // append it, otherwise update it.
                    if (scope.stars[i] === undefined) {
                        scope.stars.push({
                            filled: filled
                        });
                    } else {
                        scope.stars[i].filled = filled;
                    }
                }

            };

            // Trigger an update immediately.
            updateStars(scope.ratingValue);

            // Triggered when the cursor enters a star rating (li element).
            scope.onMouseEnter = function (event, rating) {
                updateStars(rating);
            };

            // Triggered when the cursor leaves a star rating.
            scope.onMouseLeave = function (event) {
                updateStars(scope.ratingValue);
            };

            scope.$watch('ratingValue', function(value, previousValue) {
                // Only update the view when the value changed.
                if (value !== previousValue) {
                    updateStars(scope.ratingValue);
                }
            });

        }
    }
});