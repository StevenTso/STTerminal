/**
 * Terminal.js
 * Copyright © 2015 Steven Tso
 */

'use strict';

var Util = require('./util');
var DOM = require('./DOM');

var HIST = function(limit) {
	this.historyIndex = 0; //length
	//this.limit = limit || 20;
	this.historyArr = [];
};

HIST.prototype = {
	historyAdd: function(entry) {
		this.historyArr.push(entry);
		this.historyIndex++;
	},
	historyClear: function() {
		this.historyArr = [];
	},

	},
	historyBack: function() {
		this.historyIndex--;
		var command = this.historyArr[this.historyIndex];

		if (command)
			return command;
		else {
			this.historyIndex = 0;
			return this.historyArr[this.historyIndex];
		}
	},
	historyForward: function() {
		var command = this.historyArr[this.historyIndex];
		this.historyIndex++;

		if (command)
			return command;
		else {
			this.historyReset();
			return '';
		}
	}
};

module.exports = HIST;