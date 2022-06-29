import { createAccountValidation } from "../../../validations/Account/CreateAccount/createAccount.validation.js";
import { isUsername } from "../../../utils/user/isUsername.js";
import { createUser } from "../../../services/Account/CreateAccount/createUser.service.js";

export const createAccount = async (req, res) => {
    const { username } = req.body;

    try {
        //Validation
        const { status, data } = createAccountValidation(req.body);
        if (status === true) return res.status(422).json(data);

        //Check if username has already been taken
        if (await isUsername(username)) return res.status(422).json({ username: `Sorry the username (${username}) has already been taken.` });

        //Create the users account
        await createUser(req.body);

        return res.status(201).json({ message: "Account has been successfully created." });
    } catch (error) {
        throw new Error(error);
    }
}