angular.module("mobile-angular-ui.plugins.ui-router", ['mobile-angular-ui.directives.capture', 'ui.router'])

.run(["CaptureService", "$rootScope", function(CaptureService, $rootScope) {
    $rootScope.$on('$stateChangeStart', function() {
          CaptureService.resetAll();
    });
}]);
