#!/usr/bin/env node

var buf = Buffer('')
  , idgen = require('../')

process.stdin.on('readable', function () {
  var chunk = process.stdin.read();
  if (chunk !== null) {
    buf = Buffer.concat([buf, chunk]);
  }
  else {
    process.stdin.pause();
    var len = process.argv[2] ? parseInt(process.argv[2], 10) : null;
    buf = buf.length ? buf : null;
    console.log(idgen(len, buf, true));
    process.exit();
  }
});
