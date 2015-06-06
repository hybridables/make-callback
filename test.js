/*!
 * make-callback <https://github.com/tunnckoCore/make-callback>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var fs = require('fs')
var test = require('assertit')
var makeCallback = require('./index')

test('make-callback:', function () {
  test('should throw TypeError "is-async-function expect a function"', function (done) {
    function fixture () {
      makeCallback(12345)
    }

    test.throws(fixture, TypeError)
    test.throws(fixture, /is-async-function expect a function/)
    done()
  })
  test('should throw TypeError "make-callback expect sync function', function (done) {
    function fixture () {
      makeCallback(fs.readFile)
    }

    test.throws(fixture, TypeError)
    test.throws(fixture, /make-callback expect sync function/)
    done()
  })
  test('should throw TypeError "async `fn` expect a callback"', function (done) {
    function fixture () {
      var JSONParseAsync = makeCallback(JSON.parse)
      JSONParseAsync('{"foo":"bar"}')
    }

    test.throws(fixture, TypeError)
    test.throws(fixture, /async `fn` expect a callback/)
    done()
  })
  test('should pass result to callback', function (done) {
    var JSONParseAsync = makeCallback(JSON.parse)

    JSONParseAsync('{"foo":"bar"}', function (err, json) {
      test.ifError(err)
      test.deepEqual(json, {foo: 'bar'})
      done()
    })
  })
  test('should pass error to callback', function (done) {
    var JSONParseAsync = makeCallback(JSON.parse)

    JSONParseAsync('foo bar baz', function (err, json) {
      test.ok(err)
      test.ifError(!err)
      test.equal(err.message, 'Unexpected token o')
      done()
    })
  })
})
