import PostComment from "../../../models/postComment.model.js";

export const getPostComments = async (id) => {
    try {
        const postComments = await PostComment.find({ post: id }).sort({ createdAt: -1 }).populate('user', 'username');

        return postComments;
    } catch (error) {
        throw new Error(error);
    }
}