/**
 * Terminal.js
 * Copyright © 2015 Steven Tso
 */

'use strict';

var Util = {
	createDivByClassName: function(className) {
		var node = document.createElement('div');
		node.className = className;
		return node;
	},
	getNodeByClassNameFirst: function(input) {
		var node = document.getElementsByClassName(input);
		return node[0];
	},
	getNodeByClassNameLast: function(input) {
		var node = document.getElementsByClassName(input);
		return node[node.length-1];
	},
	getElementById: function(elementId) {
		return document.getElementById(elementId.replace('#',''));
	},
	setFocus: function() {
		var node = (document.getElementsByClassName('terminaljs-input'));
		node = node[node.length-1];

		node.focus();
	},
	placeCaretAtEnd: function() {
		var el = (document.getElementsByClassName('terminaljs-input'));
		el = el[el.length-1];
		el.focus();
		if (typeof window.getSelection != "undefined" && typeof document.createRange != "undefined") {
			var range = document.createRange();
			range.selectNodeContents(el);
			range.collapse(false);
			var sel = window.getSelection();
			sel.removeAllRanges();
			sel.addRange(range);
		} 
		else if (typeof document.body.createTextRange != "undefined") {
			var textRange = document.body.createTextRange();
			textRange.moveToElementText(el);
			textRange.collapse(false);
			textRange.select();
		}
	}
};

module.exports = Util;