const validateBody = (request, response, next) => {
    const { body } = request;

    if(!body['cnpj_ong']) {
        return response
            .status(400)
            .json({ message: "The field cnpj_ong is required" });
    }
        
    next();
};

module.exports = {
    validateBody,
};