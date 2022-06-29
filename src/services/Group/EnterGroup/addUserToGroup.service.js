import Group from "../../../models/group.model.js";

export const addUserToGroup = async (groupId, userId) => {
    try {
        const group = await Group.findOne({ _id: groupId }, 'joined');

        group.joined.push(userId);

        const updatedJoined = await Group.findByIdAndUpdate(group._id, group, { new: true });

        return updatedJoined.joined;
    } catch (error) {
        throw new Error(error);
    }
}