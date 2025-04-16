import jwt from 'jsonwebtoken';

export const signToken = (payload: object, secret: string, options?: jwt.SignOptions): string => {
  return jwt.sign(payload, secret, options);
};

export const verifyToken = (token: string, secret: string, options?: jwt.VerifyOptions): object => {
  return jwt.verify(token, secret, options);
};
