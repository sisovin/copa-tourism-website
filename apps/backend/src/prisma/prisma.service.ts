import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@copa/database';

@Injectable()
export class PrismaService extends PrismaClient {}
