import Joi from "joi";

export const createAccountValidation = (inputs) => {
    const createAccount = Joi.object({
        username: Joi.string()
            .empty()
            .required()
            .min(3)
            .max(25)
            .messages({
                "string.base": "Username should be a type of string",
                "string.empty": "Please enter your username",
                "any.required": "Your username is required",
                "string.min": "Your username can't be less than 3 characters",
                "string.max": "Your username can't be more than 25 characters",
            }),
        password: Joi.string()
            .empty()
            .required()
            .min(8)
            .max(255)
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
            .messages({
                "string.base": "Password should be a type of string",
                "string.empty": "Please enter your password",
                "any.required": "Your password is required",
                "string.min": "Your password can't be less than 8 characters",
                "string.max": "Your password can't be more than 255 characters",
                "string.pattern.base": "Your password must follow this pattern",
            }),
    })

    const result = createAccount.validate(inputs, { abortEarly: false });

    return ("error" in result) ? {
        status: true, data: result.error.details.map(d => (
            { [d.path[0]]: d.message }
        ))
    } : { status: false, data: null };
}