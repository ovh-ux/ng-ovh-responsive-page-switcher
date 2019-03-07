import angular from 'angular';

import 'angular-animate';
import 'matchmedia-ng';

import ResponsiveSwitchController from './switch/switch.controller';
import directive from './directive';
import switchDirective from './switch/switch.directive';

import './index.less';

const moduleName = 'ngOvhResponsivePageSwitcher';

angular
  .module(moduleName, [
    'matchmedia-ng',
    'ngAnimate',
  ])
  .controller('responsiveSwitchController', ResponsiveSwitchController)
  .directive('responsiveSwitchPage', directive)
  .directive('responsiveSwitch', switchDirective);

export default moduleName;
