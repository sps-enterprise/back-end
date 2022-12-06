const validateBody = (request, response, next) => {
    const { body } = request;

    if (body.nome == undefined) {
        return response.status(400).json({ message: 'The field "nome" is required' });
    };

    if (body.nome == "") {
        return response.status(400).json({ message: '"nome" cannot be empty' });
    };

    //Fazer verificações para os outros parâmetros

    next();
};

module.exports = {
    validateBody
};