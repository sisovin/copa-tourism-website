import { Request, Response } from 'express';
import argon2 from 'argon2';
import { PrismaClient } from '@prisma/client';
import { signToken } from '../utils/jwt';
import { formatResponse } from '../utils/responseFormat';

const prisma = new PrismaClient();

export class AuthController {
  async register(req: Request, res: Response) {
    const { email, password } = req.body;

    try {
      const hashedPassword = await argon2.hash(password);
      const user = await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
        },
      });

      res.status(201).json(formatResponse('success', 'User registered successfully', user));
    } catch (error) {
      res.status(500).json(formatResponse('error', 'Error registering user', error));
    }
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body;

    try {
      const user = await prisma.user.findUnique({ where: { email } });

      if (!user || !(await argon2.verify(user.password, password))) {
        return res.status(401).json(formatResponse('error', 'Invalid email or password'));
      }

      const accessToken = signToken({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '15m' });

      await prisma.user.update({
        where: { id: user.id },
        data: { refreshToken: null },
      });

      res.status(200).json(formatResponse('success', 'Login successful', { accessToken }));
    } catch (error) {
      res.status(500).json(formatResponse('error', 'Error logging in', error));
    }
  }
}
