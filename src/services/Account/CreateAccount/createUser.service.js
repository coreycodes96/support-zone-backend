import User from "../../../models/user.model.js";
import bcrypt from "bcryptjs";

export const createUser = async (data) => {
    try {
        const hashedPassword = await bcrypt.hash(data.password, 12);

        await User.create({ ...data, password: hashedPassword });

        return "User created";
    } catch (error) {
        throw new Error(error);
    }
}