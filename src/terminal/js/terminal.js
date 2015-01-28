/**
 * Terminal.js
 * Copyright © 2015 Steven Tso
 */

'use strict';

var Util = require('./util');
var DOM = require('./DOM');
var EVT = require('./EVT');

var Terminal = function(ps, element, router) {
	element = Util.getElementById(element);
	DOM.appendTerminal(ps, element);

 	this.EVT = new EVT(element, router);

 	Util.setFocus();
};

module.exports = Terminal;