var Simple = (function(module) {

	module.Now = function(resultObject) {
		resultObject.prepend(Date() + '<br />');
	};

	return module;
} (Simple || {}));
