import joi from "joi"

export default checkoutInfosSchema = joi.object({
    zip_code: joi.number().required(),
    adress: joi.required,
    adress_number: joi.number().required(),
    adress_complement: joi.string(),
    payment_method: joi.valid("debit","credit card").required()
})