// File: moduleName.implementationName.js
// second declaration of moduleName can extend, override and call inherited finctionality

(function(moduleName) {

	moduleName.publicProperty = 'public property value of second declaration will overwrite publicProperty of first declaration';

	// Place initialization code here
	console.log('implementationName initialization');

	var privateProperty = 'privat property value of second declaration will not overwrite privateProperty of first declaration';

	moduleName.publicMethod = function() {
		console.log('publicMethod of second declaration will overwrite publicMethod of first declaration');
	};  	

	privateMethod = function() {
		console.log('privateMethod of second declaration will not overwrite privateMethod of first declaration');
	};

	moduleName.toBeOverridden = moduleName.toBeOverridden.override(function() {
		console.log('Overridden method: moduleName.toBeOverridden');
		this.inherited(); // call to the inherited variant of this method
	});

	moduleName.wrapperName = function() {

		// Place wrapper initialization code here
		console.log('Wrapper to hide methods that should be overriden optionally');

		moduleName.publicMethod = moduleName.publicMethod.override(function() {
			console.log('Overridden method: moduleName.publicMethod');
		});

	};

} (global.moduleName = global.moduleName || {}));