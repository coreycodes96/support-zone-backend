import Joi from "joi";

export const likePostCommentValidation = (inputs) => {
    const likePostComment = Joi.object({
        commentId: Joi.string()
            .empty()
            .required()
            .messages({
                "string.base": "CommentId should be a type of string",
                "string.empty": "Please add a commentId",
                "string.required": "CommentId is required"
            }),
    });

    const result = likePostComment.validate(inputs, { abortEarly: false });

    return ("error" in result) ? {
        status: true, data: result.error.details.map(d => (
            { [d.path[0]]: d.message }
        ))
    } : { status: false, data: null }
}