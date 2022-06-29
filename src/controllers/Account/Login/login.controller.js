import { loginValidation } from "../../../validations/Account/Login/login.validation.js";
import { isUsername } from "../../../utils/user/isUsername.js";
import { isPassword } from "../../../utils/user/isPassword.js";
import { loginUser } from "../../../services/Account/Login/loginUser.service.js";
import { createRefreshToken } from "../../../utils/jwt/createRefreshToken.js";
import { createAccessToken } from "../../../utils/jwt/createAccessToken.js";

export const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        //Validation
        const { status, data } = loginValidation(req.body);
        if (status === true) return res.status(422).json(data);

        //Check if the username exists
        if (!await isUsername(username)) return res.status(404).json({ username: "Sorry your username does not exist" });

        //Check if the password matches
        if (!await isPassword(username, password)) return res.status(403).json({ password: "Sorry the password does not match" });

        //Get the users information
        const user = await loginUser(username);

        const tokenData = {
            _id: user._id,
            username: user.username,
        }

        //Creating jwt tokens
        const refreshToken = createRefreshToken(tokenData);
        const accessToken = createAccessToken(tokenData);

        return res.status(200).json({ ...tokenData, refreshToken, accessToken });
    } catch (error) {
        throw new Error(error);
    }
}