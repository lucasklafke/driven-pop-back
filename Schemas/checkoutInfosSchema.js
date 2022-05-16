import joi from "joi"

const checkoutInfosSchema = joi.object({
    zip_code: joi.number().required(),
    adress: joi.required(),
    adress_number: joi.number().required(),
    adress_complement: joi.any(),
    payment_method: joi.valid("debit","credit card").required()
})

export default checkoutInfosSchema