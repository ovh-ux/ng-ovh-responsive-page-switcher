import angular from 'angular';

export default /* @ngInject */ function ($scope) {
  this.pages = [];

  let lastActivePage;

  this.addPage = function (page) {
    return this.pages.push(page) - 1;
  };

  this.setActivePage = function (pageIndex) {
    if (this.pages.length > pageIndex) {
      angular.forEach(this.pages, (page, index) => {
        // set all page to inactive
        if (page.active) {
          page.active = false; // eslint-disable-line
          lastActivePage = index;
        }
      });
      this.pages[pageIndex].active = true;
    }
  };

  /**
     *  Responsivity
     */

  this.getTotalPageWidth = function () {
    return this.pages.length * $scope.pageWidth;
  };

  /**
     *  Utils
     */
  this.getLastActivePage = function () {
    return lastActivePage;
  };

  this.getDisplayMode = function () {
    return $scope.responsiveSwitchPageMode;
  };

  this.getActivePage = function () {
    return $scope.activePageIndex;
  };
}
