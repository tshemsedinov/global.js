// File: moduleName.js
// declaration of moduleName (e.g. for abstract interfaces)

(function(moduleName) {

	// Place initialization code here
	console.log('moduleName initialization');

	moduleName.publicProperty = 'public property value';

	var privateProperty = 'privat property value';

	moduleName.publicMethod = function() {
		console.log('original publicMethod of moduleName');
	};

	moduleName.toBeOverridden = function() {
		console.log('original toBeOverriden public method of moduleName to be overridden later');
	};

	privateMethod = function() {
		console.log('privateMethod of moduleName');
	};

} (global.moduleName = global.moduleName || {}));