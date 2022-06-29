import User from "../../models/user.model.js";
import bcrypt from "bcryptjs";

export const isPassword = async (username, password) => {
    try {
        const user = await User.findOne({ username }, 'password');
        const doesPasswordExist = await bcrypt.compare(password, user.password);

        return doesPasswordExist;
    } catch (error) {
        throw new Error(error);
    }
}