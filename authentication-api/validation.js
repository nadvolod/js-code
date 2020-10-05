const Joi = require('@hapi/joi');

class Validation {
    //this is a function called registerValidation taking a request param
    static registerValidation (request) {
        const schema = Joi.object({
            name: Joi.string().min(6).required(),
            email: Joi.string().min(6).required().email(),
            password: Joi.string().min(6).required()
        });
        return schema.validate(request);
    };

//this is a function loginValidation() and request is a parameter
    static loginValidation (request) {
        const schema = Joi.object({
            email: Joi.string().min(6).required().email(),
            password: Joi.string().min(6).required()
        });
        return schema.validate(request);
    }

}

module.exports = {Validation}