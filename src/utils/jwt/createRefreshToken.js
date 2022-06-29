import jwt from 'jsonwebtoken';

//Signing the refresh token
export const createRefreshToken = (data) => {
    const secret = process.env.REFRESH_TOKEN_SECRET;

    return jwt.sign(data, secret, { expiresIn: '1yr' });
}