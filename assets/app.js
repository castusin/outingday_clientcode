
var app = angular.module('MyApp', ['ngRoute','ui.router','ui.bootstrap','ngMaterial','ngStorage','ngProgress','ngAnimate','ngTouch','angularModalService',"ngTextTruncate"]);
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


app.directive('ngEnter', function () { //a directive to 'enter key press' in elements with the "ng-enter" attribute

    return function (scope, element, attrs) {

        element.bind("keydown keypress", function (event) {
            if (event.which === 13) {
                scope.$apply(function () {
                    scope.$eval(attrs.ngEnter);
                });

                event.preventDefault();
            }
        });
    };
})

app.directive('starRating', function() {

    return {
        restrict: 'A',
        template: '<ul class="rating">' +
            '<li class="star" ng-repeat="star in stars" ng-class="{ filled: star.filled }" ng-click="toggle($index)"  ng-mouseleave="onMouseLeave($event)">' +
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

app.filter('INR', function () {
    return function (input) {
        if (! isNaN(input)) {
            var currencySymbol = '₹';
            //var output = Number(input).toLocaleString('en-IN');   <-- This method is not working fine in all browsers!
            var result = input.toString().split('.');

            var lastThree = result[0].substring(result[0].length - 3);
            var otherNumbers = result[0].substring(0, result[0].length - 3);
            if (otherNumbers != '')
                lastThree = ',' + lastThree;
            var output = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;

            if (result.length > 1) {
                output += "." + result[1];
            }

            return currencySymbol + output;
        }
    }
});

app.directive('onLoadClicker', ['$timeout',
    function($timeout) {
        return {
            restrict: 'A',
            priority: -1,
            link: function($scope, iElm, iAttrs, controller) {
                $timeout(function() {
                    iElm.triggerHandler('click');
                }, 0);
            }
        };
    }
])

   app.filter("foo", function(){
        return function(inputArray){
            return inputArray.map(function(item){
                return {a: item};
            });
        };
    });