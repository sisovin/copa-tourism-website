import { Request, Response } from 'express';
import argon2 from 'argon2';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

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

      res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
      res.status(500).json({ message: 'Error registering user', error });
    }
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body;

    try {
      const user = await prisma.user.findUnique({ where: { email } });

      if (!user || !(await argon2.verify(user.password, password))) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      const accessToken = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '15m' });
      const refreshToken = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '7d' });

      await prisma.user.update({
        where: { id: user.id },
        data: { refreshToken },
      });

      res.status(200).json({ accessToken, refreshToken });
    } catch (error) {
      res.status(500).json({ message: 'Error logging in', error });
    }
  }

  async logout(req: Request, res: Response) {
    const { userId } = req.body;

    try {
      await prisma.user.update({
        where: { id: userId },
        data: { refreshToken: null },
      });

      res.status(200).json({ message: 'User logged out successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error logging out', error });
    }
  }
}
