import Post from "../../../models/post.model.js";
import PostComment from "../../../models/postComment.model.js";

export const storePostComment = async (data, userId) => {
    try {
        await Post.findByIdAndUpdate(data.postId, { $inc: { commentCount: 1 } });

        const newComment = await PostComment.create({ ...data, post: data.postId, user: userId });
        await newComment.populate('user', 'username');

        return newComment;
    } catch (error) {
        throw new Error(error);
    }
}