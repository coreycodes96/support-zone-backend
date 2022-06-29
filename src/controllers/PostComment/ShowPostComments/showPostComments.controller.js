import { getPostComments } from "../../../services/PostComment/ShowPostComments/getPostComments.service.js";

export const showPostComments = async (req, res) => {
    const { id } = req.params;

    try {
        //Get post comments
        const postComments = await getPostComments(id);

        return res.status(200).json(postComments);
    } catch (error) {
        throw new Error(error);
    }
}