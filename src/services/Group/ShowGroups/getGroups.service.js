import Group from "../../../models/group.model.js";

export const getGroups = async () => {
    try {
        const groups = await Group.find()
            .populate('user', 'username');

        return groups;
    } catch (error) {
        throw new Error(error);
    }
}