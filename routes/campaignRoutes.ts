import { Router } from 'express';
import { createCampaign, getAllCampaigns, getCampaign, completeCampaign } from '../controllers/campaignController';

const router = Router();

router.post('/campaigns', createCampaign);
router.get('/campaigns', getAllCampaigns);
router.get('/campaigns/:id', getCampaign);
router.get('/campaigns/:id/complete', completeCampaign);

export default router;
