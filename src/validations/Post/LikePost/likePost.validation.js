import Joi from "joi";

export const likePostValidation = (inputs) => {
    const likePost = Joi.object({
        postId: Joi.string()
            .empty()
            .required()
            .messages({
                "string.base": "PostId should be a type of string",
                "string.empty": "Please add a postId",
                "string.required": "PostId is required"
            }),
    });

    const result = likePost.validate(inputs, { abortEarly: false });

    return ("error" in result) ? {
        status: true, data: result.error.details.map(d => (
            { [d.path[0]]: d.message }
        ))
    } : { status: false, data: null }
}