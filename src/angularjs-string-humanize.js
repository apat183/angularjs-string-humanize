(function (angular) {
  'use strict';

  angular.module('angularStringHumanize', []).filter('stringHumanize', function () {

      function humanize(string) {
        string = string || '';
        string = string.toString();
        string = string.trim();
        string = string.replace(extname(string), '');
        string = underscore(string);
        string = string.replace(/[\W_]+/g, ' ');

        return capitalize(string);
      }

      function underscore(string) {
        string = string || '';
        string = string.toString();
        string = string.trim();
        string = string.replace(/([a-z\d])([A-Z]+)/g, '$1_$2');
        string = string.replace(/[-\s]+/g, '_').toLowerCase();

        return string;
      }

      function extname(string) {
        var index = string.lastIndexOf('.');
        var ext = string.substring(index, string.length);

        return (index === -1) ? '' : ext;
      }

      function capitalize(string) {
        string = string || '';
        string = string.trim();

        if (string[0]) {
          string = string[0].toUpperCase() + string.substr(1).toLowerCase();
        }

        return string;
      }

      return function (input) {
        return humanize(input);
      };

    });

}(angular));