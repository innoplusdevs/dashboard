"use strict";
var express = require('express');
var cors = require('cors');
var Server = /** @class */ (function () {
    function Server() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';
        // Middlewares
        this.middlewares();
        // Rutas de mi aplicación
        this.routes();
    }
    Server.prototype.middlewares = function () {
        // CORS
        this.app.use(cors());
        // Lectura y parseo del body
        this.app.use(express.json());
        // Directorio Público
        this.app.use(express.static('public'));
    };
    Server.prototype.routes = function () {
        this.app.use(this.usuariosPath, require('../routes/users'));
    };
    Server.prototype.listen = function () {
        var _this = this;
        this.app.listen(this.port, function () {
            console.log('Servidor corriendo en puerto', _this.port);
        });
    };
    return Server;
}());
module.exports = Server;
