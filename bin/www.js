#!/usr/bin/env node
'use strict';

const app = require('../src/app.js');
const port = require('../src/config').port;

app.listen(port, () =>
  console.log(`Started on port ${port}`)
);

process.on('SIGTERM', process.exit.bind(process, 0));
process.on('SIGINT', process.exit.bind(process, 0));