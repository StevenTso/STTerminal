/**
 * Terminal.js
 * Copyright © 2015 Steven Tso
 */

'use strict';


var _ = require('underscore');


function packageRouter(packageArr) {

	this.packageArr = packageArr;

};

packageRouter.prototype = {
	//entry point for query to be routed to appropriate package
	routeQuery: function(query) {
		console.log("ROUTING IS WORKING");
		var res = query.trim();
		res = res.replace(/\s+/g, " ");
		res = res.toLowerCase();


		var pkgName = (res.split(' '))[0];

		var pkgIn = _.find(this.packageArr, function(packageIn) { return packageIn.name === pkgName; });

		if(typeof pkgIn === 'undefined'){
   			return 'ERROR PARSING';
		};
		return pkgIn.parser(res);
	}
};

module.exports = packageRouter;