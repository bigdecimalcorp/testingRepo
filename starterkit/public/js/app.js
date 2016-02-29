var app=angular.module('sampleApp', ['ngRoute', 'appRoutes', 'MainCtrl', 'NerdCtrl', 'NerdService','googleplus']);
app.config(['GooglePlusProvider', function(GooglePlusProvider) {
     GooglePlusProvider.init({
        clientId: '16515522558-gditq3okrvfacd85sg6528a5138ao423.apps.googleusercontent.com',
        apiKey: 'AIzaSyAwDEvKiXE66BICHS-lQGYYMwtpPo8YFr8'
     });
}]);