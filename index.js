/*!
 * make-callback <https://github.com/tunnckoCore/make-callback>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var fnName = require('fn.name')
var handleArguments = require('handle-arguments')

module.exports = function makeCallback (fn) {
  if (typeof fn !== 'function') {
    throw new TypeError('make-callback expect a function')
  }
  return function () {
    var argz = handleArguments(arguments)

    if (!argz.callback) {
      var name = fnName(fn)
      throw new TypeError('async `fn` (' + name + ') expect a callback')
    }

    var res = false
    try {
      res = fn.apply(fn, argz.args)
    } catch (err) {
      return argz.callback(err)
    }
    return argz.callback(null, res)
  }
}
