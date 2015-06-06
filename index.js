/*!
 * make-callback <https://github.com/tunnckoCore/make-callback>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var isSyncFn = require('is-sync-function')
var handleArguments = require('handle-arguments')

module.exports = function makeCallback (fn) {
  if (!isSyncFn(fn)) {
    throw new TypeError('make-callback expect sync function')
  }

  return function () {
    var argz = handleArguments(arguments)

    if (!argz.callback) {
      throw new TypeError('async `fn` expect a callback')
    }

    var res = false
    try {
      res = fn.apply(fn, argz.args)
    } catch (err) {
      return argz.callback(err)
    }
    return argz.callback(null, res ? res : undefined)
  }
}
