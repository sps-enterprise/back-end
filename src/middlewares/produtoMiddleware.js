const validateBody = (request, response, next) => {
	const {body} = request;

	for (const key of Object.keys(body)) {
		if (body[key] === undefined) {
			return response.status(400).json({message: 'The field ' + key + ' is required'});
		}

		if (body[key] === '') {
			return response.status(400).json({message: key + ' cannot be empty'});
		}
	}

	next();
};

module.exports = {
	validateBody,
};
