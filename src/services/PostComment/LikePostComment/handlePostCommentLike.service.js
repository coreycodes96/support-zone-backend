import PostComment from "../../../models/postComment.model.js";

export const handlePostCommentLike = async (commentId, userId) => {
    try {
        const comment = await PostComment.findOne({ _id: commentId }, 'likes');
        const commentIdx = comment.likes.findIndex(like => String(like) === String(userId));

        if (commentIdx === -1) {
            comment.likes.push(userId);
        } else {
            comment.likes = comment.likes.filter(like => String(like) !== String(userId));
        }

        const updatedLikes = await PostComment.findByIdAndUpdate(comment._id, comment, { new: true });

        return updatedLikes.likes;
    } catch (error) {
        throw new Error(error);
    }
}