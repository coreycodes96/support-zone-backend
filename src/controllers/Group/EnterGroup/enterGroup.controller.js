import { enterGroupValidation } from "../../../validations/Group/EnterGroup/enterGroup.validation.js";
import { addUserToGroup } from "../../../services/Group/EnterGroup/addUserToGroup.service.js";

export const enterGroup = async (req, res) => {
    const { groupId } = req.body;
    const { _id } = res.locals.user;

    try {
        //Validation
        const { status, data } = enterGroupValidation(req.body);
        if (status === true) return res.status(422).json(data);

        //Add user to group
        const updatedJoined = await addUserToGroup(groupId, _id);

        return res.status(202).json(updatedJoined);
    } catch (error) {
        throw new Error(error);
    }
}