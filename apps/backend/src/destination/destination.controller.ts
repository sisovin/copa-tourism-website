import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { formatResponse } from '../utils/responseFormat';

const prisma = new PrismaClient();

export class DestinationController {
  async getAllDestinations(req: Request, res: Response) {
    try {
      const destinations = await prisma.destination.findMany();
      res.status(200).json(formatResponse('success', 'Destinations fetched successfully', destinations));
    } catch (error) {
      res.status(500).json(formatResponse('error', 'Error fetching destinations', error));
    }
  }

  async getDestinationById(req: Request, res: Response) {
    const { slug } = req.params;

    try {
      const destination = await prisma.destination.findUnique({ where: { slug } });

      if (!destination) {
        return res.status(404).json(formatResponse('error', 'Destination not found'));
      }

      res.status(200).json(formatResponse('success', 'Destination fetched successfully', destination));
    } catch (error) {
      res.status(500).json(formatResponse('error', 'Error fetching destination', error));
    }
  }

  async getDestinationBySlug(req: Request, res: Response) {
    const { slug } = req.params;

    try {
      const destination = await prisma.destination.findUnique({ where: { slug } });

      if (!destination) {
        return res.status(404).json(formatResponse('error', 'Destination not found'));
      }

      res.status(200).json(formatResponse('success', 'Destination fetched successfully', destination));
    } catch (error) {
      res.status(500).json(formatResponse('error', 'Error fetching destination', error));
    }
  }

  async createDestination(req: Request, res: Response) {
    const { name, description, location, userId } = req.body;

    try {
      const destination = await prisma.destination.create({
        data: {
          name,
          description,
          location,
          userId,
        },
      });

      res.status(201).json(formatResponse('success', 'Destination created successfully', destination));
    } catch (error) {
      res.status(500).json(formatResponse('error', 'Error creating destination', error));
    }
  }

  async updateDestination(req: Request, res: Response) {
    const { id } = req.params;
    const { name, description, location } = req.body;

    try {
      const destination = await prisma.destination.update({
        where: { id: Number(id) },
        data: {
          name,
          description,
          location,
        },
      });

      res.status(200).json(formatResponse('success', 'Destination updated successfully', destination));
    } catch (error) {
      res.status(500).json(formatResponse('error', 'Error updating destination', error));
    }
  }

  async deleteDestination(req: Request, res: Response) {
    const { id } = req.params;

    try {
      await prisma.destination.delete({ where: { id: Number(id) } });
      res.status(200).json(formatResponse('success', 'Destination deleted successfully'));
    } catch (error) {
      res.status(500).json(formatResponse('error', 'Error deleting destination', error));
    }
  }

  async searchDestinations(req: Request, res: Response) {
    const { query } = req.query;

    try {
      const destinations = await prisma.destination.findMany({
        where: {
          OR: [
            { name: { contains: query, mode: 'insensitive' } },
            { description: { contains: query, mode: 'insensitive' } },
            { location: { contains: query, mode: 'insensitive' } },
          ],
        },
      });

      res.status(200).json(formatResponse('success', 'Destinations fetched successfully', destinations));
    } catch (error) {
      res.status(500).json(formatResponse('error', 'Error fetching destinations', error));
    }
  }
}
