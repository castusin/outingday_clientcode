


    app.factory('GetParksInfo',function ($http) {
        var webServiceUrl   = "http://od.littlepandits.com/";
        var config = {
            headers: {'Content-Type': 'application/json; charset=utf-8', 'Authorization': 'OD1@34'}
         };

        return{

            GetParksService :  function(parks){
                debugger;
                var promise = $http.get(webServiceUrl+'getParksinfo?&parkType=resort&metro='+parks.cityName+'&localArea='+parks.localArea,config) .then(function(response) {
                    debugger;
                    console.log('Response -- '+response.data);
                    return response.data;
                }, function (error) {

                })
                return promise;
            }

        }

    });