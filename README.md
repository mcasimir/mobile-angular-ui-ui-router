# Mobile Angular Ui - Ui Router Support

## Installation

Either download the latest release or install via bower

``` sh
bower install mobile-angular-ui-ui-router
```

## Usage

Load `angular-ui-router.min.js` and `dist/mobile-angular-ui.ui-router.js` in your html:

``` html
<script src="bower_components/angular-ui-router/release/angular-ui-router.min.js"></script>
<script src="dist/mobile-angular-ui.ui-router.min.js"></script>
``` 

Declare the module as dependency for your app:

``` js
angular.module('myApp', ["mobile-angular-ui.plugins.ui-router"]);
```

## Publishing releases

``` sh
grunt major/minor/patch/prerelease [--msg='optional message']
```
