// File: moduleName.js
// первое определение модуля moduleName (например, для реализации абстрактного интерфейса)

(function(moduleName) {

	// Помещайте инициализационный код тут
	console.log('Инициализация moduleName');

	moduleName.publicProperty = 'Значение публичного свойства';

	var privateProperty = 'Значение приватного свойства';

	moduleName.publicMethod = function() {
		console.log('Исходный publicMethod для moduleName');
	};

	moduleName.toBeOverridden = function() {
		console.log('Исходный публичный метод toBeOverriden для модуля moduleName (будет переопределен)');
	};

	var privateMethod = function() {
		console.log('Приватный метод privateMethod для moduleName');
	};

} (global.moduleName = global.moduleName || {}));