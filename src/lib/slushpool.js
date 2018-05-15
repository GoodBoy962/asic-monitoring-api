'use strict';

const URL = require('url').URL;
const fetch = require('../lib/utils').fetch;

const slushPool = require('../config').slushPool;

module.exports = class PoolBitcoin {

  static get host() {
    return new URL('https://slushpool.com/');
  }

  static getUserInfo(coin) {
    let url = PoolBitcoin.host;
    url.pathname += `accounts/profile/json/${slushPool}`;
    return fetch(url.toString());
  }

};