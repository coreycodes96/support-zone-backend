import { getPosts } from "../../../services/Post/ShowPosts/getPosts.service.js";

export const showPosts = async (req, res) => {
    const { groupId } = req.params;

    try {
        //Get posts
        const posts = await getPosts(groupId);

        return res.status(200).json(posts);
    } catch (error) {
        throw new Error(error);
    }
}