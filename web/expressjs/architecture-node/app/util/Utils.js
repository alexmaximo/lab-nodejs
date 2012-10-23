/*
	Parameter: Object
	Return: String - Class Name

	Example:
	
	Utils.getClass("")   === "String";
	Utils.getClass(true) === "Boolean";
	Utils.getClass(0)    === "Number";
	Utils.getClass([])   === "Array";
	Utils.getClass({})   === "Object";
	Utils.getClass(null) === "null";
	etc...
*/
exports.getClass = function(obj) {
  if (typeof obj === "undefined")
    return "undefined";
  if (obj === null)
    return "null";
  return Object.prototype.toString.call(obj)
    .match(/^\[object\s(.*)\]$/)[1];
};