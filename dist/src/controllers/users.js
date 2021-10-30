"use strict";
var _a = require('express'), response = _a.response, request = _a.request;
var usersGet = function (req, res) {
    if (req === void 0) { req = request; }
    if (res === void 0) { res = response; }
    var _a = req.query, q = _a.q, _b = _a.nombre, nombre = _b === void 0 ? 'No name' : _b, apikey = _a.apikey, _c = _a.page, page = _c === void 0 ? 1 : _c, limit = _a.limit;
    res.json({
        msg: 'get API - controlador',
        q: q,
        nombre: nombre,
        apikey: apikey,
        page: page,
        limit: limit
    });
};
var usersPost = function (req, res) {
    if (req === void 0) { req = request; }
    if (res === void 0) { res = response; }
    var _a = req.body, nombre = _a.nombre, edad = _a.edad;
    res.json({
        msg: 'post API - usuariosPost',
        nombre: nombre,
        edad: edad
    });
};
var usersPut = function (req, res) {
    if (req === void 0) { req = request; }
    if (res === void 0) { res = response; }
    var id = req.params.id;
    res.json({
        msg: 'put API - usuariosPut',
        id: id
    });
};
var usersPatch = function (req, res) {
    if (req === void 0) { req = request; }
    if (res === void 0) { res = response; }
    res.json({
        msg: 'patch API - usuariosPatch'
    });
};
var usersDelete = function (req, res) {
    if (req === void 0) { req = request; }
    if (res === void 0) { res = response; }
    res.json({
        msg: 'delete API - usuariosDelete'
    });
};
module.exports = {
    usersGet: usersGet,
    usersPost: usersPost,
    usersPut: usersPut,
    usersPatch: usersPatch,
    usersDelete: usersDelete,
};
