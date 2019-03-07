export default /* @ngInject */ function () {
  return {
    restrict: 'A',
    require: '^responsiveSwitch',
    scope: true,
    transclude: true,
    replace: true,
    template: '<div class="responsive-switch-page">'
        + '<div class="responsive-switch-page-wrapper" data-ng-if="active || (getResponsiveSwitchMode() === \'sidebyside\' && getResponsiveSwitchActivePage() === 1)">'
          + '<div class="responsive-switch-page-content" data-ng-transclude></div>'
        + '</div>'
      + '</div>',
    compile() {
      return {
        pre($scope) {
          $scope.active = false;
        },
        post($scope, $element, attr, switchPageCtrl) {
          $scope.pageIndex = switchPageCtrl.addPage($scope);

          $scope.isMoveToLeft = function () {
            const lastPageIndex = switchPageCtrl.getLastActivePage();
            if (lastPageIndex !== undefined && switchPageCtrl.getDisplayMode() === 'switch') {
              return lastPageIndex <= $scope.pageIndex
                && switchPageCtrl.getActivePage() > $scope.pageIndex;
            }
            return false;
          };

          $scope.isMoveToRight = function () {
            const lastPageIndex = switchPageCtrl.getLastActivePage();
            if (lastPageIndex !== undefined && switchPageCtrl.getDisplayMode() === 'switch') {
              return lastPageIndex >= $scope.pageIndex
                && switchPageCtrl.getActivePage() < $scope.pageIndex;
            }
            return false;
          };

          $scope.isMoveFromLeft = function () {
            const lastPageIndex = switchPageCtrl.getLastActivePage();
            if (lastPageIndex !== undefined && switchPageCtrl.getDisplayMode() === 'switch') {
              return lastPageIndex > $scope.pageIndex
                && switchPageCtrl.getActivePage() === $scope.pageIndex;
            }
            return false;
          };

          $scope.isMoveFromRight = function () {
            const lastPageIndex = switchPageCtrl.getLastActivePage();
            if (lastPageIndex !== undefined && switchPageCtrl.getDisplayMode() === 'switch') {
              return lastPageIndex < $scope.pageIndex
                && switchPageCtrl.getActivePage() === $scope.pageIndex;
            }
            return false;
          };

          $scope.isPageOnForeGround = function () {
            const lastPageIndex = switchPageCtrl.getLastActivePage();
            if (lastPageIndex !== undefined && switchPageCtrl.getDisplayMode() === 'sidebyside') {
              return lastPageIndex === $scope.pageIndex;
            }
            return false;
          };

          $scope.isMoveRightFromMiddle = function () {
            const lastPageIndex = switchPageCtrl.getLastActivePage();
            if (lastPageIndex !== undefined && switchPageCtrl.getDisplayMode() === 'sidebyside') {
              return lastPageIndex < $scope.pageIndex
                && switchPageCtrl.getActivePage() === $scope.pageIndex;
            }
            return false;
          };

          $scope.getResponsiveSwitchMode = function () {
            return switchPageCtrl.getDisplayMode();
          };

          $scope.getResponsiveSwitchActivePage = function () {
            return switchPageCtrl.getActivePage();
          };
        },
      };
    },
  };
}
