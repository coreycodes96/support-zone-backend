import Post from "../../../models/post.model.js";

export const getPosts = async (groupId) => {
    try {
        const posts = await Post.find({ group: groupId }).sort({ createdAt: -1 }).populate('user', 'username');

        return posts;
    } catch (error) {
        throw new Error(error);
    }
}