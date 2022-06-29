import User from "../../models/user.model.js";

export const isUsername = async (username) => {
    try {
        const checkUsername = await User.countDocuments({ username });

        return checkUsername === 1 ? true : false;
    } catch (error) {
        throw new Error(error);
    }
}