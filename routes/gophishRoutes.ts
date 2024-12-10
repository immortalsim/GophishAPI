import { Router, RequestHandler } from 'express'
import { campaignController } from '../controllers/campaignController'
import { groupController } from '../controllers/groupController'

const router = Router()

// Campaign routes
router.post('/campaigns', (async (req, res) => {
    try {
        const campaign = await campaignController.createCampaign(req.body)
        res.status(201).json(campaign)
    } catch (error) {
        res.status(500).json({ error: 'Failed to create campaign' })
    }
}) as RequestHandler)

router.get('/campaigns', (async (req, res) => {
    try {
        const campaigns = await campaignController.getAllCampaigns()
        res.json(campaigns)
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch campaigns' })
    }
}) as RequestHandler)

router.get('/campaigns/:id', (async (req, res) => {
    try {
        const campaign = await campaignController.getCampaign(parseInt(req.params.id))
        res.json(campaign)
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch campaign' })
    }
}) as RequestHandler)

// Group routes
router.post('/groups', (async (req, res) => {
    try {
        const group = await groupController.createGroup(req.body)
        res.status(201).json(group)
    } catch (error) {
        res.status(500).json({ error: 'Failed to create group' })
    }
}) as RequestHandler)

router.get('/groups', (async (req, res) => {
    try {
        const groups = await groupController.getAllGroups()
        res.json(groups)
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch groups' })
    }
}) as RequestHandler)

export default router 