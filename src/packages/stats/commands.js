/**
 * Terminal.js
 * Copyright © 2015 Steven Tso
 */

'use strict';

// var Stats = require('fast-stats').Stats;

function pkg_utilities_cmd() {
	this.funct = {
		average : ['avg', 'average'],
		range : ['rg', 'range'],
		median : ['md', 'median']
	}
};

pkg_utilities_cmd.prototype = {
	average: function(args) {
		// var s = new Stats().push(args);
		// return s.amean();
		return -1;
	},
	range: function(args) {
  		// var s = new Stats().push(args);
  		// return s.range();
  		return 2;
  	},
  	median: function(args) {
  		// var s = new Stats().push(args);
  		// console.log(s.median());
  		//2,4,6 != 22
  		return 3;
  	}
};


module.exports = pkg_utilities_cmd;