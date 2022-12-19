const validadeBody = (request, response, next) => {

    const { body } = request;

    for (const key of Object.keys(body)) {
        if (body[key] == undefined) {
            return response.status(400).json({ message: 'The field ' + key + ' is required' });
        }
        if (body[key] == "") {
            return response.status(400).json({ message: key + ' cannot be empty' });
        }
    }

    //verificar se o cnpj da empresa é válido
    
    next();
};

module.exports = {
    validadeBody,
};