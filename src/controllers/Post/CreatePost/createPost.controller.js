import { createPostValidation } from "../../../validations/Post/CreatePost/createPost.validation.js";
import { storePost } from "../../../services/Post/CreatePost/storePost.service.js";

export const createPost = async (req, res) => {
    const { _id } = res.locals.user;

    try {
        //Validation
        const { status, data } = createPostValidation(req.body);
        if (status === true) return res.status(422).json(data);

        //Create post
        const post = await storePost(req.body, _id);

        return res.status(201).json(post);
    } catch (error) {
        throw new Error(error);
    }
}