'use strict';

const es5 = require('./es5');

module.exports = new Set([
	...es5,
	...[
		"Array.from",
		"Array.of",
		"Array.prototype.@@iterator",
		"Array.prototype.entries",
		"Array.prototype.fill",
		"Array.prototype.find",
		"Array.prototype.findIndex",
		"Array.prototype.keys",
		"Array.prototype.values",
		"Function.name",
		"Map",
		"Math.acosh",
		"Math.asinh",
		"Math.atanh",
		"Math.cbrt",
		"Math.clz32",
		"Math.cosh",
		"Math.expm1",
		"Math.hypot",
		"Math.imul",
		"Math.log10",
		"Math.log1p",
		"Math.log2",
		"Math.sign",
		"Math.sinh",
		"Math.tanh",
		"Math.trunc",
		"Number.MAX_SAFE_INTEGER",
		"Number.MIN_SAFE_INTEGER",
		"Number.isFinite",
		"Number.isInteger",
		"Number.isNaN",
		"Number.parseFloat",
		"Number.parseInt",
		"Object.assign",
		"Object.is",
		"Object.setPrototypeOf",
		"Promise",
		"Set",
		"String.prototype.endsWith",
		"String.prototype.includes",
		"String.prototype.repeat",
		"String.prototype.startsWith",
		"Symbol.hasInstance",
		"Symbol.isConcatSpreadable",
		"Symbol.iterator",
		"Symbol.match",
		"Symbol.replace",
		"Symbol.search",
		"Symbol.species",
		"Symbol.split",
		"Symbol.toPrimitive",
		"Symbol.toStringTag",
		"Symbol.unscopables",
		"Symbol",
		"WeakMap",
		"WeakSet"
	]
]);
