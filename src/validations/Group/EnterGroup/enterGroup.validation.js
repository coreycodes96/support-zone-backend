import Joi from "joi";

export const enterGroupValidation = (inputs) => {
    const enterGroup = Joi.object({
        groupId: Joi.string()
            .empty()
            .required()
            .messages({
                "string.base": "groupId should be a type of string",
                "string.empty": "Please add a groupId",
                "string.required": "groupId is required"
            }),
    });

    const result = enterGroup.validate(inputs, { abortEarly: false });

    return ("error" in result) ? {
        status: true, data: result.error.details.map(d => (
            { [d.path[0]]: d.message }
        ))
    } : { status: false, data: null }
}