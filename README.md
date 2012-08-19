idgen
-----

Minimal ID generator

[![build status](https://secure.travis-ci.org/carlos8f/node-idgen.png)](http://travis-ci.org/carlos8f/node-idgen)

Install
=======

```bash
$ npm install idgen
```

Usage
=====

```javascript
var idgen = require('idgen');
console.log(idgen());
console.log(idgen(10, 'abcdefg'));
```

```
JQGZwAVR
egbacgfbgc
```

CLI version
===========

```bash
$ npm install -g idgen
$ idgen
1WWQ1OEc
$ idgen 4 0123456789
6533
$ idgen_hex 24
dd8ea9d0243e1a9b2f28a068
```

License
=======

MIT