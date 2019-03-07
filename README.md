# ng-ovh-responsive-page-switcher

> AngularJS module is a set of 2 directives (`responsive-switch` and `responsive-switch-page`) that enable to display content like pages.

[![Downloads](https://badgen.net/npm/dt/@ovh-ux/ng-ovh-responsive-page-switcher)](https://npmjs.com/package/@ovh-ux/ng-ovh-responsive-page-switcher) [![Dependencies](https://badgen.net/david/dep/ovh-ux/ng-ovh-responsive-page-switcher)](https://npmjs.com/package/@ovh-ux/ng-ovh-responsive-page-switcher?activeTab=dependencies) [![Dev Dependencies](https://badgen.net/david/dev/ovh-ux/ng-ovh-responsive-page-switcher)](https://npmjs.com/package/@ovh-ux/ng-ovh-responsive-page-switcher?activeTab=dependencies) [![Gitter](https://badgen.net/badge/gitter/ovh-ux/blue?icon=gitter)](https://gitter.im/ovh/ux)

## Install

```sh
yarn add @ovh-ux/ng-ovh-responsive-page-switcher
```

## Usage

```js
import angular from 'angular';
import ngOvhResponsivePageSwitcher from '@ovh-ux/ng-ovh-responsive-page-switcher';

angular
  .module('myApp', [
    ngOvhResponsivePageSwitcher,
  ]);
```

It detects available width for displaying page in 2 distinct modes :

* `switch` mode : one page is displayed at a time ;
* `sidebyside` mode : pages are displayed side by side.

__Note__ : `ng-ovh-responsive-page-switcher` is suitable with [ng-ovh-responsive-popover](https://github.com/ovh-ux/ng-ovh-responsive-popover).

#### HTML

Directives `responsive-switch` and `responsive-switch-page` will be used.

`responsive-switch-page` requires `responsive-switch`, so first we create this directive:

```html
<div data-responsive-switch>
    <div class="responsive-switch-page-left"
         data-responsive-switch-page>
    </div>
    <div class="responsive-switch-page-right"
         data-responsive-switch-page>
    </div>
</div>
```

## Dependencies

* [matchmedia-ng](https://github.com/AnalogJ/matchmedia-ng)
* [angular-animate](https://docs.angularjs.org/api/ngAnimate)

## Test

```sh
yarn test
```

## Contributing

Always feel free to help out! Whether it's [filing bugs and feature requests](https://github.com/ovh-ux/ng-ovh-responsive-page-switcher/issues/new) or working on some of the [open issues](https://github.com/ovh-ux/ng-ovh-responsive-page-switcher/issues), our [contributing guide](CONTRIBUTING.md) will help get you started.

## License

[BSD-3-Clause](LICENSE) © OVH SAS
