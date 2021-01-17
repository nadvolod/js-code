const Joi = require('@hapi/joi');

class DataValidation{
    static registerValidation = request => {
        const validationSchema = Joi.object({
            name: Joi.string().min(2).required(),
            email: Joi.string().min(6).required().email(),
            password: Joi.string().min(6).required()
        })
        return validationSchema.validate(request);
    }
}

module.exports = {DataValidation};
