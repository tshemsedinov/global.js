global.js
=========

JavaScript module definition pattern for system modules to be loaded into global namespace (such as db drivers, utilities, configuration, API-wrappers, etc.).
Supported features:
* Public and private methods and properties.
* Module can be split into multiple files (core, constants, submodules with optional loading).
* Module can have multiple alternative realizations to be loaded optional.
* Module files concatenation and minification are allowed.
* Dynamic and optional loading for browsers.
* Both Node.js and browser way.
* Unloading for browsers.
* Module methods override and call to inherited methods.
* Some module methods can be hidden if you put them into wrapper (see example inside).