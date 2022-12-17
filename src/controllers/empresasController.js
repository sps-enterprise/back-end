const empresasModel = require('../models/empresasModel');

const getAll = async (_request, response) => {
    const empresas = await empresasModel.getAll();
    return response.status(200).json(empresas);
};

const createEmpresa = async (request, response) => {
    const createdEmpresa = await empresasModel.createEmpresa(request.body);
    return response.status(201).json(createdEmpresa);
};

const deleteEmpresa = async (request, response) => {
    const { id } = request.params;

    await empresasModel.deleteEmpresa(id);
    return response.status(204).json();
};

const updateEmpresa = async (request, response) => {
    const { id } = request.params;

    await empresasModel.updateEmpresa(id, request.body);
    return response.status(204).json();
}

module.exports = {
    getAll,
    createEmpresa,
    deleteEmpresa,
    updateEmpresa
};