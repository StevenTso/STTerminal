/**
 * Terminal.js
 * Copyright © 2015 Steven Tso
 */

'use strict';

var _ = require('underscore');

var commands = require('./commands');
var lexer = require('./lexer');

function pkg_utilities() {
	this.name = 'stats';
	this.version = '0.1';

	this.commands = new commands();
};

pkg_utilities.prototype = {
	parser: function(query) {
		var parser = lexer.parse(query);
		if(typeof parser === 'undefined'){
   			return 'ERROR PARSING';
		};
		var queryArr = parser.split(',');

		var pkg = queryArr[0];
		var cmd = queryArr[1];

		var temp = queryArr;
		var args = queryArr.splice(2, queryArr.length);
		queryArr = temp;

		if(_.contains(this.commands.funct.average, cmd)) {
			return this.commands.average(args);
		}
		else if(_.contains(this.commands.funct.range, cmd)) {
			return this.commands.range(args);
		}
		else if(_.contains(this.commands.funct.median, cmd)) {
			return this.commands.median(args);
		}
		else {
			//error case
			return 'ERROR PARSING MATH';
		}
	}
};


module.exports = pkg_utilities;