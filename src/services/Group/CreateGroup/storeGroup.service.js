import Group from "../../../models/group.model.js";

export const storeGroup = async (data, userId) => {
    try {
        const newGroup = await Group.create({ ...data, user: userId });
        await newGroup.populate('user', 'username');

        return newGroup;
    } catch (error) {
        throw new Error(error);
    }
}