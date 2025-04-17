import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() body: { email: string; password: string }, @Res() res) {
    const { email, password } = body;

    try {
      const user = await this.authService.register(email, password);
      res.status(HttpStatus.CREATED).json({ status: 'success', message: 'User registered successfully', data: user });
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ status: 'error', message: 'Error registering user', error });
    }
  }

  @Post('login')
  async login(@Body() body: { email: string; password: string }, @Res() res) {
    const { email, password } = body;

    try {
      const { accessToken } = await this.authService.login(email, password);
      res.status(HttpStatus.OK).json({ status: 'success', message: 'Login successful', data: { accessToken } });
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ status: 'error', message: 'Error logging in', error });
    }
  }

  @Post('refresh')
  async refresh(@Body() body: { refreshToken: string }, @Res() res) {
    const { refreshToken } = body;

    try {
      const { accessToken } = await this.authService.refreshToken(refreshToken);
      res.status(HttpStatus.OK).json({ status: 'success', message: 'Token refreshed successfully', data: { accessToken } });
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ status: 'error', message: 'Error refreshing token', error });
    }
  }
}
