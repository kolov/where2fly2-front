(function() {
  'use strict';

  angular
    .module('where2fly2Front')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
