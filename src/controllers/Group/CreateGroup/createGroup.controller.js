import { createGroupValidation } from "../../../validations/Group/CreateGroup/createGroup.validation.js";
import { storeGroup } from "../../../services/Group/CreateGroup/storeGroup.service.js";

export const createGroup = async (req, res) => {
    const { _id } = res.locals.user;

    try {
        //Validation
        const { status, data } = createGroupValidation(req.body);
        if (status === true) return res.status(422).json(data);

        //Create group
        const newGroup = await storeGroup(req.body, _id);

        return res.status(201).json(newGroup);
    } catch (error) {
        throw new Error(error);
    }
}