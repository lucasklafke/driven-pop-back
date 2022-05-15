import joi from "joi"

export default checkoutInfosSchema = joi.object({
    cep: joi.required(),
    adress: joi.required,
    adress_number: joi.number().required(),
    adress_complement: joi.string(),
    payment_method: joi.valid("debit","cash","credit card").required()
})