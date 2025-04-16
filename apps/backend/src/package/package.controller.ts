import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { formatResponse } from '../utils/responseFormat';

const prisma = new PrismaClient();

export class PackageController {
  async getAllPackages(req: Request, res: Response) {
    try {
      const packages = await prisma.package.findMany();
      res.status(200).json(formatResponse('success', 'Packages fetched successfully', packages));
    } catch (error) {
      res.status(500).json(formatResponse('error', 'Error fetching packages', error));
    }
  }

  async getPackageById(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const package = await prisma.package.findUnique({ where: { id: Number(id) } });

      if (!package) {
        return res.status(404).json(formatResponse('error', 'Package not found'));
      }

      res.status(200).json(formatResponse('success', 'Package fetched successfully', package));
    } catch (error) {
      res.status(500).json(formatResponse('error', 'Error fetching package', error));
    }
  }

  async createPackage(req: Request, res: Response) {
    const { name, description, price, destinationId } = req.body;

    try {
      const package = await prisma.package.create({
        data: {
          name,
          description,
          price,
          destinationId,
        },
      });

      res.status(201).json(formatResponse('success', 'Package created successfully', package));
    } catch (error) {
      res.status(500).json(formatResponse('error', 'Error creating package', error));
    }
  }

  async updatePackage(req: Request, res: Response) {
    const { id } = req.params;
    const { name, description, price, destinationId } = req.body;

    try {
      const package = await prisma.package.update({
        where: { id: Number(id) },
        data: {
          name,
          description,
          price,
          destinationId,
        },
      });

      res.status(200).json(formatResponse('success', 'Package updated successfully', package));
    } catch (error) {
      res.status(500).json(formatResponse('error', 'Error updating package', error));
    }
  }

  async deletePackage(req: Request, res: Response) {
    const { id } = req.params;

    try {
      await prisma.package.delete({ where: { id: Number(id) } });
      res.status(200).json(formatResponse('success', 'Package deleted successfully'));
    } catch (error) {
      res.status(500).json(formatResponse('error', 'Error deleting package', error));
    }
  }
}
