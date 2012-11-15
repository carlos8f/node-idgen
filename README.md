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

Isn't it likely that I will see collisions?
===========================================

Maybe. Try using [idgen-collider](https://github.com/carlos8f/node-idgen-collider)
to find when collisions start to happen with your chosen character length and
character set.

Note! As of idgen 1.2.0, IDs of 16+ characters will include a 7-character prefix based
on the current millisecond time, to reduce likelihood of collisions.

License
=======

MIT