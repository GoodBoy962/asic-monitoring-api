'use strict';

const URL = require('url').URL;
const fetch = require('../lib/utils').fetch;

const bitcoinPool = require('../config').bitcoinPool;

module.exports = class PoolBitcoin {

  static get host() {
    return new URL('https://console.pool.bitcoin.com/');
  }

  static getUserInfo(coin) {
    let url = PoolBitcoin.host;
    url.pathname += 'api/v2/user/info';
    const options = {
      method: 'POST',
      headers: {
        'POOL-BITCOIN-COM-API-KEY': bitcoinPool,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        coin
      })
    };

    return fetch(url.toString(), options);
  }

  static getWorkersInfo() {
    let url = PoolBitcoin.host;
    url.pathname += 'srv/api/workers';
    url.searchParams.append('apikey', bitcoinPool);
    return fetch(url.toString());
  }

};