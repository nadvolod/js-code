import {Validation}  from '../../../validation';
const Joi = require('@hapi/joi');

context('validation.js', ()=>{
    it('calls Joi', () => {
        const request = '';
        cy.spy(Joi, 'object')
        Validation.registerValidation(request)
    });
})
