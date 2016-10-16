import Symbol from './_Symbol.js';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  try {
    var symbol = value[symToStringTag];
    value[symToStringTag] = undefined;
  } catch (e) {
    symbol = undefined;
  }
  var result = nativeObjectToString.call(value);
  if (symbol) {
    value[symToStringTag] = symbol;
  }
  return result;
}

export default getRawTag;
