import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import argon2 from 'argon2';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async register(email: string, password: string) {
    const hashedPassword = await argon2.hash(password);
    const user = await this.prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });
    return user;
  }

  async login(email: string, password: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });

    if (!user || !(await argon2.verify(user.password, password))) {
      throw new Error('Invalid email or password');
    }

    const accessToken = this.jwtService.sign({ userId: user.id }, { expiresIn: '15m' });

    await this.prisma.user.update({
      where: { id: user.id },
      data: { refreshToken: null },
    });

    return { accessToken };
  }

  async refreshToken(refreshToken: string) {
    try {
      const payload = this.jwtService.verify(refreshToken);
      const user = await this.prisma.user.findUnique({ where: { id: payload.userId } });

      if (!user || user.refreshToken !== refreshToken) {
        throw new Error('Invalid refresh token');
      }

      const accessToken = this.jwtService.sign({ userId: user.id }, { expiresIn: '15m' });

      return { accessToken };
    } catch (error) {
      throw new Error('Invalid refresh token');
    }
  }
}
