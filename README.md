# AngularJS String Humanize (angularjs-string-humanize)

## Description
AngularJS filter wrapping the 'string-humanize' library to handle unknown string format and convert to human readable.

## Usage

Apply filter to string in HTML or JS to convert formatted string to human readable.

### In HTML Template Binding
`{{ someString | stringHumanize}}`
### In JavaScript
`$filter('stringHumanize')(someString)`
### Returns

String in human readable form. The first letter will be capitalized in the word or phrase. 

### Examples 
Javascript 
```
$filter('stringHumanize')('snake_case_string') // 'Snake case string'
$filter('stringHumanize')('camelCaseString') // 'Camel case string'
$filter('stringHumanize')('hyphen-case-string-with-ext.html') // 'Hyphen case string with ext'
$filter('stringHumanize')(undefined) // ''
```

HTML
```
{{ 'hyphen-case-string' | stringHumanize}} // 'Hyphen case string'
{{ 'lower cased phrase' | stringHumanize}} // 'Lower cased phrase'
{{ '  remove extra  spaces  ' | stringHumanize}} //'Remove extra spaces'
{{ null | stringHumanize}} // ''
```

## Install

### Via bower

```
bower install --save angularjs-string-humanize
```

Include `src/angularjs-string-humanize.js` or `dist/angularjs-string-humanize.min.js` to your project or index file.

```
<script src="/bower_components/angularjs-string-humanize/dist/angularjs-string-humanize.min.js"></script>
```

Add it as a dependency to your angularjs project:

```
var app = angular.module("myApp", ['angularStringHumanize']);
```


## Compatibility

Functionality verified with unit test with angular versions from `v1.6.0`+.

## Credits

All credits go to [string-humanize](https://github.com/jxson/string-humanize) and [string-capitalize](https://github.com/jxson/string-capitalize). This is just packaged and tested version of their code. 