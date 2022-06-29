import Post from "../../../models/post.model.js";

export const handleLike = async (postId, userId) => {
    try {
        const post = await Post.findOne({ _id: postId }, 'likes');
        const postIdx = post.likes.findIndex(like => String(like) === String(userId));

        if (postIdx === -1) {
            post.likes.push(userId);
        } else {
            post.likes = post.likes.filter(like => String(like) !== String(userId));
        }

        const updatedLikes = await Post.findByIdAndUpdate(post._id, post, { new: true });

        return updatedLikes.likes;
    } catch (error) {
        throw new Error(error);
    }
}