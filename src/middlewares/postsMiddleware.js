const validateBody = (request, response, next) => {
    const { body } = request;

    if(!body['descricao']) {
        return response
            .status(400)
            .json({ message: "The field descricao is required" });
    }
    if(!body['cnpj_emp']) {
        return response
            .status(400)
            .json({ message: "The field cnpj_emp is required" });
    }
    if(!body['produto_id']) {
        return response
            .status(400)
            .json({ message: "The field produto_id is required" });
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