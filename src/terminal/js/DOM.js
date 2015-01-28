/**
 * Terminal.js
 * Copyright © 2015 Steven Tso
 */

'use strict';

var Util = require('./util');

var DOM = {
	appendTerminal: function(ps, nodeMain) {
		nodeMain.className = 'terminaljs';

		var nodeL1_1 = Util.createDivByClassName('terminaljs-output');
		
		var nodeL1_2 = Util.createDivByClassName('terminaljs-prompt terminaljs-box');
		var nodeL2_1 = Util.createDivByClassName('terminaljs-ps');
		nodeL2_1.textContent = ps;
		var nodeL2_2 = Util.createDivByClassName('terminaljs-input');
		nodeL2_2.setAttribute('contenteditable', 'true');
		nodeL2_2.textContent = '';


		nodeL1_2.appendChild(nodeL2_1);
		nodeL1_2.appendChild(nodeL2_2);

		nodeMain.appendChild(nodeL1_1);
		nodeMain.appendChild(nodeL1_2);
	},
	addOutputInput: function(ps, input) {
		var nodeMain = Util.createDivByClassName('terminaljs-output-line');
		var nodeL2 = Util.createDivByClassName('terminaljs-output-content');
		var nodeL3 = Util.createDivByClassName('terminaljs-prompt terminaljs-box');
		var nodeL4_1 = Util.createDivByClassName('terminaljs-ps');
		nodeL4_1.textContent = ps;
		var nodeL4_2 = Util.createDivByClassName('terminaljs-input');
		nodeL4_2.textContent = input;

		nodeL3.appendChild(nodeL4_1);
		nodeL3.appendChild(nodeL4_2);
		nodeL2.appendChild(nodeL3);
		nodeMain.appendChild(nodeL2);

		return nodeMain;
	},
	addOutputOutput: function(input) {
		var nodeMain = Util.createDivByClassName('terminaljs-output-line');
		var nodeL2 = Util.createDivByClassName('terminaljs-output-content');
		nodeL2.textContent = input;

		nodeMain.appendChild(nodeL2);

		return nodeMain;
	},
	getPS: function() {
		var node = Util.getNodeByClassNameLast('terminaljs-ps');
		return node.textContent;
	},
	getPrompt: function() {
		var node = Util.getNodeByClassNameLast('terminaljs-input');
		return node.textContent;
	},
	setPrompt: function(input) {
		var node = Util.getNodeByClassNameLast('terminaljs-input');
		node.textContent = input;
	},
	resetPrompt: function() {
		var node = Util.getNodeByClassNameLast('terminaljs-input');
		node.textContent = '';
	},

	getParentDivOutput: function() {
		return Util.getNodeByClassNameFirst('terminaljs-output');
	},
	moveToParentDiv: function(childNode, parentNode) {
		parentNode.appendChild(childNode);
	}
};

module.exports = DOM;
