// File: global.js
// Should be loaded first

if (typeof(window) != 'undefined') window.global = window;

Function.prototype.override = function(fn) {
	var superFunction = this;
	return function() {
		this.inherited = superFunction;
		return fn.apply(this, arguments);
	}
}