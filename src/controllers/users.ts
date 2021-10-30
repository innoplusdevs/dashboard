const { response, request } = require('express');


const usersGet = (req = request, res = response) => {

    const { q, nombre = 'No name', apikey, page = 1, limit }: {
        q: string,
        nombre: string,
        apikey: string,
        page: number,
        limit: number
    } = req.query;

    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    });
}

const usersPost = (req = request, res = response) => {

    const { nombre, edad }: { nombre: string, edad: number } = req.body;

    res.json({
        msg: 'post API - usuariosPost',
        nombre,
        edad
    });
}

const usersPut = (req = request, res = response) => {

    const { id }: { id: number } = req.params;

    res.json({
        msg: 'put API - usuariosPut',
        id
    });
}

const usersPatch = (req = request, res = response) => {
    res.json({
        msg: 'patch API - usuariosPatch'
    });
}

const usersDelete = (req = request, res = response) => {
    res.json({
        msg: 'delete API - usuariosDelete'
    });
}



export = {
    usersGet,
    usersPost,
    usersPut,
    usersPatch,
    usersDelete,
}