


    app.factory('GetParksInfo',function ($http) {
        var webServiceUrl   = "http://od.littlepandits.com/";
        var config = {
            headers: {'Content-Type': 'application/json; charset=utf-8', 'Authorization': 'od1@34'}
         };

        return{

            GetParksService :  function(){
                debugger;
                var promise = $http.get(webServiceUrl+'getParksinfo?metro=Hyderabad&localArea=Madhapur&odRating=5',config) .then(function(response) {
                    debugger;
                    console.log('Response -- '+response.data);
                    return response.data;
                }, function (error) {

                })
                return promise;
            }

        }

    });