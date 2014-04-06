#!/usr/bin/env node

var buf = Buffer('')
  , idgen = require('../')
  , cmd = require('commander')

cmd
  .version(require('../package.json').version)
  .description(require('../package.json').description)
  .option('-e, --encoding <encoding>', 'specify encoding for STDIN')
  .parse(process.argv)

process.stdin.on('readable', function () {
  var chunk = process.stdin.read();
  if (chunk !== null) {
    buf = Buffer.concat([buf, cmd.encoding ? Buffer(String(chunk), cmd.encoding) : chunk]);
  }
  else {
    process.stdin.pause();
    var len = process.argv[2] ? parseInt(process.argv[2], 10) : null;
    buf = buf.length ? buf : null;
    console.log(idgen(len, buf));
    process.exit();
  }
});
