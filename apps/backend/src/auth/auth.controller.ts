import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { formatResponse } from '../utils/responseFormat';

const authService = new AuthService();

export class AuthController {
  async register(req: Request, res: Response) {
    const { email, password } = req.body;

    try {
      const user = await authService.register(email, password);
      res.status(201).json(formatResponse('success', 'User registered successfully', user));
    } catch (error) {
      res.status(500).json(formatResponse('error', 'Error registering user', error));
    }
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body;

    try {
      const { accessToken } = await authService.login(email, password);
      res.status(200).json(formatResponse('success', 'Login successful', { accessToken }));
    } catch (error) {
      res.status(500).json(formatResponse('error', 'Error logging in', error));
    }
  }
}
