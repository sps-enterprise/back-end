const getAll = async () => {
    return {};
};

const createEmpresa = async (empresa) => {
    const { nome, telefone, email, senha, endereco, cnpj } = empresa;

    return {};
};

const deleteEmpresa = async (id) => {
    return {};
}

const updateEmpresa = async (id, empresa) => {
    const { nome, telefone, email, senha, endereco, cnpj } = empresa;

    return {};
}

module.exports = {
    getAll,
    createEmpresa,
    deleteEmpresa,
    updateEmpresa
};