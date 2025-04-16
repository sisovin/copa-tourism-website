import { Router } from 'express';
import { PackageController } from './package.controller';

const router = Router();
const packageController = new PackageController();

router.get('/packages', packageController.getAllPackages);
router.get('/packages/:id', packageController.getPackageById);
router.post('/packages', packageController.createPackage);
router.put('/packages/:id', packageController.updatePackage);
router.delete('/packages/:id', packageController.deletePackage);

export default router;
