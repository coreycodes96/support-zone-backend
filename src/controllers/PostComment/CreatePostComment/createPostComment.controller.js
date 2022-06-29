import { createPostCommentValidation } from "../../../validations/PostComment/CreatePostComment/createPostComment.validation.js";
import { storePostComment } from "../../../services/PostComment/CreatePostComment/storePostComment.service.js";

export const createPostComment = async (req, res) => {
    const { _id } = res.locals.user;

    try {
        //Validation
        const { status, data } = createPostCommentValidation(req.body);
        if (status === true) return res.status(422).json(data);

        //Create post comment
        const newComment = await storePostComment(req.body, _id);

        return res.status(201).json(newComment);
    } catch (error) {
        throw new Error(error);
    }
}