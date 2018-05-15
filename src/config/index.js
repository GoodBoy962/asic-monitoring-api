'use strict';

const {
  NODE_ENV = 'development',

  PORT = 8080,
  HOST_URI = 'localhost:8080',
  API_KEY = '',
  POOL_BITCOIN_COM_API_KEY = '',
  SLUSHPOOL_TOKEN=''
} = process.env;

module.exports = {

  env: NODE_ENV,

  port: PORT,
  hostUri: HOST_URI,
  apiKey: API_KEY,

  bitcoinPool: POOL_BITCOIN_COM_API_KEY,
  slushPool: SLUSHPOOL_TOKEN

};