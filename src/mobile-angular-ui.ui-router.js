angular.module("mobile-angular-ui.plugins.ui-router", ['mobile-angular-ui.directives.capture', 'ui.router'])

.run(["CaptureService", "$rootScope", function(Capture, $rootScope) {
    $rootScope.$on('$stateChangeStart', function() {
          Capture.resetAll();
    });
}]);
