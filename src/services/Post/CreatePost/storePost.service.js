import Post from "../../../models/post.model.js";

export const storePost = async (data, userId) => {
    try {
        const newPost = await Post.create({ ...data, group: data.groupId, user: userId });
        await newPost.populate('user', 'username');

        return newPost;
    } catch (error) {
        throw new Error(error);
    }
}