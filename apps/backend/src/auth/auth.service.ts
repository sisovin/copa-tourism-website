import argon2 from 'argon2';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class AuthService {
  async register(email: string, password: string) {
    const hashedPassword = await argon2.hash(password);
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });
    return user;
  }

  async login(email: string, password: string) {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user || !(await argon2.verify(user.password, password))) {
      throw new Error('Invalid email or password');
    }

    const accessToken = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '15m' });

    await prisma.user.update({
      where: { id: user.id },
      data: { refreshToken: null },
    });

    return { accessToken };
  }
}
