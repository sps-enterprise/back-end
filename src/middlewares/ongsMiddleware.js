const validateBody = (request, response, next) => {
  const { body } = request;

  if(!body['cnpj']) {
    return response
      .status(400)
      .json({ message: "The field cnpj is required" });
  }
  if(!body['nome']) {
    return response
      .status(400)
      .json({ message: "The field nome is required" });
  }
  if(!body['telefone']) {
    return response
      .status(400)
      .json({ message: "The field telefone is required" });
  }
  if(!body['email']) {
    return response
      .status(400)
      .json({ message: "The field email is required" });
  }
  
  next();
};

module.exports = {
  validateBody,
};
  
