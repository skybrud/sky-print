(function() {
	'use strict';

	angular.module('skyPrint').service('skyPrint',skyPrint);

	skyPrint.$inject = ['$rootScope'];

	function skyPrint($rootScope) {
		let _this = this;

		/* Firefox & IE */
		window.onbeforeprint = printEvent;

		/* Webkit */
		let mediaQuery = window.matchMedia('print');
		mediaQuery.addListener(function(query) {
		    if (query.matches) {
		        printEvent();
		    }
		});

		function printEvent() {
			$rootScope.$broadcast('skyPrint');
		}
	}
})();