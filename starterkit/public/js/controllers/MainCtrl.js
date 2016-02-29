// public/js/controllers/MainCtrl.js
angular.module('MainCtrl', []).controller('MainController', function($scope, $http, GooglePlus) {

    $scope.loginGoogle = function() {


        GooglePlus.login().then(function(authResult) {
            console.log(authResult);
            window.localStorage.setItem("access_token", authResult.access_token);

            GooglePlus.getUser().then(function(user) {
                console.log(user);
                $scope.getProfileInfo(user.id);
            });
        }, function(err) {
            console.log(err);
        });

    }

    $scope.getProfileInfo = function(me) {
            alert("https://www.googleapis.com/plus/v1/people/" + me);

            var headMy = {
                'Authorization': "Bearer " + window.localStorage.getItem("access_token"),
                "Host": 'www.googleapis.com',
                "Content-Type": 'application/x-www-form-urlencoded',
                "Content-Length": 473,
                "oauth_consumer_secret" : 'anonymous&',
                "oauth_consumer_key" : "anonymous&",
                "oauth_token" : "YOUR_TOKEN_SECRET&",
                "client_id" : "8819981768.apps.googleusercontent.com&",
                "client_secret" :"YOUR_CLIENT_SECRET&", "scope":"https%3A%2F%2Fdocs.google.com%2Ffeeds%2F+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fgoogletalk+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fdocs&oauth_token_secret=hrUbfZIRxIgpC_AN-arCYDsJ&",
                "grant_type" : "urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Amigration%3Aoauth1"
            }
            $http.get("https://www.googleapis.com/plus/v1/people/" + me, {
                    headers: headMy
                }).success(function(data) {
                    console.log(data);
                    console.log(data.emails);
                })
                .error(function(error) {
                    console.log(error);
                });
        }
        /**
         * Handler for the signin callback triggered after the user selects an account.
         */


});