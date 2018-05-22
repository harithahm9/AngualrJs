(function() {
  'use strict';

  angular
    .module('day15')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
