import Joi from "joi";

export const createGroupValidation = (inputs) => {
    const createGroup = Joi.object({
        title: Joi.string()
            .empty()
            .required()
            .messages({
                "string.base": "Title should be a type of string",
                "string.empty": "Please enter a title",
                "any.required": "Title is required",
            }),
        description: Joi.string()
            .empty()
            .required()
            .messages({
                "string.base": "Description should be a type of string",
                "string.empty": "Please enter a description",
                "any.required": "Description is required",
            }),
    });

    const result = createGroup.validate(inputs, { abortEarly: false });

    return ("error" in result) ? {
        status: true, data: result.error.details.map(d => (
            { [d.path[0]]: d.message }
        ))
    } : { status: false, data: null }
}