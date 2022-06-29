import jwt from 'jsonwebtoken';

//Signing the access token
export const createAccessToken = (data) => {
    const secret = process.env.ACCESS_TOKEN_SECRET;

    return jwt.sign(data, secret, { expiresIn: '15mins' });
}