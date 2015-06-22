# make-callback [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Make synchronous function or generator to support callback api

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]


## Install
```
npm i make-callback --save
npm test
```


## Usage
> For more use-cases see the [tests](./test.js)

```js
var makeCallback = require('make-callback')
var JSONParseAsync = makeCallback(JSON.parse)

JSONParseAsync('{"foo":"bar"}', function (err, json) {
  if (err) {
    return console.error(err)
  }

  console.log(json)
  //=> {foo: 'bar'}
})
```

You also can make generator that return and yield **anything** (string, array, object, function, thunk, promise or etc) to support callback api

```js
var fs = require('mz/fs')
var makeCallback = require('make-callback')

function * gen (val) {
  var a = yield 'a'
  var b = yield {b: 'b'}
  var c = yield ['c', 'f']
  var d = yield 123
  var e = yield fs.readFile('./package.json')
  return [a, b, c, d, e, val || 'foobar']
}

var genCallback = makeCallback(gen)
genCallback(function (err, res) {
  if (err) {
    return console.error(err)
  }

  console.log(res)
  //=> ['a', {b: 'b'}, ['c', 'f'], 123, 'content of package.json',  'foobar']
  console.log(res.length)
  //=> 6
})
```


## See aslo
- [manage-arguments](https://github.com/tunnckocore/manage-arguments): Prevents arguments leakage - managing arguments. From Optimization killers by Petka Antonov.
- [handle-arguments](https://github.com/hybridables/handle-arguments): Handles given Arguments object - return separatly last argument (commonly callback) and other arguments as Array. Useful in node-style callback flow.
- [handle-callback](https://github.com/hybridables/handle-callback): Make promise to have support for callback api, it returns promise in that same time.
- [always-callback](https://github.com/tunnckocore/always-callback): Create callback api for given sync function. Guarantee that given function (sync or async, no matter) will always have callback api and will handle errors correctly.
- [always-thunk](https://github.com/tunnckocore/always-thunk): Create thunk from async or sync function. Works like `thunkify`.
- [always-promise](https://github.com/tunnckocore/always-promise): Create Bluebird Promise from given async or synchronous function. It automatically convert sync functions to async, then to promise.
- [is-es6-generator](https://github.com/tunnckocore/is-es6-generator): Check that given value is Generator


## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/make-callback/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.


## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckocore.tk][author-www-img]][author-www-url] [![keybase tunnckocore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]


[npmjs-url]: https://www.npmjs.com/package/make-callback
[npmjs-img]: https://img.shields.io/npm/v/make-callback.svg?label=make-callback

[license-url]: https://github.com/tunnckoCore/make-callback/blob/master/LICENSE.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg


[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/make-callback
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/make-callback.svg

[travis-url]: https://travis-ci.org/tunnckoCore/make-callback
[travis-img]: https://img.shields.io/travis/tunnckoCore/make-callback.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/make-callback
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/make-callback.svg

[david-url]: https://david-dm.org/tunnckoCore/make-callback
[david-img]: https://img.shields.io/david/tunnckoCore/make-callback.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg


[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/messages
[new-message-img]: https://img.shields.io/badge/send%20me-message-green.svg
