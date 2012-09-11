(function(global) {
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

    while (len_left--) {
      ret += chars.charAt(Math.round(Math.random() * range));
    }
    return ret;
  };
  global.idgen = idgen;

  function idgen_hex(len) {
    len = len || 16;
    return idgen(len, '0123456789abcdef');
  };
  global.idgen_hex = idgen_hex;

})((typeof window !== 'undefined' && window) || module.exports);

if (typeof module !== 'undefined') {
  var idgen_hex = module.exports.idgen_hex;
  module.exports = module.exports.idgen;
  module.exports.hex = idgen_hex;
}