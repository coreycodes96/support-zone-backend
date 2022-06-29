import Joi from "joi";

export const loginValidation = (inputs) => {
    const login = Joi.object({
        username: Joi.string()
            .empty()
            .required()
            .messages({
                "string.base": "Username should be a type of string",
                "string.empty": "Please enter your username",
                "any.required": "Your username is required",
            }),
        password: Joi.string()
            .empty()
            .required()
            .messages({
                "string.base": "Password should be a type of string",
                "string.empty": "Please enter your password",
                "any.required": "Your password is required",
            }),
    })

    const result = login.validate(inputs, { abortEarly: false });

    return ("error" in result) ? {
        status: true, data: result.error.details.map(d => (
            { [d.path[0]]: d.message }
        ))
    } : { status: false, data: null };
}