/**
 * Terminal.js
 * Copyright © 2015 Steven Tso
 */

'use strict';

var Util = require('./util');
var DOM = require('./DOM');
var HIST = require('./HIST');

// var jq = require('x');
var $ = require('jquery');
var Bloodhound = require('bloodhound');

var EVT = function(element, router) {
	var self = this;

	this.HIST = new HIST();

	this.router = router;
	this.pkgName = [];
	this.router.packageArr.forEach(function(entry) {
    	self.pkgName.push(entry.name);
	});


	this.engine = new Bloodhound({
		name: 'animals',
		local: this.pkgName,
		datumTokenizer: function(d) {
			return Bloodhound.tokenizers.whitespace(d);
		},
		queryTokenizer: Bloodhound.tokenizers.whitespace
	});
	var promise = this.engine.initialize();

	promise
	.done(function() { 
		console.log('success!');
	})
	.fail(function() { console.log('err!'); });



	element.onkeydown = function(e) { self.keydown(e) };
};

EVT.prototype = {
	keydown: function(e) {
		var self = this;

		switch (e.keyCode) {
			case 13: //Enter key
				e.preventDefault();
				e.stopPropagation();
				self.enterKey();
				break;
			case 38: //Up key
				e.preventDefault();
				e.stopPropagation();
				self.upKey();
				break;
			case 40: //Down key
				e.preventDefault();
				e.stopPropagation();
				self.downKey();
				break;
			case 9: // Tab key
				e.preventDefault();
				e.stopPropagation();
				self.tabKey();
				break;
			default:
				// console.log('oga buga');
			}
	},
	enterKey: function() {
		var ps = DOM.getPS();
		var query = DOM.getPrompt();
		var result = this.router.routeQuery(query);

		this.HIST.historyAdd(query);

		var nodeMain = DOM.getParentDivOutput();

		nodeMain.appendChild(DOM.addOutputInput(ps, query));
		nodeMain.appendChild(DOM.addOutputOutput(result));

		DOM.resetPrompt();
	},
	tabKey: function() {
		var query = DOM.getPrompt();
		this.engine.get(query, function(d) {
			if(d.length) {
				DOM.setPrompt(d);
				Util.placeCaretAtEnd();
			}
		});
	},
	upKey: function() {
		DOM.setPrompt(this.HIST.historyBack());
	},
	downKey: function() {
		DOM.setPrompt(this.HIST.historyForward());
	}
};

module.exports = EVT;