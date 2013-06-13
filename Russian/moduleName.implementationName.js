// File: moduleName.implementationName.js
// повторное определение модуля moduleName может расширять, переопределять и вызывать унаследованную функциональность

(function(moduleName) {

	// Помещайте инициализационный код для повторного оперделения тут
	console.log('Инициализация implementationName');

	// Публичное свойство в повторном определении
	// будет перекрывать публичное свойство первого определения
	//
	moduleName.publicProperty = 'Публичное свойство перекрыто';

	// Приватное свойство в повторном определении
	// не будет перекрывать приватное свойство первого определения
	//
	var privateProperty = 'Приватное свойство не перекрыто';

	moduleName.publicMethod = function() {
		// Публичное свойство в повторном определении
		// будет перекрывать публичное свойство первого определения
		console.log('Публичный метод перекрыт');
	};  	

	privateMethod = function() {
		console.log('Приватный метод не перекрыт');
	};

	// Переопределение метода через "Function.override"
	//
	moduleName.toBeOverridden = moduleName.toBeOverridden.override(function() {
		console.log('Переопределенный метод: moduleName.toBeOverridden');
		this.inherited(); // вызов предыдущей реализации метода
	});

	// Обертка части переопределения, которая будет инициализироваться опционально
	// по какому-либо условию из внешнего кода или из блока инициализации
	// 
	moduleName.wrapperName = function() {

		// Помещайте инициализационный код обертки тут
		console.log('Обертка инициализирует скрутый функционал');

		moduleName.publicMethod = moduleName.publicMethod.override(function() {
			console.log('Метод переопределен: moduleName.publicMethod');
		});

	};

} (global.moduleName = global.moduleName || {}));