"use strict";
require('dotenv').config();
var Server = require('./src/models/server');
var server = new Server();
server.listen();
console.log('HOLA');
