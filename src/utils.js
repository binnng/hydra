
// 修复原有each对类数组操作的错误
var _each = each;

each = function (data, callback) {
  _each(data.length ? [].filter.call(data, function(i) {
  	return true;
  }) : data, callback);
};

// 扩展util
extend(utils, isType, {
	each: each,

	// 修复isType中对dom类型操作的错误
	isObject: function(obj) {
		var type = typeof obj;
		return type === 'function' || type === 'object' && !!obj;
	}
});

