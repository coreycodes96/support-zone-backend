import { getGroups } from "../../../services/Group/ShowGroups/getGroups.service.js";

export const showGroups = async (req, res) => {
    try {
        //Get groups
        const groups = await getGroups();

        return res.status(200).json(groups);
    } catch (error) {
        throw new Error(error);
    }
}