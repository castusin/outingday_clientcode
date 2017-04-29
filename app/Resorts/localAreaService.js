

app.factory('getParksLocalArea',function ($http) {
    var webServiceUrl   = "http://od.littlepandits.com/";
    var config = {
        headers: {'Content-Type': 'application/json; charset=utf-8', 'Authorization': 'OD1@34'}
    };

    return{

        ParksLocalAreaDataService :  function(localArea){
            debugger;
            var promise = $http.get(webServiceUrl+'getParksLocalAreaData?cityId='+localArea,config) .then(function(response) {
                debugger;
                console.log('Response -- '+response.data);
                return response.data;
            }, function (error) {

            })
            return promise;
        }

    }

});