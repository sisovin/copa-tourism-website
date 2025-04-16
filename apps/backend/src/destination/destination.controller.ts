import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class DestinationController {
  async getAllDestinations(req: Request, res: Response) {
    try {
      const destinations = await prisma.destination.findMany();
      res.status(200).json(destinations);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching destinations', error });
    }
  }

  async getDestinationById(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const destination = await prisma.destination.findUnique({ where: { id: Number(id) } });

      if (!destination) {
        return res.status(404).json({ message: 'Destination not found' });
      }

      res.status(200).json(destination);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching destination', error });
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

      res.status(201).json({ message: 'Destination created successfully', destination });
    } catch (error) {
      res.status(500).json({ message: 'Error creating destination', error });
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

      res.status(200).json({ message: 'Destination updated successfully', destination });
    } catch (error) {
      res.status(500).json({ message: 'Error updating destination', error });
    }
  }

  async deleteDestination(req: Request, res: Response) {
    const { id } = req.params;

    try {
      await prisma.destination.delete({ where: { id: Number(id) } });
      res.status(200).json({ message: 'Destination deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting destination', error });
    }
  }
}
