import User from "../../../models/user.model.js";

export const loginUser = async (username) => {
    try {
        const user = await User.findOne({ username });

        return user;
    } catch (error) {
        throw new Error(error);
    }
}