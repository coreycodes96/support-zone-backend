import { likePostValidation } from "../../../validations/Post/LikePost/likePost.validation.js";
import { handleLike } from "../../../services/Post/LikePost/handleLike.service.js";

export const likePost = async (req, res) => {
    const { _id } = res.locals.user;
    const { postId } = req.body;

    try {
        //Validation
        const { status, data } = likePostValidation(req.body);
        if (status === true) return res.status(422).json(data);

        //Handle like
        const updatedLikes = await handleLike(postId, _id);

        return res.status(202).json(updatedLikes);
    } catch (error) {
        throw new Error(error);
    }
}