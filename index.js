/**
 * id generator
 * ------------
 *
 * @exports {Function} id generator function
 */

 /**
  * @param [len] {Number} Length of the ID to generate.
  * @return {String} A unique alphanumeric string.
  */
function idgen(len, chars) {
  len = len || 8;
  chars = chars || 'ABCDEFGHIJKLMNOPQRSTUVWYXZabcdefghijklmnopqrstuvwyxz0123456789';
  var ret = ''
    , range = chars.length - 1
    , len_left = len
    ;
  while (len_left--) {
    ret += chars[Math.round(Math.random() * range)];
  }
  return ret;
};
module.exports = idgen;

function idgen_hex(len) {
  len = len || 16;
  return idgen(len, '0123456789abcdef');
};
module.exports.hex = idgen_hex;