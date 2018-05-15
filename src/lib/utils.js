'use strict';

const Fetch = require('node-fetch');

/**
 * Promisify callback function
 * @param {Function} action
 * @return {Function}
 */
const promisify =
  (action) =>
    (...args) =>
      new Promise((resolve, reject) => action.call(null, ...args, (error, ...other) => {
        if (error) {
          reject(error);
        } else {
          resolve(...other);
        }
      }));

const rPromisify =
  (action) =>
    (...args) =>
      new Promise((resolve, reject) => action.call(null, ...args, (data, error) => {
        if (error) {
          reject(error);
        } else {
          resolve(data);
        }
      }));

/**
 * Return composed result
 * @param {...Function} functions
 */
const compose =
  (...functions) =>
    (...args) =>
      functions
        .slice(1)
        .reduce(
          (x, f) => f(x),
          functions[0](...args)
        );

/**
 * Fetch url and get json
 * @param {...Object} args
 */
const fetch =
  (...args) =>
    Fetch(...args)
      .then(
        res =>
          res.json()
      );

module.exports = {
  promisify,
  rPromisify,
  compose,
  fetch
};