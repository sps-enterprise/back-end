const validateBodyInteresse = (request, response, next) => {
  const { body } = request;

  if(!body['cnpj_emp']) {
    return response
      .status(400)
      .json({ message: "The field cnpj_emp is required" });
  }
  if(!body['cnpj_ong']) {
    return response
      .status(400)
      .json({ message: "The field cnpj_ong is required" });
  }
  if(!body['id_post']) {
    return response
      .status(400)
      .json({ message: "The field id_post is required" });
  }
  
  next();
  };

  const validateBodyDisponibilidade = (request, response, next) => {
    const { body } = request;
  
    if(!body['cnpj_ong']) {
      return response
        .status(400)
        .json({ message: "The field cnpj_ong is required" });
    }
    if(!body['id_post']) {
      return response
        .status(400)
        .json({ message: "The field id_post is required" });
    }
    
    next();
    };
  
  module.exports = {
    validateBodyInteresse,
    validateBodyDisponibilidade,
  };