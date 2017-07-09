/*global beforeEach, describe, it, inject, expect, module */
'use strict';

describe('String Humanize', function () {

  var humanize;

  beforeEach(module('angularStringHumanize'));

  beforeEach(inject(function ($filter) {
    humanize = $filter('stringHumanize');
  }));

  describe('default functionality', function () {

    it('should format snake case strings', function () {
      expect(humanize('snake_case_string')).toEqual('Snake case string');
    });

    it('should format camel case string', function () {
      expect(humanize('camelCaseString')).toEqual('Camel case string');
    });

    it('should format hyphen case string', function () {
      expect(humanize('hyphen-case-string')).toEqual('Hyphen case string');
    });

    it('should remove extensions and format strings any case', function () {
      expect(humanize('snake_case_string.js')).toEqual('Snake case string');
      expect(humanize('camelCaseString.md')).toEqual('Camel case string');
      expect(humanize('hyphen-case-string.html')).toEqual('Hyphen case string');
    });

    it('should format lower cased phrase string', function () {
      expect(humanize('lower cased phrase')).toEqual('Lower cased phrase');
    });

    it('should format and remove all excess spaces in string', function () {
      expect(humanize('  remove extra  spaces  ')).toEqual('Remove extra spaces');
    });

    it('should format numbers to string', function () {
      expect(humanize('123')).toEqual('123');
    });

    it('should be able to handle blank null and undefined', function () {
      expect(humanize('')).toEqual('');
      expect(humanize(null)).toEqual('');
      expect(humanize(undefined)).toEqual('');
    });

  });

});