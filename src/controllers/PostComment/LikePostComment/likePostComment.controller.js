import { likePostCommentValidation } from "../../../validations/PostComment/LikePostComment/likePostComment.validation.js";
import { handlePostCommentLike } from "../../../services/PostComment/LikePostComment/handlePostCommentLike.service.js";

export const likePostComment = async (req, res) => {
    const { _id } = res.locals.user;
    const { commentId } = req.body;

    try {
        //Validation
        const { status, data } = likePostCommentValidation(req.body);
        if (status === true) return res.status(422).json(data);

        //Handle post comment like
        const updatedPostCommentLikes = await handlePostCommentLike(commentId, _id);

        return res.status(202).json(updatedPostCommentLikes);
    } catch (error) {
        throw new Error(error);
    }
}