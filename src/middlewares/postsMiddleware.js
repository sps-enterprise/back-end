const validateBody = (request, response, next) => {

    const { body } = request;

    for (const key of Object.keys(body)) {
        if (body[key] == undefined) {
            return response.status(400).json({ message: 'The field ' + key + ' is required' });
        }
        if (body[key] == "") {
            return response.status(400).json({ message: key + ' cannot be empty' });
        }
    }    
    next();
};

const validateCNPJ = async (request, response, next) => {
    const { id_produto, descricao, cnpj_emp } = request.body;

    try{
        const [empresa] = await empresasModel.getEmpresa(cnpj_emp);
    } catch (err) {
        return response.status(500).json(err.message);
    }

    next();
};

const validateIdProduto = async (request, response, next) => {
    const { id_produto, descricao, cnpj_emp } = request.body;

    try{
        const [produto] = await produtoModel.getProduto(id_produto);
    } catch (err) {
        return response.status(500).json(err.message);
    }

    next();
};

module.exports = {
    validateBody,
    validateCNPJ,
    validateIdProduto
};