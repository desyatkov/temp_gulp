'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var obj1 = { foo: 'bar', x: 41 };
var obj2 = { foo: 'baz', y: 13 };

var clonedObj = _extends({}, obj1);
console.log(clonedObj);