#!/usr/bin/env node
var idgen = require('../')
var len = process.argv[2] ? parseInt(process.argv[2], 10) : null;
console.log(idgen(len))