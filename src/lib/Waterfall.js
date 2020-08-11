'use strict'

const { waterfall } = require('async')

/**
 * @apiIgnore
 *
 * Run a secure waterfall to avoid system crashes inside async.waterfall
 *
 * @param  {Function[]} tasks - Tasks
 * @param  {Function} callback - Callback
 */
module.exports = (tasks, callback) => {
  const tryTasks = tasks.map(task => {
    if (task.constructor.name == 'AsyncFunction') {
      return async (...params) => {
        return await task(...params)
      }
    } else {
      return (...params) => {
        try {
          task(...params)
        } catch (err) {
          params[params.length - 1](err)
        }
      }
    }
  })

  waterfall(tryTasks, callback)
}