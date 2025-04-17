import { Router } from 'express';
import { DestinationController } from './destination.controller';

const router = Router();
const destinationController = new DestinationController();

router.get('/destinations', destinationController.getAllDestinations);
router.get('/destinations/:id', destinationController.getDestinationById);
router.post('/destinations', destinationController.createDestination);
router.put('/destinations/:id', destinationController.updateDestination);
router.delete('/destinations/:id', destinationController.deleteDestination);
router.get('/destinations/search', destinationController.searchDestinations);

export default router;
